import styles from "./Industry.module.css";
import { data } from "./data.js";
import ServiceCard from "./serviceCard";
import React from "react";
function Industry() {
  return (
    <section className={styles.Industry}>
      <section className={styles.partners}>
        <h3>INDUSTRY</h3>
        <h1>
          Our <br />
          Partners
        </h1>
        <p>
          Click here to add your own content and customize the text. This is a
          great place to tell a story about your company and let your users know
          a little more about the company's history, the team's background, or
          any other information you'd like to share. Just click "Edit Text" to
          get started.
        </p>
      </section>
      <section className={styles.features}>
        {data.map((ele) => (
          <ServiceCard key={ele.id} card={ele} />
        ))}
      </section>
    </section>
  );
}

export default Industry;
