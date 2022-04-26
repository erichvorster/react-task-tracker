import React from "react";
import Button from "./Button";

const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.logo}</h1>
      <Button color="green" text="Hello" />
    </header>
  );
};

export default Header;
