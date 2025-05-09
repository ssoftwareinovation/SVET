namespace svet_api.Models
{
    public class Consulta
    {
        public int IdConsulta { get; set; } 

        public DateTime Data { get; set; }

        public int IdClinica { get; set; }      
        public int IdAnimal { get; set; }       
        public int IdCliente { get; set; }      
        public int IdFuncionario { get; set; }  

        public string Status { get; set; } 
        public string Descricao { get; set; }
    }
}
