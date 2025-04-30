using Microsoft.AspNetCore.Mvc;
using svet_api.DTOs;
using svet_api.Services;

namespace svet_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest dto)
        {
            var result = await _authService.Login(dto);
            if (result == null) return Unauthorized("Email ou senha inválidos");

            return Ok(result);
        }
    }


}
