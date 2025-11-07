export type Consulta = {
  id_consulta?: number;              // opcional, pois o backend gera o ID automaticamente
  datahora_consulta: string;         // formato esperado: "dd/mm/yyyy hh24:mi"
  descricao_consulta: string;        // motivo ou descrição da consulta
  nome_consulta: string;             // nome do paciente
};