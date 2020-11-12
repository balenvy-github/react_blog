import React from "react";
import "./register.css";
import { Img1 } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={Img1} className="bg-image" alt="bg-bg" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={20} />
        <Button title="Register" onClick={() => history.push("/login")} />
        <Gap height={100} />
        <Link title="Kembali Ke Login" onClick={() => history.push("/login")} />
      </div>
    </div>
  );
};

export default Register;
