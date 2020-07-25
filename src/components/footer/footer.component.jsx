import React from "react";
import "./footer.style.css";

const FooterPanel = (props) => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© {props.name} &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default FooterPanel;
