import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { getUserToken } from 'redux/auth/authSelector';

const PublicRoute = ({
  component: Component,
  nav,
  restricted = false,
  ...props
}) => {
  const isAuth = useSelector(getUserToken);

  return isAuth && restricted ? (
    <Navigate to={nav} />
  ) : (
    <Component {...props} />
  );
};

export default PublicRoute;

PublicRoute.propTypes = {
  component: PropTypes.object,
  nav: PropTypes.string.isRequired,
  props: PropTypes.object,
  restricted: PropTypes.bool,
};
