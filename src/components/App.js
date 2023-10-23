import { FormContacts } from './FormContacts/FormContacts';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { GlobalStyle } from './GlobalStyle';
import { Title1, Title2, Title3 } from './App.styled';
import { useEffect, useState } from 'react';
import initialContacts from '../data.json';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
    );
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    try {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.error('Помилка при збереженні даних в localStorage:', error);
    }
  }, [contacts]);

  const handleAddContact = newContact => {
    if (contacts.some(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} вже є в телефонній книзі!`);
      return;
    }
    setContacts(prevState => [...prevState, newContact]);
  };

  const changeContactFilter = newContact => {
    setFilter(newContact);
  };

  const handleDelete = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <>
      <Title1>Phonebook</Title1>
      <FormContacts onAddContact={handleAddContact} />
      <Title2>Contacts</Title2>
      <Title3>Find contacts by name</Title3>
      <ContactFilter value={filter} onChange={changeContactFilter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDelete={handleDelete}
      />
      <GlobalStyle />
    </>
  );
}
