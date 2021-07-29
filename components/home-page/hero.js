import classes from "./hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.jpg"
          alt="An Image showing Profile"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am TOA</h1>
      <p>
        I write about web development - especially frontend framework like React.
      </p>
    </section>
  );
}
