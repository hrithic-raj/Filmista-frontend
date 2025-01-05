import React from 'react';
import upArrow from '../assets/images/up-arrow.png'
import downArrow from '../assets/images/down-arrow.png'
import hrjLogo from '../assets/images/hrjlogo.png'
import { BellSVG, ExploreSVG, HeartSVG, HomeSVG, SearchSVG, UserSVG } from '../assets/svg/SVGs';

const Bottombar = () => {
  return (
    <div className='sm:hidden fixed bottom-0 flex flex-col justify-center h-[60px] w-full bg-[rgb(44,44,44)]'>
        <div className='flex justify-around items-center'>
            <button>
                <HomeSVG/>
            </button>
            <button>
                <SearchSVG/>
            </button>
            <button>
                <ExploreSVG/>
            </button>
            <button>
                <BellSVG/>
            </button>
            <button>
                <UserSVG/>
            </button>
        </div>
    </div>
  );
};

export default Bottombar;