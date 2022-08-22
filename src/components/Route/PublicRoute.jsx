import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserToken } from 'redux/auth/authSelector';

const PublicRoute = ({ component: Component, restricted = false }) => {
  const isAuth = useSelector(getUserToken);

  return isAuth && restricted ? <Navigate to="/contacts" /> : <Component />;
};

export default PublicRoute;

PublicRoute.propTypes = {
  component: PropTypes.object,
  restricted: PropTypes.bool,
};
