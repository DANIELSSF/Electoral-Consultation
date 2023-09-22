import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Box, Button, Chip, Grid, TextField, Typography } from '@mui/material';
import { Face } from '@mui/icons-material';

import { useElection } from '../../hooks/useElection';
import { Toast } from '..';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

interface IFormInput {
  password: string;
  repeatPassword: string;
}

export const AddPassword: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const { user, startSetPassword } = useElection();
  const fullName = `${user?.firstName} ${user?.lastName}`;
  const ToastSweet: typeof Swal = Toast;

  const showErrorToast = (message: string) => {
    ToastSweet.fire({
      icon: 'error',
      title: message,
      background: '#FFFFF0',
    });
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { password, repeatPassword } = data;

    if (password !== repeatPassword)
      return showErrorToast('Las contraseñas no coinciden');

    await startSetPassword(password);

    navigate('/auth/login');
  };

  return (
    <Grid
      container
      sx={{
        margin: '50px auto',
        boxShadow: '0px 0px 9px 2px #ababab',
        borderRadius: '15px',
      }}
      display="flex"
      width={{ xs: '90%', sm: '60%', md: '35%' }}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        margin="20px 30px"
        width="80%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Typography variant="h1" component="h1" fontSize="1.1rem">
          Establecer Contraseña
        </Typography>

        <Chip
          icon={<Face />}
          label={fullName}
          variant="outlined"
          sx={{ marginY: '20px' }}
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined-basic-password"
            label="Contraseña"
            type="password"
            variant="outlined"
            size="small"
            sx={{ width: '100%', marginTop: '10px' }}
            {...register('password', {
              required: true,
              minLength: 8,
            })}
            error={!!errors.password}
            helperText={errors.password && 'Contraseña no valida'}
          />

          <TextField
            id="outlined-basic-repeat-password"
            label="Repetir Contraseña"
            type="password"
            variant="outlined"
            size="small"
            sx={{ width: '100%', marginY: '20px' }}
            {...register('repeatPassword', {
              required: true,
              minLength: 8,
            })}
            error={!!errors.repeatPassword}
            helperText={errors.repeatPassword && 'Contraseña no valida'}
          />
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
    </Grid>
  );
};
