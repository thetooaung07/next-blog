import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/dist/next-server/lib/head";

export default function HomePage(props) {
  return (
    <>
    <Head>
      <title> TOA&apos;s Blog</title>
      <meta name="description" content="I post about programming and web development" />
    </Head>
      <Hero></Hero>
      <FeaturedPosts posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
   
  };
}
