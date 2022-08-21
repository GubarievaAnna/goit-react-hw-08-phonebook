import { useSelector } from 'react-redux';
import { AiOutlineLogout } from 'react-icons/ai';
import { getUserEmail } from 'redux/auth/authSelector';
import { Button } from '@mui/material';
import s from './UserMenu.module.css';

function UserMenu() {
  const email = useSelector(getUserEmail);
  return (
    <div className={s.infoHeader}>
      <p className={s.email}>{email}</p>
      <Button variant="contained" className={s.button}>
        LOG OUT &nbsp;
        <AiOutlineLogout />
      </Button>
    </div>
  );
}

export default UserMenu;
