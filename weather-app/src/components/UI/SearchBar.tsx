import { CenterDiv } from "../UI/CenterDiv";
import classes from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export const SearchBar: React.FC = (props) => {
  return (
    <CenterDiv>
      <form className={classes.searchBar} action="submit">
        <input className={classes.input} type="text" placeholder="Search" />
        <button className={classes.button} type="submit">
          <FontAwesomeIcon className={classes.icon} icon={faMagnifyingGlass} />
        </button>
      </form>
    </CenterDiv>
  );
};
