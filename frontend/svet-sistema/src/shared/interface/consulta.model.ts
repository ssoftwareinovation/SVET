export interface Consulta {
  id_consulta: number;

  data: Date;

  id_clinica: number;
  id_animal: number;
  id_cliente: number;
  id_funcionario: number;

  status: 'feita' | 'fechada';
  descricao: string;
}
