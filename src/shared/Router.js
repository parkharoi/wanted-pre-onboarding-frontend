import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../page/Signin";
import SignUp from "../page/Signup";
import Todo from "../page/Todo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
