namespace svet_api.DTOs
{
    public class LoginResponse
    {
        public required string Token { get; set; }
        public DateTime Expiracao { get; set; }
    }
}
