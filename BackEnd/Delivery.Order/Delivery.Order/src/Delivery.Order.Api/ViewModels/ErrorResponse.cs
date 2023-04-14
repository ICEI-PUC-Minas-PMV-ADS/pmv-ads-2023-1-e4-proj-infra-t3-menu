namespace Delivery.Order.Api.ViewModels
{
    /// <summary>
    /// Error default response
    /// </summary>
    public class ErrorResponse
    {
        /// <summary>
        /// Error type
        /// </summary>
        public string? Type { get; set; }

        /// <summary>
        /// Title description
        /// </summary>
        public string? Title { get; set; }

        /// <summary>
        /// Message detail of error
        /// </summary>
        public string? Detail { get; set; }
    }
}
