using Delivery.Users.Domain.Models;
using FluentValidation;

namespace Delivery.Users.Domain.Validations
{
    public class UserIdValidator : AbstractValidator<int>
    {
        public UserIdValidator() 
        {
            RuleFor(x => x)
                .GreaterThan(0)
                .WithName("Id")
                .WithMessage("Id cannot be empty and must be greater than 0");
        }
    }
}
