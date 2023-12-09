import { Box, Heading, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '#hook/useAuth';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box
      textAlign="center"
      maxW="600px"
      m="auto"
      mt="20"
      border="2px solid red"
      borderRadius="40px"
      p={'50px'}
      bacg={'silver'}
      boxShadow={'5px 8px #cccdcf'}
    >
      <Heading as="h1" mb="4">
        Welcome to Phonebook
      </Heading>
      <Text fontSize="3xl" mb="6">
        Your phone book is always where you are. Log in and use it wherever you
        want!
      </Text>

      {!isLoggedIn && (
        <Text fontSize="2xl">
          To use the application, you need to{' '}
          <NavLink to={'/register'} as="b">
            Sign up
          </NavLink>{' '}
          or{' '}
          <NavLink to={'/login'} as="b">
            Sign in
          </NavLink>
        </Text>
      )}
    </Box>
  );
};

export default Home;
