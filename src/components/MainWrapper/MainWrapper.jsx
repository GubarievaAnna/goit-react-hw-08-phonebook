import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';
import s from './MainWrapper.module.css';

function MainWrapper() {
  const location = useLocation();

  return (
    <>
      <main>
        <section>
          <div
            className={
              location.pathname === '/contacts'
                ? s.containerForContacts
                : s.container
            }
          >
            {(location.pathname === '/register' ||
              location.pathname === '/login') && (
              <h1 className={s.title}>Phonebook</h1>
            )}
            {location.pathname === '/register' && (
              <p className={s.text}>
                Hello, dear guest! Please, register to start use our platform.
                We hope this phonebook will be useful for you.
              </p>
            )}
            {location.pathname === '/login' && (
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
