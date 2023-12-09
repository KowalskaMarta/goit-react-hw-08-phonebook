import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '#redux/contacts/operation';
import { PiAddressBook } from "react-icons/pi";
import { Button } from '@chakra-ui/react';
import { AddIcon, PhoneIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, Box } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const id = nanoid();
    let exist = false;

    contacts.forEach(contact => {
      if (contact.name.toLowerCase().trim() === name.toLowerCase().trim()) {
        alert(`${name} is already in contacts`);
        exist = true;
      }
    });

    if (!exist) {
      dispatch(addContact({ id, name, number }));
    }
    e.target.reset();
  };

  return (
    <Box
      backgroundColor="silver"
      borderRadius="4px"
      display={'flex'}
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      pt={'20px'}
      pb={'20px'}
    >
      <Heading as="h3" size="3xl" noOfLines={1}>
        Phonebook
      </Heading>

      <form onSubmit={handleSubmit}>
        <FormControl display={'flex'} flexDirection={'column'}>
        <FormLabel marginTop="10px">Name</FormLabel>

        <InputGroup>
            <InputLeftElement pointerEvents="none" children={<PiAddressBook />} />
            <Input
              name="name"
              type="text"
              variant="outline"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              width={'300px'}
            />
          </InputGroup>
        <FormLabel marginTop="10px">Number</FormLabel>

        <InputGroup>
            <InputLeftElement pointerEvents="none" children={<PhoneIcon />} />
            <Input
              name="number"
              type="tel"
              variant="outline"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              width={'300px'}
            />
          </InputGroup>

        <Button
          type="submit"
          leftIcon={<AddIcon />}
          colorScheme="red"
          variant="solid"
          margin="20px"
        >
          Add contact
        </Button>
        </FormControl>
      </form>
    </Box>
  );
};
