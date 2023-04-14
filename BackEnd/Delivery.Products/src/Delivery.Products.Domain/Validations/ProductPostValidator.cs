using Delivery.Products.Domain.Models;
using FluentValidation;

namespace Delivery.Users.Domain.Validations
{
    public class ProductPostValidator : AbstractValidator<Product>
    {
        public ProductPostValidator() 
        {            
            RuleFor(x => x.Name)
                .NotEmpty()
                .WithMessage("Name cannot be empty");

            RuleFor(x => x.Category)
                .NotEmpty()
                .WithMessage("Category cannot be empty");

            RuleFor(x => x.IsAvailable)
                .NotNull()
                .WithMessage("Available cannot be empty");

            RuleFor(x => x.Price)
                .GreaterThan(0)
                .WithMessage("Price cannot be empty and must be greater than 0");
        }
    }
}
