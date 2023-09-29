import Link from "next/link";
import styles from "./Careers.module.css";
import React from "react";
type buttonProps = {
  children: React.ReactNode;
  CustomStyles: React.CSSProperties;
};

function ApplyButton({ children, CustomStyles }: buttonProps) {
  return (
    <div className={styles.readMoreBtn} style={CustomStyles}>
      <Link href="/technology">{children}</Link>
      <div>
        <svg
          preserveAspectRatio="xMidYMid meet"
          data-bbox="19.117 18.918 161.766 162.164"
          viewBox="19.117 18.918 161.766 162.164"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          data-type="shape"
          role="presentation"
          aria-hidden="true"
        >
          <g>
            <path d="M104.133 18.918l-9.431 8.947 61.913 65.269-137.498.938.089 13 138.096-.942-61.338 66.11 9.529 8.842 75.39-81.254-76.75-80.91z"></path>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default ApplyButton;
