import Head from "./Head";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={`${styles.about} animeUp`}>
      <Head
        title="placeProducts | About"
        description="A Story of how us founded this company"
      />
      <h1>
        About <span>Us.</span>
      </h1>
      <p>
        A simple project looking to improve my knowledge and skills in ReactJS.
        I use the{" "}
        <a href="https://fakestoreapi.com/" target="_blank">
          Fake Store API
        </a>{" "}
        to pull products, perform authentication and among other features.
      </p>
      <p>Follow me in Github</p>
      <a
        href="https://github.com/gabriuda/"
        className={styles.github}
        target="_blank"
      >
        Github
      </a>
    </section>
  );
};

export default About;
