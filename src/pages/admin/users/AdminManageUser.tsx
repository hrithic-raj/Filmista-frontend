import React, { useEffect, useState } from 'react'
import AdminUserCard from '../../../components/Admin/cards/AdminUserCard';
import hrjLogo from '../../../assets/images/hrjlogo.png'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { blockUserById, fetchUsers } from '../../../redux/slices/admin/userManagementSlice';
import { RootState } from '@reduxjs/toolkit/query';
import LoadingPage from '../../../components/LoadingPage';

// type User = {
//     _id: string;
//     name: string;
//     email: string;
//     profilePic: string;
// };

const AdminManageUser: React.FC = ()=>{
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {users, loading, error} = useAppSelector((state)=> state.userManagement)

    // useEffect(()=>{
    //     dispatch(fetchUsers());    
    // },[dispatch]);

    const handleBlockUser= async(id:string)=>{
        if(id) await dispatch(blockUserById(id));
    }
    const handleViewUser=(id:string)=>{
        navigate(`/admin/users/${id}`);
    }
  return (
    <div className=''>
        <h3 className='mb-5 font-fredoka text-2xl text-white'>Users</h3>
        <div className='flex flex-wrap gap-5'>
            {users.map(user=>(
                <AdminUserCard
                    id={user._id}
                    profilePicture={hrjLogo}
                    name={user.name}
                    email={user.email}
                    isBlocked={user.isBlocked}
                    blockUser={handleBlockUser}
                    viewUser={handleViewUser}
                />
            ))}
        </div>
    </div>
  )
}

export default AdminManageUser