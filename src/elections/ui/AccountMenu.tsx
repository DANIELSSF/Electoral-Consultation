import { useState, MouseEvent, FC } from 'react';

import {
  Box,
  Menu,
  MenuItem,
  ListItemIcon,
  IconButton,
  Tooltip,
  Button,
  Typography,
} from '@mui/material';
import { Login, Menu as MenuIcon } from '@mui/icons-material';

interface InitialProps {
  status:
    | 'authenticated'
    | 'not-authenticated'
    | 'jurado'
    | 'votante'
    | 'checking';
  startFormLogin: Function;
}

export const AccountMenu: FC<InitialProps> = ({ status, startFormLogin }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const authLogin = async () => {
    if (status === 'authenticated') return;

    await startFormLogin();
  };
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <MenuIcon sx={{ width: 32, height: 32, color: 'white' }}></MenuIcon>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Button onClick={authLogin} style={{ textDecoration: 'none' }}>
          <MenuItem>
            <ListItemIcon>
              <Login />
            </ListItemIcon>
            <Typography color="#000">
              {status === 'authenticated' ? 'Cerrar Sesión' : 'Iniciar Sesión'}
            </Typography>
          </MenuItem>
        </Button>
      </Menu>
    </>
  );
};
