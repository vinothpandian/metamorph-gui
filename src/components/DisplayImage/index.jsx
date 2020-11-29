import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import React from "react";

const useStyles = makeStyles({
  root: {
    position: "relative",
    minWidth: "100%",
    maxWidth: "100%"
  },
  responsive: {
    width: "100%",

    height: "auto"
  }
});

const DisplayImage = ({ Image, alt, type }) => {
  const styles = useStyles();

  if (type === "svg") {
    return (
      <Grid item className={styles.root} xs={10}>
        <Image title={alt} className={styles.responsive} />
      </Grid>
    );
  }

  return (
    <Grid item className={styles.root} xs={10}>
      <img alt={alt} src={Image} className={styles.responsive} />
    </Grid>
  );
};

DisplayImage.propTypes = {
  Image: PropTypes.elementType.isRequired,
  type: PropTypes.oneOf(["svg", "others"]).isRequired,
  alt: PropTypes.string.isRequired
};

export default DisplayImage;
