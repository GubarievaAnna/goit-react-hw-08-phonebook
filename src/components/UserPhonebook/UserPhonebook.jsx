import ContactList from 'components/ContactList/ContactList';
import ContactsForm from 'components/ContactsForm/ContactsForm';
import Filter from 'components/Filter/Filter';
import s from './UserPhonebook.module.css';

function UserPhonebook() {
  return (
    <div className={s.phonebook}>
      <div className={s.input}>
        <ContactsForm />
        <Filter />
      </div>
      <ContactList />
    </div>
  );
}

export default UserPhonebook;
