namespace Delivery.Order.Domain.Models
{
    /// <summary>
    /// User data model
    /// </summary>
    public class User
    {
        /// <summary>
        /// User Id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// User Name
        /// </summary>
        public string? Name { get; set; }

        /// <summary>
        /// User Email
        /// </summary>
        public string? Email { get; set; }
    }
}
