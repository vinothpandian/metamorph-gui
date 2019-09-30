import React from "react";
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

export default InfoButton;
