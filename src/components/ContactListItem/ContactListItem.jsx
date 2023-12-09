import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '#redux/contacts/operation';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { ListItem } from '@chakra-ui/react';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const editContact = id => {
    navigate(`${id}/edit`, { state: { from: location } });
  };

  return (
    <ListItem key={id}>
      <Box gap="10px">
        <Button
          leftIcon={<EditIcon />}
          colorScheme="red"
          variant="solid"
          margin="20px"
          id={id}
          onClick={() => editContact(id)}
        ></Button>
        <Button
          leftIcon={<DeleteIcon />}
          colorScheme="red"
          variant="solid"
          marginRight="20px"
          id={id}
          onClick={() => dispatch(deleteContact(id))}
        ></Button>
        {name} : {number}
      </Box>
    </ListItem>
  );
};
