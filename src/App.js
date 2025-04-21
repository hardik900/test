import Banner from "./component/BannerImg/Banner";
import Cards from "./component/Cards/Cards";
import Navbar from "./component/Navbar/Navbar";
import React from "react";
import "./App.css"

function App() {
  let skillArr = ["HTML", "CSS", "JS", "Jquery"]
  return (
    <>
      <Navbar />
      <Banner />
      <div className="cardContainer">
        <Cards data={skillArr} />
        {/* <Cards data="CSS"/>
        <Cards data="JS"/>
        <Cards data="JQuery"/> */}
      </div>
    </>
  );
}

export default App;
