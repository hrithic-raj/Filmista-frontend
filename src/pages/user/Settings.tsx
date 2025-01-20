import React, { useEffect, useState } from 'react'
import CelebrityRequestModal from '../../components/modals/CelebrityRequestModal'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { getProfile } from '../../api/userApis'
import IUser from '../../interfaces/UserInterface';
// import { getUserInfo } from '../../redux/slices/user/userInfoSlice';

const Settings: React.FC =()=> {
    const [showRequestModal, setShowRequestModal] = useState(false);
    const [user, setUser] = useState<IUser | null>(null);
    const dispatch = useAppDispatch();

    useEffect(()=>{
    getProfile()
    .then((res)=>setUser(res))
    },[dispatch])
  return (
    <div>
        {user && user.role==='user' &&(
            <>
                <button onClick={()=>setShowRequestModal(true)} className='border text-2xl text-white p-2 rounded-lg'>
                    Request to become admin
                </button>
                {
                    showRequestModal && (
                        <CelebrityRequestModal
                        onClose={() => setShowRequestModal(false)}
                        />
                    )
                }
            </>
        )}
    </div>
  )
}

export default Settings