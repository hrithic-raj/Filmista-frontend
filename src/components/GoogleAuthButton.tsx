import React from 'react'
import { googleAuth } from '../redux/slices/authSlice'
import Glogo from '../assets/images/GoogleLogo.png';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';


const GoogleAuthButton: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {googleLoading, googleError, user} = useAppSelector((state)=> state.auth);
    const handleGoogleAuth =()=>{
        // window.location.href = "http://localhost:5000/api/auth/google";
        dispatch(googleAuth())
        .unwrap()
        .then((response) => {
            console.log("Google Auth successful:", response);
            navigate('/home');
        })
        .catch((err) => {
            console.error("Google Auth failed:", err);
        });
    }
  return (
    <div className='flex flex-col justify-center items-center'>
        <button
            onClick={handleGoogleAuth}
            disabled={googleLoading}
            className='w-[311px] h-[43px] flex justify-center items-center space-x-3 rounded-[15px] border-2 border-[#46cec2]'
        >
            <img className='w-8 h-[31px] rounded-full' src={Glogo} alt="" />
            <span className="text-[#46cec2] text-xl font-normal font-['Geologica']">{googleLoading ? "Loading..." : "Continue with Google"}</span>
        </button>
        {/* {googleError && <span className="text-red-500">{googleError}</span>} */}
        {/* {user && <span className="text-green-500">Welcome, {user.name}!</span>} */}
    </div>
  )
}

export default GoogleAuthButton