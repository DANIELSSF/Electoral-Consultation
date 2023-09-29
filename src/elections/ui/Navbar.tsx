import { FC } from 'react';
import { AppBar, Toolbar, Grid, Typography, Button } from '@mui/material';
import { AccountMenu } from './AccountMenu';

interface InitialProps {
  status:
    | 'authenticated'
    | 'not-authenticated'
    | 'jurado'
    | 'votante'
    | 'checking';

  startFormLogin: Function;
  startHome: Function;
}

export const Navbar: FC<InitialProps> = ({
  status,
  startFormLogin,
  startHome,
}) => {

  const handleBackHome = () => {
    if (status === 'authenticated') return;

    startHome();
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="start"
          alignItems="center"
        >
          <Button onClick={handleBackHome} color="inherit">
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ display: { xs: 'flex', sm: 'flex' } }}
            >
              Elecciones Colombia 2023
            </Typography>
          </Button>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="end"
          alignItems="center"
        >
          <AccountMenu status={status} startFormLogin={startFormLogin} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
