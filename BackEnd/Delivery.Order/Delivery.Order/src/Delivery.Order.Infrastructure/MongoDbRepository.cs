using Delivery.Order.Domain.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;
using OrderModel = Delivery.Order.Domain.Models.Order;

namespace Delivery.Order.Infrastructure
{
    public class MongoDbRepository
    {
        private readonly IMongoCollection<OrderModel> _ordersCollection;

        public MongoDbRepository(IOptions<DbSettings> dbSettings)
        {
            var client = new MongoClient(dbSettings.Value.ConnectionURI);
            var database = client.GetDatabase(dbSettings.Value.DatabaseName);
            _ordersCollection = database.GetCollection<OrderModel>(dbSettings.Value.CollectionName);
        }

        public async Task<List<OrderModel>?> GetAllByFilterAsync(FilterDefinition<OrderModel> filter) 
        {
            try
            {
                var orders = await _ordersCollection.Find(filter).ToListAsync();
                
                if (orders.Count == 0)
                    return null;
                else
                    return orders;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<OrderModel> GetFirstByIdAsync(string orderId)
        {
            try
            {
                var filter = Builders<OrderModel>.Filter.Eq("Id", orderId);
                return await _ordersCollection.Find(filter).FirstOrDefaultAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task CreateAsync(OrderModel order) 
        {
            try
            {
                await _ordersCollection.InsertOneAsync(order); 
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task AddProduct(string orderId, Product product)
        {
            try
            {
                var filter = Builders<OrderModel>.Filter.Eq("Id", orderId);
                var update = Builders<OrderModel>.Update.Push("Products", product);
                await _ordersCollection.UpdateOneAsync(filter, update);
            }
            catch (Exception)
            {
                throw;
            }
        }
        
        public async Task DeleteAsync(string orderId) 
        {
            try
            {
                var filter = Builders<OrderModel>.Filter.Eq("Id", orderId);
                await _ordersCollection.DeleteOneAsync(filter);
            }
            catch (Exception)
            {
                throw;
            }
        }
        
        public async Task DeleteProductAsync(string orderId, string productId) 
        {
            try
            {
                var orderFilter = Builders<OrderModel>.Filter.Eq("Id", orderId);
                var productFilter = Builders<Product>.Filter.Eq("Id", productId);
                var update = Builders<OrderModel>.Update.PullFilter(x => x.Products, productFilter);
                await _ordersCollection.UpdateOneAsync(orderFilter, update);
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
                var orderFilter = Builders<OrderModel>.Filter.Eq(x => x.Id, orderId);

                var newstatus = statusOrder.Replace('%', ' ');

                var update = Builders<OrderModel>.Update.Set(x => x.StatusOrder, newstatus);
                var result = await _ordersCollection.UpdateOneAsync(orderFilter, update);

                if (result.ModifiedCount == 0)
                {
                    throw new Exception("Pedido não encontrado.");
                }
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
