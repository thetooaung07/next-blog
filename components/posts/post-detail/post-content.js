import PostHeader from "./post-header";
import classes from "./post-content.module.css"
import ReactMarkdown from "react-markdown";

const Dummy_Post = {
  title: "Getting started with NextJS",
  image: "getting-started-nextjs.png",
  date: "2022-02-10",
  slug: "getting-started-with-nextjs",
  content: '# This is the first post'
};

export default function PostContent() {
   const imagePath = `/images/posts/${Dummy_Post.slug}/${Dummy_Post.image}`
  return (
    <article className={classes.content}>
      <PostHeader title={Dummy_Post.title} image={imagePath}></PostHeader>
     <ReactMarkdown>{Dummy_Post.content}</ReactMarkdown>
    </article>
  );
}
