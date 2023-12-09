import { useSelector } from 'react-redux';
import { Text } from '@chakra-ui/react';
import { ContactListItem } from '#components/ContactListItem/ContactListItem';
import { Heading } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { List } from '@chakra-ui/react';
export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.filter.status);
  const error = useSelector(state => state.contacts.error);

  const filterContact = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filterValue?.toLowerCase())
  );

  return (
    <>
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
        <Heading as="h2" size="3xl" noOfLines={1}>
          Contacts
        </Heading>

        {filterContact?.length > 0 ? (
          <List spacing={3}>
            {filterContact?.map(({ id, name, number }) => (
              <ContactListItem key={id} id={id} name={name} number={number} />
            ))}
          </List>
        ) : (
          (error && (
            <Text fontSize="50px" color="tomato">
              Error: {error}
            </Text>
          )) || (
            <Text fontSize="50px" color="tomato">
              No contacts in phoneBook
            </Text>
          )
        )}
      </Box>
    </>
  );
};
