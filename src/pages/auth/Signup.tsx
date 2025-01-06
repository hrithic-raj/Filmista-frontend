import logo from '../../assets/images/logo.png'
import Nlogo from '../../assets/images/NamedLogo.png'
import tick from '../../assets/images/icons/tick.png'
import cross from '../../assets/images/icons/cross.png'
import eyeOpen from '../../assets/images/icons/eye open.png'
import eyeClose from '../../assets/images/icons/eye closed.png'
import { useEffect, useState } from 'react'
import {sendOtp, signup } from '../../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'
import GoogleAuthButton from '../../components/GoogleAuthButton'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import LoadingPage from '../../components/LoadingPage'

const Signup: React.FC =()=> {
  const dispatch = useAppDispatch();
    const {error, loading, user} = useAppSelector((state)=>state.auth);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: '',
  });
  
  const [otp, setOtp] = useState("");
  const [otpValid, setOtpValid] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [valErrors, setValErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validate = (): boolean => {
    const newErrors = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-.]+@[\w-]+\.+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (formData.password.trim() !== formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setValErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValErrors({ ...valErrors, [e.target.name]: '' });
  }

  const handleSentOtp = async () =>{
    if(validate()){
      setOtpSent(true);
      const res = await dispatch(sendOtp(formData.email));
      setOtp(res.payload.otp)
      console.log(res.payload.otp);
    }
  };
  const handleOtpValidation = async ()=>{
    if(formData.otp === otp){
      setOtpValid(true);
    }
  }
  const handleManualSignUp = async () =>{
    if(validate() && otpValid){
    await dispatch(signup(formData));
    }
  }
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  if(loading){
    return <LoadingPage/>
  }
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-[#212121]">
      <div className="w-full max-w-[900px] bg-[#2c2c2c] lg:min-h-[600px] border border-[#e9e9e9]/50 rounded-[25px] shadow-lg">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <div className="lg:w-2/5 lg:min-h-[600px] flex flex-col justify-between items-center lg:items-start  p-5 lg:p-10">
            <div className="flex flex-col items-start mt-1 lg:mt-0">
              <img className="hidden lg:flex w-[55px] h-[45px] mb-4" src={logo} alt="logo" />
              <img className="lg:hidden w-[300px] mb-1" src={Nlogo} alt="logo" />
              <div className="w-full hidden lg:flex justify-center space-x-5">
                <button onClick={() =>{ navigate('/signup'); setOtpSent(false)}} className="text-[#e8e8e8] text-lg lg:text-xl font-semibold">Sign up</button>
                <button onClick={() => navigate('/signin')} className="text-[#e9e9e9]/50 text-lg lg:text-xl font-semibold">Sign in</button>
              </div>
            </div>
            <div className="hidden lg:flex space-x-5 mt-5 lg:mt-0">
              <span className="text-[#e9e9e9]/80 text-sm">About</span>
              <span className="text-[#e9e9e9]/80 text-sm">Terms</span>
              <span className="text-[#e9e9e9]/80 text-sm">Contact</span>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:w-3/5 lg:min-h-[600px] flex flex-col items-center justify-center bg-[#171b1e] rounded-br-[25px] rounded-bl-[25px] lg:rounded-bl-none lg:rounded-tr-[25px] lg:rounded-br-[25px]  p-5 lg:p-10 space-y-6">
            <GoogleAuthButton/>
            <div className="flex items-center w-full space-x-2">
              <div className="flex-1 border-t border-[#e9e9e9]/20"></div>
              <span className="text-[#46cec2] text-lg font-medium">OR</span>
              <div className="flex-1 border-t border-[#e9e9e9]/20"></div>
            </div>
            {!otpSent ? (
              <>
                <div className="w-full max-w-[459px] space-y-4">
                  <div className="flex flex-col space-y-2">
                    <label className="text-white/70 text-sm">YOUR NAME</label>
                    <input name="name" type="text" value={formData.name} onChange={handleChange} className="w-full text-[#46cec2] text-lg bg-transparent border-b border-[#e9e9e9]/20 focus:outline-none" />
                    {valErrors.name && <p className="text-xs text-red-500">{valErrors.name}</p>}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-white/70 text-sm">YOUR EMAIL</label>
                    <input name="email" type="text" value={formData.email} onChange={handleChange} className="w-full text-[#46cec2] text-lg bg-transparent border-b border-[#e9e9e9]/20 focus:outline-none" />
                    {valErrors.email && <p className="text-xs text-red-500">{valErrors.email}</p>}
                    {error && <p className="text-xs text-red-500">{error}</p>}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-white/70 text-sm">YOUR PASSWORD</label>
                    <div className="flex items-center">
                      <input name="password" type={showPassword ? 'text' : 'password'} value={formData.password} onChange={handleChange} className="w-full text-[#46cec2] text-lg bg-transparent border-b border-[#e9e9e9]/20 focus:outline-none" />
                      <button onClick={() => setShowPassword(!showPassword)}>
                        <img src={showPassword ? eyeClose : eyeOpen} className="w-5 h-5" alt="Toggle visibility" />
                      </button>
                    </div>
                    {valErrors.password && <p className="text-xs text-red-500">{valErrors.password}</p>}
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-white/70 text-sm">REPEAT PASSWORD</label>
                    <div className="flex items-center">
                      <input name="confirmPassword" type={showPassword ? 'text' : 'password'} value={formData.confirmPassword} onChange={handleChange} className="w-full text-[#46cec2] text-lg bg-transparent border-b border-[#e9e9e9]/20 focus:outline-none" />
                      <button onClick={() => setShowPassword(!showPassword)}>
                        <img src={showPassword ? eyeClose : eyeOpen} className="w-5 h-5" alt="Toggle visibility" />
                      </button>
                    </div>
                    {valErrors.confirmPassword && <p className="text-xs text-red-500">{valErrors.confirmPassword}</p>}
                  </div>
                </div>
                <button onClick={handleSentOtp} className="w-full max-w-[219px] py-2 rounded-lg border-2 border-[#46cec2] text-[#46cec2] text-lg font-medium">SIGN UP</button>
                <span className='text-[#e9e9e9]/80'>Already have an accound ? <span onClick={() => navigate('/signin')} className='cursor-pointer text-blue-500'>signin</span></span>
                <div className="flex lg:hidden space-x-5 mt-5 lg:mt-0">
                  <span className="text-[#e9e9e9]/80 text-sm">About</span>
                  <span className="text-[#e9e9e9]/80 text-sm">Terms</span>
                  <span className="text-[#e9e9e9]/80 text-sm">Contact</span>
                </div>
              </>
            ) : (
              <>
                <div className="w-full max-w-[459px] space-y-4">
                  <p className="text-white/70 text-xs">OTP has been sent to {formData.email}</p>
                  <label className="text-white/70 text-sm">ENTER THE OTP</label>
                  <div className="flex items-center">
                    <input name="otp" type="text" value={formData.otp} onChange={handleChange} className="w-full text-[#46cec2] text-lg bg-transparent border-b border-[#e9e9e9]/20 focus:outline-none" />
                    <button>
                      <img src={otpValid ? tick : cross} className="w-5 h-5" alt="Toggle visibility" />
                    </button>
                  </div>
                </div>
                {otpValid?(
                  <button onClick={handleManualSignUp} className="w-full max-w-[219px] py-2 rounded-lg border-2 border-[#46cec2] text-[#46cec2] text-lg font-medium">SIGN IN</button>
                ):(
                  <button onClick={handleOtpValidation} className="w-full max-w-[219px] py-2 rounded-lg border-2 border-[#46cec2] text-[#46cec2] text-lg font-medium">VERIFY OTP</button>
                )}
                <span className='text-[#e9e9e9]/80 flex lg:hidden'>Already have an accound ? <span onClick={() => navigate('/signin')} className='cursor-pointer text-blue-400'>signin</span></span>
                <div className="flex lg:hidden space-x-5 mt-5 lg:mt-0">
                  <span className="text-[#e9e9e9]/80 text-sm">About</span>
                  <span className="text-[#e9e9e9]/80 text-sm">Terms</span>
                  <span className="text-[#e9e9e9]/80 text-sm">Contact</span>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
</>
  )
}

export default Signup