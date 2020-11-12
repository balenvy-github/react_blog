import React from "react";
import { Img1 } from "../../../assets";
import "./upload.css";

const Upload = () => {
  return (
    <div className="upload">
      <img className="preview" src={Img1} alt="preview" />
      <input type="file" />
    </div>
  );
};

export default Upload;
