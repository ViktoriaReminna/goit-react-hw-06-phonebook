import { InputFilter } from './ContactFilter.styled';

export const ContactFilter = ({ value, onChange }) => {
  return (
    <InputFilter
      type="text"
      value={value}
      onChange={evt => onChange(evt.target.value)}
      placeholder="Filter Contacts"
    />
  );
};
