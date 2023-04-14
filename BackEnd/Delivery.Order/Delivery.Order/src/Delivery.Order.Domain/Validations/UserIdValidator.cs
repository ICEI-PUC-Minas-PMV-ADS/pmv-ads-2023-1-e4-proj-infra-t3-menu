using FluentValidation;

namespace Delivery.Order.Domain.Validations
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
