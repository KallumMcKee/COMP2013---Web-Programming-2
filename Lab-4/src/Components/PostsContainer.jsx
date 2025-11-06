import PostCard from "./PostCard";

export default function PostsContainer({ data }) {
  // sorts newest post comes first
  const sortedPosts = [...data].sort((a, b) => b.id - a.id);

  return (
    <div>
      {sortedPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
