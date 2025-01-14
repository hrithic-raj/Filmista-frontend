// import React, { useEffect } from 'react';
// import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
// // import { fetchRequests, approveRequest, rejectRequest } from './redux/actions'; // Import the actions


// const AdminCelebrityRequestPage = () => {
//   const dispatch = useAppDispatch();
// //   const { requests, loading, error } = useAppSelector((state) => state);

//   useEffect(() => {
//     // dispatch(fetchRequests());
//   }, [dispatch]);

//   const handleApprove = (requestId: string) => {
//     // dispatch(approveRequest(requestId));
//   };

//   const handleReject = (requestId: string) => {
//     // dispatch(rejectRequest(requestId));
//   };

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div className="text-red-500">{error}</div>;
// //   }
// const requests = [
//     {
//         "_id": {
//           "$oid": "678663648913e255ec07cc0d"
//         },
//         "userId": {
//           "$oid": "678634e7b5757bc8cbe54be5"
//         },
//         "proofDocument": "https://res.cloudinary.com/duklokwdi/image/upload/v1736860516/filmista/f3s8iwncdfgi4t7ib1of.pdf",
//         "status": "pending",
//         "createdAt": {
//           "$date": "2025-01-14T13:15:16.294Z"
//         },
//       }
// ]
//   return (
//     <div className="container mx-auto px-4 py-6">
//       <h1 className="text-3xl font-semibold mb-6">Celebrity Requests</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {requests.map((request) => (
//           <div key={request._id} className="border p-4 rounded-lg shadow-lg">
//             <h2 className="text-xl font-medium">{request.name}</h2>
//             <p className="text-sm text-gray-500">{request.email}</p>
//             <div className="mt-4">
//               {request.proofDocument && request.proofDocument.endsWith('.pdf') ? (
//                 <iframe
//                   src={request.proofDocument}
//                   title="Proof Document"
//                   className="w-full h-64"
//                 />
//               ) : (
//                 <img
//                   src={request.proofDocument}
//                   alt="Proof Document"
//                   className="w-full h-64 object-cover"
//                 />
//               )}
//             </div>
//             <div className="mt-4 flex justify-between">
//               <button
//                 onClick={() => handleApprove(request._id)}
//                 className="bg-green-500 text-white py-2 px-4 rounded"
//               >
//                 Approve
//               </button>
//               <button
//                 onClick={() => handleReject(request._id)}
//                 className="bg-red-500 text-white py-2 px-4 rounded"
//               >
//                 Reject
//               </button>
//             </div>
//             {request.status && (
//               <p className={`mt-2 text-sm ${request.status === 'approved' ? 'text-green-500' : 'text-red-500'}`}>
//                 {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminCelebrityRequestPage;