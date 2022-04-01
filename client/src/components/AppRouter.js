import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../pages/Auth";
import Admin from "../pages/Admin";
import Shop from "../pages/Shop";
import Device from "../pages/Device";
import Basket from "../pages/Basket";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Shop />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/device" element={<Device />} />
      <Route path="/basket" element={<Basket />} />
      <Route path="*"  element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
