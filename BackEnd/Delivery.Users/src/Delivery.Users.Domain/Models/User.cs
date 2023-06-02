using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Delivery.Users.Domain.Models
{
    /// <summary>
    /// User attributes
    /// </summary>
    public class User
    {
        [Column("User_Id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? Id { get; set; }
        public string? Email { get; set; }
        public string? Name { get; set; }
        public string? Surname { get; set; }
        [JsonIgnore]
        public string? Password { get; set; }

        public Perfil Perfil { get; set; }
    }
    public enum Perfil
    {
        [Description("Administrador")]
        Administrador,
        [Description("Atendente")]
        Atendente,
        [Description("Cliente")]
        Cliente,
        [Description("Gerente")]
        Gerente,
        [Description("Caixa")]
        Caixa
    }
}
