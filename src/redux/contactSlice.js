import { createSlice } from '@reduxjs/toolkit';
import { data } from './data';
import { toast } from 'react-toastify';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [...data], filtered: '' },
  reducers: {
    addContact: (state, action) => {
      const newContact = action.payload;

      if (state.contacts.some(contact => contact.name === newContact.name)) {
        
        toast.error(`${newContact.name} is already in contacts.`);
        return;
      }

      state.contacts.push(newContact);
    },
    filterContacts: (state, action) => {
      state.filtered = action.payload;
    },
    removeContacts: (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});
export const contactsReducer = contactsSlice.reducer;

export const { addContact, filterContacts, removeContacts } =
  contactsSlice.actions;
