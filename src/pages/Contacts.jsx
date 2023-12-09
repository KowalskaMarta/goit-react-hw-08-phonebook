import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContacts } from '#redux/contacts/operation';
import { ContactList } from '#components/ContactList/ContactList';
import { ContactForm } from '#components/ContactForm/ContactForm';
import { Filter } from '#components/Filter/Filter';

export const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export { Contacts as default };
