import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, removeContacts } from 'redux/contacts/contactsOperations';
import { getUserToken } from 'redux/auth/authSelector';
import {
  getFilteredContacts,
  getIsLoading,
} from 'redux/contacts/contactsSelector';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Loader from 'components/Loader/Loader';
import s from './ContactList.module.css';

const ContactList = () => {
  const isLoading = useSelector(getIsLoading);
  const contacts = useSelector(getFilteredContacts);
  const token = useSelector(getUserToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(getContacts(token));
  }, [token, dispatch]);

  return (
    <>
      <div>
        <ul className={s.list}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={s.item}>
              <p className={s.paragraph}>
                <span className={s.name}>{name}</span>: {number}
              </p>
              <Button
                variant="outlined"
                startIcon={<DeleteIcon />}
                className={s.button}
                onClick={() => dispatch(removeContacts(id))}
              >
                Delete
              </Button>
            </li>
          ))}
        </ul>
        {isLoading && <Loader />}
      </div>
    </>
  );
};

export default ContactList;
