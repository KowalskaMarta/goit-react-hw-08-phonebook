import { Helmet } from 'react-helmet';
import { LoginForm } from '#components/LoginForm/LoginForm';
import { Text } from '@chakra-ui/react'
export const Login = () => {
  return (
    <Text>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Text>
  );
};

export { Login as default };
