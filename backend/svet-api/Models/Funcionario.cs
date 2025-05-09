namespace svet_api.Models
{
    public class Funcionario
    {
        public int IdFuncionario { get; set; } 
        public int IdUsuario { get; set; }     

        public List<string> Cargo { get; set; } = new(); 
        public string Funcao { get; set; }
        public string Crmv { get; set; }
        public DateTime DataAdmissao { get; set; }
        public DateTime? DataDemissao { get; set; }

        public Usuario Usuario { get; set; }
    }

}
