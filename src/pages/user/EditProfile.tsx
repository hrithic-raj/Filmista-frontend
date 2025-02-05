import DefaultBanner from '../../assets/images/movie/banner.jpg'
import hrj from '../../assets/images/hrjlogo.png'
import editSVG from '../../assets/svg/edit.svg'
import uploadSVG from '../../assets/svg/upload.svg'
import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'
import { getUserInfo, updateUserProfile } from '../../redux/slices/user/userSlice'
import LoadingPage from '../../components/LoadingPage'

const EditProfile: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {user, loading} = useAppSelector((state)=>state.user);
  const [isEditName, setIsEditName] = useState(false);
  const [isEditBio, setIsEditBio] = useState(false);
  const [name, setName] = useState<string>(user?.name || "");
  const [bio, setBio] = useState<string>(user?.bio || "");
  const [profilePicture, setProfilePicture] = useState<File | string>(user?.profilePicture || '');
  const [banner, setBanner] = useState<File | string>(user?.banner || '');
  const profileInputRef = useRef<HTMLInputElement | null>(null);
  const bannerInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(()=>{
    dispatch(getUserInfo())
  },[dispatch])


  const handleButtonClick = (inputRef: React.RefObject<HTMLInputElement>) => {
    inputRef.current?.click();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | File>>
  ) => {
    const file = event.target.files?.[0];
    if (file) setImage(file);
  };


  const handleSubmit = async ()=>{
    
    const formData = new FormData();
    formData.append("name", name);
    formData.append("bio", bio);
    if (profilePicture) formData.append("profilePicture", profilePicture);
    if (banner) formData.append("banner", banner);

    try {
      await dispatch(updateUserProfile(formData));
      setIsEditBio(false);
      setIsEditName(false);
      navigate('/profile')
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile.");
    }
  }
  if( loading) return <LoadingPage/>

  return (
    <>
      <div className='flex flex-col gap-6 pb-8'>
        <div className='flex flex-col items-center bg-[#2c2c2c] pb-2 rounded-[15px]'>
          <div className='reletive h-[200px] md:h-[250px] w-full'>
            <img src={typeof banner === 'string' ? (banner!=='' ? banner : DefaultBanner) : URL.createObjectURL(banner)} className='h-full w-full object-cover rounded-t-[15px]' alt="" />
            <div className='absolute rounded-full top-[25%] sm:top-[30%] md:top-[40%] ml-10 w-[100px] h-[100px] md:w-[120px] md:h-[120px]'>
                <div className='bg-gradient-to-tr from-black rounded-full w-full h-full'/>
                <img src={typeof profilePicture === 'string' ? (profilePicture!==''? profilePicture : hrj) : URL.createObjectURL(profilePicture)} className='absolute top-0 left-0 object-cover rounded-full z-6 border w-full h-full' alt="" />
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-10 justify-between pt-[50px] pb-[20px] w-full'>
            <div className='flex flex-col pt-[40px] pl-10 gap-5 md:w-[40%]'>
                {!isEditName ?(
                    <div className='flex gap-5'>
                        <span className="text-[#e9e9e9] text-xl font-bold font-['Golos Text']">Name</span>
                        <span className="text-[#e9e9e9] pl-2 text-lg font-normal font-['Golos Text']">{user?.name}</span>
                        <button onClick={()=>setIsEditName(true)} className="flex items-center py-1.5 px-3 gap-1 bg-[#46cec2]/80 rounded-[10px]">
                            <img src={editSVG} className='w-[10px]' alt="" />
                            <span className="text-[#e9e9e9] text-[10px] font-normal font-['Geologica']">Edit</span>
                        </button>
                    </div>
                ):(
                    <div className='flex gap-5'>
                        <span className="text-[#e9e9e9] text-xl font-bold font-['Golos Text']">Name</span>
                        <input type="text" onChange={(e) => setName(e.target.value)} className="bg-[#2c2c2c] border rounded-md pl-2 text-[#e9e9e9] text-lg font-normal font-['Golos Text']" name="name" id="" value={name} />
                    </div>
                )}
                {
                    !isEditBio ?(
                        user?.bio && user.bio!==''?(
                            <div className='flex gap-5 pr-5'>
                                <span className="text-[#e9e9e9] text-xl font-bold font-['Golos Text']">Bio</span>
                                <span className="text-[#e9e9e9] text-base font-normal font-['Golos Text']">{user.bio}</span>
                                <button onClick={()=>setIsEditBio(true)} className="flex items-center max-h-8 py-1.5 px-5 gap-1 bg-[#46cec2]/80 rounded-[10px]">
                                    <img src={editSVG} className='w-[10px]' alt="" />
                                    <span className="text-[#e9e9e9] text-[10px] font-normal font-['Geologica']">Edit</span>
                                </button>
                            </div>
                        ):(
                            <div className='flex gap-5 items-center pr-5'>
                                <span className="text-[#e9e9e9] text-xl font-bold font-['Golos Text'] mr-6">Bio</span>
                                <button onClick={()=>setIsEditBio(true)} className="flex items-center py-1.5 px-4 gap-1 bg-[#46cec2]/80 rounded-[10px]">
                                    <img src={editSVG} className='w-[10px]' alt="" />
                                    <span className="text-[#e9e9e9] text-[10px] font-normal font-['Geologica']">Add Bio</span>
                                </button>
                            </div>
    
                        )
                    ):(
                        <div className='flex gap-5 pr-5'>
                            <span className="text-[#e9e9e9] text-xl font-bold font-['Golos Text'] mr-6">Bio</span>
                            <textarea
                                value={bio}
                                onChange={(e) => setBio(e.target.value)}
                                className="w-full min-h-[100px] px-3 py-2 bg-[#2c2c2c] border rounded-md pl-2 text-[#e9e9e9] text-lg font-normal font-['Golos Text']"
                            >
                            </textarea>
                        </div>
                    )
                }
            </div>
            <div className='md:w-[60%] flex flex-col gap-14'>
                <div className='flex items-center gap-5'>
                    <img 
                        src={typeof profilePicture === 'string' ? profilePicture : URL.createObjectURL(profilePicture)}
                        className='rounded-full border h-32 w-32 object-cover' 
                        alt="" 
                    />
                    <div>
                        <input
                            type="file"
                            accept="image/*"
                            ref={profileInputRef}
                            onChange={(e) => handleFileChange(e, setProfilePicture)}
                            className="hidden"
                        />
                        <span className="text-[#e9e9e9] text-xl font-bold font-['Golos Text'] mr-6">Profile Picture</span>
                        <button 
                            onClick={() => handleButtonClick(profileInputRef)}
                            className="flex items-center py-3 px-6 gap-1 bg-[#46cec2]/80 rounded-[10px]"
                        >
                            <img src={uploadSVG} className='' alt="" />
                            <span className="text-[#e9e9e9] text-[18px] font-normal font-['Geologica']">Upload</span>
                        </button>
                        <span className="text-[#e9e9e9] text-sm font-norml font-['Golos Text'] mr-6">Upload an image in JPG or PNG format with a max size of 5MB</span>
                    </div>
                </div>
                <div className='flex flex-col gap-5 items-center md:px-10'>
                    <img 
                        src={typeof banner === 'string' ? (banner!=='' ? banner : DefaultBanner) : URL.createObjectURL(banner)} 
                        className='rounded-xl border h-32 w-full object-cover' 
                        alt="" 
                    />
                    <div className='flex flex-col gap-5 items-center'>
                        <input
                            type="file"
                            accept="image/*"
                            ref={bannerInputRef}
                            onChange={(e) => handleFileChange(e, setBanner)}
                            className="hidden"
                        />
                        <span className="text-[#e9e9e9] text-2xl font-bold font-['Golos Text']">Banner Image</span>
                        <span className="text-[#e9e9e9] text-sm font-norml font-['Golos Text']">Upload an image in JPG or PNG format with a max size of 5MB</span>
                        <button 
                            onClick={() => handleButtonClick(bannerInputRef)}
                            className="flex items-center py-3 px-6 gap-1 bg-[#46cec2]/80 rounded-[10px]"
                        >
                            <img src={uploadSVG} className='' alt="" />
                            <span className="text-[#e9e9e9] text-[18px] font-normal font-['Geologica']">Upload</span>
                        </button>
                    </div>
                </div>
            </div>
          </div>
                <hr className='w-[88%] opacity-20'/>
                <div className='flex w-full justify-end pr-[60px] py-[20px]'>
                    <button
                        onClick={() => handleSubmit()}
                        className="flex items-center py-3 px-6 gap-1 bg-[#46cec2]/80 rounded-[10px]"
                    >
                        <img src={uploadSVG} className='' alt="" />
                        <span className="text-[#e9e9e9] text-[18px] font-normal font-['Geologica']">Save Changes</span>
                    </button>
                </div>
          
        </div>
      </div>
    </>
  )
}

export default EditProfile