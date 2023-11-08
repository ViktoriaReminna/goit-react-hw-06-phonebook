import { useDispatch, useSelector } from 'react-redux';

import { InputFilter } from './ContactFilter.styled';

import { getFilter } from '../../redux/selectors';

import { filterContacts } from '../../redux/contactSlice';
import 'react-toastify/dist/ReactToastify.css';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  const filtered = useSelector(getFilter);

  const onChange = event => {
    const { value } = event.target;

    dispatch(filterContacts(value.trim()));
  };

  return (
    <InputFilter
      type="text"
      name="filter"
      placeholder="Find contacts by name"
      onChange={event => {
        onChange(event);
      }}
      value={filtered}
    />
  );
};
