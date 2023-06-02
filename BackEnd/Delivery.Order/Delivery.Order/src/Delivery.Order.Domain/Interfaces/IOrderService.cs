using Delivery.Order.Domain.Models;
using OrderModel = Delivery.Order.Domain.Models.Order;

namespace Delivery.Order.Domain.Interfaces
{
    public interface IOrderService
    {
        /// <summary>
        /// Get the specific Order by Id
        /// </summary>
        /// <param name="orderId">The Order Id to be found</param>
        /// <returns>The Order found</returns>
        Task<OrderModel> GetOrderById(string orderId);

        /// <summary>
        /// Get a list of Orders by User Id
        /// </summary>
        /// <param name="userId">The User Id of the Orders</param>
        /// <returns>A list of Orders</returns>
        Task<List<OrderModel>?> GetOrdersByUserId(int userId);

        /// <summary>
        /// Creates a new Order
        /// </summary>
        /// <param name="order">Order entity</param>
        /// <returns>The Order created</returns>
        Task<OrderModel> CreateOrderAsync(OrderModel order);

        /// <summary>
        /// Add a Product to the Order
        /// </summary>
        /// <param name="orderId">The Order to be updated</param>
        /// <param name="product">The Product to be added</param>
        /// <returns>The Order updated</returns>
        Task<OrderModel> AddProductToOrder(string orderId, Product product);

        /// <summary>
        /// Delete a Order
        /// </summary>
        /// <param name="orderId">The Order Id to be deleted</param>
        Task DeleteOrder(string orderId);

        /// <summary>
        /// Delete a Product from the Order
        /// </summary>
        /// <param name="orderId">The Order Id to be updated</param>
        /// <param name="productId">The Product Id to be deleted</param>
        /// <returns></returns>
        Task DeleteProductFromOrder(string orderId, string productId);


        /// <summary>
        /// Alter status from the Order
        /// </summary>
        /// <param name="orderId">The Order Id to be updated</param>
        /// <param name="statusOrder">Status Order</param>
        /// <returns></returns>
        Task updateStatusOrder(string orderId, string statusOrder);

        /// <summary>
        /// Get a list of Orders 
        /// </summary>        
        /// <returns>A list of Orders</returns>
        Task<List<OrderModel>?> GetAllOrders();
    }
}
