import { RouteObject } from 'react-router-dom';
import Home from '../../pages/user/Home';
import Template from '../../components/Template';
import HomeNew from '../../pages/user/homeNew';
import AdminLayout from '../../components/Admin/AdminTemplate';
import Dashboard from '../../pages/admin/Dashboard';

const UserRoutes: RouteObject[] = [
  // { path: '/language-selection', element: <Signin/>},
  // { path: '/genres-selection', element: <Signin/>},
  { path: '/', element: <Template><Home /></Template>},
  // { path: '/', element: <AdminLayout><Dashboard /></AdminLayout>},
  // { path: '/', element: <Template><HomeNew /></Template>},
];

export default UserRoutes;