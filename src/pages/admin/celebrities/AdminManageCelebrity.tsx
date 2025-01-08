import React, { useState } from 'react'
import AdminUserCard from '../../../components/Admin/AdminUserCard';
import hrjLogo from '../../../assets/images/hrjlogo.png'
import { useNavigate } from 'react-router-dom';

const AdminManageCelebrity: React.FC = () => {
    const [hovered, setHovered] = useState(false);
    const navigate = useNavigate();
    const celebrities = [
        {
            _id: "6777cae081d216a8b8389b67",
            name: "hrithic raj",
            email: "hrjpunda@gmail.com","otp": "909588",
        },
        {
            _id: "6777cae081d216a8b8389b67",
            name: "hrithic raj",
            email: "hrjpunda@gmail.com","otp": "909588",
        },
        {
            _id: "6777cae081d216a8b8389b67",
            name: "hrithic raj",
            email: "hrjpunda@gmail.com","otp": "909588",
        },
        {
            _id: "6777cae081d216a8b8389b67",
            name: "hrithic raj",
            email: "hrjpunda@gmail.com","otp": "909588",
        },
        {
            _id: "6777cae081d216a8b8389b67",
            name: "hrithic raj",
            email: "hrjpunda@gmail.com","otp": "909588",
        },
        {
            _id: "6777cae081d216a8b8389b67",
            name: "hrithic raj",
            email: "hrjpunda@gmail.com","otp": "909588",
        },
        {
            _id: "6777cae081d216a8b8389b67",
            name: "hrithic raj",
            email: "hrjpunda@gmail.com","otp": "909588",
        },
        {
            _id: "6777cae081d216a8b8389b67",
            name: "hrithic raj",
            email: "hrjpunda@gmail.com","otp": "909588",
        },
    ];
    const handleBlockUser=(id:string)=>{
        console.log(`User ${id} Blocked`)
    }
    const handleViewCelebrity=(id:string)=>{
        navigate(`/admin/celebrities/${id}`);
    }
  return (
    <div className=''>
        <h3 className='mb-5 font-fredoka text-2xl text-white'>Celebrities</h3>
        <div className='flex flex-wrap gap-5'>
        {celebrities.map(celebrity=>(
            <AdminUserCard
                id={celebrity._id}
                profilePicture={hrjLogo}
                name={celebrity.name}
                email={celebrity.email}
                blockUser={handleBlockUser}
                viewUser={handleViewCelebrity}
            />
        ))}
        </div>
    </div>
  )
}

export default AdminManageCelebrity