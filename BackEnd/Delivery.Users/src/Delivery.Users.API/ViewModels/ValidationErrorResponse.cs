namespace Delivery.Users.Api.ViewModels
{
    public class ValidationErrorResponse
    {
        public string? Type { get; set; }
        public string? Title { get; set; }
        public string? Detail { get; set; }
        public List<ErrorDetails>? Errors { get; set; }
    }

    public class ErrorDetails
    {
        public string? PropertyName { get; set; }
        public string? ErrorMessage { get; set; }
    }
}
