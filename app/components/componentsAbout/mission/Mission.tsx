import Image from "next/image";
import styles from "./Mission.module.css";
import worker from "@/public/images/About/worker.jpg";
import React from "react";
function Mission() {
  return (
    <section className={styles.Mission}>
      <section className={styles.missionDescreption}>
        <h5>OUR MISSION</h5>
        <h1>
          Redefining the Way <br />
          We Move
        </h1>
        <div>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <p>
            This is a great space to write a long text about your company and
            your services. You can use this space to go into a little more
            detail about your company. Talk about your team and what services
            you provide.{" "}
          </p>
        </div>
      </section>
      <section className={styles.imgContainer}>
        <Image
          src={worker}
          width={400}
          height={616}
          style={{ borderRadius: "20px" }}
          alt="worker image"
        />
      </section>
    </section>
  );
}

export default Mission;
