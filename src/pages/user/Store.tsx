import rtArrow from '../../assets/svg/arrow-rt.svg';
import hrj from '../../assets/images/hrjlogo.png'
const Store = () => {
    const frames = [
        "https://img.avatardecoration.com/decorations/snakes_hug.png",
        "https://img.avatardecoration.com/decorations/wizards_staff.png",
        "https://img.avatardecoration.com/decorations/magical_potion.png",
        "https://img.avatardecoration.com/decorations/bunny_zzzs.png",
        "https://img.avatardecoration.com/decorations/dancing_fairies.png",
        "https://img.avatardecoration.com/decorations/hood_dark.png",
        "https://img.avatardecoration.com/decorations/hood_crimson.png",
        "https://img.avatardecoration.com/decorations/autumn_crown.png",
        "https://img.avatardecoration.com/decorations/sakura.png",
        "https://img.avatardecoration.com/decorations/sakura_warrior.png",
        "https://img.avatardecoration.com/decorations/blade_storm.png",
        "https://img.avatardecoration.com/decorations/reynas_leer.png",
        "https://img.avatardecoration.com/decorations/a_hint_of_clove.png"
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
            // <div className='relative w-[190px] h-[190px] md:w-[240px] md:h-[240px]'>
            //     <div className='absolute top-6 left-6 bg-gradient-to-tr from-black rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px]'/>
            //     <img src={hrj} className='absolute top-6 left-6 rounded-full object-cover z-6 border w-[150px] h-[150px] md:w-[200px] md:h-[200px]' alt="" onContextMenu={(e) => e.preventDefault()} />
            //     <img src={url} className='absolute top-0 object-cover w-[190px] h-[190px] md:w-[240px] md:h-[240px]' alt="" onContextMenu={(e) => e.preventDefault()} />
            // </div>
            <div className='relative w-[190px] h-[190px] md:w-[240px] md:h-[240px]'>
                <div className="absolute top-[28%] left-2 md:left-[10px] w-[190px] h-[190px] md:w-[240px] md:h-[240px]">
            <div className="relative w-full h-full flex justify-center items-center">
              <div className='relative w-[160px] h-[160px] md:w-[200px] md:h-[200px]'>
                {/* Profile Picture Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black rounded-full" />
                
                {/* Profile Image */}
                <img
                  src={hrj}
                  className="absolute inset-0 w-full h-full rounded-full object-cover border border-opacity-10"
                  alt=""
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>

              {/* Animated Frame */}
              <img
                src={url}
                className="absolute inset-0 w-full h-full object-cover "
                alt=""
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Store