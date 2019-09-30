import React from "react";
import { Link as MLink, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { RouterNavLink as RouterLink } from "../RouterLink";


const useStyles = makeStyles((theme) => ({
  link: {
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

export default Link;
