import React from "react";
import PropTypes from "prop-types";

import { Link as MLink, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { RouterNavLink as RouterLink } from "../RouterLink";

const useStyles = makeStyles(theme => ({
  link: {
    fontSize: "1.5rem",
    fontWeight: 300,
    paddingRight: "2rem",
    "&:hover": {
      color: theme.palette.secondary.main
    }
  }
}));

const Link = ({ exact, to, onClick, children }) => {
  const styles = useStyles();
  const theme = useTheme();

  return (
    <MLink
      component={RouterLink}
      className={styles.link}
      color="textPrimary"
      to={to}
      exact={exact}
      onClick={onClick}
      activeStyle={{
        color: theme.palette.primary.main
      }}
      underline="none"
    >
      {children}
    </MLink>
  );
};

Link.defaultProps = {
  exact: false,
  onClick: () => {}
};

Link.propTypes = {
  exact: PropTypes.bool,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

export default Link;
