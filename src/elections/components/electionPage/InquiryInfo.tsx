import {FC} from 'react';

import { Box, Divider, Grid, Typography } from '@mui/material';

export const InquiryInfo:FC = () => {
  return (
    <>
      <Grid>
        <Box>
          <Typography variant="h5" component="div">
            CONSULTAR LUGAR DE VOTACIÓN
          </Typography>
        </Box>
        <Divider />
      </Grid>

      <Grid>
        <Box
          sx={{
            margin: '20px 10px',
            padding: '10px',
            backgroundColor: '#fcf8e3',
            borderRadius: '10px',
          }}
        >
          <strong>
            Señor(a) ciudadano(a) si usted realizó un trámite de inscripción
            durante el periodo actual (29 de octubre 2022 al 29 de agosto de
            2023), este cambio se verá reflejado en la página web de la entidad
            una vez sea publicado el Censo Electoral definitivo para las
            Elecciones de Autoridades Territoriales 2023, es decir a partir del
            29 de septiembre del año en curso.
          </strong>
        </Box>
      </Grid>
    </>
  );
};
