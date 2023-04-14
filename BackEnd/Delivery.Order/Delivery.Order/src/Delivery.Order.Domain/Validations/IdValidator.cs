using FluentValidation;

namespace Delivery.Order.Domain.Validations
{
    public class IdValidator : AbstractValidator<string?>
    {
        public IdValidator() 
        {
            RuleFor(x => x)
                .NotEqual("0")
                .WithName("Product Id")
                .WithMessage("Product Id cannot be empty and must be greater than 0");
        }
    }
}
