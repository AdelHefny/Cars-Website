import "./home.css";
import React from "react";
function Vision() {
  return (
    <div className="visionPage">
      <div className="vision">
        <section className="visionContent">
          <h6>VISION</h6>
          <div className="highlighted">
            <h3>
              We’re Changing the
              <br /> Way the World Thinks
              <br /> About Cars
            </h3>
          </div>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
        </section>
        <img
          src="https://static.wixstatic.com/media/c837a6_ea5eeb99f72d42b0a22f459e01bfd33c~mv2.jpg/v1/fill/w_599,h_840,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_ea5eeb99f72d42b0a22f459e01bfd33c~mv2.jpg"
          className="carImg"
        />
      </div>
    </div>
  );
}

export default Vision;
