import { Box } from '@mui/material';
import { Navbar } from '../ui/Navbar';

type ElectoralLayoutProps = {
  children: React.ReactNode;
};

export const ElectoralLayout: React.FC<ElectoralLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Box
        component="main"
        sx={{ flexGrow: 1, paddingTop: 10, paddingX: 2 }}
      >
        {children}
      </Box>
    </Box>
  );
};
