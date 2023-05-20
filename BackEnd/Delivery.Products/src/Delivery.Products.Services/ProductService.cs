using Delivery.Products.Domain.Interfaces;
using Delivery.Products.Domain.Models;
using Delivery.Products.Infrastructure;

namespace Delivery.Products.Services
{
    /// <summary>
    /// Service to manage the Products
    /// </summary>
    public class ProductService : IProductService
    {
        private readonly MongoDbRepository _dbRepository;

        /// <summary>
        /// Initialize the attributes
        /// </summary>
        /// <param name="dbRepository">Repository to manipulate the collection on MongoDb</param>
        public ProductService(MongoDbRepository dbRepository)
        {
            _dbRepository = dbRepository;
        }

        /// <inheritdoc/>
        public async Task<List<Product>> GetAllProductsAsync() 
        {
            try
            {
                return await _dbRepository.GetAllAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }
        
        /// <inheritdoc/>
        public async Task<Product> GetProductByIdAsync(string? id) 
        {
            try
            {
                return await _dbRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException();
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <inheritdoc/>
        public async Task<List<Product>> GetProductByCategAsync(string? categ)
        {
            try
            {                
                return await _dbRepository.GetByCategAsync(categ) ?? throw new KeyNotFoundException();
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <inheritdoc/>
        public async Task<Product> CreateProductAsync(Product product)
        {
            try
            {
                var rnd = new Random(); ;
                product.Id = rnd.Next(1, 10001).ToString();
                await _dbRepository.CreateAsync(product);

                return product;
            }
            catch (Exception)
            {
                throw;
            }
        }
        
        /// <inheritdoc/>
        public async Task<Product> UpdateProductAsync(Product product)
        {
            try
            {
                _ = await _dbRepository.GetByIdAsync(product.Id) ?? throw new KeyNotFoundException();

                await _dbRepository.UpdateAsync(product);

                return product;
            }
            catch (Exception)
            {
                throw;
            }
        }
        
        /// <inheritdoc/>
        public async Task DeleteProductAsync(string? id)
        {
            try
            {
                _ = await _dbRepository.GetByIdAsync(id) ?? throw new KeyNotFoundException();

                await _dbRepository.DeleteAsync(id);
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}