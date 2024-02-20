import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes as RoutesDom } from "react-router-dom";
import Songs from "../pages/Songs/Songs";
import Home from "../pages/home/Home";
import Idols from "../pages/Idols/Idols";
import Info from "../pages/Info/Info";

const Routes = () => {
  return (
    <AnimatePresence>
      <RoutesDom>
        <Route path="/" element={<Home />}></Route>
        <Route path="/idols">
          <Route index element={<Info />}></Route>
          <Route path=":idols/" element={<Idols />}></Route>
        </Route>
        <Route path="/songs" element={<Songs />}></Route>
      </RoutesDom>
    </AnimatePresence>
  );
};

export default Routes;
