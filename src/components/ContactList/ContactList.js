import { useDispatch, useSelector } from 'react-redux';
import { ContactListItem } from './ContactList.styled';
import { getFiltered } from '../../redux/selectors';
import { removeContacts } from 'redux/contactSlice';

export const ContactList = () => {
  const filteredContacts = useSelector(getFiltered);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {filteredContacts.length > 0 ? (
          filteredContacts.map(({ id, name, number }) => (
            <ContactListItem key={id}>
              <p>
                {name}: {number}
              </p>
              <button
                onClick={() => dispatch(removeContacts(id))}
                aria-label={`Delete ${name}`}
              >
                Delete
              </button>
            </ContactListItem>
          ))
        ) : (
          <p>Sorry! You have no contacts created.</p>
        )}
      </ul>
    </div>
  );
};
