// import { Component } from 'react';
// import { FormContacts } from './FormContacts/FormContacts';
// import { ContactList } from './ContactList/ContactList';
// import { ContactFilter } from './ContactFilter/ContactFilter';
// import { GlobalStyle } from './GlobalStyle';
// import { Title1, Title2, Title3 } from './App.styled';

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     console.log('componentDidMount');
//     const savedContacts = localStorage.getItem('contacts');
//     if (savedContacts !== null) {
//       this.setState({ contacts: JSON.parse(savedContacts) });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log('this.state:', this.state.contacts);
//     console.log('prevState', prevState.contacts);
//     console.log(prevState.contacts === this.state.contacts);

//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   handleAddContact = newContact => {
//     const { contacts } = this.state;
//     if (contacts.some(contact => contact.name === newContact.name)) {
//       alert(`${newContact.name} вже є в телефонній книзі!`);
//       return;
//     }
//     this.setState(prevState => ({
//       contacts: [...prevState.contacts, newContact],
//     }));
//   };
//   changeContactFilter = newFilter => {
//     this.setState({
//       filter: newFilter,
//     });
//   };
//   handleDelete = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     return (
//       <>
//         <Title1>Phonebook</Title1>
//         <FormContacts onAddContact={this.handleAddContact} />
//         <Title2>Contacts</Title2>
//         <Title3>Find contacts by name</Title3>
//         <ContactFilter value={filter} onChange={this.changeContactFilter} />
//         <ContactList
//           contacts={contacts}
//           filter={filter}
//           onDelete={this.handleDelete}
//         />
//         <GlobalStyle />
//       </>
//     );
//   }
// }
