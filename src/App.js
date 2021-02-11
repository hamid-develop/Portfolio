import React from "react";
import { BrowserRouter } from "react-router-dom";
import Portfolio from "./components/Portfolio";


const App = () => {
  return (
    <BrowserRouter>
      <Portfolio />
    </BrowserRouter>
  );
};

export default App;
