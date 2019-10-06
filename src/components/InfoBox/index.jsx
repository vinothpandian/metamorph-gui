import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import HttpIcon from "@material-ui/icons/Http";
import TimelineIcon from "@material-ui/icons/Timeline";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  container: {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr 2fr 1fr",
    gridTemplateAreas: '"." "infoArea" "."',
    [theme.breakpoints.down("md")]: {
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1rem"
    }
  },
  infoArea: {
    justifySelf: "center",
    gridArea: "infoArea",
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "100%"
    },
    display: "grid",
    gridTemplateColumns: "0.5fr 1.5fr",
    gridTemplateRows: "0.5fr 1.5fr",
    gridTemplateAreas: '"iconArea titleArea" ". contentArea"'
  },
  iconArea: {
    gridArea: "iconArea",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    fontSize: "2.9375rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.75rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem"
    }
  },
  title: {
    fontSize: "2.25rem",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.75rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem"
    },
    gridArea: "titleArea"
  },
  content: {
    fontSize: "1.125rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem"
    },
    gridArea: "contentArea"
  }
}));

const InfoBox = ({ title, children }) => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Grid className={styles.infoArea}>
        <Box className={styles.iconArea}>
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
        </Box>
        <Grid className={styles.title}>{title}</Grid>
        <Grid className={styles.content}>{children}</Grid>
      </Grid>
    </Box>
  );
};

InfoBox.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired
};

export default InfoBox;
