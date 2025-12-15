import React from "react";
import Homepage from "./component/Homepage";
import Aboutus from "./component/Aboutus";
import Product from "./component/Product";
import About from "./component/About";
import Featured from "./component/Featured";
import Trends from "./component/Trends";
import Contact from "./component/Contact"

const App = () => {
  return (
    <div>
      <Homepage />
      <Aboutus />
      <Product/>
      <About/>
      <Featured/>
      <Trends/>
      <Contact/>
    </div>
  );
};

export default App;
