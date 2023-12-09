import { useAuth } from '#hook/useAuth';
import { NavLink } from 'react-router-dom';
import { Flex } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { NavigationAuth } from '#components/NavigationAuth/NavigationAuth';
import { NavigationUserMenu } from '#components/NavigationUserMenu/NavigationUserMenu';

export const NavigationBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="header" w={'100%'} h={'90px'} backgroundColor={'red'}>
      <Flex as="nav" ml="10" pt={'25px'} gap={'10'}>
        <Box as={NavLink} to={'/'} fontSize={'3xl'}>
          Home
        </Box>

        {isLoggedIn && (
          <Box as={NavLink} to={'/contacts'} fontSize={'3xl'}>
            Contacts
          </Box>
        )}
        {isLoggedIn ? <NavigationUserMenu /> : <NavigationAuth />}
      </Flex>
    </Box>
  );
};
