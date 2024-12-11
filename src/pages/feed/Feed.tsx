import useStore from "../../store/useStore";
import PostCard from "../../components/PostCard";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

export const Feed: React.FC = () => {
  const posts = useStore((state) => state.posts);
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4 w-full">
      <div className="flex flex-row justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Posts ({posts.length})</h1>
        <Button
          title='All BookMarks'
          className='bg-cyan-700 text-white dark:bg-gray-500'
          onClick={() => navigate('/bookmarks')}
        />
      </div>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          author={post.author}
          content={post.content}
          image={post.image}
          liked={post.liked}
          bookMarked={post.bookMarked}
        />
      ))}
    </div>
  );
};
