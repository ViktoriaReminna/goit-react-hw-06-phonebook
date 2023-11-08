import { FormContacts } from './FormContacts/FormContacts';

import { ContactList } from './ContactList/ContactList';

import { ContactFilter } from './ContactFilter/ContactFilter';

import { GlobalStyle } from './GlobalStyle';

import { Title1, Title2, Title3 } from './App.styled';

export function App() {
  return (
    <>
      <Title1>Phonebook</Title1>
      <FormContacts />
      <Title2>Contacts</Title2>
      <Title3>Find contacts by name</Title3>
      <ContactFilter />
      <ContactList />
      <GlobalStyle />
    </>
  );
}
