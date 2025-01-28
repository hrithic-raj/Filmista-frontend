import { RouteObject } from 'react-router-dom';
import Home from '../../pages/user/Home';
import Template from '../../components/Template';
import Settings from '../../pages/user/Settings';
import GenreSelector from '../../pages/admin/users/GenreSelector';
import LanguageSelector from '../../pages/admin/users/LanguageSelector';
import MoviePage from '../../pages/user/movies/MoviePage';
import MovieImages from '../../pages/user/movies/MovieImages';
import MovieVideos from '../../pages/user/movies/MovieVideos';
import MovieCast from '../../pages/user/movies/MovieCast';
import MovieReviews from '../../pages/user/movies/MovieReviews';

const UserRoutes: RouteObject[] = [
  // { path: '/language-selection', element: <Signin/>},
  // { path: '/genres-selection', element: <Signin/>},
  { path: '/', element: <Template><Home /></Template>},
  { path: '/movies/:id', element: <Template><MoviePage /></Template>},
  { path: '/movies/images/:id', element: <Template><MovieImages /></Template>},
  { path: '/movies/videos/:id', element: <Template><MovieVideos /></Template>},
  { path: '/movies/cast/:id', element: <Template><MovieCast /></Template>},
  { path: '/movies/reviews/:id', element: <Template><MovieReviews /></Template>},
  { path: '/settings', element: <Template><Settings /></Template>},
  { path: '/select-genres', element: <GenreSelector />},
  { path: '/select-languages', element: <LanguageSelector />},
  // { path: '/', element: <AdminLayout><Dashboard /></AdminLayout>},
  // { path: '/', element: <Template><HomeNew /></Template>},
];

export default UserRoutes;