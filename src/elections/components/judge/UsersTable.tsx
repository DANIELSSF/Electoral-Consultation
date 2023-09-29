import { FC } from 'react';
import {
  Grid,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
} from '@mui/material';
import { ITableInformation, IVerify } from '../../interfaces';

function createData(
  id: number,
  name: string,
  cedula: string,
  ubication: string,
  table: string
) {
  return {
    id,
    name,
    cedula,
    ubication,
    table,
  };
}

interface InitialProps {
  user: ITableInformation | IVerify | null;
}

export const UsersTable: FC<InitialProps> = ({ user }) => {
  const userRows = user!.votes!.map((users) =>
    createData(
      users.id,
      `${users.firstName} ${users.lastName}`,
      users.cedula,
      users.ubication,
      users.table
    )
  );

  return (
    <Grid item width={{ md: '90%', sm: '100%' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#ID</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Cedula</TableCell>
              <TableCell>Ubicación</TableCell>
              <TableCell>Mesa</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userRows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.cedula}</TableCell>
                <TableCell>{row.ubication}</TableCell>
                <TableCell>{row.table}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
};
