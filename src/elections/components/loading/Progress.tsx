import { CircularProgress, Grid } from '@mui/material';

export const Progress = () => {
  return (
    <>
      <Grid display="flex" justifyContent="center" alignItems="center" sx={{height:'90vh'}}>
        <CircularProgress color="secondary" />
      </Grid>
    </>
  );
};
