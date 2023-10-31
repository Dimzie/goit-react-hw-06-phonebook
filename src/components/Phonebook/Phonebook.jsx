import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

function Phonebook({ onAddContact, filteredContacts }) {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    const getName = e.target.elements.name.value;
    const getNumber = e.target.elements.number.value;

    if (filteredContacts.find(contact => contact.number === getNumber)) {
      alert(`Номер "${getNumber}" уже есть в книге контактов!`);
    } else {
      dispatch(addContact(getName, getNumber));
    }
  };

  return (
    <>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input type="text" name="name" required />
        <p>Number</p>
        <input type="tel" name="number" required />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
}

export default Phonebook;
