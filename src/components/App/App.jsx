import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainWrapper from 'components/MainWrapper/MainWrapper.jsx';
import PrivateRoute from '../Route/PrivateRoute';
import PublicRoute from '../Route/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getUserToken } from 'redux/auth/authSelector';
import { getCurrentUser } from 'redux/auth/authOperations';

const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const SignInPage = lazy(() => import('../../pages/LoginPage'));
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
            path="register"
            element={
              <PublicRoute
                component={RegisterPage}
                nav="/contacts"
                restricted
              />
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute component={SignInPage} nav="/contacts" restricted />
            }
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={ContactsPage} nav="/login" />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default App;
