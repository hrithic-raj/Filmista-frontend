import React, { useEffect, useState } from 'react'
import AdminUserCard from '../../../components/Admin/AdminUserCard';
import hrjLogo from '../../../assets/images/hrjlogo.png'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { fetchUsers } from '../../../redux/slices/admin/userManagementSlice';
import { RootState } from '@reduxjs/toolkit/query';

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
    console.log("page",users);
    // const users = [
    //     {
    //         _id: "6777cae081d216a8b8389b67",
    //         name: "hrithic raj",
    //         email: "hrjpunda@gmail.com","otp": "909588",
    //     },
    //     {
    //         _id: "6777cae081d216a8b8389b67",
    //         name: "hrithic raj",
    //         email: "hrjpunda@gmail.com","otp": "909588",
    //     },
    //     {
    //         _id: "6777cae081d216a8b8389b67",
    //         name: "hrithic raj",
    //         email: "hrjpunda@gmail.com","otp": "909588",
    //     },
    //     {
    //         _id: "6777cae081d216a8b8389b67",
    //         name: "hrithic raj",
    //         email: "hrjpunda@gmail.com","otp": "909588",
    //     },
    //     {
    //         _id: "6777cae081d216a8b8389b67",
    //         name: "hrithic raj",
    //         email: "hrjpunda@gmail.com","otp": "909588",
    //     },
    //     {
    //         _id: "6777cae081d216a8b8389b67",
    //         name: "hrithic raj",
    //         email: "hrjpunda@gmail.com","otp": "909588",
    //     },
    //     {
    //         _id: "6777cae081d216a8b8389b67",
    //         name: "hrithic raj",
    //         email: "hrjpunda@gmail.com","otp": "909588",
    //     },
    //     {
    //         _id: "6777cae081d216a8b8389b67",
    //         name: "hrithic raj",
    //         email: "hrjpunda@gmail.com","otp": "909588",
    //     },
    // ];
    const handleBlockUser=(id:string)=>{
        console.log(`User ${id} Blocked`)
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
                    blockUser={handleBlockUser}
                    viewUser={handleViewUser}
                />
            ))}
        </div>
    </div>
  )
}

export default AdminManageUser