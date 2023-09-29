import styles from "./Members.module.css";
import { counters } from "./data.js";
import EmployeesCount from "./employeesCount";
import RoboImage from "./roboImg";
import React from "react";
function Members() {
  return (
    <section className={styles.Members}>
      <div className={styles.membersContainer}>
        <RoboImage />
        <section className={styles.employeesContainer}>
          <h1 className={styles.title}>Autono In Numbers</h1>
          <section className={styles.employees}>
            {counters.map((ele) => (
              <EmployeesCount
                key={ele.Id}
                title={ele.title}
                number={ele.number}
              />
            ))}
          </section>
        </section>
      </div>
    </section>
  );
}

export default Members;
