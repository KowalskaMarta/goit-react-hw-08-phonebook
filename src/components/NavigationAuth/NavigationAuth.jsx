import { NavLink } from 'react-router-dom';
import { Flex } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react';

export const NavigationAuth = () => {
  return (
    <Flex gap={'25'} pos="absolute" right="32">

      <Box as={NavLink} to={'/register'} fontSize={'xl'}>Register</Box>
      <Box as={NavLink} to={'/login'} fontSize={'xl'}>Log In</Box>
      

    </Flex>
  );
};
