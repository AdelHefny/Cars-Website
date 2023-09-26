"use client"
import Card from "./Card";
import styles from "./Journey.module.css"
import {data} from "./data.js"
import { useRef, useState} from "react"

function Journey() {
    const [group,setGroup] = useState(0);
    const card = useRef(null);
    const addAnimation = ()=>{
        const cardElement: any = card.current;
        return new Promise((resolve)=>{
            cardElement.style.opacity = "0"
            setTimeout(() => {
            cardElement.style.opacity = "1"
            resolve("done");
            }, 500)
        });
    }
    return ( 
        <section className={styles.Journey}>
            <h1 className={styles.JourneyTitle}>Our Journey So Far</h1>
            <section className={styles.journeyCards} ref={card}>
                <button className={`${styles.btn} ${styles.left}`} onClick={()=>{group != 0?addAnimation().then(()=>{setGroup(group - 1)}):null;}}>
                    <img width="32" height="32" src="https://img.icons8.com/windows/32/long-arrow-left.png" alt="long-arrow-left"/>
                </button>
                <button className={`${styles.btn} ${styles.right}`} onClick={()=>{group < data.length - 1?addAnimation().then(()=>{setGroup(group + 1);}):null;}}>
                    <img width="32" height="32" src="https://img.icons8.com/windows/32/long-arrow-right.png" alt="long-arrow-right"/>
                </button>
                {data[group].map((ele,index)=><Card key={index} cardInfo={ele}/>)}
            </section>
        </section>
     );
}

export default Journey;