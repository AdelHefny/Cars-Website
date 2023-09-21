"use client"
import styles from "./Members.module.css"
import Image from "next/image";
import RoboHand from "@/public/images/Robot-Hand.jpg"
import roboHandSm from "@/public/images/Robot-Hand-sm.jpg"

function RoboImage() {
    return ( 
        <div className={styles.imgContainer}>
            <Image
            width={window.outerWidth < 720?400:675}
            height={window.outerWidth < 720?313:760}
            src={window.outerWidth < 720?roboHandSm:RoboHand}
            alt="robot hand" />
        </div>
     );
}

export default RoboImage;