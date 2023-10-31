import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span>{name}</span>
      <span>{number}</span>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
