import styles from "./Careers.module.css";
import Jobs from "../components/componentsCareers/jobs";
import Location from "../components/componentsCareers/location";

function Careers() {
  return (
    <section className={styles.Careers}>
      <section className={styles.head}>
        <h1>
          WE MAKE <br />
          BIG IDEAS HAPPEN
        </h1>
        <p>Join Us for the Ride</p>
      </section>
      <Location />
      <Jobs />
    </section>
  );
}

export default Careers;
