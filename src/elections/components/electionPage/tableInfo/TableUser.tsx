import { FC } from 'react';
import { IVerify } from '../../../interfaces/dataVoting/verify';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

interface InitialProps {
  user: IVerify;
}

export const TableUser: FC<InitialProps> = ({ user }) => {
  return (
    <>
      <Typography variant="h5" id="tableTitle" component="div" marginBottom='10px'>
        Información de Elecciones
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead style={{ backgroundColor: '#1565c0' }}>
            <TableRow>
              <TableCell style={{ color: '#fff' }} align="center">
                Nombres
              </TableCell>
              <TableCell style={{ color: '#fff' }} align="center">
                Apellidos
              </TableCell>
              <TableCell style={{ color: '#fff' }} align="center">
                Cédula
              </TableCell>
              <TableCell style={{ color: '#fff' }} align="center">
                Lugar Votación
              </TableCell>
              <TableCell style={{ color: '#fff' }} align="center">
                Mesa Votación
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{user.firstName}</TableCell>
              <TableCell align="center">{user.lastName}</TableCell>
              <TableCell align="center">{user.cedula}</TableCell>
              <TableCell align="center">{user.ubication}</TableCell>
              <TableCell align="center">{user.table}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
