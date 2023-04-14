using Delivery.Users.Domain.Interfaces;
using Delivery.Users.Domain.Models;
using Delivery.Users.Infrastructure;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Delivery.Users.Service
{
    /// <summary>
    /// Service to manage the Users
    /// </summary>
    public class UserServices : IUserServices
    {
        private readonly ILogger<UserServices> _logger;
        private readonly SqlContext _context;

        /// <summary>
        /// Initialize the attributes
        /// </summary>
        /// <param name="logger">Logger instance</param>
        /// <param name="context">Sql Server context instance</param>
        public UserServices(ILogger<UserServices> logger, SqlContext context) { 
            _logger = logger;
            _context = context;
        }

        /// <inheritdoc/>
        public async Task<User?> GetUser(int id)
        {
            try
            {
                return await _context.Users.FindAsync(id);
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <inheritdoc/>
        public async Task<User?> CreateUser(User user)
        {
            try
            {
                user.Id = null;
                await _context.Users.AddAsync(user);
                await _context.SaveChangesAsync();

                return user;
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <inheritdoc/>
        public User UpdateUser(User user)
        {
            try
            {
                _ = _context.Users.Find(user.Id) ?? throw new KeyNotFoundException();
                _context.Users.Update(user);
                _context.SaveChanges();

                return user;
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <inheritdoc/>
        public async Task DeleteUser(int id)
        {
            try
            {
                var user = await _context.Users.FindAsync(id) ?? throw new KeyNotFoundException();

                _context.Users.Remove(user);
                _context.SaveChanges();                
            }
            catch (Exception)
            {
                throw;
            }
        }

        /// <inheritdoc/>
        public async Task Authenticate(AuthenticateDto model)
        {
            try
            {
                var user = await _context.Users.FindAsync(model.Id) ?? throw new KeyNotFoundException();
                            
            }
            catch (Exception)
            {
                throw;
            }
        }
    }
}