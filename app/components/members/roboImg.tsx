"use client";
import styles from "./Members.module.css";
import Image from "next/image";
import RoboHand from "@/public/images/RoboHand/Robot-Hand.jpg";
import roboHandSm from "@/public/images/RoboHand/Robot-Hand-sm.jpg";
import { useState, useEffect } from "react";
import React from "react";
function RoboImage() {
  const [windowWidth, setWindowWidth] = useState(750);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setWindowWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setWindowWidth(window.innerWidth);
      });
    };
  }, []);
  return (
    <div className={styles.imgContainer}>
      <Image
        width={windowWidth < 720 ? 400 : 675}
        height={windowWidth < 720 ? 313 : 760}
        src={windowWidth < 720 ? roboHandSm : RoboHand}
        alt="robot hand"
      />
    </div>
  );
}

export default RoboImage;
