import { FC, useMemo, useState } from 'react';

import { ElectoralLayout } from '../layouts/electoralLayout';
import {
  AddPassword,
  RegisterJudge,
  StepsJudge,
  VerifyCode,
} from '../components';
import { useLocation } from 'react-router-dom';

export const RegisterJudgePage: FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [progressNumber, setProgressNumber] = useState<number>(0);

  const component = useMemo(() => {
    if (currentPath === '/judge') {
      setProgressNumber(0);
      return <RegisterJudge />;
    }
    if (currentPath === '/judge/verify-code') {
      setProgressNumber(1);
      return <VerifyCode />;
    }

    if (currentPath === '/judge/password') {
      setProgressNumber(2);
      return <AddPassword />;
    }
  }, [currentPath]);

  return (
    <ElectoralLayout>
      <StepsJudge progressNumber={progressNumber} />
      {component}
    </ElectoralLayout>
  );
};
