export interface IResponse {
  status: number;
  message: string;
  data: ITurno;
}

export interface ITurno {
  baja: string | Date;
  numero: number;
  turnoActual: ITurnoActual;
}

export interface ITurnoActual {
  id: number;
  numero: number;
  sector_Id: number;
  fechaLlamado: string | Date;
  fechaAtendido: string | Date;
  cliente_Id: number;
}
