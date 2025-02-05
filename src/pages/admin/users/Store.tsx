import React from 'react'
import rtArrow from '../../../assets/svg/arrow-rt.svg';
import hrj from '../../../assets/images/hrjlogo.png'
const Store = () => {
    const frames = [
        "https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/wizards_staff.png",
        "https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/hood_crimson.png",
        "https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/santa_cat_ears.png",
        "https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/sakura_gyoiko.png",
        "https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/lofi_girl_outfit.png",
        "https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/playful_lofi_cat.png",
        "https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/polar_bear_hat.png",
        "https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/magical_potion.png",
        "https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/fan_flourish.png",
        "https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/the_monster_you_created.png",
        "https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/the_anomaly.png",
        "https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/dancing_fairies.png",
        "https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/hood_dark.png",
        "https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/reynas_leer.png",
        "https://itspi3141.github.io/discord-fake-avatar-decorations/public/decorations/omens_cowl.png",
    ]
  return (
    <div className='flex flex-col gap-2 pb-10'>
        <div className='flex flex-col items-center'>
            <span className="text-white text-4xl font-normal font-['Geologica']">STORE</span>
            <hr className='w-[150px] mt-2'/>
        </div>
        <div className='flex gap-2 cursor-pointer'>
            <img src={rtArrow} className='w-6 h-6' alt="" />
            <span className="text-white text-xl font-normal font-['Geologica']">Frames</span>
        </div>
        <div className='flex flex-wrap gap-5 ml-2 w-full h-full'>
            {frames.map((url)=>(
            <div className='relative w-[190px] h-[190px] md:w-[240px] md:h-[240px]'>
                <div className='absolute top-6 left-6 bg-gradient-to-tr from-black rounded-full w-[150px] h-[150px]  md:w-[200px] md:h-[200px]'/>
                <img src={hrj} className='absolute top-6 left-6 rounded-full object-cover z-6 border w-[150px] h-[150px] md:w-[200px] md:h-[200px]' alt="" onContextMenu={(e) => e.preventDefault()} />
                <img src={url} className='absolute top-0 object-cover w-[190px] h-[190px] md:w-[240px] md:h-[240px]' alt="" onContextMenu={(e) => e.preventDefault()} />
            </div>
            ))}
        </div>
    </div>
  )
}

export default Store