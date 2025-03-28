import './App.css'
import { Route, Routes } from 'react-router-dom';
import UserProtectedRoutes from './routes/user/UserProtectedRoute';
import UserRoutes from './routes/user/UserRoutes';
import AuthProtectedRoutes from './routes/auth/AuthProtectedRoute';
import AuthRoutes from './routes/auth/AuthRoutes';
import AdminRoutes from './routes/admin/AdminRoutes';
import AdminProtectedRoutes from './routes/admin/AdminProtectedRoute';
// import CelebrityProtectedRoutes from './routes/celebrity/CelebrityProtectedRoute';
// import CelebrityRoutes from './routes/celebrity/CelebrityRoutes';

const App: React.FC = () => {
 
  return (
    <>
    <Routes>
      <Route element={<AuthProtectedRoutes/>}>
        {AuthRoutes.length>0 && AuthRoutes.map(({path, element},index)=>(
          <Route key={index} path={path} element={element}/>
        ))}
      </Route>
      <Route element={<UserProtectedRoutes/>}>
          {UserRoutes.length>0 && UserRoutes.map(({path, element},index)=>(
            <Route key={index} path={path} element={element}/>
          ))}
      </Route>
      <Route element={<AdminProtectedRoutes/>}>
          {AdminRoutes.length>0 && AdminRoutes.map(({path, element},index)=>(
            <Route key={index} path={path} element={element}/>
          ))}
      </Route>
      {/* <Route element={<CelebrityProtectedRoutes/>}>
          {CelebrityRoutes.length>0 && CelebrityRoutes.map(({path, element},index)=>(
            <Route key={index} path={path} element={element}/>
          ))}
      </Route> */}
      <Route path="/auth/google/callback" element={<CallbackHandler/>} />
    </Routes>
    </>
  );
};

const CallbackHandler: React.FC = () => {
  return <p>Handling Google Authentication Callback...</p>;
};

export default App