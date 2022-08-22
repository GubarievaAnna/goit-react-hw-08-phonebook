import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';
import s from './MainWrapper.module.css';
import { getUserToken } from 'redux/auth/authSelector';

function MainWrapper() {
  const isAuth = useSelector(getUserToken);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      isAuth ? navigate('/contacts') : navigate('/login');
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <main>
        <section>
          <div
            className={
              pathname === '/contacts' ? s.containerForContacts : s.container
            }
          >
            {(pathname === '/register' || pathname === '/login') && (
              <h1 className={s.title}>Phonebook</h1>
            )}
            {pathname === '/register' && (
              <p className={s.text}>
                Hello, dear guest! Please, register to start use our platform.
                We hope this phonebook will be useful for you.
              </p>
            )}
            {pathname === '/login' && (
              <p className={s.text}>
                Hello, dear guest! Please, sign in to access your personal
                account.
              </p>
            )}
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </section>
      </main>
      <ToastContainer />
    </>
  );
}

export default MainWrapper;
