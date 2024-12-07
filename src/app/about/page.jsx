import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <h1>About AboutPage
      </h1>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/15350413/pexels-photo-15350413/free-photo-of-flores-de-primavera-en-las-ramas.jpeg" alt="about image" fill/>
      </div>
    </div>
  );
}

export default AboutPage;