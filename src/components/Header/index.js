import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "../Button";

import styles from './Header.scss'

import { ThemeContext } from "../../context/ThemeContext";
export default function Header(props) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>
      <Button onClick={onToggleTheme}>
        Mudar Tema
      </Button>
      {props.children}
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  title: `Jstack's Blog`,
};
