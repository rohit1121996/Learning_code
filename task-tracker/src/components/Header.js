import React from "react";
import PropsTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";
const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header>
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "blue"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
Header.propsTypes = {
  title: PropsTypes.string.isRequired,
};
// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "blue",
// };
export default Header;
