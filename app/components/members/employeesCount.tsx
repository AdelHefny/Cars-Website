import styles from "./Members.module.css";
import React from "react";
type EmployeesCountProps = {
  title: string;
  number: string;
};

function EmployeesCount({ title, number }: EmployeesCountProps) {
  return (
    <section className={styles.count}>
      <h1 className={styles.heiglited}>{number}</h1>
      <h5>{title}</h5>
    </section>
  );
}

export default EmployeesCount;
