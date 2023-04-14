using FluentValidation;

namespace Delivery.Users.Domain.Validations
{
    public class ProductIdValidator : AbstractValidator<string?>
    {
        public ProductIdValidator() 
        {
            RuleFor(x => x)
                .NotEqual("0")
                .WithName("Id")
                .WithMessage("Id cannot be empty and must be greater than 0");
        }
    }
}
