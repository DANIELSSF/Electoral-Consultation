import { FC } from 'react';

import { Box, Step, StepLabel, Stepper } from '@mui/material';

interface initialProps {
  progressNumber: number;
}

const steps = [
  'Agrega Información',
  'Ingresa el código de verificación',
  'Establecer Contraseña'
];

export const StepsJudge: FC<initialProps> = ({ progressNumber }) => {
  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={progressNumber} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </>
  );
};
