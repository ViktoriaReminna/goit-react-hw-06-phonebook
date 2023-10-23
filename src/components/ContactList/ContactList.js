import { ContactListItem } from './ContactList.styled';

export const ContactList = ({ contacts, filter, onDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteClick = contactId => {
    onDelete(contactId);
  };

  return (
    <div>
      <ul>
        {filteredContacts.map(contact => (
          <ContactListItem key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => handleDeleteClick(contact.id)}>
              Delete
            </button>
          </ContactListItem>
        ))}
      </ul>
    </div>
  );
};
