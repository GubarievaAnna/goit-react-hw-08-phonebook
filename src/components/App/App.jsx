import { ToastContainer } from 'react-toastify';
import ContactForm from '../ContactForm/ContactForm.jsx';
import Filter from '../Filter/Filter.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import s from './App.module.css';

const App = () => {
  return (
    <div className={s.container}>
      <h1 className={s.titlePhonebook}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.titleContacts}>Contacts</h2>
      <Filter />
      <ContactList />
      <ToastContainer />
    </div>
  );
};

export default App;
