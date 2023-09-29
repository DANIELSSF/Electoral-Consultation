import { Box } from '@mui/material';
import { Navbar } from '../ui/Navbar';
import { useElection } from '../hooks/useElection';

type ElectoralLayoutProps = {
  children: React.ReactNode;
};

export const ElectoralLayout: React.FC<ElectoralLayoutProps> = ({
  children,
}) => {
  const { status, startFormLogin, startHome } = useElection();
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar
        status={status}
        startFormLogin={startFormLogin}
        startHome={startHome}
      />
      <Box component="main" sx={{ flexGrow: 1, paddingTop: 10, paddingX: 2 }}>
        {children}
      </Box>
    </Box>
  );
};
