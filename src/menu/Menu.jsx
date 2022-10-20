import React from "react";
import Background from "../Background";
import "./menu.scss";

const Menu = () => {
  return (
    <div>
      <div className='sliding-placeholder'>PLACEHOLDER</div>
      <div className='outercontainer-menu'>
        <div className='innercontainer-menu'>
          <div className='container-sectionmenu'></div>
        </div>
      </div>
      <Background />
    </div>
  );
};

export default Menu;
