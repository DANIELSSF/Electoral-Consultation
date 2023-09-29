import { Grid, Typography } from '@mui/material';
import { InfoJudge, UsersTable } from '../../components';
import { useElection } from '../../hooks/useElection';
import { ElectoralLayout } from '../../layouts/electoralLayout';

export const JudgePage = () => {
  const { user } = useElection();
  return (
    <ElectoralLayout>
      <Grid
        container
        flexDirection="column"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="80vh"
      >
        <Grid
          item
          flexDirection="column"
          height="100%"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            variant="h1"
            id="tableTitle"
            component="div"
            marginBottom="10px"
            fontSize="1.6rem"
          >
            Información de Mesa de votación
          </Typography>

          {user && <InfoJudge user={user} />}
          {user && <UsersTable user={user} />}
        </Grid>
      </Grid>
    </ElectoralLayout>
  );
};
