import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../page/Signin";
import SignUp from "../page/Signup";
import Home from "../page/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
