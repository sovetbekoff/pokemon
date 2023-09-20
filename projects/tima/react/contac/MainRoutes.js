import React from "react";
import { Route, Routes } from "react-router-dom";
import AddContact from "./src/components/AddContact";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/add" element={<AddContact />} />
    </Routes>
  );
};

export default MainRoutes;
