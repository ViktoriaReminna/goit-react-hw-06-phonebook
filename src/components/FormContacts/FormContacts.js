import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledField,
  Label,
  StyledError,
  Button,
} from './FormContacts.styled';

const schema = Yup.object().shape({
  name: Yup.string().min(1, 'Too Short!').required('Required'),
  number: Yup.string().min(6).max(10).required('Required'),
});
const initialValues = {
  name: '',
  number: '',
};
export const FormContacts = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ ...values, id: nanoid() });
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm autoComplete="off">
        <Label>
          Name
          <StyledField
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <StyledField
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></StyledField>
          <StyledError component="div" name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
