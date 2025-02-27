import Link from "next/link";
import Illustration from "../components/Illustration";
import styles from "../styles/HomePage.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  // description: "Welcome back!",
}

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>I AUTOMATE</h1>
          <h1>I DEPLOY</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Rotimi Oluwafemi</h1>
            <h6 className={styles.bio}>Full Stack Web Developer</h6>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
          </div>
          <div className={styles.illustrationCointainer}>
            <div className={`${styles.box}`}></div>
            <img
              className={styles.illustration}
              src="/profile.png"
              id="profile"
              alt="image"
            />

            {/* <div className="geometric-box">sdfc</div> */}
          </div>
          {/* <Illustration className={styles.illustration} /> */}
        </div>
      </div>
    </>
  );
}