import { FC, useState, FormEvent } from 'react';

import { useNavigate } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import VerificationInput from 'react-verification-input';
import Swal from 'sweetalert2';

import './verifyCode.css';
import { HeaderVerifyCode, Toast } from '..';
import { useElection } from '../../hooks/useElection';

export const VerifyCode: FC = () => {
  const { startVerificationCode } = useElection();
  const navigate = useNavigate();
  const [inputCode, setInputCode] = useState('');

  const ToastSweet: typeof Swal = Toast;

  const showErrorToast = (message: string) => {
    ToastSweet.fire({
      icon: 'error',
      title: message,
      background: '#FFFFF0',
    });
  };

  const phoneCode = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputCode.length !== 6) return;
    const resp = await startVerificationCode(inputCode);
    if (!resp) {
      return showErrorToast('Código erróneo');
    }

    navigate('/judge/password');
  };

  return (
    <Grid
      container
      sx={{ marginTop: '20px' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: '1.8rem' }}
        margin="30px"
      >
        Código de verificación
      </Typography>
      <Grid>
        <HeaderVerifyCode />
      </Grid>

      <form onSubmit={phoneCode}>
        <VerificationInput
          classNames={{
            character: 'character',
          }}
          validChars="0-9"
          inputProps={{ inputMode: 'numeric' }}
          length={6}
          placeholder="_"
          onComplete={setInputCode}
        />

        <Button
          variant="contained"
          type="submit"
          sx={{ height: '30px', marginTop: '20px', width:'100%' }}
        >
          <Typography color="#fff" fontSize=".8rem">
            Continuar
          </Typography>
        </Button>
      </form>
    </Grid>
  );
};
