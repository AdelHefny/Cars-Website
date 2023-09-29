import styles from "./footer.module.css";
import { data } from "./data.js";
import Image from "next/image";
import Link from "next/link";
import SubButton from "./SubButton";
import React from "react";
function Footer() {
  return (
    <section className={styles.footer}>
      <section className={styles.INFORMATION}>
        <Link
          style={{ scrollBehavior: "smooth" }}
          href="#home"
          className={styles.autono}
        >
          <h3>AUTONO</h3>
        </Link>
        <section className={styles.container}>
          <section className={styles.contactInfoContainer}>
            <section className={styles.navigator}>
              <Link href={"/technology"}>Technology</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/careers"}>Careers</Link>
            </section>
            <section className={styles.contactInfo}>
              <p>Tel: 123-456-7890</p>
              <p>Email: info@mysite.com</p>
              <p>
                500 Terry Francine St <br />
                San Francisco, CA 94158
              </p>
            </section>
          </section>
          <section className={styles.Subscribe}>
            <h3>SUBSCRIBE</h3>
            <p>Sign up to receive Autono news and updates.</p>
            <p>Email*</p>
            <SubButton />
          </section>
        </section>
      </section>
      <section className={styles.credits}>
        <p>
          © {new Date(Date.now()).getFullYear()} by Autono. Powered and secured
          by Adel
        </p>
        <section className={styles.socialMedia}>
          {data.map((ele) => (
            <a target="_blank" key={ele.Id} href={`https://${ele.link}`}>
              <Image
                src={`/images/Social-Media/${ele.title}.png`}
                width={25}
                height={25}
                alt={`${ele.title}`}
              />
            </a>
          ))}
        </section>
      </section>
    </section>
  );
}

export default Footer;
