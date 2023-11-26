import React from "react";

const Nav = () => {
  return (
    <div className="Nav_bar">
      {["Home", "About", "Event", "Contact"].map((el) => (
        <span style={{ padding: "2px", marginRight: "5px" }} onClick={() => {}}>
          {el}
        </span>
      ))}
    </div>
  );
};

export default Nav;
