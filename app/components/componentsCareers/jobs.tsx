import Image from "next/image";
import styles from "../../careers/Careers.module.css";
import highWay from "@/public/images/Careers/highWay.jpg";
import { jobs } from "@/app/components/careers/data";
import JobCard from "./jobCard";
import ApplyButton from "@/app/components/careers/Button";
import Button from "./button";
import React from "react";

function Jobs() {
  return (
    <section className={styles.Jobs}>
      <section className={styles.openings}>
        <section className={styles.openingsDescription}>
          <h5>JOB OPENINGS</h5>
          <h1>
            Changing the future of transportation means thinking differently.
          </h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </section>
        <section>
          <Image src={highWay} width={578} height={651} alt="high way image" />
        </section>
      </section>
      <section>
        <section className={styles.jobs}>
          {jobs.map((ele) => (
            <JobCard key={ele.id} cardData={ele} />
          ))}
          <section className={styles.cvSubmit}>
            <h1>
              Didn't find the position you're looking for?
              <br /> Send us your CV
            </h1>
            <Button
              CustomStyles={{
                paddingTop: "3rem",
                border: "none",
                paddingLeft: "0rem",
                backgroundColor: "white",
                color: "black",
              }}
            >
              Submit
            </Button>
          </section>
        </section>
        <section></section>
      </section>
    </section>
  );
}

export default Jobs;
