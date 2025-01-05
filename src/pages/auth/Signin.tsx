import logo from '../../assets/images/logo.png'
import Nlogo from '../../assets/images/NamedLogo.png'
import eyeOpen from '../../assets/images/eye open.png'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import eyeClose from '../../assets/images/eye closed.png'
import GoogleAuthButton from '../../components/GoogleAuthButton';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { signin } from '../../redux/slices/authSlice';
import LoadingPage from '../../components/LoadingPage';


const Signin: React.FC =()=>{
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('token');
  const {error, loading, user, celebrity, admin} = useAppSelector((state)=>state.auth);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const [valErrors, setValErrors] = useState({
    email: '',
    password: '',
  });

  const validate = (): boolean => {
    const newErrors = {
      email: '',
      password: '',
    };

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
    setValErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setValErrors({ ...valErrors, [e.target.name]: '' });
  }
  
  const handleManualSignUp = async () =>{
    if(validate()){
      await dispatch(signin(formData))
    }
  }
  useEffect(() => {
    if (user || celebrity) {
      navigate('/');
    } else if (admin) {
      navigate('/admin');
    }
  }, [user, celebrity, admin, navigate, token]);
  
  // if(loading){
  //   return <LoadingPage/>
  // }
  return (
    <>
    <div className="w-full min-h-screen bg-[#212121] flex justify-center items-center p-4">
        <div className="max-w-[900px] lg:min-h-[600px] w-full h-auto bg-[#2c2c2c] border border-[#e9e9e9]/50 rounded-[25px] shadow-[3px_2px_10.8px_0px_rgba(255,255,255,0.12)] flex flex-col lg:flex-row overflow-hidden">
          {/* Sidebar */}
          <div className="lg:w-2/5 flex flex-col justify-between items-center lg:items-start  p-5 lg:p-10">
            <div className="flex flex-col items-start mt-1 lg:mt-0">
              <img className="hidden lg:flex w-[55px] h-[45px] mb-4" src={logo} alt="logo" />
              <img className="lg:hidden w-[300px] mb-1" src={Nlogo} alt="logo" />
              <div className="w-full hidden lg:flex justify-center space-x-5">
                <button onClick={() => navigate('/signin')} className="text-[#e8e8e8] text-lg lg:text-xl font-semibold">Sign in</button>
                <button onClick={() => navigate('/signup')} className="text-[#e9e9e9]/50 text-lg lg:text-xl font-semibold">Sign up</button>
              </div>
            </div>
            <div className="hidden lg:flex space-x-5 mt-5 lg:mt-0">
              <span className="text-[#e9e9e9]/80 text-sm">About</span>
              <span className="text-[#e9e9e9]/80 text-sm">Terms</span>
              <span className="text-[#e9e9e9]/80 text-sm">Contact</span>
            </div>
          </div>

          <div className="lg:w-[62%] flex flex-col items-center justify-center bg-[#171b1e] rounded-tr-[25px] rounded-br-[25px] space-y-6 p-6">
            <GoogleAuthButton/>
            <div className="flex items-center w-full max-w-[459px]">
              <div className="flex-grow border-t border-[#e9e9e9]/20"></div>
              <span className="text-[#46cec2] text-lg lg:text-2xl mx-4">OR</span>
              <div className="flex-grow border-t border-[#e9e9e9]/20"></div>
            </div>

            <div className="w-full max-w-[459px] space-y-6">
              {error && <p className="text-xs text-red-500 text-center">{error}</p>}
              <div className="flex flex-col">
                <label className="text-white/70 text-sm">YOUR EMAIL</label>
                <input
                  type="text"
                  name='email'
                  onChange={handleChange}
                  value={formData.email}
                  className="text-[#46cec2] text-lg lg:text-2xl border-b border-[#e9e9e9]/20 bg-transparent focus:outline-none"
                />
                {valErrors.email && <p className="text-xs text-red-500">{valErrors.email}</p>}
              </div>
              <div className="flex flex-col">
                <label className="text-white/70 text-sm">YOUR PASSWORD</label>
                <div className="flex items-center">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    onChange={handleChange}
                    value={formData.password}
                    className="flex-grow text-[#46cec2] text-lg lg:text-2xl border-b border-[#e9e9e9]/20 bg-transparent focus:outline-none"
                    />
                  <button onClick={() => setShowPassword(!showPassword)}>
                    <img
                      src={showPassword ? eyeClose : eyeOpen}
                      className="w-5 h-5"
                      alt="Toggle Password Visibility"
                      />
                  </button>
                </div>
                {valErrors.email && <p className="text-xs text-red-500">{valErrors.email}</p>}
              </div>
            </div>

            <div className="cursor-pointer text-[#e9e9e9]/50 text-sm lg:text-base">Forgot password?</div>

            <button onClick={handleManualSignUp} className="w-full max-w-[219px] py-2 rounded-lg border-2 border-[#46cec2] text-[#46cec2] text-lg font-medium">SIGN IN</button>
            <span className='text-[#e9e9e9]/80 flex lg:hidden'>New here ? <span onClick={() => navigate('/signup')} className='cursor-pointer text-blue-400'>signup</span></span>
            <div className="flex lg:hidden space-x-5 mt-5 lg:mt-0">
              <span className="text-[#e9e9e9]/80 text-sm">About</span>
              <span className="text-[#e9e9e9]/80 text-sm">Terms</span>
              <span className="text-[#e9e9e9]/80 text-sm">Contact</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin