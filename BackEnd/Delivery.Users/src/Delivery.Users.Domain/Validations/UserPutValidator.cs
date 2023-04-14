using Delivery.Users.Domain.Models;
using FluentValidation;

namespace Delivery.Users.Domain.Validations
{
    public class UserPutValidator : AbstractValidator<User>
    {
        public UserPutValidator() 
        {
            RuleFor(x => x.Id)
                .NotEmpty()
                .GreaterThan(0)
                .WithMessage("Id cannot be empty and must be greater than 0");

            RuleFor(x => x.Email)
                .NotEmpty()
                .EmailAddress()
                .WithMessage("Email not valid");

            RuleFor(x => x.Name)
                .NotEmpty()
                .WithMessage("Name cannot be empty");

            RuleFor(x => x.Surname)
                .NotEmpty()
                .WithMessage("Surname cannot be empty");

            RuleFor(x => x.Password)
                .NotEmpty()
                .WithMessage("Password cannot be empty");

            RuleFor(x => x.Perfil)
                .NotEmpty()
                .WithMessage("Perfil cannot be empty");
        }
    }
}
