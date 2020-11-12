import React from "react";
import { ICDiscord, CompanyLogo } from "../../../assets";
import "./footer.css";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="sosmed" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={CompanyLogo} alt="companylogo" />
        </div>
        <div className="social-wrapper">
          <Icon img={ICDiscord} />
          <Icon img={ICDiscord} />
          <Icon img={ICDiscord} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
