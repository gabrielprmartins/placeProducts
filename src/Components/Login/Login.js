import React from "react";
import { Routes, Route } from "react-router-dom";
import FormLogin from "../Forms/FormLogin";
import FormRegister from "../Forms/FormRegister";

const Login = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="register" element={<FormRegister />} />
      </Routes>
    </section>
  );
};

export default Login;
