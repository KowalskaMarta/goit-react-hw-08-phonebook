import { useDispatch } from 'react-redux';
import { register } from '#redux/auth/operation';

import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';
import { FormControl, FormLabel } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
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
          <FormLabel marginTop="10px">UserName</FormLabel>
          <Input
            required
            type="text"
            name="name"
            placeholder="Username"
            size="lg"
            width="500px"
          />
          <FormLabel>Email address</FormLabel>
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
            leftIcon={<ChevronRightIcon />}
            colorScheme="red"
            variant="solid"
            margin="20px"
          >
            Register
          </Button>
        </FormControl>

        {/* <label>
        <input type="email" name="email" placeholder="Email" required />
      </label> */}
        <></>

        {/* <label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </label> */}

        <></>
        {/* <button type="submit">Register</button> */}
        {/* </form> */}
      </form>
    </Box>
  );
};
