using Delivery.Order.Domain.Models;
using FluentValidation;

namespace Delivery.Order.Domain.Validations
{
    public class ProductValidator : AbstractValidator<Product>
    {
        public ProductValidator() 
        {
            RuleFor(x => x.Name)
                .NotEmpty()
                .WithMessage("Name cannot be empty");

            RuleFor(x => x.Quantity)
                .GreaterThan(0)
                .WithMessage("Quantity cannot be empty and must be greater than 0");
            
            RuleFor(x => x.Price)
                .GreaterThan(0)
                .WithMessage("Price cannot be empty and must be greater than 0");
        }
    }
}
