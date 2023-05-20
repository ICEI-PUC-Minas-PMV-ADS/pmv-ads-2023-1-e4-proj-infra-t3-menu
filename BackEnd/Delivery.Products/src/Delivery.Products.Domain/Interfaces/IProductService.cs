using Delivery.Products.Domain.Models;

namespace Delivery.Products.Domain.Interfaces
{
    public interface IProductService
    {
        /// <summary>
        /// Gets all the Products in the collection
        /// </summary>
        /// <returns>The list of Products found</returns>
        Task<List<Product>> GetAllProductsAsync();

        /// <summary>
        /// Get the Product with the specific Id
        /// </summary>
        /// <param name="id"></param>
        /// <returns>The Product found</returns>
        Task<Product> GetProductByIdAsync(string? id);

        /// <summary>
        /// Get all Product with the specific Categ
        /// </summary>
        /// <param name="categ"></param>
        /// <returns>The list of Product found</returns>
        Task<List<Product>> GetProductByCategAsync(string? categ);

        /// <summary>
        /// Create a new Product in the collection
        /// </summary>
        /// <param name="product">The object to create the Product</param>
        /// <returns>The Product created</returns>
        Task<Product> CreateProductAsync(Product product);

        /// <summary>
        /// Update the Product in the collection
        /// </summary>
        /// <param name="product">The object to update the Product</param>
        /// <returns>The Product updated</returns>
        Task<Product> UpdateProductAsync(Product product);

        /// <summary>
        /// Delete the Product in the collection
        /// </summary>
        /// <param name="id">The Id of the Product to be deleted</param>
        Task DeleteProductAsync(string? id);
    }
}
