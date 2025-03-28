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
import Profile from '../../pages/user/Profile';
import EditProfile from '../../pages/user/EditProfile';
import Store from '../../pages/user/Store';
import Watchlist from '../../pages/user/Watchlist';
import CelebrityProfile from '../../pages/celebrity/CelebrityProfile';
import Explore from '../../pages/user/Explore';

const UserRoutes: RouteObject[] = [
  // { path: '/language-selection', element: <Signin/>},
  // { path: '/genres-selection', element: <Signin/>},
  { path: '/', element: <Template><Home /></Template>},
  { path: '/explore', element: <Template><Explore /></Template>},
  { path: '/movies/:id', element: <Template><MoviePage /></Template>},
  { path: '/movies/images/:id', element: <Template><MovieImages /></Template>},
  { path: '/movies/videos/:id', element: <Template><MovieVideos /></Template>},
  { path: '/movies/cast/:id', element: <Template><MovieCast /></Template>},
  { path: '/movies/reviews/:id', element: <Template><MovieReviews /></Template>},
  { path: '/settings', element: <Template><Settings /></Template>},
  { path: '/watchlist', element: <Template><Watchlist /></Template>},
  { path: '/select-genres', element: <GenreSelector />},
  { path: '/select-languages', element: <LanguageSelector />},
  { path: '/profile', element: <Template><Profile /></Template>},
  { path: '/edit-profile', element: <Template><EditProfile /></Template>},
  { path: '/store', element: <Template><Store /></Template>},

  { path: '/celebrity/:id', element: <Template><CelebrityProfile/></Template>}

];

export default UserRoutes;