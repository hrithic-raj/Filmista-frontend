import React, { useEffect, useState } from 'react'
import hrjLogo from '../../../assets/images/hrjlogo.png'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { blockCelebrityById, fetchAllRequests, fetchCelebrities } from '../../../redux/slices/admin/celebrityManagementSlice';
import { FaList } from 'react-icons/fa';
import LoadingPage from '../../../components/LoadingPage';

const AdminManageCelebrity: React.FC = () => {
    const [showBlocked, setShowBlocked] = useState(false);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {celebrities, requests, loading} = useAppSelector((state)=>state.celebrityManagement)
    
    useEffect(()=>{
        dispatch(fetchCelebrities());
        dispatch(fetchAllRequests());
    },[dispatch])

    const handleBlockCelebrity= async (id:string)=>{
        if(id) await dispatch(blockCelebrityById(id));
    }
    const handleViewCelebrity=(id:string)=>{
        navigate(`/admin/celebrities/${id}`);
    }

    // const maxCount = Math.max(requests.length + 5);
    const pendingCount = requests.filter(request => request.status === "pending").length;
  return (
    <div className="relative container w-full mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`fixed inset-0 bg-gray-900 bg-opacity-20 backdrop-blur-sm flex items-center justify-center z-45 ${
    loading ? 'block' : 'hidden'
  }`}/>
      <div className="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-[1fr,3fr] max-h-1/2 gap-4 mb-8">
        <div className="p-7 bg-[rgb(44,44,44)] shadow rounded-lg hover:shadow-md transition">
          <h2 className="text-xl text-center lg:text-left font-semibold text-gray-300">Total Celebrities</h2>
          <p className="text-2xl text-center lg:text-left font-bold text-gray-100">{celebrities?.length}</p>
        </div>
        <div onClick={()=>navigate('/admin/celebrities/requests')} className="flex flex-col gap-2 p-7 lg:order-3 bg-[rgb(44,44,44)] justify-center items-center shadow rounded-lg hover:cursor-pointer hover:shadow-md transition">
          <FaList className='text-3xl text-gray-200'/>
          <h2 className="text-2xl font-semibold text-gray-200 select-none">Requests</h2>
        </div>
        <div className="w-full max-h-[330px] lg:max-h-[330px] bg-[rgb(44,44,44)] shadow rounded-lg hover:shadow-md transition row-span-2 mx-auto font-sans overflow-y-auto custom-scrollbar">
          <h1 className="text-2xl mt-2 font-bold mb-4 text-center text-gray-300">Celebrities and Requests</h1>
          <div className="space-y-4 pb-5">
            {/* Celebrities */}
            <div className="flex items-center pr-5">
              <span className="w-[20%] text-sm text-center font-medium text-blue-600">Celebrities</span>
              <div className="relative flex-1 h-4 bg-gray-200 rounded-lg overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-yellow-400 transition-all duration-500"
                  style={{
                    width: `${(celebrities.length / (celebrities.length || 1)) * 10}%`,
                  }}
                />
              </div>
              <span className="w-[5%] text-sm text-gray-300 text-right">{celebrities.length}</span>
            </div>

            {/* Request Pending */}
            <div className="flex items-center pr-5">
              <span className="w-[20%] text-sm text-center font-medium text-blue-600">Request Pending</span>
              <div className="relative flex-1 h-4 bg-gray-200 rounded-lg overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-yellow-400 transition-all duration-500"
                  style={{
                    width: `${(pendingCount / (requests.length || 1)) * 100}%`,
                  }}
                />
              </div>
              <span className="w-[5%] text-sm text-gray-300 text-right">{pendingCount}</span>
            </div>

            {/* Request Reviewed */}
            <div className="flex items-center pr-5">
              <span className="w-[20%] text-sm text-center font-medium text-blue-600">Request Reviewed</span>
              <div className="relative flex-1 h-4 bg-gray-200 rounded-lg overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-yellow-400 transition-all duration-500"
                  style={{
                    width: `${((requests.length - pendingCount) / (requests.length || 1)) * 100}%`,
                  }}
                />
              </div>
              <span className="w-[5%] text-sm text-gray-300 text-right">{requests.length - pendingCount}</span>
            </div>
          </div>

        </div>
      </div>
      <h3 className="mb-5 font-fredoka text-2xl text-white">Genres</h3>
      <div className="lg:w-[20%] w-[30%] flex justify-between my-5 gap-3">
          <button
            onClick={() => setShowBlocked(false)}
            className={`border w-full h-10 px-1 flex items-center justify-center rounded-lg text-lg ${
              showBlocked
                ? "text-gray-400 border-gray-500"
                : "text-gray-200 border-gray-200"
            }`}
          >
            Celebrities
          </button>
          <button
            onClick={() => setShowBlocked(true)}
            className={`border w-full h-10 px-1 flex items-center justify-center rounded-lg text-lg ${
              showBlocked
                ? "text-gray-200 border-gray-200"
                : "text-gray-400 border-gray-500"
            }`}
          >
            Blocked
          </button>
        </div>
        <div className="w-full">
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
                !showBlocked ? (
                  celebrities.map((celebrity) => {
                    if (typeof celebrity.userId !== 'string' && !celebrity.userId.isBlocked) {
                      return (
                        <div className='bg-[rgb(44,44,44)] rounded-xl py-1'>
                            <tr className='w-[100%] flex items-center text-center'>
                                <td onClick={()=>handleViewCelebrity(celebrity._id)} className='w-[20%] flex justify-center cursor-pointer'>
                                    <img src={celebrity.userId.profilePicture || hrjLogo} className='w-12 h-12 object-cover rounded-full border' alt="" />
                                </td>
                                <td onClick={()=>handleViewCelebrity(celebrity._id)} className="w-[20%] text-gray-300 rounded-[16px] font-['Geologica'] cursor-pointer">{celebrity.userId.name}</td>
                                <td className="w-[20%] text-gray-300 rounded-[16px] font-['Geologica']">{celebrity.userId.email}</td>
                                <td className='w-[20%]'>
                                    <button
                                        onClick={(e) => {
                                        e.stopPropagation();
                                        handleBlockCelebrity(celebrity._id);
                                        }}
                                        className="px-3 py-1 border border-[#fefefe] text-white rounded-[16px] font-['Geologica'] hover:text-[#5cfef0] hover:border-[#5cfef0]"
                                    >
                                        {celebrity.userId.isBlocked?'UNBLOCK':'BLOCK'}
                                    </button>
                                </td>
                                <td className='w-[20%]'>
                                    <button
                                        onClick={(e) => {
                                        e.stopPropagation();
                                        handleViewCelebrity(celebrity._id);
                                        }}
                                        className="px-3 py-1 border border-[#fefefe] text-white rounded-[16px] font-['Geologica'] hover:text-[#5cfef0] hover:border-[#5cfef0]"
                                    >
                                        VIEW
                                    </button>
                                </td>
                            </tr>
                        </div>
                      );
                    }
                    return null;
                  })
                ):(
                  celebrities.map((celebrity) => {
                    if (typeof celebrity.userId !== 'string' && celebrity.userId.isBlocked) {
                      return (
                        <div className='bg-[rgb(44,44,44)] rounded-xl py-1'>
                            <tr className='w-[100%] flex items-center text-center'>
                                <td onClick={()=>handleViewCelebrity(celebrity._id)} className='w-[20%] flex justify-center cursor-pointer'>
                                    <img src={celebrity.userId.profilePicture || hrjLogo} className='w-12 h-12 object-cover rounded-full border' alt="" />
                                </td>
                                <td onClick={()=>handleViewCelebrity(celebrity._id)} className="w-[20%] text-gray-300 rounded-[16px] font-['Geologica'] cursor-pointer">{celebrity.userId.name}</td>
                                <td className="w-[20%] text-gray-300 rounded-[16px] font-['Geologica']">{celebrity.userId.email}</td>
                                <td className='w-[20%]'>
                                    <button
                                        onClick={(e) => {
                                        e.stopPropagation();
                                        handleBlockCelebrity(celebrity._id);
                                        }}
                                        className="px-3 py-1 border border-[#fefefe] text-white rounded-[16px] font-['Geologica'] hover:text-[#5cfef0] hover:border-[#5cfef0]"
                                    >
                                        {celebrity.userId.isBlocked?'UNBLOCK':'BLOCK'}
                                    </button>
                                </td>
                                <td className='w-[20%]'>
                                    <button
                                        onClick={(e) => {
                                        e.stopPropagation();
                                        handleViewCelebrity(celebrity._id);
                                        }}
                                        className="px-3 py-1 border border-[#fefefe] text-white rounded-[16px] font-['Geologica'] hover:text-[#5cfef0] hover:border-[#5cfef0]"
                                    >
                                        VIEW
                                    </button>
                                </td>
                            </tr>
                        </div>
                      );
                    }
                    return null;
                  })
                )
              }
          </div>
  {/* {!showBlocked ? (
    celebrities.map((celebrity) => {
      if (typeof celebrity.userId !== 'string' && !celebrity.userId.isBlocked) {
        return (
          <AdminCelebrityCard
            key={celebrity._id}
            _id={celebrity._id as string}
            profilePicture={hrjLogo}
            name={celebrity.userId.name}
            email={celebrity.userId.email}
            isBlocked={celebrity.userId.isBlocked}
            block={()=>handleBlockCelebrity(celebrity.userId._id)}
            view={handleViewCelebrity}
          />
        );
      }
      return null;
    })
  ) : (
    celebrities.map((celebrity) => {
      if (typeof celebrity.userId !== 'string' && celebrity.userId.isBlocked) {
        return (
          <AdminCelebrityCard
            key={celebrity._id}
            _id={celebrity.userId._id}
            profilePicture={hrjLogo}
            name={celebrity.userId.name}
            email={celebrity.userId.email}
            isBlocked={celebrity.userId.isBlocked}
            block={()=>handleBlockCelebrity(celebrity.userId._id)}
            view={handleViewCelebrity}
          />
        );
      }
      return null;
    })
  )} */}
</div>

      {loading&& <LoadingPage/>}
    </div>
  )
}

export default AdminManageCelebrity