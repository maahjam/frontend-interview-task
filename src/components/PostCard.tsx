import React from 'react';
import useStore from "../store/useStore";
import NoImage from "./NoImage";
import ReportModal from "./ReportModal";
import Button from "./Button";
import { Post } from "../types/post";

const PostCard: React.FC<Post> = ({
  id,
  author,
  content,
  image,
  liked,
  bookMarked,
}) => {
  const { toggleLike, toggleBookmark } = useStore((state) => state);

  const getButtonClasses = (active: boolean, type: "like" | "bookmark") => {
    const baseClasses = "text-white rounded px-4 py-2 text-cyan-100";
    if (type === "like") {
      return active ? `${baseClasses} bg-cyan-500` : `${baseClasses} bg-cyan-700 dark:bg-gray-500`;
    }
    if (type === "bookmark") {
      return active ? `${baseClasses} bg-cyan-500` : `${baseClasses} bg-cyan-700 dark:bg-gray-500`;
    }
  };

  const getButtonTitle = (active: boolean, type: "like" | "bookmark") => {
    return type === "like" ? (active ? "Unlike" : "Like") : active ? "Unbookmark" : "Bookmark";
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-4 mb-4">
      <h2 className="font-bold text-lg">{author}</h2>
      <p className="my-2">{content}</p>
      {image ? (
        <img
          src={image}
          alt="Post"
          className="w-full h-96 object-cover mb-2 rounded"
        />
      ) : (
        <NoImage className="w-full h-96 mb-2 rounded" />
      )}
      <div className="flex justify-start items-center gap-2">
        <Button
          title={getButtonTitle(liked, "like")}
          className={getButtonClasses(liked, "like")}
          onClick={() => toggleLike(id)}
          aria-label={liked ? "Unlike this post" : "Like this post"}
        />
        <Button
          title={getButtonTitle(bookMarked as boolean, "bookmark")}
          className={getButtonClasses(bookMarked as boolean, "bookmark")}
          onClick={() => toggleBookmark(id)}
          aria-label={bookMarked ? "Remove bookmark" : "Bookmark this post"}
        />
        <ReportModal />
      </div>
    </div>
  );
};


export default PostCard;
