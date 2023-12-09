import { useDispatch } from 'react-redux';
import { logOut } from '#redux/auth/operation';
import { useAuth } from '#hook/useAuth';
import { Heading } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { UnlockIcon } from '@chakra-ui/icons';

export const NavigationUserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box align="center" pos="absolute" right="24" gap={'50'}  >
      <Heading as="h4" size="xl" noOfLines={1}>
        Welcome, {user.name}
      </Heading>

      <Button type="button" onClick={() => dispatch(logOut())} colorScheme='gray' leftIcon={<UnlockIcon />}>Logout</Button>
    </Box>
  );
};
