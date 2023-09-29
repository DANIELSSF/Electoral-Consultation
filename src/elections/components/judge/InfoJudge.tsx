import { FC } from 'react';

import { ITableInformation, IVerify } from '../../interfaces';

import { Grid, Typography } from '@mui/material';

interface InitialProps {
  user: ITableInformation | IVerify | null;
}

export const InfoJudge: FC<InitialProps> = ({ user }) => {
  return (
    <Grid
      item
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      width={{ md: '90%', sm: '100%' }}
      marginY="30px"
    >
      <Typography variant="body1">
        {' '}
        <strong>Jurado: </strong>
        {`${user?.firstName} ${user?.lastName}`}
      </Typography>

      <Typography variant="body1">
        <strong>Cedula: </strong>
        {user?.cedula}
      </Typography>

      <Typography variant="body1">
        <strong>Correo: </strong>
        {user?.email}
      </Typography>

      <Typography variant="body1">
        <strong>Celular: </strong>
        {user?.cellphone}
      </Typography>
    </Grid>
  );
};
