using Npgsql;
using svet_api.Models;

namespace svet_api.Repositories
{
    public class UserRepository
    {
        private readonly IConfiguration _config;

        public UserRepository(IConfiguration config)
        {
            _config = config;
        }

        public Usuario? GetByEmail(string emailBase64)
        {
            using var conn = new NpgsqlConnection(_config.GetConnectionString("DefaultConnection"));
            conn.Open();

            var query = "SELECT * FROM usuarios WHERE email = @Email";
            using var cmd = new NpgsqlCommand(query, conn);
            cmd.Parameters.AddWithValue("@Email", emailBase64);

            using var reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                return new Usuario
                {
                    Id_Usuario = reader.GetInt32(0),
                    Nome = reader.GetString(1),
                    Email = reader.GetString(2),
                    Data_Nascimento = reader.GetDateTime(3),
                    Senha = reader.GetString(4),
                    Cep = reader.GetString(5),
                    Endereco = reader.GetString(6),
                    Numero = reader.GetString(7),
                    Id_Clinica = reader.GetInt32(8),
                    Id_Tipo_Usuario = reader.GetInt32(9),
                    Flag_Receber_Whatszapp = reader.GetBoolean(10),
                    Flag_Receber_Email = reader.GetBoolean(11),
                    Ativo = reader.GetBoolean(12)
                };
            }

            return null;
        }
    }

}
