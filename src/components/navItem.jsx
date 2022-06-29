import React, { useState } from "react";

function NavItem({ setIndex, num, icon, cls, name, index }) {
  const [btnType, setbtnType] = useState(
    index === num ? "secondary" : "primary"
  );
  const [hover, setHover] = useState(false);
  if (btnType !== "primary" && index !== num && !hover) {
    setbtnType("primary");
  }
  if (btnType !== "secondary" && index === num && hover) {
    setbtnType("secondary");
  }
  return (
    <li
      onClick={() => {
        setIndex(num);
      }}
      onMouseOver={() => {
        setHover(true);
        setbtnType("secondary");
      }}
      onMouseOut={() => {
        setHover(false);
        if (index !== num) setbtnType("primary");
      }}
    >
      <span className={`tag tag-${btnType}`}></span>
      <div className="nav-item">
        <i className={icon} id="icon"></i>
        <span className={cls}>{name}</span>
      </div>
    </li>
  );
}

export default NavItem;
