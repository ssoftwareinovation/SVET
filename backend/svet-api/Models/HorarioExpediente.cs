namespace svet_api.Models
{
    public class HorarioExpediente
    {
        public int IdExpediente { get; set; }    
        public int IdFuncionario { get; set; }   

        public string DiaSemana { get; set; }    
        public string HorarioInicial { get; set; } 
        public string HorarioFinal { get; set; }   
    }
}
