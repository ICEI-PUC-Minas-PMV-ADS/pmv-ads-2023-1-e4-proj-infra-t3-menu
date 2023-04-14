namespace Delivery.Order.Domain.Models
{
    /// <summary>
    /// Prroduct data model
    /// </summary>
    public class Product
    {
        /// <summary>
        /// Product Id
        /// </summary>
        public string? Id { get; set; }

        /// <summary>
        /// Product Name
        /// </summary>
        public string? Name { get; set; }

        /// <summary>
        /// Product Quantity
        /// </summary>
        public int Quantity { get; set; }

        /// <summary>
        /// Product Price
        /// </summary>
        public double Price { get; set; }
    }
}