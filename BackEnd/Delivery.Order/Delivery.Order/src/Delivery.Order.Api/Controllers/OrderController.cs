using Delivery.Order.Api.ViewModels;
using Delivery.Order.API.Extensions;
using Delivery.Order.Domain.Interfaces;
using Delivery.Order.Domain.Models;
using Delivery.Order.Domain.Validations;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using static Microsoft.AspNetCore.Http.StatusCodes;
using OrderModel = Delivery.Order.Domain.Models.Order;

namespace Delivery.Order.Api.Controllers
{
    /// <summary>
    /// Controller to manage Orders
    /// </summary>
    [ApiController]
    [ApiVersion("1.0")]
    [Route("api/v{version:apiVersion}/[controller]")]
    [Authorize]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _service;

        /// <summary>
        /// Initialize the attributes
        /// </summary>
        /// <param name="service"></param>
        public OrderController(IOrderService service)
        {
            _service = service;
        }

        /// <summary>
        /// Get a specific Order by Id
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Order entity</returns>
        /// <response code="200">Order found</response>
        /// <response code="400">Order id not valid</response>
        /// <response code="404">Order not found</response>
        /// <response code="500">Server Error</response>
        [HttpGet("{id}")]
        [ProducesResponseType(Status200OK, Type = typeof(Product))]
        [ProducesResponseType(Status400BadRequest, Type = typeof(ValidationErrorResponse))]
        [ProducesResponseType(Status404NotFound, Type = typeof(NotFoundResponse))]
        [ProducesResponseType(Status500InternalServerError, Type = typeof(ErrorResponse))]
        public async Task<ActionResult<OrderModel>> Get(string id)
        {
            try
            {
                return Ok(await _service.GetOrderById(id));
            }
            catch (KeyNotFoundException)
            {
                return StatusCode(Status404NotFound, new NotFoundResult().ToNotFoundReponse("Order"));
            }
            catch (Exception exception)
            {
                return StatusCode(Status500InternalServerError, exception.ToErrorReponse());
            }
        }

        /// <summary>
        /// Get all Orders for a user
        /// </summary>
        /// <param name="userId">User Id</param>
        /// <returns>List of Orders</returns>
        /// <response code="200">Order found</response>
        /// <response code="400">UserId not valid</response>
        /// <response code="404">Order not found</response>
        /// <response code="500">Server Error</response>
        [HttpGet("allByUser/{userId}")]
        [ProducesResponseType(Status200OK, Type = typeof(List<Product>))]
        [ProducesResponseType(Status400BadRequest, Type = typeof(ValidationErrorResponse))]
        [ProducesResponseType(Status404NotFound, Type = typeof(NotFoundResponse))]
        [ProducesResponseType(Status500InternalServerError, Type = typeof(ErrorResponse))]
        public async Task<ActionResult<List<OrderModel>>> GetAllForUser(int userId)
        {
            try
            {
                var userValidator = new UserIdValidator();
                var validationResult = userValidator.Validate(userId);

                if (!validationResult.IsValid)
                    return StatusCode(Status400BadRequest, validationResult.ToValidationErrorReponse());

                return Ok(await _service.GetOrdersByUserId(userId));
            }
            catch (KeyNotFoundException)
            {
                return StatusCode(Status404NotFound, new NotFoundResult().ToNotFoundReponse("Order"));
            }
            catch (Exception exception)
            {
                return StatusCode(Status500InternalServerError, exception.ToErrorReponse());
            }
        }

        /// <summary>
        /// Create a new Order
        /// </summary>
        /// <param name="order">The Order object to be created</param>
        /// <returns>The Order created</returns>
        /// <response code="200">Order created</response>
        /// <response code="400">Order not valid</response>
        /// <response code="500">Server Error</response>
        [HttpPost]
        [ProducesResponseType(Status200OK, Type = typeof(OrderModel))]
        [ProducesResponseType(Status400BadRequest, Type = typeof(ValidationErrorResponse))]
        [ProducesResponseType(Status500InternalServerError, Type = typeof(ErrorResponse))]
        public async Task<ActionResult<OrderModel>> Post([FromBody] OrderModel order)
        {
            try
            {
                var orderValidator = new OrderValidator();
                order.StatusOrder = "Aguardando inicio";
                var orderValidationResult = orderValidator.Validate(order);

                if (!orderValidationResult.IsValid)
                    return StatusCode(Status400BadRequest, orderValidationResult.ToValidationErrorReponse());

                return Ok(await _service.CreateOrderAsync(order));
            }
            catch (Exception exception)
            {
                return StatusCode(Status500InternalServerError, exception.ToErrorReponse());
            }
        }

        /// <summary>
        /// Add a Product into an Order
        /// </summary>
        /// <param name="orderId">Order Id</param>
        /// <param name="product">Product entity</param>
        /// <response code="200">Product created</response>
        /// <response code="400">Product not valid</response>
        /// <response code="500">Server Error</response>
        [HttpPost("addProduct/{orderId}")]
        [ProducesResponseType(Status200OK, Type = typeof(OrderModel))]
        [ProducesResponseType(Status400BadRequest, Type = typeof(ValidationErrorResponse))]
        [ProducesResponseType(Status500InternalServerError, Type = typeof(ErrorResponse))]
        public async Task<ActionResult> PostProduct(string? orderId, [FromBody] Product product)
        {
            try
            {
                var idValidator = new IdValidator();
                var idValidationResult = idValidator.Validate(orderId);

                if (!idValidationResult.IsValid)
                    return StatusCode(Status400BadRequest, idValidationResult.ToValidationErrorReponse());

                var productValidator = new ProductValidator();
                var productValidationResult = productValidator.Validate(product);

                if (!productValidationResult.IsValid)
                    return StatusCode(Status400BadRequest, productValidationResult.ToValidationErrorReponse());

                return Ok(await _service.AddProductToOrder(orderId!, product));
            }
            catch (KeyNotFoundException)
            {
                return StatusCode(Status404NotFound, new NotFoundResult().ToNotFoundReponse("Order"));
            }
            catch (Exception exception)
            {
                return StatusCode(Status500InternalServerError, exception.ToErrorReponse());
            }
        }

        /// <summary>
        /// Delete a specific Order by Id
        /// </summary>
        /// <param name="id">Order Id</param>
        /// <response code="200">Order deleted</response>
        /// <response code="400">Order id not valid</response>
        /// <response code="404">Order not found</response>
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
                var idValidator = new IdValidator();
                var idValidationResult = idValidator.Validate(id);

                if (!idValidationResult.IsValid)
                    return StatusCode(Status400BadRequest, idValidationResult.ToValidationErrorReponse());

                await _service.DeleteOrder(id!);
                return Ok();
            }
            catch (KeyNotFoundException)
            {
                return StatusCode(Status404NotFound, new NotFoundResult().ToNotFoundReponse("Order"));
            }
            catch (Exception exception)
            {
                return StatusCode(Status500InternalServerError, exception.ToErrorReponse());
            }
        }

        /// <summary>
        /// Delete a specific Product by Id into an Order
        /// </summary>
        /// <param name="orderId">Order Id</param>
        /// <param name="productId">Product Id</param>
        /// <response code="200">Product deleted</response>
        /// <response code="400">Product id not valid</response>
        /// <response code="404">Product not found</response>
        /// <response code="500">Server Error</response>
        [ProducesResponseType(Status200OK, Type = typeof(OkResult))]
        [ProducesResponseType(Status400BadRequest, Type = typeof(ValidationErrorResponse))]
        [ProducesResponseType(Status404NotFound, Type = typeof(NotFoundResponse))]
        [ProducesResponseType(Status500InternalServerError, Type = typeof(ErrorResponse))]
        [HttpDelete("deleteProduct/{orderId}/{productId}")]
        public async Task<ActionResult> DeleteProduct(string? orderId, string? productId)
        {
            try
            {
                var idValidator = new IdValidator();

                var orderIdValidationResult = idValidator.Validate(orderId);

                if (!orderIdValidationResult.IsValid)
                    return StatusCode(Status400BadRequest, orderIdValidationResult.ToValidationErrorReponse());

                var productIdValidationResult = idValidator.Validate(productId);

                if (!productIdValidationResult.IsValid)
                    return StatusCode(Status400BadRequest, productIdValidationResult.ToValidationErrorReponse());

                await _service.DeleteProductFromOrder(orderId!, productId!);
                return Ok();
            }
            catch (KeyNotFoundException)
            {
                return StatusCode(Status404NotFound, new NotFoundResult().ToNotFoundReponse("Order Product"));
            }
            catch (Exception exception)
            {
                return StatusCode(Status500InternalServerError, exception.ToErrorReponse());
            }
        }

        /// <summary>
        /// Update status by Order Id
        /// </summary>        
        /// <param name="orderId">Order Id</param>
        /// <param name="statusOrder">Status Order</param>
        /// <returns>The order updated</returns>
        /// <response code="200">Order updated</response>
        /// <response code="400">Order not valid</response>
        /// <response code="404">Order not found</response>
        /// <response code="500">Server Error</response>
        [ProducesResponseType(Status200OK, Type = typeof(Product))]
        [ProducesResponseType(Status400BadRequest, Type = typeof(ValidationErrorResponse))]
        [ProducesResponseType(Status404NotFound, Type = typeof(NotFoundResponse))]
        [ProducesResponseType(Status500InternalServerError, Type = typeof(ErrorResponse))]        
        [HttpPatch("updateStatusOrder/{orderId}/{statusOrder}")]        

        public async Task<ActionResult> updateStatusOrder(string? orderId, string? statusOrder)
        {
            try
            {
                var idValidator = new IdValidator();

                var orderIdValidationResult = idValidator.Validate(orderId);

                if (!orderIdValidationResult.IsValid)
                    return StatusCode(Status400BadRequest, orderIdValidationResult.ToValidationErrorReponse());

                await _service.updateStatusOrder(orderId, statusOrder);

                return Ok();                
            }
            catch (KeyNotFoundException)
            {
                return StatusCode(Status404NotFound, new NotFoundResult().ToNotFoundReponse("Order"));
            }
            catch (Exception exception)
            {
                return StatusCode(Status500InternalServerError, exception.ToErrorReponse());
            }
        }

        /// <summary>
        /// Get all Orders 
        /// </summary>
        /// <returns>List of Orders</returns>
        /// <response code="200">Orders found</response>        
        /// <response code="500">Server Error</response>
        [HttpGet("allOrders/")]
        [ProducesResponseType(Status200OK, Type = typeof(List<Product>))]        
        [ProducesResponseType(Status500InternalServerError, Type = typeof(ErrorResponse))]
        public async Task<ActionResult<List<OrderModel>>> GetAllOrders()
        {
            try
            {
                return Ok(await _service.GetAllOrders());
            }            
            catch (Exception exception)
            {
                return StatusCode(Status500InternalServerError, exception.ToErrorReponse());
            }
        }
    }

}