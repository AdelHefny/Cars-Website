import Button from "./basicComponents/btn";
import "./services.css";
import React from "react";
function Service() {
  return (
    <section className="services">
      <section className="autoHeadSer">
        <section className="headSer">
          <h6>SERVICES</h6>
          <h3>
            We Deliver Exceptional <br />
            Products and Services <br />
            Around the World
          </h3>
        </section>
        <section className="auto">
          <section className="autoDisc">
            <h1>
              AUTONOMOUS <br />
              DRIVING
            </h1>
            <p>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </p>
            <Button />
          </section>
          <img
            fetchPriority="high"
            src="https://static.wixstatic.com/media/84770f_3cc097e7503b4ed498e350c6618ef956~mv2.jpg/v1/fill/w_675,h_680,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_3cc097e7503b4ed498e350c6618ef956~mv2.jpg"
            alt=""
          />
        </section>
      </section>
      <section className="RealTime">
        <img
          fetchPriority="high"
          src="https://static.wixstatic.com/media/84770f_abca8ce0bac24971a57d1f9d40b8238b~mv2.jpg/v1/fill/w_675,h_680,al_r,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_abca8ce0bac24971a57d1f9d40b8238b~mv2.jpg"
          alt=""
        />
        <section className="autoDisc">
          <h1>
            REAL-TIME <br />
            INFORMATION
          </h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <Button />
        </section>
      </section>
      <section className="perception">
        <section className="autoDisc">
          <h1>
            PERCEPTION <br />
            ENABLED
          </h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. I’m a great place for you to
            tell a story and let your users know a little more about you.
          </p>
          <Button />
        </section>
        <img
          src="https://static.wixstatic.com/media/c837a6_305ff8a7722a479ab58f1d4f2729586e~mv2.jpg/v1/fill/w_675,h_680,al_l,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_305ff8a7722a479ab58f1d4f2729586e~mv2.jpg"
          alt=""
        />
      </section>
    </section>
  );
}

export default Service;
