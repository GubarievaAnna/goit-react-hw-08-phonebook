import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineLogout } from 'react-icons/ai';
import { getUserEmail } from 'redux/auth/authSelector';
import { Button } from '@mui/material';
import s from './UserMenu.module.css';
import { logOutUser } from 'redux/auth/authOperations';

function UserMenu() {
  const email = useSelector(getUserEmail);
  const dispatch = useDispatch();

  return (
    <div className={s.infoHeader}>
      <p className={s.email}>{email}</p>
      <Button
        variant="contained"
        className={s.button}
        onClick={() => dispatch(logOutUser())}
      >
        LOG OUT &nbsp;
        <AiOutlineLogout />
      </Button>
    </div>
  );
}

export default UserMenu;
