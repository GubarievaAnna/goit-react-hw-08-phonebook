import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThreeDots } from 'react-loader-spinner';
import {
  getFilteredContacts,
  getIsLoading,
} from 'redux/contacts/contactsSelector';
import {
  removeContacts,
  getContacts,
} from '../../redux/contacts/contactsOperations';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  // const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getContacts());
  // }, [dispatch]);

  return (
    <>
      <ul className={s.list}>
        {/* {contacts.map(({ id, name, phone }) => (
          <li key={id} className={s.item}>
            <p className={s.paragraph}>
              <span className={s.name}>{name}</span>: {phone}
            </p>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </li>
        ))} */}
      </ul>
      {/* {isLoading && (
        <div className={s.spinner}>
          <ThreeDots
            color="#5d8aa8"
            height={50}
            width={50}
            ariaLabel="three-dots-loading"
          />
        </div>
      )} */}
    </>
  );
};

export default ContactList;
