namespace svet_api.Models
{
    public class Usuario
    {
        public int Id_Usuario { get; set; }
        public string? Nome { get; set; }
        public required string Email { get; set; }
        public DateTime Data_Nascimento { get; set; }
        public required string Senha { get; set; }
        public string? Cep { get; set; }
        public string? Endereco { get; set; }
        public string? Numero { get; set; }
        public int Id_Clinica { get; set; }
        public int Id_Tipo_Usuario { get; set; }
        public bool Flag_Receber_Whatszapp { get; set; }
        public bool Flag_Receber_Email { get; set; }
        public bool Ativo { get; set; }
    }

}
