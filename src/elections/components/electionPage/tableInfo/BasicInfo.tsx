import { FC } from 'react';

import { Typography } from '@mui/material';

export const BasicInfo: FC = () => {
  return (
    <>
      <Typography variant="h5" component="h5" textAlign="center">
        INFORMACIÓN DEL LUGAR DE VOTACIÓN
      </Typography>
      <Typography textAlign="center">
        Por favor digite su número de identificación (cedula de ciudadanía) y su
        nombre, y dé clic en consultar.
      </Typography>
    </>
  );
};
