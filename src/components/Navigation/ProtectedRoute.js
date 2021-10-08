import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../context/loggin-context';

const ProtectedRoute = (props) => {
  const Component = props.component;
  const ctx = useContext(AuthContext)
  return ctx.isLoggedIn ? (
    <Component />
  ) : (
    <Redirect to={{ pathname: '/' }} />
  );
};

export default ProtectedRoute;
