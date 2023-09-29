import Image from "next/image";
import AutonoCar from "../components/componentsTech/AutonoCar/AutonoCar";
import Products from "../components/componentsTech/products/Products";
import styles from "./tech.module.css";
import headImg from "@/public/images/technology/headImg.jpg";
import React from "react";
function Technology() {
  return (
    <section>
      <section className={styles.techPage}>
        <div className={styles.head}>
          <div>
            <h1>PERCEPTION ENABLED</h1>
            <h1>TECHNOLOGY</h1>
          </div>
          <Image src={headImg} width={1349} height={1060} alt="car image" />
        </div>
        <div className={styles.content}>
          <p>Click here to edit this paragraph and add your own </p>
          <p>content. This is a great place to expand on the title and </p>
          <p>any relevant details or information.</p>
        </div>
      </section>
      <AutonoCar />
      <Products />
    </section>
  );
}

export default Technology;
