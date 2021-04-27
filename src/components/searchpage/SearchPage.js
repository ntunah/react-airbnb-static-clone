import React from "react";
import { Button } from "@material-ui/core";
import "./searchpage.css";
import SearchResult from "./SearchResult";

export default function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>62 stays , 27 April to 04 May - 2 guest</p>
        <h1>Stay Nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>

      <SearchResult
        img="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
        location="Hammarsdale"
        title="Stay at this home"
        description="3 bedroom , pool , 1 garage , nice view"
        star={4.5}
        price="R30/ night"
        total="R700"
      />
      <SearchResult
        img="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
        location="Hammarsdale"
        title="Stay at this home"
        description="3 bedroom , pool , 1 garage , nice view"
        star={4.5}
        price="R30/ night"
        total="R700"
      />
    </div>
  );
}
