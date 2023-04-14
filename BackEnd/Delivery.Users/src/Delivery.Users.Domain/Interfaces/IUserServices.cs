using Delivery.Users.Domain.Models;

namespace Delivery.Users.Domain.Interfaces
{
    public interface IUserServices
    {
        /// <summary>
        /// Get User by id
        /// </summary>
        /// <param name="id">User id to find</param>
        /// <returns>The User entity</returns>
        Task<User?> GetUser(int id);

        /// <summary>
        /// Create new User
        /// </summary>
        /// <param name="user">The User object to create</param>
        /// <returns>The User created</returns>
        Task<User?> CreateUser(User user);

        /// <summary>
        /// Update User by Id
        /// </summary>
        /// <param name="user">The User to be Updated</param>
        /// <returns>The User updated</returns>
        User UpdateUser(User user);

        /// <summary>
        /// Delete User by Id
        /// </summary>
        /// <param name="id">The User id to be deleted</param>
        Task DeleteUser(int id);

        /// <summary>
        /// Login de Usuário
        /// </summary>
        /// <param name="id">User id</param>
        /// <param password="password">User id</param>
        /// <returns>Jwt Token</returns>
        Task Authenticate(AuthenticateDto model);
    }
}
