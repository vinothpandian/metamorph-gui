import React from "react";
import PropTypes from "prop-types";

import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    position: "relative"
  },
  responsive: {
    width: "100%",
    height: "auto"
  }
});

const DisplayImage = ({ Image, alt }) => {
  const styles = useStyles();

  return (
    <Grid item className={styles.root} xs={10} md={6}>
      <Image title={alt} className={styles.responsive} />
    </Grid>
  );
};

DisplayImage.propTypes = {
  Image: PropTypes.elementType.isRequired,
  alt: PropTypes.string.isRequired
};

export default DisplayImage;
