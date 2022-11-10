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
  const weatherCtx = useContext(WeatherContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredCity = cityInputRef.current?.value;
    if (enteredCity?.trim() === "") return;
    if (enteredCity !== undefined) {
      setCityName(enteredCity);
    }
  };

  return (
    <CenterDiv>
      {weatherCtx.noSuchCity && (
        <p className={classes.error}> Unfortunely I can't find that city</p>
      )}
      <form
        className={classes.searchBar}
        onSubmit={submitHandler}
        action="submit"
      >
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
