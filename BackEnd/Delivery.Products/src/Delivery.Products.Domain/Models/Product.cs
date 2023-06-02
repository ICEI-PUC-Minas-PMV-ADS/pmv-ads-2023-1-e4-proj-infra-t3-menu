using MongoDB.Bson.Serialization.Attributes;

namespace Delivery.Products.Domain.Models
{
    public class Product
    {
        /// <summary>
        /// Product Id
        /// </summary>
        [BsonId]
        public string? Id { get; set; }

        /// <summary>
        /// Product Name
        /// </summary>
        public string? Name { get; set; }

        /// <summary>
        /// Product Category
        /// </summary>
        public string? Category { get; set; }

        /// <summary>
        /// Product Available
        /// </summary>
        public bool IsAvailable { get; set; }

        /// <summary>
        /// Product Price
        /// </summary>
        public double Price { get; set; }

        /// <summary>
        /// Product Description
        /// </summary>
        public string? Description { get; set; }

    }
}