using Delivery.Users.Api.ViewModels;
using Delivery.Users.API.Extensions;
using Delivery.Users.Domain.Interfaces;
using Delivery.Users.Domain.Models;
using Delivery.Users.Domain.Validations;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Net;
using System.Web;
using static Microsoft.AspNetCore.Http.StatusCodes;

namespace Delivery.Users.API.Controllers
{
    /// <summary>
    /// Controller to manage Users
    /// </summary>
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
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
        /// <param name="user">The user object to create</param>
        /// <returns>The User created</returns>
        [HttpPost("Create")]
        [ProducesResponseType(Status200OK, Type = typeof(User))]
        [ProducesResponseType(Status400BadRequest, Type = typeof(ValidationErrorResponse))]
        [ProducesResponseType(Status500InternalServerError, Type = typeof(ErrorResponse))]
        public async Task<ActionResult> Post([FromBody] User user)
        {
            try
            {
                var userValidator = new UserPostValidator();
                var validationResult = userValidator.Validate(user);

                if (!validationResult.IsValid)
                    return StatusCode(Status400BadRequest, validationResult.ToValidationErrorReponse());

                var userCreated = await _services.CreateUser(user);

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
    }
}
