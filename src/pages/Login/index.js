import React from "react";
import { Img1 } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import { useHistory } from "react-router-dom";

const index = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={Img1} className="bg-image" alt="image" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={20} />
        <Button title="Login" onClick={() => history.push("/")} />
        <Gap height={100} />
        <Link title="Daftar" onClick={() => history.push("/register")} />
      </div>
    </div>
  );
};

export default index;
