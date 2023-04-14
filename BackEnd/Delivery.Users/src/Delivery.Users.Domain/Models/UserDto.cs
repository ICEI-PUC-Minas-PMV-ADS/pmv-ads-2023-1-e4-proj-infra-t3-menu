using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Delivery.Users.Domain.Models
{
    public class UserDto
    {
        public int? Id { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public string? Password { get; set; }
        public string? Email { get; set; }        
        public string? Surname { get; set; }
        [Required]
        public Perfil Perfil { get; set; }
    }
}
