import { RouteObject } from 'react-router-dom';
import Signin from '../../pages/auth/Signin';
import Signup from '../../pages/auth/Signup';

const AuthRoutes: RouteObject[] = [
  { path: '/signup', element: <Signup/> },
  { path: '/signin', element: <Signin/>},
  
];

export default AuthRoutes;