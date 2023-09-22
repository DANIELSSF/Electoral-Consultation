import { useDispatch, useSelector } from 'react-redux';
import { IVerify, IVotacion, ITableInformation } from '../interfaces';
import { apiElections } from '../api/apiElections';
import {
  isErrorMessage,
  onJudge,
  onLoading,
  onLogin,
  onLogout,
  onVisit,
  onVoting,
} from '../../store/votacion/votacionSlice';

type AppState = {
  votacion: IVotacion;
};

export const useElection = () => {
  const { errorMessage, user, status, isLoading } = useSelector<
    AppState,
    IVotacion
  >((state) => state.votacion);
  const dispatch = useDispatch();

  const startSearchPollingTable = async (name: string, cedula: string) => {
    dispatch(onLoading());

    const userData = { name: name.toLowerCase(), cedula };
    console.log(userData);

    try {
      const { data } = await apiElections.get<IVerify[]>(
        '/user-verify'
        //? userData
      );

      const user = { ...data[0] };

      if (!user) {
        dispatch(isErrorMessage('No se encontró el usuario'));
        return;
      }
      if (!user.rol) {
        dispatch(isErrorMessage('No se encontró el rol del usuario'));
        return;
      }

      switch (user.rol) {
        case 'votante':
          dispatch(onVoting(user));
          return;
        case 'jurado':
          dispatch(onJudge(user));
          return;
        case 'not-authenticated':
          dispatch(onLogout());
          return;
        default:
          dispatch(isErrorMessage('El rol asignado no es valido'));
          return;
      }
    } catch (error) {
      dispatch(isErrorMessage(error));
    }
  };

  // Todo: terminar esto, agregar el insertar contraseña, hacer bd de login
  const startRegisterEmailPhone = async (email: string, cellphone: string) => {
    console.log(email, cellphone);
  };

  const startVerificationCode = async (code: string) => {
    console.log(code);
    try {
      const { data } = await apiElections.get('/code-verification');
      return data[0].message ? true : false;
    } catch (error) {
      dispatch(isErrorMessage('Vuelve a intentarlo'));
    }
  };

  const startLoginJudge = async (data: { email: string; password: string }) => {
    dispatch(onLoading());

    // try {
    //   const { data } = await apiElections.get<ITableInformation[]>(
    //     '/login'
    //     //! body
    //   );

    //   console.log({ data });
    //   dispatch(onLogin(data[0]));
    // } catch (error) {}
  };

  const startSetPassword = async (password: string) => {
    dispatch(onLoading());

    try {
      // const {data} =await apiElections.get('/register');
      //? mandar usuario con la password
      dispatch(onLogout());
    } catch (error) {}
  };

  const startCheckStatus = () => {
    if (isLoading === false) {
      return;
    }
    dispatch(onVisit());
  };

  return {
    // Properties
    errorMessage,
    user,
    status,
    isLoading,

    // Methods
    startCheckStatus,
    startLoginJudge,
    startRegisterEmailPhone,
    startSearchPollingTable,
    startSetPassword,
    startVerificationCode,
  };
};
