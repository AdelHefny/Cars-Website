"use client";

import React from "react";
import Link from "next/link";
import "./header.css";
import { MutableRefObject, useEffect, useState, useRef, Suspense } from "react";

function Nav() {
  const nav = useRef() as MutableRefObject<HTMLDivElement>;
  const hamburger = useRef() as MutableRefObject<HTMLButtonElement>;
  let lastMove = 0;
  let change = 0;
  function onScroll() {
    if (typeof window !== "undefined") {
      if (typeof window === "object") {
        if (window.innerWidth < 720) {
        } else if (window.scrollY > 0) {
          nav.current.style.backgroundColor = "white";
        } else {
          nav.current.style.backgroundColor = "transparent";
        }
        if (
          window.scrollY > lastMove &&
          nav.current.style.transform == "translate(0px, -100%)"
        ) {
          change = 0;
        } else if (
          window.scrollY < lastMove &&
          nav.current.style.transform == "translate(0px, 0px)"
        ) {
          change = 0;
        } else if (window.scrollY > lastMove) {
          change += window.scrollY - lastMove;
          if (change >= 400) {
            nav.current.style.transform = "translate(0,-100%)";
            change = 0;
          }
        } else if (window.scrollY < lastMove) {
          change += window.scrollY - lastMove;
          if (change <= -200) {
            nav.current.style.transform = "translate(0,0)";
            change = 0;
          }
        }
        lastMove = window.scrollY;
      }
    }
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", onScroll);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [window.scrollY]);
  return (
    <Suspense fallback={<h1>loading</h1>}>
      <nav className="nav" ref={nav}>
        <Link href="/" className="autono">
          <h3>AUTONO</h3>
        </Link>
        <ul className="nav-list">
          <li>
            <Link href="/technology">Technology</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/careers">Careers</Link>
          </li>
          <li>
            <button className="Btn">Subscribe</button>
          </li>
        </ul>
        <button
          ref={hamburger}
          className="burgerBtn"
          onClick={() => {
            hamburger.current.classList.toggle("active");
          }}
        >
          <div className="burger"></div>
          <div className="mobNav">
            <ul className="nav-list-mob">
              <li>
                <Link href="/technology">Technology</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <button className="Btn">Subscribe</button>
              </li>
            </ul>
          </div>
        </button>
      </nav>
    </Suspense>
  );
}

export default Nav;
