import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { addContacts } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactsSelector';
import s from './ContactsForm.module.css';

const ContactsForm = () => {
  const items = useSelector(getContacts);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(15, 'Too Long!')
        .required('This is a required field'),
      number: Yup.string().required('This is a required field'),
    }),
  });

  const reset = () => {
    formik.values.name = '';
    formik.values.number = '';
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const { name, number } = formik.values;
    if (name === '' || number === '') {
      toast.error('All fields must be completed', {
        autoClose: 2000,
        theme: 'colored',
      });
      return;
    }
    const repeatOfNames = items.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (repeatOfNames) {
      toast.error(`${name} is already in contacts.`, {
        autoClose: 2000,
        theme: 'colored',
      });
      return;
    }
    const newContact = { name, number };
    dispatch(addContacts(newContact));
    reset();
  };

  return (
    <form onSubmit={onFormSubmit} className={s.form}>
      <TextField
        margin="normal"
        fullWidth
        id="name"
        label="Name"
        type="text"
        name="name"
        variant="standard"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <p className={s.error}>
        {formik.touched.name && formik.errors.name && formik.errors.name}
      </p>
      <TextField
        margin="normal"
        fullWidth
        id="number"
        label="Phone number"
        type="tel"
        name="number"
        variant="standard"
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        value={formik.values.number}
      />
      <p className={s.error}>
        {formik.touched.number && formik.errors.number && formik.errors.number}
      </p>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        ADD CONTACT
      </Button>
    </form>
  );
};

export default ContactsForm;
