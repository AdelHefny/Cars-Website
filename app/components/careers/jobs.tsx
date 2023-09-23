"use client"
import ApplyButton from "./Button";
import styles from "./Careers.module.css"
import JobsBtn from "./JobsBtn";
import {jobs} from "./data.js"
import React, { useState } from 'react';

function Jobs() {
    const [current, setCurrent] = useState(0);
    return ( 
        <section className={styles.jobs}>
            <section className={styles.jobsBtns}>
                {jobs.map((ele,index)=><JobsBtn key={jobs[index].id} val={index} setCurrent={setCurrent} current={current}/>)}
            </section>
            <section className={styles.job}>
                <h1>{jobs[current].title}</h1>
                <section className={styles.jobDescription}>
                    <span style={{color:"gray"}}>{jobs[current].location}</span>
                    <p>{jobs[current].description}</p>
                    <ApplyButton CustomStyles={{paddingTop:"3rem",border:"none",paddingLeft:"0rem"}}>
                        Apply Now
                    </ApplyButton>
                </section>
            </section>
        </section>
     );
}

export default Jobs;