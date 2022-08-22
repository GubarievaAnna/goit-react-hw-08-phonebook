import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainWrapper from 'components/MainWrapper/MainWrapper.jsx';
import PrivateRoute from '../Route/PrivateRoute';
import PublicRoute from '../Route/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getUserToken } from 'redux/auth/authSelector';
import { getCurrentUser } from 'redux/auth/authOperations';

const LoginPage = lazy(() => import('../../pages/LoginPage'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));

const App = () => {
  const token = useSelector(getUserToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(getCurrentUser(token));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<MainWrapper />}>
          <Route
            path="login"
            element={<PublicRoute component={LoginPage} restricted />}
          />
          <Route
            path="register"
            element={<PublicRoute component={RegisterPage} restricted />}
          />
          <Route
            path="contacts"
            element={<PrivateRoute component={ContactsPage} />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
