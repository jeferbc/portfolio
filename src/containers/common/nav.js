import React, { useState } from "react";

const NAV_ITEMS = [
  { href: "#about", title: "About" },
  { href: "#skills", title: "Skills" },
  { href: "#experience", title: "Experience" },
  { href: "#digital-growth", title: "Growth" },
  { href: "#contact", title: "Contact" },
];

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  function closeSidebar() {
    setSidebar(!sidebar);
    document.querySelector(".navbar").classList.remove("openSidebar");
  }

  return (
    <div className="navbar" id="togglebtn">
      <div className="responsive-btn">
        <a className="btn-back" onClick={closeSidebar}>
          <h5>back</h5>
        </a>
      </div>
      <ul className="main-menu">
        {NAV_ITEMS.map((item, i) => (
          <li key={i}>
            <a href={item.href}>
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
