import styles from "./footer.module.css";
import React from "react";

function SubButton() {
  return (
    <div className={styles.SubContainer}>
      <input type="text" className={styles.subInput} />
      <button className={styles.subBtn}>Subscribe</button>
    </div>
  );
}

export default SubButton;
