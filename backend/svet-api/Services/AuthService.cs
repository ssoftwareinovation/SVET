using Microsoft.EntityFrameworkCore;
using svet_api.Data;
using svet_api.DTOs;
using svet_api.Models;
using System.Text;

namespace svet_api.Services
{
    public class AuthService
    {
        private readonly AppDbContext _context;

        public AuthService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<LoginResponse?> Login(LoginRequest dto)
        {
            var email = Encoding.UTF8.GetString(Convert.FromBase64String(dto.Email));
            var senha = Encoding.UTF8.GetString(Convert.FromBase64String(dto.Senha));

            var usuario = await _context.Usuarios
                .FirstOrDefaultAsync(u => u.Email == email && u.Senha == senha && u.Ativo);

            if (usuario == null) return null;

            var token = Guid.NewGuid().ToString();
            var expiracao = DateTime.UtcNow.AddHours(2);

            TokenUsuario tokenObj = new()
            {
                UsuarioId = usuario.Id_Usuario,
                Valor = token,
                Expiracao = expiracao
            };

            _context.Tokens.Add(tokenObj);
            await _context.SaveChangesAsync();

            return new LoginResponse
            {
                Token = token,
                Expiracao = expiracao
            };
        }

        public async Task<Usuario?> ValidarTokenAsync(string token)
        {
            var tokenObj = await _context.Tokens
                .Include(t => t.Usuario)
                .FirstOrDefaultAsync(t => t.Valor == token && t.Ativo && t.Expiracao > DateTime.UtcNow);

            return tokenObj?.Usuario;
        }
    }


}
