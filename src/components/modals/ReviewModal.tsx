import { useState } from "react";
import { addReview } from "../../redux/slices/user/reviewSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";

interface ReviewModalProps {
  movieId: string;
  onClose: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ movieId, onClose }) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    if (!title || !content) return alert("Both fields are required!");
    dispatch(addReview({ movieId, title, content }));
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pl-0 sm:pl-[70px] lg:pl-[257px] bg-black bg-opacity-50">
      <div className="flex flex-col bg-[rgb(44,44,44)] p-6 rounded-lg w-[80%] lg:w-[50%]">
        <h2 className="text-xl text-gray-200 font-bold mb-4">Write a Review</h2>
        <input
          type="text"
          placeholder="Review Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-gray-200 p-2 mb-2 border rounded"
        />
        <textarea
          placeholder="Review Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full min-h-32 bg-gray-200 p-2 mb-2 border rounded"
        />
        <div className="flex gap-2 justify-end pt-2">
            <button
                onClick={onClose}
                className="ml-2 bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
            >
                Cancel
            </button>
            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Submit
            </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
