import { FC, useMemo } from 'react';

import { useElection } from '../../hooks/useElection';
import { BasicInfo, ProgressTable, TableUser } from './tableInfo';

export const TableVoting: FC = () => {
  const { user, status } = useElection();

  const renderTableInfo = useMemo(() => {
    if (status === 'checking') {
      return <ProgressTable />;
    }
    if (!user) {
      return <BasicInfo />;
    }
    if (user) {
      return <TableUser user={user} />;
    }
  }, [user, status]);

  return <>{renderTableInfo}</>;
};
