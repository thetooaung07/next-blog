import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const Dummy_Posts = [
  {
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a production Fullstack framework for Reactjs - it supports both SSR and SSG ",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a production Fullstack framework for Reactjs - it supports both SSR and SSG ",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a production Fullstack framework for Reactjs - it supports both SSR and SSG ",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  },
  {
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJs is a production Fullstack framework for Reactjs - it supports both SSR and SSG ",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero></Hero>
      <FeaturedPosts posts={Dummy_Posts} />
    </>
  );
}
