import React from "react";
import ParticlesBg from "particles-bg";

const Webgl = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "tomato", width: "100vw", height: "100vh" }}
      ></div>
      <ParticlesBg color="#ff0000" num={200} type="circle" bg={true} />
    </>
  );
};

export default Webgl;
