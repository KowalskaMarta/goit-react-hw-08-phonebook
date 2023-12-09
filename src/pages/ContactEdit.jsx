import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateContact } from '#redux/contacts/operation';
import { createSelector } from '@reduxjs/toolkit';
import { useState } from 'react';

import { Button } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';



export const ContactEdit = () => {
  const selectContacts = state => state.contacts.items;

  const selectCurrentContact = createSelector(
    [selectContacts, (_, props) => props.id],
    (contacts, id) => {
      return contacts.find(contact => contact.id === id);
    }
  );

  const { id } = useParams();
  const currentContact = useSelector(state =>
    selectCurrentContact(state, { id })
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState(`${currentContact.name}`);
  const [number, setNumber] = useState(`${currentContact.number}`);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateContact({ name: name, number: number, id }));
    console.log(`Contact ${name} updated!`);
    navigate(-1);
  };

  let onInputChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        console.log(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };
  return (
    <Box
      width="650px"
      backgroundColor="silver"
      borderRadius="4px"
      position="absolute"
      left="50%"
      top="150px"
      transform="translate(-50%, 0)"
    >
    <form onSubmit={handleSubmit}>
        <FormControl
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
         
          autoComplete="off"
        >
          <FormLabel marginTop="10px">Change name:</FormLabel>
          <Input
           onChange={onInputChange}
                   value={name}
                   name="name"
                   placeholder="Enter contact`s name"
                   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
          <FormLabel>Change phone:</FormLabel>
          <Input
          onChange={onInputChange}
                  value={number}
                  type="tel"
                  name="number"
                  placeholder="Enter contact`s number"
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          />
         
          <Button
        type="submit"
        colorScheme="red"
        variant="solid"
        margin="20px"
      >
       UPDATE CONTACT
      </Button>
        </FormControl>
        </form>
    </Box>
  );
};


export { ContactEdit as default };
