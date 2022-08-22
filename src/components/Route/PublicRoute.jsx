import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserToken } from 'redux/auth/authSelector';

const PublicRoute = ({ component: Component, nav, restricted = false }) => {
  const isAuth = useSelector(getUserToken);

  return isAuth && restricted ? <Navigate to={nav} /> : <Component />;
};

export default PublicRoute;

PublicRoute.propTypes = {
  component: PropTypes.object,
  nav: PropTypes.string.isRequired,
  restricted: PropTypes.bool,
};
