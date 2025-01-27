import { RouteObject } from 'react-router-dom';
import Home from '../../pages/user/Home';
import Template from '../../components/Template';
import AdminLayout from '../../components/Admin/AdminTemplate';
import Dashboard from '../../pages/admin/Dashboard';
import Settings from '../../pages/user/Settings';
import GenreSelector from '../../pages/admin/users/GenreSelector';
import LanguageSelector from '../../pages/admin/users/LanguageSelector';
import MoviePage from '../../pages/user/MoviePage';

const UserRoutes: RouteObject[] = [
  // { path: '/language-selection', element: <Signin/>},
  // { path: '/genres-selection', element: <Signin/>},
  { path: '/', element: <Template><Home /></Template>},
  { path: '/movies/:id', element: <Template><MoviePage /></Template>},
  { path: '/settings', element: <Template><Settings /></Template>},
  { path: '/select-genres', element: <GenreSelector />},
  { path: '/select-languages', element: <LanguageSelector />},
  // { path: '/', element: <AdminLayout><Dashboard /></AdminLayout>},
  // { path: '/', element: <Template><HomeNew /></Template>},
];

export default UserRoutes;