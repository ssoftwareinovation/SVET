export interface HorarioExpediente {
  id_expediente: number;
  id_funcionario: number;

  dia_semana: string;
  horario_inicial: string;
  horario_final: string;
}
