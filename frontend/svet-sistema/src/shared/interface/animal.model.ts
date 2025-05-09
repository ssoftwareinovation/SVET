export interface Animal {
  id_cliente: number;
  id_animal: number;

  nome: string;
  especie: string;
  raca: string;
  idade: number;
  data_nascimento: Date;
  identificacao?: string;
  microchip?: string;
  plano_convenio: string;
}
