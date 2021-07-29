import PostItem from "./post-item";
import classes from "./posts-grid.module.css";

export default function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul>
      {posts.map((post, index) => (
        <PostItem key={index}/>
      ))}
    </ul>
  );
}
