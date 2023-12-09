import { Navigate } from 'react-router-dom';
import { useAuth } from '#hook/useAuth';

export const PrivateRoute = ({ element: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
