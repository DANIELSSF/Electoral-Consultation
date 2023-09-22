import { FC } from 'react';

import { ElectoralLayout } from '../../layouts/electoralLayout';
import { LoginForm } from '../../components';
import { Divider, Grid, Typography } from '@mui/material';

export const LoginPage: FC = () => {
  return (
    <ElectoralLayout>
      <Grid
        container
        margin="0 auto"
        width={{ xs: '90%', sm: '60%', md: '30%' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        marginY="100px"
        sx={{
          boxShadow: '0px 0px 9px 2px #ababab',
        }}
      >
        <Grid
          item
          margin="30px"
          width="80%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="h1" component="h1" fontSize="1.8rem">
            Iniciar Sesión
          </Typography>
        </Grid>
        <Divider sx={{ width: '80%' }} />
        <LoginForm />
      </Grid>
    </ElectoralLayout>
  );
};
