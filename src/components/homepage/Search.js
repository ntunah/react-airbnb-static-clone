import React, { useState } from "react";
import "./search.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import PeopleIcon from "@material-ui/icons/People";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const history = useHistory();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection"
  };
  function handleSelect(range) {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  }
  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number of guest <PeopleIcon />
      </h2>
      <input min={0} type="number" defaultValue={2} />
      <Button onClick={() => history.push("/search")}>Search Airbnb</Button>
    </div>
  );
}
