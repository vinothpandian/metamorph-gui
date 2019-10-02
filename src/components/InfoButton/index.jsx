import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/styles";

import { RouterLink } from "../RouterLink";

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: "2rem",
    fontSize: "0.75rem",
    fontWeight: 300,
    color: theme.palette.common.black,
    textTransform: "none",

    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.25rem"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.25rem"
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.5rem"
    },
    border: `2px solid ${theme.palette.primary.main}`,

    "&:hover": {
      border: `2px solid ${theme.palette.primary.dark}`
    }
  }
}));

const InfoButton = ({ children, to, ...buttonProps }) => {
  const styles = useStyles();

  if (to) {
    return (
      <Button
        component={RouterLink}
        to={to}
        className={styles.button}
        color="primary"
        size="large"
        fullWidth
        {...buttonProps}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      className={styles.button}
      color="primary"
      size="large"
      fullWidth
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

InfoButton.defaultProps = {
  to: undefined
};

InfoButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string
};

export default InfoButton;
