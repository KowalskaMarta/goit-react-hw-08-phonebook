import { useDispatch } from 'react-redux';
import { logIn } from '#redux/auth/operation';
import { Button } from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';
import { Input } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
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
        <FormLabel marginTop="10px">Email</FormLabel>
        <Input
          required
          type="email"
          name="email"
          placeholder="Email"
          size="lg"
          width="500px"
        />
        <FormLabel>Password</FormLabel>
        <Input
          required
          type="password"
          name="password"
          placeholder="Password"
          size="lg"
          width="500px"
        />
        
        <Button
          type="submit"
          leftIcon={<LockIcon />}
          colorScheme="red"
          variant="solid"
          margin="20px"
        >
          Log In
        </Button>
      </FormControl>
      </form>
    </Box>
  );
};
