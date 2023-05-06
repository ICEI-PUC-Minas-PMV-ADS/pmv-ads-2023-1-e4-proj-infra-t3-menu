using MongoDB.Bson.Serialization.Attributes;

namespace Delivery.Order.Domain.Models
{
    /// <summary>
    /// Order data model 
    /// </summary>
    public class Order
    {
        /// <summary>
        /// Order Id
        /// </summary>
        [BsonId]
        public string? Id { get; set; }

        /// <summary>
        /// User of the Order
        /// </summary>
        public User? User { get; set; }

        /// <summary>
        /// Order date
        /// </summary>
        public DateTime OrderingDate { get; set; }

        /// <summary>
        /// Products of the Order
        /// </summary>
        public List<Product>? Products { get; set; }
        
        /// <summary>
        /// Order total
        /// </summary>
        public double TotalValue { get; set; }
        /// <summary>
        /// Status Order
        /// </summary>
        public string? StatusOrder { get; set; }
    }
}
