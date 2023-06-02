using Delivery.Order.Domain.Interfaces;
using Delivery.Order.Domain.Models;
using Delivery.Order.Infrastructure;
using MongoDB.Driver;
using OrderModel = Delivery.Order.Domain.Models.Order;

namespace Delivery.Order.Services
{
    /// <summary>
    /// Service to manage the Orders
    /// </summary>
    public class OrderService : IOrderService
    {
        private readonly MongoDbRepository _dbRepository;

        /// <summary>
        /// Initialize the attributes
        /// </summary>
        /// <param name="dbRepository"></param>
        public OrderService(MongoDbRepository dbRepository)
        {
            _dbRepository = dbRepository;
        }

        ///<inheritdoc/>
        public async Task<OrderModel> GetOrderById(string orderId)
        {
            try
            {                
                return await _dbRepository.GetFirstByIdAsync(orderId) ?? throw new KeyNotFoundException();
            }
            catch (Exception)
            {
                throw;
            }
        }
        
        ///<inheritdoc/>
        public async Task<List<OrderModel>?> GetOrdersByUserId(int userId)
        {
            try
            {
                var filter = Builders<OrderModel>.Filter.Eq("User.Id", userId);
                return await _dbRepository.GetAllByFilterAsync(filter);
            }
            catch (Exception)
            {
                throw;
            }
        }

        ///<inheritdoc/>
        public async Task<List<OrderModel>?> GetAllOrders()
        {            
            try
            {
                // Filter.Ne - Ne: Not Equal
                var filter = Builders<OrderModel>.Filter.And(
                    Builders<OrderModel>.Filter.Ne("StatusOrder", "Concluído"),
                    Builders<OrderModel>.Filter.Ne("StatusOrder", "Cancelado")
                );

                //var filter = Builders<OrderModel>.Filter.Eq("StatusOrder", "Cancelado");

                return await _dbRepository.GetAllByFilterAsync(filter);
            }
            catch (Exception)
            {
                throw;
            }
        }



        ///<inheritdoc/>
        public async Task<OrderModel> CreateOrderAsync(OrderModel order)
        {
            try
            {
                order.Id = new Random().Next(1, 10001).ToString();
                await _dbRepository.CreateAsync(order);
                return order;
            }
            catch (Exception)
            {
                throw;
            }
        }

        ///<inheritdoc/>
        public async Task<OrderModel> AddProductToOrder(string orderId, Product product)
        {
            try
            {
                _ = await _dbRepository.GetFirstByIdAsync(orderId) ?? throw new KeyNotFoundException();

                await _dbRepository.AddProduct(orderId, product);
                return await _dbRepository.GetFirstByIdAsync(orderId);
            }
            catch (Exception)
            {
                throw;
            }
        }

        ///<inheritdoc/>
        public async Task DeleteOrder(string orderId)
        {
            try
            {
                _ = await _dbRepository.GetFirstByIdAsync(orderId) ?? throw new KeyNotFoundException();

                await _dbRepository.DeleteAsync(orderId);
            }
            catch (Exception)
            {
                throw;
            }
        }

        ///<inheritdoc/>
        public async Task DeleteProductFromOrder(string orderId, string productId)
        {
            try
            {
                var filter = Builders<OrderModel>.Filter.And(
                    Builders<OrderModel>.Filter.Eq("Id", orderId), 
                    Builders<OrderModel>.Filter.Where(x => x.Products!.Any(x => x.Id == productId)));

                _ = await _dbRepository.GetAllByFilterAsync(filter) ?? throw new KeyNotFoundException();

                await _dbRepository.DeleteProductAsync(orderId, productId);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task updateStatusOrder(string orderId, string statusOrder)
        {
            try
            {
                if (statusOrder.ToLower() == "cancelado") {
                    var filter = Builders<OrderModel>.Filter.And(
                                 Builders<OrderModel>.Filter.Eq(x => x.Id, orderId));                    

                    var orders = await _dbRepository.GetAllByFilterAsync(filter);
                    
                    if((orders != null) && (orders.Count > 0) && (orders[0].StatusOrder != "Aguardando inicio"))
                    {
                        throw new Exception("Não é possível cancelar o pedido. O pedido está "+ orders[0].StatusOrder);
                    }

                }

                await _dbRepository.updateStatusOrder(orderId, statusOrder);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}