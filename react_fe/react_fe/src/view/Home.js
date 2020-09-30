import React from "react";
import "./scss/home.scss";
import NaverApiMap from "./NaverAPIMap";

function Home() {
  return (
    <div className={"outline"}>
      <div className={"container"}>
        <h1>Map</h1>
        <NaverApiMap />
        <div className={"map"}></div>
      </div>
    </div>
  );
}

export default Home;
