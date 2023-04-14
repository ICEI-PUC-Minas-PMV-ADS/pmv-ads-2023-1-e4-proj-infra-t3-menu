using Delivery.Products.Api.ViewModels;
using Delivery.Products.API.Extensions;
using Delivery.Products.Domain.Interfaces;
using Delivery.Products.Domain.Models;
using Delivery.Users.Domain.Validations;
using Microsoft.AspNetCore.Mvc;
using static Microsoft.AspNetCore.Http.StatusCodes;

namespace Delivery.Products.Api.Controllers
{
    /// <summary>
    /// Controller to manage Products
    /// </summary>
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _services;

        /// <summary>
        /// Initialize the attributes
        /// </summary>
        /// <param name="services"></param>
        public ProductController(IProductService services)
        {
            _services = services;
        }

        /// <summary>
        /// Get Product by Id
        /// </summary>
        /// <param name="id">The product id to find</param>
        /// <returns>Product entity</returns>
        /// <response code="200">Product found</response>
        /// <response code="400">Product id not valid</response>
        /// <response code="404">Product not found</response>
        /// <response code="500">Server Error</response>
        [HttpGet("{id}")]
        [ProducesResponseType(Status200OK, Type = typeof(Product))]
        [ProducesResponseType(Status400BadRequest, Type = typeof(ValidationErrorResponse))]
        [ProducesResponseType(Status404NotFound, Type = typeof(NotFoundResponse))]
        [ProducesResponseType(Status500InternalServerError, Type = typeof(ErrorResponse))]
        public async Task<ActionResult<Product>> GetById(string? id)
        {
            try
            {
                var productValidador = new ProductIdValidator();
                var validationResult = productValidador.Validate(id);

                if (!validationResult.IsValid)
                    return StatusCode(Status400BadRequest, validationResult.ToValidationErrorReponse());

                return await _services.GetProductByIdAsync(id);
            }
            catch (KeyNotFoundException)
            {
                return StatusCode(Status404NotFound, new NotFoundResult().ToNotFoundReponse("Product"));
            }
            catch (Exception exception)
            {
                return StatusCode(Status500InternalServerError, exception.ToErrorReponse());
            }
        }

        /// <summary>
        /// Get all Products
        /// </summary>
        /// <returns>List of Products</returns>
        /// <response code="200">Products found</response>
        /// <response code="404">Products not found</response>
        /// <response code="500">Server Error</response>
        [HttpGet]
        [ProducesResponseType(Status200OK, Type = typeof(List<Product>))]
        [ProducesResponseType(Status404NotFound, Type = typeof(NotFoundResponse))]
        [ProducesResponseType(Status500InternalServerError, Type = typeof(ErrorResponse))]
        public async Task<ActionResult<List<Product>>> GetAll()
        {
            try
            {
                return await _services.GetAllProductsAsync();
            }
            catch (KeyNotFoundException)
            {
                return StatusCode(Status404NotFound, new NotFoundResult().ToNotFoundReponse("Product"));
            }
            catch (Exception exception)
            {
                return StatusCode(Status500InternalServerError, exception.ToErrorReponse());
            }
        }

        /// <summary>
        /// Create new Product
        /// </summary>
        /// <param name="product">The Product object to create</param>
        /// <returns>The Product created</returns>
        /// <response code="200">Product created</response>
        /// <response code="400">Product not valid</response>
        /// <response code="500">Server Error</response>
        [HttpPost]
        [ProducesResponseType(Status200OK, Type = typeof(Product))]
        [ProducesResponseType(Status400BadRequest, Type = typeof(ValidationErrorResponse))]
        [ProducesResponseType(Status500InternalServerError, Type = typeof(ErrorResponse))]
        public async Task<ActionResult> Post([FromBody] Product product)
        {
            try
            {
                var productValidador = new ProductPostValidator();
                var validationResult = productValidador.Validate(product);

                if (!validationResult.IsValid)
                    return StatusCode(Status400BadRequest, validationResult.ToValidationErrorReponse());

                return Ok(await _services.CreateProductAsync(product));
            }
            catch (Exception exception)
            {
                return StatusCode(Status500InternalServerError, exception.ToErrorReponse());
            }
        }

        /// <summary>
        /// Update Product by Id
        /// </summary>
        /// <param name="product">The Product object to update</param>
        /// <returns>The Product updated</returns>
        /// <response code="200">Product updated</response>
        /// <response code="400">Product not valid</response>
        /// <response code="404">Product not found</response>
        /// <response code="500">Server Error</response>
        [ProducesResponseType(Status200OK, Type = typeof(Product))]
        [ProducesResponseType(Status400BadRequest, Type = typeof(ValidationErrorResponse))]
        [ProducesResponseType(Status404NotFound, Type = typeof(NotFoundResponse))]
        [ProducesResponseType(Status500InternalServerError, Type = typeof(ErrorResponse))]
        [HttpPut]
        public async Task<ActionResult> Put([FromBody] Product product)
        {
            try
            {
                var productValidador = new ProductPutValidator();
                var validationResult = productValidador.Validate(product);

                if (!validationResult.IsValid)
                    return StatusCode(Status400BadRequest, validationResult.ToValidationErrorReponse());

                return Ok(await _services.UpdateProductAsync(product));
            }
            catch (KeyNotFoundException)
            {
                return StatusCode(Status404NotFound, new NotFoundResult().ToNotFoundReponse("Product"));
            }
            catch (Exception exception)
            {
                return StatusCode(Status500InternalServerError, exception.ToErrorReponse());
            }
        }

        /// <summary>
        /// Delete Product by Id
        /// </summary>
        /// <param name="id">The Product id to delete</param>
        /// <response code="200">Product found</response>
        /// <response code="400">Product id not valid</response>
        /// <response code="404">Product not found</response>
        /// <response code="500">Server Error</response>
        [ProducesResponseType(Status200OK, Type = typeof(OkResult))]
        [ProducesResponseType(Status400BadRequest, Type = typeof(ValidationErrorResponse))]
        [ProducesResponseType(Status404NotFound, Type = typeof(NotFoundResponse))]
        [ProducesResponseType(Status500InternalServerError, Type = typeof(ErrorResponse))]
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(string? id)
        {
            try
            {
                var productValidador = new ProductIdValidator();
                var validationResult = productValidador.Validate(id);

                if (!validationResult.IsValid)
                    return StatusCode(Status400BadRequest, validationResult.ToValidationErrorReponse());

                await _services.DeleteProductAsync(id);
                return Ok();
            }
            catch (KeyNotFoundException)
            {
                return StatusCode(Status404NotFound, new NotFoundResult().ToNotFoundReponse("Product"));
            }
            catch (Exception exception)
            {
                return StatusCode(Status500InternalServerError, exception.ToErrorReponse());
            }
        }
    }
}
