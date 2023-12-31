export interface IVerify {
  id: number;
  firstName: string;
  lastName: string;
  cedula: string;
  rol: string;
  table: string;
  ubication: string;
  email?: string;
  cellphone?: string;
  votes?: UserVerify[];
}

interface UserVerify {
  id: number;
  firstName: string;
  lastName: string;
  cedula: string;
  rol: string;
  table: string;
  ubication: string;
}
