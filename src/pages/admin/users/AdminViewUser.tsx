import React, { useEffect } from 'react'
import hrjLogo from '../../../assets/images/hrjlogo.png'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { blockUserById, fetchUserById } from '../../../redux/slices/admin/userManagementSlice';

const AdminViewUser: React.FC = () => {
    // const [user, setUser] = useState<User | null>(null);
    // const [reviewedMovies, setReviewedMovies] = useState<Movie[]>([]);
    const reviewedMovies =[32,4,4,4,5,8]
    const {id} = useParams<{id: string}>();
    const dispatch = useAppDispatch();
    const { selectedUser: user } = useAppSelector((state) => state.userManagement);
    useEffect(()=>{
        if(id) dispatch(fetchUserById(id))
    },[dispatch, id]);

    const handleBlockUser= async()=>{
        if(id){
            await dispatch(blockUserById(id));
        }
    }
    
  return (
    <div className="max-w-5xl mx-auto p-6 bg-[rgb(44,44,44)] shadow-md rounded-lg">
    {/* User Info */}
    <div className="flex flex-col lg:flex-row gap-3 justify-between bg-[#212121] p-6 rounded-lg shadow-sm">
        <div className='flex items-center space-x-6'>
            <img
                src={hrjLogo}
                alt={`${user?.name}'s profile`}
                className="w-24 h-24 rounded-full object-cover border"
            />
            <div>
                <h2 className="text-2xl font-semibold text-gray-200">{user?.name}</h2>
                <p className="text-gray-400">Email: {user?.email}</p>
            </div>
        </div>
        <div className='flex flex-col gap-4'>
            <button onClick={handleBlockUser} className='bg-red-200 rounded-md p-2 font-bold text-gray-800'>
                {user?.isBlocked?'UNBLOCK':'BLOCK'}
                </button>
            <button className='bg-red-200 rounded-md p-2 font-bold text-gray-800'>BLOCK</button>
        </div>
    </div>

    {/* Reviewed Movies */}
    <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-200 mb-4">Reviewed Movies</h3>
        {reviewedMovies.length > 0 ? (
            <ul className="grid grid-cols-1 gap-6">
                {reviewedMovies.map(() => (
                    <li className='flex gap-4'>
                        <div>
                            <img className='min-w-28 h-32 object-cover' src="https://c4.wallpaperflare.com/wallpaper/343/724/32/the-lion-king-2019-movie-poster-wallpaper-preview.jpg" alt="" />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-200 text-2xl font-geologica'>Lion king</span>
                            <p className='text-gray-200 max-w-full mt-2'>Review :</p>
                            <p className='text-gray-300 max-w-full mt-1 italic'>It is the specialty of Hollywood films that a very simple and straightforward story can be robbed by telling it in a great way and The Lion King does just that. To gain the throne of the king of the jungle, the evil Scar kills his brother, the king of the jungle Mufasa, with the help of hyenas and how his little son grows up and takes revenge for his father's murder, this is the essence of this film, which looks like a Mumbai film at first glance but when you watch the film, you experience something different. Excellent animation, strong grip on the script and successful direction make this film worth watching. The 3D special effects add to its charm.
                            If we talk about the Hindi version of this film, then originality is also visible in it. The Bhojpuri language spoken by the hyenas and the Mumbai Hindi spoken by the wild boar Pumbaa and the mongoose Timon tickles the readers. The voice over of Shahrukh Khan, Shreyas Talpade, Ashish Vidyarthi, Asrani and Sanjay Mishra is impressive but the voice of Shahrukh's son Aryan does not impress at all. But overall, this is a film worth watching not only for children but also for adults. So Hakuna Matata, that is, leave your worries aside and enjoy the film.</p>
                        </div>
                    </li>
                ))}
            </ul>
        ) : (
            <p className="text-gray-600">No reviews submitted yet.</p>
        )}
    </div>
</div>
  )
}

export default AdminViewUser