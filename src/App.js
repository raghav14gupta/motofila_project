import React, { useState } from "react";
// import Dashboard from "./components/dashboard/Dashboard";
import DashUI from "./components/dashboard/DashUI";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {



 
  return (
    <BrowserRouter>
   
      <Routes>
      <Route path="/*" element={<DashUI />} />
      </Routes>
       
     
    
  </BrowserRouter>
   
  );
};
export default App;
