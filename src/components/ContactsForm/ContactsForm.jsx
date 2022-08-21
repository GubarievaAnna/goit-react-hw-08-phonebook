import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { addContacts } from 'redux/contacts/contactsOperations';
import { getContacts } from 'redux/contacts/contactsSelector';
import { toast } from 'react-toastify';
import s from './ContactsForm.module.css';

const ContactsForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(getContacts);
  const dispatch = useDispatch();

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onFormSubmit = e => {
    e.preventDefault();
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
        required
        id="name"
        label="Name"
        type="text"
        name="name"
        variant="standard"
        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={name}
        onChange={onInputChange}
      />
      <TextField
        margin="normal"
        fullWidth
        required
        id="number"
        label="Phone number"
        type="tel"
        name="number"
        variant="standard"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        value={number}
        onChange={onInputChange}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        ADD CONTACT
      </Button>
    </form>
  );
};

export default ContactsForm;
