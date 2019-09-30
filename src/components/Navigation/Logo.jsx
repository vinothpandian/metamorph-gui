import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles, Typography, Link } from "@material-ui/core";
import { RouterNavLink } from "../RouterLink";

const useStyles = makeStyles((theme) => ({
  common: {
    fontFamily: "Roboto Mono",
    fontSize: "2.5rem",
    fontWeight: 100,
    "&:hover": {
      color: `${theme.palette.secondary.main} !important`
    }
  },
  meta: {
    paddingLeft: theme.spacing(2),
    color: `${theme.palette.common.black} !important`
  },
  morph: {
    color: `${theme.palette.primary.main} !important`
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
        <Typography component="span" classes={{ common: styles.common, meta: styles.meta}}>
          Meta
        </Typography>
        <Typography component="span" classes={{ common: styles.common, meta: styles.meta}}>
          Morph
        </Typography>
      </Link>
    </Box>
  );
};

export default Logo;
