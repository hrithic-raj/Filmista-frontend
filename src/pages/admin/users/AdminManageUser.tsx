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

    useEffect(()=>{
        dispatch(fetchUsers());    
    },[dispatch]);
    
    const handleBlockUser= async(id:string)=>{
        if(id) await dispatch(blockUserById(id));
    }
    const handleViewUser=(id:string)=>{
        navigate(`/admin/users/${id}`);
    }
  return (
    <div className=''>
        <h3 className='mb-5 font-fredoka text-2xl text-white'>Users</h3>
        <div className='flex flex-col gap-5'>
            <div className='bg-[rgb(44,44,44)] rounded-xl py-3 '>
                <tr className='flex w-[100%] items-center rounded-lg text-center'>
                    <td className="w-[20%] font-bold text-gray-200">Profile Pic</td>
                    <td className="w-[20%] font-bold text-gray-200">NAME</td>
                    <td className="w-[20%] font-bold text-gray-200">Email</td>
                    <td className="w-[20%] font-bold text-gray-200">Status</td>
                    <td className="w-[20%] font-bold text-gray-200">VIEW</td>
                </tr>
            </div>
            {
                users.map(user=>(
                    user.role==='user' && (
                        <div className='bg-[rgb(44,44,44)] rounded-xl py-1'>
                            <tr className='w-[100%] flex items-center text-center'>
                                <td onClick={()=>handleViewUser(user._id)} className='w-[20%] flex justify-center cursor-pointer'>
                                    <img src={user.profilePicture || hrjLogo} className='w-12 h-12 object-cover rounded-full border' alt="" />
                                </td>
                                <td onClick={()=>handleViewUser(user._id)} className="w-[20%] text-gray-300 rounded-[16px] font-['Geologica'] cursor-pointer">{user.name}</td>
                                <td className="w-[20%] text-gray-300 rounded-[16px] font-['Geologica']">{user.email}</td>
                                <td className='w-[20%]'>
                                    <button
                                        onClick={(e) => {
                                        e.stopPropagation();
                                        handleBlockUser(user._id);
                                        }}
                                        className="px-3 py-1 border border-[#fefefe] text-white rounded-[16px] font-['Geologica'] hover:text-[#5cfef0] hover:border-[#5cfef0]"
                                    >
                                        {user.isBlocked?'UNBLOCK':'BLOCK'}
                                    </button>
                                </td>
                                <td className='w-[20%]'>
                                    <button
                                        onClick={(e) => {
                                        e.stopPropagation();
                                        handleViewUser(user._id);
                                        }}
                                        className="px-3 py-1 border border-[#fefefe] text-white rounded-[16px] font-['Geologica'] hover:text-[#5cfef0] hover:border-[#5cfef0]"
                                    >
                                        VIEW
                                    </button>
                                </td>
                            </tr>
                        </div>
                    )
                ))
            }
        </div>
        {/* <div className='flex flex-wrap gap-5'>
            { users.map(user=>(
                user.role==='user' && (
                    <AdminUserCard
                    id={user._id}
                    profilePicture={hrjLogo}
                    name={user.name}
                    email={user.email}
                    isBlocked={user.isBlocked}
                    blockUser={handleBlockUser}
                    viewUser={handleViewUser}
                />
                )
            ))}
        </div> */}
    </div>
  )
}

export default AdminManageUser