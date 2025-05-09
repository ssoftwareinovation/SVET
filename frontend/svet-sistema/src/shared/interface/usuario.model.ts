export interface Usuario {
  id_usuario: number;

  nome: string;
  email: string;
  data_nascimento: Date;
  senha: string;
  cep: string;
  endereco: string;
  numero: string;

  id_clinica: number;
  id_tipo_usuario: number;

  flag_receber_whatszapp: boolean;
  flag_receber_email: boolean;

  ativo: boolean;
}
