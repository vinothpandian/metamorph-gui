import React from "react";
import PropTypes from "prop-types";

import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  button: {
    borderRadius: "1.25rem"
  }
}));

const InfoButton = ({ children, ...buttonProps }) => {
  const styles = useStyles();
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

InfoButton.propTypes = {
  children: PropTypes.node.isRequired
};

export default InfoButton;
