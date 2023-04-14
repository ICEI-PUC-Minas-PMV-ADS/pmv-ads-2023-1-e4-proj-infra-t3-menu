using Delivery.Users.Domain.Validations;
using FluentValidation;
using OrderModel = Delivery.Order.Domain.Models.Order;

namespace Delivery.Order.Domain.Validations
{
    public class OrderValidator : AbstractValidator<OrderModel>
    {
        public OrderValidator() 
        {
            RuleFor(x => x.OrderingDate)
                .GreaterThanOrEqualTo(DateTime.Now.AddSeconds(60))
                .WithMessage("Ordering Date must be greater than now");

            RuleFor(x => x.TotalValue)
                .GreaterThan(0)
                .WithMessage("Total value must be greater than 0");

            RuleForEach(x => x.Products)
                .SetValidator(new ProductValidator());

            RuleFor(x => x.User)
                .NotEmpty()
                .WithMessage("User information are required")
                .SetValidator(new UserValidator());
        }
    }
}
