import styles from "./About.module.css";
import Mission from "../components/componentsAbout/mission/Mission";
import Journey from "../components/componentsAbout/Journey/Journey";
import newsPlatform from "./data";
import Image from "next/image";
import React from "react";
function About() {
  return (
    <section className={styles.aboutPage}>
      <section className={styles.head}>
        <h1>OUR JOURNEY</h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
      </section>
      <Mission />
      <Journey />
      <section className={styles.workers}></section>
      <section className={styles.news}>
        <section className={styles.newsDescreption}>
          <h5>NEWS</h5>
          <h1>Autono In The Press</h1>
        </section>
        <section className={styles.newsPlatform}>
          {newsPlatform.map((ele) => (
            <Image
              src={`/images/About/newsPlatforms/${ele.Image}.jpg`}
              key={ele.Id}
              width={ele.width}
              height={ele.height}
              alt={`news Platform ${ele.Image}`}
            />
          ))}
        </section>
      </section>
    </section>
  );
}

export default About;
