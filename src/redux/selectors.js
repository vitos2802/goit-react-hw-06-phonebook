const getContacts = state => state.contacts.contacts;
const getFilter = state => state.contacts.filter;

const getFilterContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

export { getContacts, getFilter, getFilterContacts };
