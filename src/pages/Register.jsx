import { Helmet } from 'react-helmet';
import { RegisterForm } from '#components/RegisterForm/RegisterForm';
import { Text } from '@chakra-ui/react'

export const Register = () => {
  return (
    <Text >
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Text>
  );
};

export { Register as default };
