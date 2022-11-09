import { CenterDiv } from "../UI/CenterDiv";
import classes from "./SearchBar.module.css";
import { useRef, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { WeatherContext } from "../../store/weather-context";

import React from "react";
export const SearchBar: React.FC = (props) => {
  const cityInputRef = useRef<HTMLInputElement>(null);
  const { setCityName } = useContext(WeatherContext);

  const [badValue, setBadValue] = useState(false);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredCity = cityInputRef.current?.value;
    if (enteredCity?.trim().length === 0) {
      // enteredCity?.trim().length > 50 ||
      // enteredCity?.trim().length < 3
      setBadValue(true);
      // setTimeout(() => {
      //   setBadValue(false);
      // }, 4000);
    }
    setCityName(enteredCity);
  };
  return (
    <CenterDiv>
      <form
        className={classes.searchBar}
        onSubmit={submitHandler}
        action="submit"
      >
        {badValue && <p> Type proper name of a city</p>}
        <input
          className={classes.input}
          ref={cityInputRef}
          type="text"
          placeholder="Search"
        />
        <button className={classes.button} type="submit">
          <FontAwesomeIcon className={classes.icon} icon={faMagnifyingGlass} />
        </button>
      </form>
    </CenterDiv>
  );
};
