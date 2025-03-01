import React from 'react'
// import { googleAuth } from '../redux/slices/authSlice'
import Glogo from '../assets/images/GoogleLogo.png';
import { useAppSelector } from '../hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import axiosInstance from '../utils/axiosInstance';

const GoogleAuthButton: React.FC = () => {
    // const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {googleLoading} = useAppSelector((state)=> state.auth);
    const handleGoogleAuth =useGoogleLogin({
        onSuccess: async(credentialResponse)=>{
            try{
                const res = await axiosInstance.post('/auth/google',{credentialResponse});
                const {accessToken} = res.data;
                localStorage.setItem('token', accessToken);
                localStorage.setItem('role', res.data.role);
                if(res.data.newUser){
                    navigate('/select-languages');
                }else{
                    navigate('/');
                }
            }catch(error){
                console.error("Google auth failed", error);
            }
        },
        onError: () => console.log("Google auth failed"),
    })
  return (
    <div className='flex flex-col justify-center items-center'>
        <button
            onClick={()=>handleGoogleAuth()}
            // disabled={googleLoading}
            className='w-[311px] h-[43px] flex justify-center items-center space-x-3 rounded-[15px] border-2 border-[#46cec2]'
        >
            <img className='w-8 h-[31px] rounded-full' src={Glogo} alt="" />
            <span className="text-[#46cec2] text-xl font-normal font-['Geologica']">{googleLoading ? "Loading..." : "Continue with Google"}</span>
        </button>
    </div>
  )
}

export default GoogleAuthButton