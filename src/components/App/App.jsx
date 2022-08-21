import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainWrapper from 'components/MainWrapper/MainWrapper.jsx';

const RegisterPage = lazy(() => import('../../pages/RegisterPage'));
const SignInPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainWrapper />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<SignInPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/register" />} />
      </Routes>
    </>
  );
};

export default App;
