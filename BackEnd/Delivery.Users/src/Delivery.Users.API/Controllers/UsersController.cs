using Delivery.Users.Api.ViewModels;
using Delivery.Users.API.Extensions;
using Delivery.Users.Domain.Interfaces;
using Delivery.Users.Domain.Models;
using Delivery.Users.Domain.Validations;
using Delivery.Users.Infrastructure;
using FluentValidation;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Security.Claims;
using System.Text;
using System.Web;
using static Microsoft.AspNetCore.Http.StatusCodes;
using System.ComponentModel;

namespace Delivery.Users.API.Controllers
{
    /// <summary>
    /// Controller to manage Users
    /// </summary>
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    [Authorize]
    public class UsersController : ControllerBase
    {        
        private readonly IUserServices _services;               

        /// <summary>
        /// Initialize the attributes
        /// </summary>
        /// <param name="services"></param>
        public UsersController(IUserServices services)
        {
            _services = services;
        }

        /// <summary>
        /// Get User by Id
        /// </summary>
        /// <param name="id">The user id to find</param>
        /// <returns>User entity</returns>
        /// <response code="200">User found</response>
        /// <response code="404">User not found</response>
        /// <response code="500">Server Error</response>
        [HttpGet("{id}")]
        [ProducesResponseType(Status200OK, Type = typeof(User))]
        [ProducesResponseType(Status400BadRequest, Type = typeof(ValidationErrorResponse))]
        [ProducesResponseType(Status404NotFound, Type = typeof(NotFoundResponse))]
        [ProducesResponseType(Status500InternalServerError, Type = typeof(ErrorResponse))]
        public async Task<ActionResult> Get(int id)
        {
            try
            {
                var userValidator = new UserIdValidator();
                var validationResult = userValidator.Validate(id);

                if (!validationResult.IsValid)
                    return StatusCode(Status400BadRequest, validationResult.ToValidationErrorReponse());

                return Ok(await _services.GetUser(id));
            }
            catch (KeyNotFoundException)
            {
                return StatusCode(Status404NotFound, new NotFoundResult().ToNotFoundReponse("User"));
            }
            catch (Exception exception)
            {
                return StatusCode(Status500InternalServerError, exception.ToErrorReponse());
            }
        }

        /// <summary>
        /// Create new User
        /// </summary>
        /// <param name="model"></param>
        /// <param name="user">The user object to create</param>
        /// <returns>The User created</returns>
        [HttpPost("Create")]
        [ProducesResponseType(Status200OK, Type = typeof(User))]
        [ProducesResponseType(Status400BadRequest, Type = typeof(ValidationErrorResponse))]
        [ProducesResponseType(Status500InternalServerError, Type = typeof(ErrorResponse))]
        [AllowAnonymous]
        public async Task<ActionResult> Post([FromBody] UserDto model)
        {
            try
            {                
                User novo = new User()
                {
                    Name = model.Name,
                    Email = model.Email,
                    Surname = model.Surname,
                    Password = BCrypt.Net.BCrypt.HashPassword(model.Password),
                    Perfil = model.Perfil
                };

                var userValidator = new UserPostValidator();
                var validationResult = userValidator.Validate(novo);

                if (!validationResult.IsValid)
                    return StatusCode(Status400BadRequest, validationResult.ToValidationErrorReponse());

                var userCreated = await _services.CreateUser(novo);

                return Ok(userCreated);
            }
            catch (Exception exception)
            {
                return StatusCode(Status500InternalServerError, exception.ToErrorReponse());
            }
        }

        /// <summary>
        /// Update User by Id
        /// </summary>
        /// <param name="user">The user object to update</param>
        /// <returns>The User updated</returns>
        [HttpPut]
        [ProducesResponseType(Status200OK, Type = typeof(User))]
        [ProducesResponseType(Status400BadRequest, Type = typeof(ValidationErrorResponse))]
        [ProducesResponseType(Status404NotFound, Type = typeof(NotFoundResponse))]
        [ProducesResponseType(Status500InternalServerError, Type = typeof(ErrorResponse))]
        public ActionResult Put([FromBody] User user)
        {
            try
            {
                var userValidator = new UserPutValidator();
                var validationResult = userValidator.Validate(user);

                if (!validationResult.IsValid)
                    return StatusCode(Status400BadRequest, validationResult.ToValidationErrorReponse());

                var userUpdated = _services.UpdateUser(user);

                return Ok(userUpdated);
            }
            catch (KeyNotFoundException)
            {
                return StatusCode(Status404NotFound, new NotFoundResult().ToNotFoundReponse("User"));
            }
            catch (Exception exception)
            {
                return StatusCode(Status500InternalServerError, exception.ToErrorReponse());
            }
        }

        /// <summary>
        /// Delete User by Id
        /// </summary>
        /// <param name="id">The user id to delete</param>
        [HttpDelete("{id}")]
        [ProducesResponseType(Status200OK, Type = typeof(OkResult))]
        [ProducesResponseType(Status400BadRequest, Type = typeof(ValidationErrorResponse))]
        [ProducesResponseType(Status404NotFound, Type = typeof(NotFoundResponse))]
        [ProducesResponseType(Status500InternalServerError, Type = typeof(ErrorResponse))]
        public async Task<ActionResult> Delete(int id)
        {
            try
            {
                var userValidator = new UserIdValidator();
                var validationResult = userValidator.Validate(id);

                if (!validationResult.IsValid)
                    return StatusCode(Status400BadRequest, validationResult.ToValidationErrorReponse());

                await _services.DeleteUser(id);

                return Ok();
            }
            catch (KeyNotFoundException)
            {
                return StatusCode(Status404NotFound, new NotFoundResult().ToNotFoundReponse("User"));
            }
            catch (Exception exception)
            {
                return StatusCode(Status500InternalServerError, exception.ToErrorReponse());
            }
        }

        private string GenerateJwtToken(User model)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes("Ry74cBQva5dThwbwchR9jhbtRFnJxWSZ");
            var claims = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.NameIdentifier, model.Id.ToString()),                
                new Claim(ClaimTypes.Role, model.Perfil.ToString())
            });

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claims,
                Expires = DateTime.UtcNow.AddHours(8),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<ActionResult> Authenticate(AuthenticateDto model)
        {
            var usuarioDb = await _services.GetUser(model.Id);

            if (usuarioDb == null || !BCrypt.Net.BCrypt.Verify(model.Password, usuarioDb.Password))            
                return Unauthorized();

            if (model.PerfilAutorizado != null && !model.PerfilAutorizado.Any(p => p.ToString() == usuarioDb.Perfil.ToString()))
            {
                return Forbid();
            }

            var jwt = GenerateJwtToken(usuarioDb);

            return Ok(new { jwtToken = jwt });            
        }
    }


}
