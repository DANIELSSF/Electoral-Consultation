import { AppBar, Toolbar, Grid, Typography } from '@mui/material';
import { AccountMenu } from './AccountMenu';

export const Navbar = () => {
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
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: 'flex', sm: 'flex' } }}
          >
            Elecciones Colombia 2023
          </Typography>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="end"
          alignItems="center"
        >
          <AccountMenu />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
