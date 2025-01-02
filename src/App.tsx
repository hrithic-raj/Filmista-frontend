import './App.css'
import Signup from './pages/auth/Signup';
import Signin from './pages/auth/Signin';
import Explore from './pages/user/Explore';
import Home from './pages/user/Home';
import MoviePage from './pages/user/MoviePage';
import Profile from './pages/user/Profile';
import { Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
      {/* <Signup/> */}
      {/* <Signin/> */}
      {/* <Home/> */}
      {/* <Explore/> */}
      {/* <MoviePage/> */}
      {/* <Profile/> */}
    </>
  );
};

export default App