import { FC } from 'react';

import { CircularProgress, Grid } from '@mui/material';

export const ProgressTable: FC = () => {
  return (
    <>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ height: '100%' }}
      >
        <CircularProgress color="secondary" />
      </Grid>
    </>
  );
};
