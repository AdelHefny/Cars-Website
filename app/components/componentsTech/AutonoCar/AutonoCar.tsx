import Image from "next/image";
import styles from "./Autono.module.css";
import autonoCar from "@/public/images/technology/autonoCar.jpg";
import React from "react";
function AutonoCar() {
  return (
    <section className={styles.CarFeatures}>
      <section className={styles.carDescription}>
        <section>
          <h5>THE AUTONO CAR</h5>
          <h1>
            Using groundbreaking perception-enabled sensor technology, the
            Autono car is a fully driverless vehicle engineered to the highest
            degree of precision and safety. It’s autonomous driving reimagined.
          </h1>
        </section>
        <Image src={autonoCar} width={675} height={840} alt="cars image" />
      </section>
      <section className={styles.carTech}>
        <section>
          <h5>HUMAN-CENTERED DESIGN</h5>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </section>
        <section>
          <h5>​LOW EMISSIONS & EFFICIENCY</h5>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </section>
      </section>
    </section>
  );
}

export default AutonoCar;
