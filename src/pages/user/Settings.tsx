import React, { useEffect, useState } from 'react'
import CelebrityRequestModal from '../../components/modals/CelebrityRequestModal'
import { useAppDispatch } from '../../hooks/reduxHooks'
// import { getUserInfo } from '../../redux/slices/user/userInfoSlice';

function Settings() {
    const [showRequestModal, setShowRequestModal] = useState(false)
  return (
    <div>
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
    </div>
  )
}

export default Settings