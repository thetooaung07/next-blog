import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-util";
import Head from "next/dist/next-server/lib/head";





export default function AllPostsPage(props) {
   return (

    <>

    <Head>
      <title>All Posts</title>
      <meta name="description" content="List of all programming related posts" />
    </Head>
      <AllPosts posts={props.posts}></AllPosts>

    </>
   )
}

export function getStaticProps() {
  const allPosts =  getAllPosts();
  return {
    props: {
      posts: allPosts
    }
  }
}