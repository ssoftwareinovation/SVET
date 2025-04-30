namespace svet_api.Models
{
  public class TokenUsuario
    {
    public int Id { get; set; }
    public int UsuarioId { get; set; }
    public required string Valor { get; set; }
    public DateTime Expiracao { get; set; }
    public bool Ativo { get; set; } = true;

    public Usuario Usuario { get; set; }
}

}
