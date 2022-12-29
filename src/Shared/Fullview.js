import React from "react";
import "./Fullview.css"
import BgImage from '../Images/background.jpg'

const Fullview = (props) => {
  console.log(typeof props.background)
  return (
    <div
      // className={`full-vh${props.class ? ` ${props.class}` : ""}`}
      className={`full-vh${props.class && ` ${props.class}`}`}
      // style={{ backgroundImage: `url('${BgImage}')` }}
      style={{ backgroundImage: `url('${props.background}')` }}
    >
      <div>{props.children}</div>
    </div>
  );
};
export default Fullview;
