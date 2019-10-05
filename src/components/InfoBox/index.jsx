import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import HttpIcon from "@material-ui/icons/Http";
import TimelineIcon from "@material-ui/icons/Timeline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: "2rem"
  },
  title: {
    fontSize: "2.25rem"
  },
  content: {
    fontSize: "1.125rem"
  }
}));

const InfoBox = ({ title, children }) => {
  const styles = useStyles();
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs={7} direction="row" justify="center" container spacing={4}>
        <Grid item xs={2} container>
          <Grid item xs={12} className={styles.title}>
            {title.toLowerCase() === "web api" && (
              <HttpIcon className={styles.icon} />
            )}
            {title.toLowerCase() === "evaluation" && (
              <TimelineIcon className={styles.icon} />
            )}
            {title.toLowerCase() === "dataset" && (
              <PhotoLibraryIcon className={styles.icon} />
            )}
            {title.toLowerCase() === "model" && (
              <VisibilityIcon className={styles.icon} />
            )}
          </Grid>
        </Grid>
        <Grid item xs={10} container>
          <Grid item xs={12} className={styles.title}>
            {title}
          </Grid>
          <Grid item xs={12} className={styles.content}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

InfoBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default InfoBox;
