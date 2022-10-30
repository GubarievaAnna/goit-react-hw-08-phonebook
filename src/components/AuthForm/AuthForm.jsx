import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { registerUser, loginUser } from '../../redux/auth/authOperations';
import { changeError } from 'redux/auth/authSlice';
import { getAutError } from 'redux/auth/authSelector';
import s from './AuthForm.module.css';

const AuthForm = ({ title }) => {
  const error = useSelector(getAutError);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(15, 'Too Long!')
        .required('This is a required field'),
      email: Yup.string()
        .email('Invalid email address')
        .required('This is a required field'),
      password: Yup.string()
        .min(8, 'Password must include more tnan 16 characters')
        .max(16, 'Password must be less tnan 16 characters')
        .required('This is a required field'),
    }),
  });

  useEffect(() => {
    if (!error) return;
    toast.error('You have entered invalid data. Please try again.', {
      autoClose: 2000,
      theme: 'colored',
    });
  }, [error]);

  const onLinkClick = e => {
    if (error) {
      dispatch(changeError());
    }
  };

  const reset = () => {
    formik.values.name = '';
    formik.values.email = '';
    formik.values.password = '';
  };

  const onFormSubmit = event => {
    const { name, email, password } = formik.values;
    event.preventDefault();
    if (
      (title === 'Register' && name === '') ||
      password === '' ||
      email === ''
    ) {
      toast.error('All fields must be completed', {
        autoClose: 2000,
        theme: 'colored',
      });
      return;
    }
    if (title === 'Register') {
      const userRegisterData = { name, email, password };
      dispatch(registerUser(userRegisterData));
      reset();
      return;
    }
    const userLoginData = { email, password };
    dispatch(loginUser(userLoginData));
    reset();
  };

  return (
    <>
      <Avatar
        sx={{ bgcolor: '#13b3ff', marginLeft: 'auto', marginRight: 'auto' }}
      >
        <LockOutlinedIcon />
      </Avatar>
      <h2 className={s.title}>{title}</h2>
      <form onSubmit={onFormSubmit}>
        {title === 'Register' && (
          <>
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Name"
              name="name"
              type="text"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            <p className={s.error}>
              {formik.touched.name && formik.errors.name && formik.errors.name}
            </p>
          </>
        )}
        <TextField
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <p className={s.error}>
          {formik.touched.email && formik.errors.email && formik.errors.email}
        </p>
        <TextField
          margin="normal"
          fullWidth
          id="password"
          label="Password"
          name="password"
          type="password"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <p className={s.error}>
          {formik.touched.password &&
            formik.errors.password &&
            formik.errors.password}
        </p>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {title}
        </Button>
        <Link
          to={title === 'Register' ? '/login' : '/register'}
          className={s.link}
          onClick={onLinkClick}
        >
          {title === 'Register'
            ? 'Do you have already account? Sign In'
            : "Don't have an account? Sign Up"}
        </Link>
      </form>
    </>
  );
};

AuthForm.propTypes = {
  title: PropTypes.string,
};

export default AuthForm;
