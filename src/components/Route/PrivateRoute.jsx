import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getUserToken } from 'redux/auth/authSelector';

const PrivateRoute = ({ component: Component, nav, ...props }) => {
  const isAuth = useSelector(getUserToken);
  return isAuth ? <Component {...props} /> : <Navigate to={nav} />;
};
export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.object,
  nav: PropTypes.string.isRequired,
  props: PropTypes.object,
};
