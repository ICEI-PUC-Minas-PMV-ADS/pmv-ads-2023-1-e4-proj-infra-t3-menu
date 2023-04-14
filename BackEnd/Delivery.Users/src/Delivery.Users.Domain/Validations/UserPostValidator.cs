using Delivery.Users.Domain.Models;
using FluentValidation;

namespace Delivery.Users.Domain.Validations
{
    public class UserPostValidator : AbstractValidator<User>
    {
        public UserPostValidator() 
        {
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
