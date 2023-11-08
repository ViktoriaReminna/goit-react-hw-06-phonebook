import { addContact } from '../../redux/contactSlice';
import { nanoid } from 'nanoid';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StyledForm, StyledField, Label, Button } from './FormContacts.styled';
import { ToastContainer } from 'react-toastify';

export const FormContacts = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const onInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const onSubmit = event => {
    event.preventDefault();
    const contact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    dispatch(addContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <StyledForm onSubmit={onSubmit}>
        <Label>
          Name
          <StyledField
            type="text"
            name="name"
            placeholder="Name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={onInputChange}
          />
        </Label>
        <Label>
          <StyledField
            type="tel"
            name="number"
            placeholder="Number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={onInputChange}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
      <ToastContainer />
    </div>
  );
};
