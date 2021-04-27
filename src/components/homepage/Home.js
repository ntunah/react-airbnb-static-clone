import React from "react";
import Banner from "./Banner";
import "./home.css";
import Card from "./Card";

export default function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home_selection">
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Online"
          description="Unique activiese"
          price="R200"
        />
        <Card
          src="https://cf.bstatic.com/images/hotel/max1024x768/975/97536063.jpg"
          title="Online"
          description="Unique activiese"
          price="R200"
        />
        <Card
          src="https://cf.bstatic.com/images/hotel/max1024x768/975/97536063.jpg"
          title="Online"
          description="Unique activiese"
          price="R200"
        />
      </div>
      <div clasName="home_selection"></div>
    </div>
  );
}
