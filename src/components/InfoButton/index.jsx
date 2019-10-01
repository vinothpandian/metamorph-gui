import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/styles";

import { RouterLink } from "../RouterLink";

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: "1.25rem"
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
