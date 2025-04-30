using svet_api.Data;

namespace svet_api.Middlewares
{
    public class TokenAuthenticationMiddleware
    {
        private readonly RequestDelegate _next;

        public TokenAuthenticationMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task InvokeAsync(HttpContext context, AppDbContext db)
        {
            var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Replace("Bearer ", "");

            if (string.IsNullOrEmpty(token))
            {
                context.Response.StatusCode = 401;
                await context.Response.WriteAsync("Token não fornecido.");
                return;
            }

            var tokenValido = db.Tokens.FirstOrDefault(t => t.Valor == token && t.Expiracao > DateTime.UtcNow && t.Ativo);

            if (tokenValido == null)
            {
                context.Response.StatusCode = 401;
                await context.Response.WriteAsync("Token inválido ou expirado.");
                return;
            }

            // Armazena o ID do usuário autenticado no contexto
            context.Items["UsuarioId"] = tokenValido.UsuarioId;

            await _next(context);
        }
    }
}
