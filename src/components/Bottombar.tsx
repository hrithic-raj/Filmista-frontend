// import upArrow from '../assets/images/up-arrow.png'
// import downArrow from '../assets/images/down-arrow.png'
// import hrjLogo from '../assets/images/hrjlogo.png'
import { useNavigate } from 'react-router-dom';
import { BellSVG, ExploreSVG, HomeSVG, SearchSVG, UserSVG, StoreSVG } from '../assets/svg/SVGs';

const Bottombar = () => {
    const navigate = useNavigate();
  return (
    <div className='sm:hidden fixed bottom-0 flex flex-col justify-center h-[60px] w-full bg-[rgb(44,44,44)]'>
        <div className='flex justify-around items-center'>
            <button onClick={()=>navigate('/')}>
                <HomeSVG/>
            </button>
            <button onClick={()=>navigate('/')}>
                <SearchSVG/>
            </button>
            <button onClick={()=>navigate('/')}>
                <ExploreSVG/>
            </button>
            <button onClick={()=>navigate('/store')}>
                <StoreSVG/>
            </button>
            <button onClick={()=>navigate('/profile')}>
                <UserSVG/>
            </button>
        </div>
    </div>
  );
};

export default Bottombar;