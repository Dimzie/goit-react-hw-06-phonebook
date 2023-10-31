export const getContacs = state => state.contacts.contactsList;

export const getFilter = state => state.filter;

export const getfilteredContacts = state => {
  const filter = state.filter;
  const allContacts = state.contacts.contactsList;
  const normilezedFilter = filter.toLowerCase();
  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normilezedFilter)
  );
};
