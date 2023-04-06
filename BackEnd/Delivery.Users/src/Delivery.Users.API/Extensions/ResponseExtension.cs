using Delivery.Users.Api.ViewModels;
using FluentValidation.Results;
using Microsoft.AspNetCore.Mvc;

namespace Delivery.Users.API.Extensions
{
    /// <summary>
    /// Extensions to handle with the responses
    /// </summary>
    public static class ResponseExtension
    {
        /// <summary>
        /// Handle with validation objects
        /// </summary>
        /// <param name="validationResult">The validation result</param>
        /// <returns>The default validation response</returns>
        public static ValidationErrorResponse ToValidationErrorReponse(this ValidationResult validationResult)
        {
            return new ValidationErrorResponse
            {
                Type = typeof(ValidationResult).Name,
                Title = "Validation Exception",
                Detail = "Object not valid",
                Errors = validationResult.Errors.Select(error => new ErrorDetails
                {
                    PropertyName = error.PropertyName,
                    ErrorMessage = error.ErrorMessage
                }).ToList()
            };
        }
        
        // <summary>
        /// Handle with not found objects
        /// </summary>
        /// <param name="entity">NotFoundResult type for the extension</param>
        /// <param name="entityName">Entity name that was not found</param>
        /// <returns>The not found default response</returns>
        public static NotFoundResponse ToNotFoundReponse(this NotFoundResult entity, string entityName)
        {
            return new NotFoundResponse
            {
                Detail = $"{entityName} not found"
            };
        }
        
        /// <summary>
        /// Handle the exceptions to a readable format
        /// </summary>
        /// <param name="exception">The exception object</param>
        /// <returns>The exception default response</returns>
        public static ErrorResponse ToErrorReponse(this Exception exception)
        {
            return new ErrorResponse
            {
                Type = nameof(Exception),
                Title = "Unhandled Exception",
                Detail = exception.Message
            };
        }
    }
}
