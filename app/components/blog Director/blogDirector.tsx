import Link from "next/link";
import "./blogDirector.css";
import React from "react";
function BlogDirector() {
  return (
    <section className="blogDirector">
      <div className="blogDirectorPadding">
        <div className="whyAuto">
          <div className="contentAuto">
            <h3>WHY AUTONO</h3>
            <h1>
              A different approach, <br />
              using a new method of <br />
              manufacturing.
            </h1>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <div className="readMoreBtnBlog">
              <Link href="/blog ">Read More</Link>
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDirector;
