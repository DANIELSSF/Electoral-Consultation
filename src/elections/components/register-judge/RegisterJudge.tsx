import { FC } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useElection } from '../../hooks/useElection';
import { Toast } from '..';

interface IFormInput {
  fullName: string;
  email: string;
  cellphone: string;
}

export const RegisterJudge: FC = () => {
  const { user, startRegisterEmailPhone } = useElection();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const navigate = useNavigate();

  const ToastSweet: typeof Swal = Toast;

  const showErrorToast = (message: string) => {
    ToastSweet.fire({
      icon: 'error',
      title: message,
      background: '#FFFFF0',
    });
  };

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const { fullName, cellphone, email } = data;

    if (!user) {
      return showErrorToast('Usuario no existe');
    }

    const userFullName = `${user.firstName} ${user.lastName}`;
    const fullNameInput = fullName.trim().toLowerCase();

    if (fullNameInput !== userFullName.toLowerCase()) {
      return showErrorToast('El nombre no es correcto');
    }

    await startRegisterEmailPhone(email, cellphone);

    navigate('/judge/verify-code');
  };

  return (
    <Grid
      margin="0 auto"
      width={{ sm: '40%', xs: '90%' }}
      display="flex"
      justifyContent="start"
      alignContent="center"
      flexDirection="column"
    >
      <Typography component="div" sx={{ marginTop: '30px' }} textAlign="center">
        Ha sido seleccionado como jurado de votación. Por favor, complete su
        registro como jurado para contribuir al éxito de nuestro sistema
        electoral. Su participación es valiosa.
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography
          variant="h6"
          component="h6"
          color="#002d55"
          marginTop="30px"
        >
          Nombre
        </Typography>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignContent="center"
          sx={{ marginTop: '10px' }}
        >
          <TextField
            id="outlined-basic-fullName"
            label="Nombre Completo"
            variant="outlined"
            size="small"
            sx={{ width: '90%' }}
            {...register('fullName', {
              required: true,
              pattern: /^[A-Za-z\s]+$/i,
            })}
            error={!!errors.fullName}
            helperText={
              errors.fullName && 'Por favor! escriba su nombre completo'
            }
          />
        </Box>
        <Typography
          variant="h6"
          component="h6"
          color="#002d55"
          marginTop="10px"
        >
          Correo
        </Typography>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignContent="center"
          sx={{ marginTop: '10px' }}
        >
          <TextField
            id="outlined-basic-email"
            label="Correo"
            type="email"
            variant="outlined"
            size="small"
            sx={{ width: '90%' }}
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
            })}
            error={!!errors.email}
            helperText={errors.email && 'Correo incorrecto'}
          />
        </Box>

        <Typography
          variant="h6"
          component="h6"
          color="#002d55"
          marginTop="10px"
        >
          Teléfono
        </Typography>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignContent="center"
          sx={{ marginTop: '10px' }}
        >
          <Stack direction="row" spacing={1}>
            <Chip
              avatar={<Avatar alt="Colombia" src="/static/colombia.png" />}
              label="+57"
              variant="outlined"
              sx={{ height: '40px' }}
            />
          </Stack>

          <TextField
            id="outlined-basic-cellphone"
            label="Teléfono"
            type="text"
            variant="outlined"
            size="small"
            sx={{ width: '40%', marginLeft: '10px' }}
            {...register('cellphone', {
              required: true,
              pattern: /^3[0-9]{9}$/i,
            })}
            error={!!errors.cellphone}
            helperText={errors.cellphone && 'N° Celular incorrecto'}
          />
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignContent="center"
          sx={{ marginTop: '10px' }}
        >
          <Button
            variant="contained"
            type="submit"
            sx={{ height: '40px', marginY: '10px' }}
          >
            <Typography color="#fff" fontSize="1.1rem">
              Continuar
            </Typography>
          </Button>
        </Box>
      </form>
    </Grid>
  );
};
