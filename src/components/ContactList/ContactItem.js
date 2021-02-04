import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions';
import { getFilterContacts } from '../../redux/selectors';
import s from './ContactListItem.module.css';

const ContactItem = () => {
  const contacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();

  return contacts.map(({ id, name, phone }) => {
    return (
      <li key={id} className={s.contactItem}>
        {name}: {phone}{' '}
        <button
          className={s.deleteButton}
          type="button"
          onClick={() => dispatch(actions.deleteContact(id))}
        >
          Delete
        </button>
      </li>
    );
  });
};

export default ContactItem;
