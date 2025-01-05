import { RouteObject } from 'react-router-dom';
import Home from '../../pages/user/Home';
import Template from '../../components/Template';

const UserRoutes: RouteObject[] = [
  // { path: '/language-selection', element: <Signin/>},
  // { path: '/genres-selection', element: <Signin/>},
  { path: '/', element: <Template><Home /></Template>},
];

export default UserRoutes;