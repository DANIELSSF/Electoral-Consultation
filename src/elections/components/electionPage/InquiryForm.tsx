import { useState, FC } from 'react';

import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useElection } from '../../hooks/useElection';

interface IFormInput {
  fullName: string;
  cedula: string;
}

export const InquiryForm:FC = () => {
  const { startSearchPollingTable } = useElection();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const [submitButton, setSubmitButton] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async(data) => {
    setSubmitButton(true);
    const { fullName, cedula } = data;
    await startSearchPollingTable(fullName.trim(), cedula);
    setSubmitButton(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" component="h6" color="#002d55">
          Nombre:*
        </Typography>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignContent="center"
          sx={{ marginTop: '10px' }}
        >
          <TextField
            id="outlined-basic"
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
          No. Identificación:*
        </Typography>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignContent="center"
          sx={{ marginTop: '10px' }}
        >
          <TextField
            id="outlined-basic"
            label="Cedula"
            variant="outlined"
            size="small"
            sx={{ width: '90%' }}
            {...register('cedula', {
              required: true,
              pattern: /^[1-9]\d{8,9}$/i,
            })}
            error={!!errors.cedula}
            helperText={
              errors.cedula &&
              'Cédula Incorrecta, verifique que sea una cédula Colombiana'
            }
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
            sx={{ height: '40px', marginTop: '10px' }}
            disabled={submitButton}
          >
            <Typography color="#fff" fontSize="1.1rem">
              Consultar
            </Typography>
          </Button>
        </Box>
      </form>
    </>
  );
};
