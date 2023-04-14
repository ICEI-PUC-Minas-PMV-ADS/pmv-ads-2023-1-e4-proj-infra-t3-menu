using Delivery.Products.Domain.Models;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Delivery.Products.Infrastructure
{
    public class MongoDbRepository
    {
        private readonly IMongoCollection<Product> _productsCollection;

        public MongoDbRepository(IOptions<DbSettings> dbSettings)
        {
            var client = new MongoClient(dbSettings.Value.ConnectionURI);
            var database = client.GetDatabase(dbSettings.Value.DatabaseName);
            _productsCollection = database.GetCollection<Product>(dbSettings.Value.CollectionName);
        }

        public async Task<List<Product>> GetAllAsync() 
        {
            try
            {
                return await _productsCollection.Find(new BsonDocument()).ToListAsync(); 
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<Product> GetByIdAsync(string? id)
        {
            try
            {
                var filter = Builders<Product>.Filter.Eq("Id", id);
                return await _productsCollection.Find(filter).FirstOrDefaultAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task CreateAsync(Product product) 
        {
            try
            {
                await _productsCollection.InsertOneAsync(product); 
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task UpdateAsync(Product product) 
        {
            try
            {
                var filter = Builders<Product>.Filter.Eq("Id", product.Id);
                var update = Builders<Product>.Update
                    .Set("Name", product.Name)
                    .Set("Category", product.Category)
                    .Set("IsAvailable", product.IsAvailable)
                    .Set("Price", product.Price);

                await _productsCollection.UpdateOneAsync(filter, update);
            }
            catch (Exception)
            {
                throw;
            }
        }
        public async Task DeleteAsync(string? productId) 
        {
            try
            {
                var filter = Builders<Product>.Filter.Eq("Id", productId);
                await _productsCollection.DeleteOneAsync(filter);
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
