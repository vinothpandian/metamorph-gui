import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";
import { makeStyles, Typography, Link } from "@material-ui/core";
import { RouterNavLink } from "../RouterLink";

const useStyles = makeStyles(theme => ({
  common: {
    fontFamily: "Roboto Mono",
    fontSize: "3rem",
    fontWeight: 100
  },
  meta: {
    paddingLeft: theme.spacing(2),
    color: `${theme.palette.common.black}`
  },
  morph: {
    color: `${theme.palette.primary.main}`
  }
}));

const Logo = ({ onClick }) => {
  const styles = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
    >
      <Link
        component={RouterNavLink}
        onClick={onClick}
        to="/"
        exact
        underline="none"
      >
        <Typography
          component="span"
          classes={{ root: styles.common, body1: styles.meta }}
        >
          Meta
        </Typography>
        <Typography
          component="span"
          classes={{ root: styles.common, body1: styles.morph }}
        >
          Morph
        </Typography>
      </Link>
    </Box>
  );
};

Logo.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Logo;
