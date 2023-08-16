export interface IUsuario {
  turno: number | string;
  idTurno: number | string;
  fecha_alta: string;
  fecha_baja: string;
  seed?: string;
}

export interface IResponseUsuario {
  id: number;
  fechaAlta: string;
  fechaBaja: string;
}
