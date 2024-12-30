import logo from '../../assets/images/logo.png'
import Glogo from '../../assets/images/GoogleLogo.png'
import eyeOpen from '../../assets/images/eye open.png'
// import eyeClose from '../../assets/images/eye closed.png'


function Signin() {
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
                  <div className="text-[#e8e8e8] text-xl font-normal font-['Geologica']">Sign up</div>
                  <div className="text-[#e9e9e9]/50 text-xl font-normal font-['Geologica']">Sign in</div>
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
                    <input type="password" className="w-[100%] text-[#46cec2] text-2xl font-normal font-['Geologica'] border-b border-[#e9e9e9]/20 bg-transparent focus:outline-none"/>
                    <button className='h-[100%] border-b border-[#e9e9e9]/20'>
                      <img src={eyeOpen} className='w-5 h-[15px]' alt="" />
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
//     <div className="w-[1531px] h-[780px] relative bg-[#212121]  overflow-hidden">
//   <div className="w-[918px] h-[918px] left-[837px] top-[458px] absolute origin-top-left rotate-180 opacity-70 bg-[#46cec2]/50 rounded-full blur-[455.70px]" />
//   <div className="w-[900px] h-[594px] left-[315px] top-[100px] absolute">
//     <div className="w-[900px] h-[594px] left-0 top-0 absolute bg-[#2c2c2c] rounded-[25px] shadow-[3px_2px_10.800000190734863px_0px_rgba(255,255,255,0.12)] border border-[#e9e9e9]/50" />
//     <div className="w-[870px] h-[594px] left-[30px] top-0 absolute">
//       <div className="w-[163px] h-[88px] left-0 top-[40px] absolute">
//         <div className="w-[41.49px] h-[41.74px] left-0 top-0 absolute">
//         </div>
//         <div className="left-0 top-[63px] absolute text-[#e8e8e8] text-xl font-normal font-['Geologica']">Sign in</div>
//         <div className="left-[90px] top-[63px] absolute text-[#e9e9e9]/50 text-xl font-normal font-['Geologica']">Sign up</div>
//       </div>
//       <div className="w-[167px] h-[18px] left-[5px] top-[551px] absolute">
//         <div className="left-0 top-0 absolute text-[#e9e9e9]/80 text-sm font-normal font-['Geologica']">About</div>
//         <div className="left-[57px] top-0 absolute text-[#e9e9e9]/80 text-sm font-normal font-['Geologica']">Terms</div>
//         <div className="left-[113px] top-0 absolute text-[#e9e9e9]/80 text-sm font-normal font-['Geologica']">Contact</div>
//       </div>
//       <div className="w-[562px] h-[594px] left-[308px] top-0 absolute">
//         <div className="w-[562px] h-[594px] left-0 top-0 absolute bg-[#171b1e] rounded-tr-[25px] rounded-br-[25px] border-r border-t border-b border-[#e9e9e9]/50" />
//         <div className="w-[219px] h-[43px] left-[171px] top-[516px] absolute">
//           <div className="w-[219px] h-[43px] left-0 top-0 absolute rounded-[15px] border-2 border-[#46cec2]" />
//           <div className="left-[65px] top-[7px] absolute text-[#46cec2] text-2xl font-normal font-['Geologica']">SIGN IN</div>
//         </div>
//         <div className="w-[459px] h-[267px] left-[51px] top-[208px] absolute">
//           <div className="left-[160px] top-[247px] absolute text-[#e9e9e9]/50 text-base font-normal font-['Geologica']">Forgot password ?</div>
//           <div className="w-[459px] h-[73px] left-0 top-[106px] absolute">
//             <div className="left-0 top-0 absolute text-white/70 text-sm font-normal font-['Geologica']">YOUR PASSWORD</div>
//             <div className="w-[459px] h-[0px] left-0 top-[73px] absolute border border-[#e9e9e9]/20"></div>
//             <div className="left-[1px] top-[42px] absolute text-[#e9e9e9]/25 text-base font-normal font-['Geologica']">Type your password here</div>
//             <div className="w-5 h-[15px] left-[424px] top-[44px] absolute" />
//           </div>
//           <div className="w-[459px] h-[72px] left-0 top-0 absolute">
//             <div className="left-0 top-0 absolute text-white/70 text-sm font-normal font-['Geologica']">YOUR EMAIL</div>
//             <div className="w-[459px] h-[0px] left-0 top-[72px] absolute border border-[#e9e9e9]/20"></div>
//             <div className="w-[311px] h-[26px] left-[1px] top-[35px] absolute text-[#46cec2] text-2xl font-normal font-['Geologica']">Hrithic Raj P</div>
//             <div className="w-6 h-6 left-[424px] top-[32px] absolute  overflow-hidden" />
//           </div>
//         </div>
//         <div className="w-[459px] h-[30px] left-[51px] top-[133px] absolute">
//           <div className="w-[193px] h-[0px] left-0 top-[14px] absolute border border-[#e9e9e9]/20"></div>
//           <div className="w-[193px] h-[0px] left-[266px] top-[14px] absolute border border-[#e9e9e9]/20"></div>
//           <div className="left-[212px] top-0 absolute text-[#46cec2] text-2xl font-normal font-['Geologica']">OR</div>
//         </div>
//         <div className="w-[311px] h-[43px] left-[126px] top-[50px] absolute">
//           <div className="w-[311px] h-[43px] left-0 top-0 absolute rounded-[15px] border-2 border-[#46cec2]" />
//           <div className="left-[73px] top-[9px] absolute text-[#46cec2] text-xl font-normal font-['Geologica']">Continue with Google</div>
//           <img className="w-8 h-[31px] left-[30px] top-[6px] absolute rounded-full" src="https://via.placeholder.com/32x31" />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
  )
}

export default Signin