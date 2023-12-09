import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '#redux/auth/operation';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '#hook/useAuth';
import { Layout } from '#components/Layout/Layout';
import { PrivateRoute } from '#components/PrivateRoute';
import { ProtectedRoute } from '#components/ProtectedRoute';


const Home = lazy(() => import('#pages/Home'));
const Register = lazy(() => import('#pages/Register'));
const Login = lazy(() => import('#pages/Login'));
const Contacts = lazy(() => import('#pages/Contacts'));
const ContactEdit = lazy(() => import('#pages/ContactEdit'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  console.log(isRefreshing);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <ProtectedRoute element={<Register />} redirectTo="/login" />
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute element={<Login />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={<PrivateRoute element={<Contacts />} redirectTo="/login" />}
        />

        <Route
          path="contacts/:id/edit"
          element={
            <PrivateRoute element={<ContactEdit />} redirectTo="/login" />
          }
        />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
