import React from "react";
import { useState } from "react";
import "boxicons";
import NavItem from "./navItem";
function SideBar({ setIndex, index }) {
  const [isExpanded, setExpanded] = useState(false);
  function control() {
    setExpanded((prev) => !prev);
  }
  return (
    <div
      className={isExpanded ? "sidebar-expanded" : "sidebar-folded"}
      id="sidebar"
    >
      <link
        href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
        rel="stylesheet"
      ></link>
      <ul className={isExpanded ? "nav-expanded" : "nav-folded"} id="nav">
        <NavItem
          setIndex={setIndex}
          num={0}
          icon={index === 0 ? "bx bxs-bolt-circle" : "bx bx-bolt-circle"}
          cls="spark"
          name="Spark"
          index={index}
        />
        <NavItem
          setIndex={setIndex}
          num={1}
          icon={index === 1 ? "bx bxs-check-square" : "bx bx-check-square"}
          cls="todo"
          name="ToDo"
          index={index}
        />
        <NavItem
          setIndex={setIndex}
          num={2}
          icon={index === 2 ? "bx bxs-time" : "bx bx-time"}
          cls="clock"
          name="Clock"
          index={index}
        />
        <NavItem
          setIndex={setIndex}
          num={3}
          icon={index === 3 ? "bx bxs-sun" : "bx bx-sun"}
          cls="weather"
          name="Weather"
          index={index}
        />
        <NavItem
          setIndex={setIndex}
          num={4}
          icon={index === 4 ? "bx bxs-help-circle" : "bx bx-help-circle"}
          cls="about"
          name="About"
          index={index}
        />
      </ul>
      <i
        className="expander bx bx-chevron-right"
        onClick={control}
        id={isExpanded ? "expanded" : "folded"}
      ></i>
    </div>
  );
}

export default SideBar;
