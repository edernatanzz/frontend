import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Login} path="/login" exact />
    </BrowserRouter>
  );
};

export default Routes;
