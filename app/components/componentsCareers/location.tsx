import Image from "next/image";
import styles from "../Careers.module.css";
import buildings from "@/public/images/Careers/buildings.jpg";

function Location() {
  return (
    <section className={styles.location}>
      <section className={styles.locationDescription}>
        <h5>LOCATION</h5>
        <h1>We’re based in San Francisco’s innovation hub</h1>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I’m a great place for you to
          tell a story and let your users know a little more about you.
        </p>
      </section>
      <section className={styles.imageContainer}>
        <Image src={buildings} width={578} height={651} alt="building image" />
      </section>
    </section>
  );
}

export default Location;
