import { FC } from 'react';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useElection } from '../../hooks/useElection';

interface IFormInput {
  email: string;
  password: string;
}

export const LoginForm: FC = () => {
  const { startLoginJudge } = useElection();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await startLoginJudge(data);
  };

  return (
    <Grid container width="80%" marginY="20px">
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%' }}>
        <Box>
          <Typography variant="body1">Correo</Typography>
          <TextField
            id="outlined-basic-email"
            label="Correo"
            type="email"
            variant="outlined"
            size="small"
            sx={{ width: '100%', marginTop: '10px' }}
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            })}
            error={!!errors.email}
            helperText={errors.email && 'Correo Erróneo'}
          />
        </Box>

        <Box marginY="20px">
          <Typography variant="body1">Contraseña</Typography>
          <TextField
            id="outlined-basic-password"
            label="Contraseña"
            type="password"
            variant="outlined"
            size="small"
            sx={{ width: '100%', marginTop: '10px' }}
            {...register('password', {
              required: true,
            })}
          />
        </Box>

        <Box display="grid">
          <Button
            variant="contained"
            type="submit"
            sx={{ height: '30px', marginTop: '10px' }}
          >
            <Typography color="#fff" fontSize=".8rem">
              Continuar
            </Typography>
          </Button>
        </Box>
      </form>
    </Grid>
  );
};
