namespace Delivery.Order.Api.ViewModels
{
    /// <summary>
    /// Validation Error default response
    /// </summary>
    public class ValidationErrorResponse
    {
        /// <summary>
        /// Valiidation type
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

        /// <summary>
        /// Properties details
        /// </summary>
        public List<ErrorDetails>? Errors { get; set; }
    }

    /// <summary>
    /// Validation error detail
    /// </summary>

    public class ErrorDetails
    {
        /// <summary>
        /// Property with error
        /// </summary>
        public string? PropertyName { get; set; }

        /// <summary>
        /// Message error for the property
        /// </summary>
        public string? ErrorMessage { get; set; }
    }
}
