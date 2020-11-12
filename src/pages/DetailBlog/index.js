import React from "react";
import { Img1 } from "../../assets";
import { Gap, Link } from "../../components";
import "./detailBlog.css";
import { useHistory } from "react-router-dom";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={Img1} alt="blog-img" />
      <p className="blog-title">Title</p>
      <p className="blog-author">Author date post</p>
      <p className="blog-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
        reiciendis sapiente, rerum doloribus ad quod illum nostrum voluptate,
        impedit dolorum blanditiis error minima asperiores nam voluptatibus
        minus? Aliquid, iste libero!
      </p>
      <Gap height={20} />
      <Link title="Kembali ke Home" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
