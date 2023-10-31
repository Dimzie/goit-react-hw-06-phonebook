import Phonebook from 'components/Phonebook/Phonebook';
import ContactsList from './ContactsList/ContactsList';
import { useSelector, useDispatch } from 'react-redux';
import { filterInput } from 'redux/filterSlice';
import { getfilteredContacts } from 'redux/selectors';

export function App() {
  const filteredContacts = useSelector(getfilteredContacts);
  const dispatch = useDispatch();
  const filterChange = e => {
    dispatch(filterInput(e.target.value));
  };

  return (
    <>
      <Phonebook filteredContacts={filteredContacts} />
      {filteredContacts.length === 0 ? (
        <p>Your contact book is empty!</p>
      ) : (
        <>
          <h2>Search for contact:</h2>
          <input onChange={filterChange} type="text" name="filter" />
          <ContactsList filteredContacts={filteredContacts} />
        </>
      )}
    </>
  );
}

export default App;
