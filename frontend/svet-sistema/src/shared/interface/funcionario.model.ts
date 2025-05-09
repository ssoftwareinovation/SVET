export interface Funcionario {
  id_funcionario: number;
  id_usuario: number;

  cargo: string[];
  funcao: string;
  crmv: string;
  data_admissao: Date;
  data_demissao?: Date;
}
