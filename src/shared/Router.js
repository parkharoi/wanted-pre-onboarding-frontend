import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../page/signin";
import SignUp from "../page/signup";
import Home from "../page/home";

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
