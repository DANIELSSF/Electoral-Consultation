import { ITableInformation, IVerify } from '..';

export interface IVotacion {
  status:
    | 'checking'
    | 'not-authenticated'
    | 'authenticated'
    | 'votante'
    | 'jurado';
  isLoading: boolean;
  errorMessage: undefined | string;
  user: null | IVerify | ITableInformation;
}
