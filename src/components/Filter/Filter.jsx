import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/contacts/contactsSelector';
import { filterContacts } from '../../redux/contacts/contactsSlice';
import s from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.filter}>
      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          className={s.input}
          value={filter}
          onChange={e => dispatch(filterContacts(e.target.value))}
          required
        />
      </label>
    </div>
  );
};

export default Filter;
