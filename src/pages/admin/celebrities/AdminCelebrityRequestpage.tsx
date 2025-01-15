import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { fetchAllRequests, reviewCelebrityRequests } from '../../../redux/slices/admin/celebrityManagementSlice';
// import { fetchRequests, approveRequest, rejectRequest } from './redux/actions'; // Import the actions


const AdminCelebrityRequestPage = () => {
  const dispatch = useAppDispatch();
  const { requests, loading, error } = useAppSelector((state) => state.celebrityManagement);
    const [showReviewdReq, setShowReviewdReq] = useState(false);
  useEffect(() => {
    dispatch(fetchAllRequests());
  }, [dispatch]);

  const handleReviewRequest = (requestId: string, status:string) => {
    dispatch(reviewCelebrityRequests({requestId, status}));
  };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }


return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold mb-6 text-gray-200">Celebrity Requests</h1>
        <div className="lg:w-[20%] w-[30%] flex justify-between my-5 gap-3">
          <button
            onClick={() => setShowReviewdReq(false)}
            className={`border w-full h-10 px-1 flex items-center justify-center rounded-lg text-lg ${
                showReviewdReq
                ? "text-gray-400 border-gray-500"
                : "text-gray-200 border-gray-200"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setShowReviewdReq(true)}
            className={`border w-full h-10 px-1 flex items-center justify-center rounded-lg text-lg ${
                showReviewdReq
                ? "text-gray-200 border-gray-200"
                : "text-gray-400 border-gray-500"
            }`}
            >
            Reviwed
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {!showReviewdReq && requests.map((request) => (
            request.status==='pending' && (
                <div key={request._id} className="border p-4 rounded-lg shadow-lg">
            {/* <h2 className="text-xl font-medium">{request.name}</h2> */}
            {/* <p className="text-sm text-gray-500">{request.email}</p> */}
            <div className="mt-4">
              {request.proofDocument && request.proofDocument.endsWith('.pdf') ? (
                  <iframe
                  src={request.proofDocument.replace('/upload/', '/upload/fl_attachment/raw/')}
                  title="Proof Document"
                  className="w-full h-64"
                  />
                ) : (
                    <img
                    src={request.proofDocument}
                    alt="Proof Document"
                    className="w-full h-64 object-cover"
                    />
              )}
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handleReviewRequest(request._id, "approved")}
                className="bg-green-500 text-white py-2 px-4 rounded"
              >
                Approve
              </button>
              <button
                onClick={() => handleReviewRequest(request._id, "rejected")}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Reject
              </button>
            </div>
            {/* {request.status && (
              <p className={`mt-2 text-sm ${request.status === 'approved' ? 'text-green-500' : 'text-red-500'}`}>
                {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
              </p>
            )} */}
          </div>
          )
        ))}
        {showReviewdReq && requests.map((request) => (
            request.status!=='pending' && (
                <div key={request._id} className="border p-4 rounded-lg shadow-lg">
            {/* <h2 className="text-xl font-medium">{request.name}</h2> */}
            {/* <p className="text-sm text-gray-500">{request.email}</p> */}
            <div className="mt-4">
              {request.proofDocument && request.proofDocument.endsWith('.pdf') ? (
                  <iframe
                  src={request.proofDocument.replace('/upload/', '/upload/fl_attachment/raw/')}
                  title="Proof Document"
                  className="w-full h-64"
                  />
                ) : (
                    <img
                    src={request.proofDocument}
                    alt="Proof Document"
                    className="w-full h-64 object-cover"
                    />
              )}
            </div>
            {request.status && (
              <p className={`mt-2 text-sm ${request.status === 'approved' ? 'text-green-500' : 'text-red-500'}`}>
                {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
              </p>
            )}
          </div>
          )
        ))}
      </div>
    </div>
  );
};

export default AdminCelebrityRequestPage;