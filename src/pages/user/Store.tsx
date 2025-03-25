import rtArrow from '../../assets/svg/arrow-rt.svg';
import hrj from '../../assets/images/hrjlogo.png'
const Store = () => {
    const frames = [
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/a_hint_of_clove.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/fan_flourish.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/aim_for_love.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/cat_ears.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/ki_energy_fuchsia.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/wingman_boba.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/mokoko.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/santa_cat_ears.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/sakura_gyoiko.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/wizards_staff.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/magical_potion.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/polar_bear_hat.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/the_anomaly.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/the_monster_you_created.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/dancing_fairies.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/owlbear_cub_snowy.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/hood_dark.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/hood_crimson.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/autumn_crown.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/morning_coffee.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/sakura_warrior.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/reynas_leer.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/omens_cowl.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/blade_storm.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/a_hint_of_clove.png",
        "https://cdn.jsdelivr.net/gh/itspi3141/discord-fake-avatar-decorations@main/images/decorations/snakes_hug.png",
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