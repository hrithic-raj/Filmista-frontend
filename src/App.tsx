import './App.css'
import Signup from './pages/auth/Signup';
import Signin from './pages/auth/Signin';
import Explore from './pages/user/Explore';
import Home from './pages/user/Home';
import MoviePage from './pages/user/MoviePage';
import Profile from './pages/user/Profile';
import { Route, Routes } from 'react-router-dom';
import GoogleAuthButton from './components/GoogleAuthButton';

const App: React.FC = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/home' element={<Home/>}/>
      {/* <Route path="/" element={<GoogleAuthButton/>} /> */}
      <Route path="/auth/google/callback" element={<CallbackHandler/>} />
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

const CallbackHandler: React.FC = () => {
  return <p>Handling Google Authentication Callback...</p>;
};

export default App