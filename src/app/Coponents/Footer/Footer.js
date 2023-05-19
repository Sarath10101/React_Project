import React, { Fragment } from "react";

function Footer() {
  return (
    <Fragment>
      <div className="text-center bg-dark text-white py-2 fixed-bottom">
        <span>
          Copyright & Developed by{" "}
          <a href="/" target="blank">
            Sarath Kumar
          </a>
        </span>
      </div>
    </Fragment>
  );
}

export default Footer;
