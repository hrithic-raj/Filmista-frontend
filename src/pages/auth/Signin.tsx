import logo from '../../assets/images/logo.png'
import Glogo from '../../assets/images/GoogleLogo.png'
import eyeOpen from '../../assets/images/eye open.png'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import eyeClose from '../../assets/images/eye closed.png'


const Signin: React.FC =()=>{
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);


  return (
    <>
    <div className="w-[1536px] h-[695px] bg-[#212121] overflow-hidden flex justify-center items-center">
        {/* <div className="w-[918px] h-[918px] opacity-70 bg-[#46cec2]/50 rounded-full blur-[455.70px] top-0 right-[90%] absolute" /> */}
        {/* <div className="w-[918px] h-[918px] opacity-70 bg-[#46cec2]/50 rounded-full blur-[455.70px] bottom-0 left-[90%] absolute" /> */}
        <div className="w-[900px] h-[594px] bg-[#2c2c2c] border border-[#e9e9e9]/50 rounded-[25px] shadow-[3px_2px_10.800000190734863px_0px_rgba(255,255,255,0.12)]">
          <div className="w-[900px] h-[594px] flex">
            <div className='min-w-[38%] flex flex-col justify-between'>
              <div className="w-max h-max flex flex-col mt-[40px] ml-8">
                  <img className='w-[55px] h-[45px]' src={logo} alt="logo" />
                <div className='flex ml-2 mt-4 space-x-5'>
                  <button className="text-[#e8e8e8] text-xl font-semibold font-sans">Sign in</button>
                  <button onClick={()=>navigate('/')} className="text-[#e9e9e9]/50 text-xl font-semibold font-sans">Sign up</button>
                </div>
              </div>
              <div className="flex space-x-5 ml-10 mb-5">
                <div className="text-[#e9e9e9]/80 text-sm font-normal font-['Geologica']">About</div>
                <div className="text-[#e9e9e9]/80 text-sm font-normal font-['Geologica']">Terms</div>
                <div className="text-[#e9e9e9]/80 text-sm font-normal font-['Geologica']">Contact</div>
              </div>
            </div>
            <div className="w-[61.5%] h-[593px] flex flex-col items-center justify-center bg-[#171b1e] rounded-tr-[25px] rounded-br-[25px] space-y-10">
              <button className='w-[311px] h-[43px] flex justify-center items-center space-x-3 rounded-[15px] border-2 border-[#46cec2]'>
                <img className='w-8 h-[31px] rounded-full' src={Glogo} alt="" />
                <span className="text-[#46cec2] text-xl font-normal font-['Geologica']">Continue with Google</span>
              </button>
              <div className='flex justify-center items-center'>
                <div className="w-[193px] h-[0px] border border-[#e9e9e9]/20"></div>
                <div className="text-[#46cec2] text-2xl font-normal font-['Geologica']">OR</div>
                <div className="w-[193px] h-[0px] border border-[#e9e9e9]/20"></div>
              </div>
              <div className='w-[459px] flex flex-col space-y-8'>
                <div className='flex flex-col space-y-2'>
                  <span className="text-white/70 text-sm font-normal font-['Geologica']">YOUR EMAIL</span>
                  <input type="text" className="text-[#46cec2] text-2xl font-normal font-['Geologica'] border-b border-[#e9e9e9]/20 bg-transparent focus:outline-none"/>
                </div>
                <div className='flex flex-col space-y-2'>
                  <span className="text-white/70 text-sm font-normal font-['Geologica']">YOUR PASSWORD</span>
                  <div className='flex items-center'>
                    <input type={showPassword?'text':'password'} className="w-[100%] text-[#46cec2] text-2xl font-normal font-['Geologica'] border-b border-[#e9e9e9]/20 bg-transparent focus:outline-none"/>
                    <button onClick={()=>setShowPassword(!showPassword)} className='h-[100%] border-b border-[#e9e9e9]/20'>
                      <img src={showPassword?eyeClose:eyeOpen} className='w-5 h-[15px]' alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer text-[#e9e9e9]/50 text-base font-normal font-['Geologica']">Forgot password ?</div>
              <button className='flex justify-center items-center w-[219px] h-[43px] rounded-[15px] border-2 border-[#46cec2]'>
                  <span className="text-[#46cec2] text-2xl font-normal font-['Geologica']">SIGN UP</span>
              </button>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Signin