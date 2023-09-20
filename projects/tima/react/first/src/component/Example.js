import React from "react";
import "./Example.css";
const Example = (props) => {
  console.log(props.getSmth);
  return (
    <div>
      <img
        className="react-logo"
        // src="https://forum.xda-developers.com/proxy.php?image=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FR6hpplBtfx9M2yLHH6%2Fgiphy.gif&hash=4621bf0d65b743e9c0d5aa096d4b823f"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFR7hweYDXnwB8_eXfS1kShM7Sb2dMLAxOiQ&usqp=CAU"
        alt="photo"
        width="400"
      />
    </div>
  );
};

export default Example;
