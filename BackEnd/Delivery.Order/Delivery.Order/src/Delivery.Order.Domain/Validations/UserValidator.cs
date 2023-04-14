using Delivery.Order.Domain.Models;
using FluentValidation;

namespace Delivery.Users.Domain.Validations
{
    public class UserValidator : AbstractValidator<User?>
    {
        public UserValidator() 
        {
            RuleFor(x => x!.Id)
                .NotEmpty()
                .GreaterThan(0)
                .WithMessage("Id cannot be empty and must be greater than 0");

            RuleFor(x => x!.Email)
                .NotEmpty()
                .EmailAddress()
                .WithMessage("Email not valid");

            RuleFor(x => x!.Name)
                .NotEmpty()
                .WithMessage("Name cannot be empty");
        }
    }
}
