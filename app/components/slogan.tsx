import React from "react";
function Slogan() {
  return (
    <div className="home" id="home">
      <img
        src="https://static.wixstatic.com/media/c837a6_02de7d4c43d44b7b890854049ed75da8f000.jpg/v1/fill/w_980,h_840,al_c,q_85,usm_0.33_1.00_0.00,enc_auto/c837a6_02de7d4c43d44b7b890854049ed75da8f000.jpg"
        fetchPriority="high"
        alt=""
        width="100%"
        height="840"
      />
      <div className="homeContent">
        <div className="slogan">
          <h1>THE FUTURE OF</h1>
          <h1>MOBILITY IS HERE</h1>
          <p>Discover the safest self-driving experience with Autono.</p>
        </div>
      </div>
    </div>
  );
}

export default Slogan;
