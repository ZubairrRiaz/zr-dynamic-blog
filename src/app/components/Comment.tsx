"use client";
import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";

const CommentSection = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingText, setEditingText] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  const handleEditComment = (index: number) => {
    setEditingIndex(index);
    setEditingText(comments[index]);
  };

  const handleUpdateComment = () => {
    if (editingIndex !== null) {
      const updatedComments = comments.map((comment, index) =>
        index === editingIndex ? editingText : comment
      );
      setComments(updatedComments);
      setEditingIndex(null);
      setEditingText("");
    }
  };

  return (
    <div className="comment-section py-20 md:py-32 lg:py-48">
  <h2 className="text-2xl font-bold mb-4">Comments</h2>
  <div className="mb-4">
    <input
      type="text"
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
      placeholder="Add a comment"
      className="border p-2 w-full rounded"
    />
    <button
      onClick={handleAddComment}
      className="bg-blue-500 text-white p-2 mt-2 rounded-lg w-full md:w-auto"
    >
      Add Comment
    </button>
  </div>
  <ul>
    {comments.map((comment, index) => (
      <li
        key={index}
        className={`mb-2 transform transition-all duration-300 ease-in-out ${
          editingIndex === index ? 'opacity-100' : 'opacity-80'
        }`}
      >
        {editingIndex === index ? (
          <div className="transition-opacity opacity-100">
            <input
              type="text"
              value={editingText}
              onChange={(e) => setEditingText(e.target.value)}
              className="border p-2 w-full"
            />
            <button
              onClick={handleUpdateComment}
              className="bg-green-500 rounded text-white p-2 mt-2 w-full md:w-auto"
            >
              Update
            </button>
          </div>
        ) : (
          <div className="flex bg-gray-100 p-2 rounded-md flex-col justify-start md:flex-row md:justify-between items-center w-full transition-all transform duration-300 ease-in-out">
            <div className="flex flex-col justify-start w-full">
              <span className="flex items-center gap-1 font-bold font-serif">
                <FaCircleUser size={40} /> Comment {index + 1}
              </span>
              <p className="text-wrap break-all">{comment}</p>
            </div>

            <div className="flex mt-2 md:mt-0 justify-end w-full">
              <button
                onClick={() => handleEditComment(index)}
                className="bg-yellow-500 rounded text-white p-2 md:text-base text-sm mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteComment(index)}
                className="bg-red-500 rounded text-white p-2 md:text-base text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </li>
    ))}
  </ul>
</div>


  );
};

export default CommentSection;

