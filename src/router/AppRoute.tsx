import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ElectionPage } from '../elections/page/ElectionPage';
import { useElection } from '../elections/hooks/useElection';
import { Progress } from '../elections/components';
import { RegisterJudgePage } from '../elections/page/RegisterJudgePage';
import { LoginPage } from '../elections/page/login/LoginPage';
import { JudgePage } from '../elections/page/judge/JudgePage';

export const AppRoute = () => {
  const { startCheckStatus, isLoading, status } = useElection();

  useEffect(() => {
    startCheckStatus();
  }, []);

  if (isLoading) {
    return <Progress />;
  }

  let routeElement;

  switch (status) {
    case 'votante':
      routeElement = (
        <Routes>
          <Route path="/" element={<ElectionPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      );
      break;

    case 'jurado':
      routeElement = (
        <Routes>
          <Route path="/judge" element={<RegisterJudgePage />} />
          <Route path="/judge/verify-code" element={<RegisterJudgePage />} />
          <Route path="/judge/password" element={<RegisterJudgePage />} />
          <Route path="/*" element={<Navigate to="/judge" />} />
        </Routes>
      );
      break;

    case 'not-authenticated':
      routeElement = (
        <Routes>
          <Route path="/auth/login/*" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
      );
      break;

      case 'authenticated':
      routeElement = (
        <Routes>
          <Route path="/" element={<JudgePage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      );
      break;

    default:
      routeElement = <Navigate to="/" />;
  }

  return <>{routeElement}</>;
};
