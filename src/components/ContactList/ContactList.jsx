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
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  console.log(isLoading);
  return (
    <>
      <ul className={s.list}>
        {contacts.map(({ id, name, phone }) => (
          <li key={id} className={s.item}>
            <p className={s.paragraph}>
              <span className={s.name}>{name}</span>: {phone}
            </p>
            <button
              className={s.button}
              onClick={() => dispatch(removeContacts(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {isLoading && (
        <div className={s.spinner}>
          <ThreeDots
            color="#5d8aa8"
            height={50}
            width={50}
            ariaLabel="three-dots-loading"
          />
        </div>
      )}
    </>
  );
};

export default ContactList;
