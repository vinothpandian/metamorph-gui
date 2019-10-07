import React from "react";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: ({ gradientBackground, solidBackground, overflowing }) => {
    return {
      display: "flex",
      flex: "1 0 auto",
      height: overflowing ? "auto" : "calc(100% - 5.5rem)",
      minHeight: overflowing ? "100%" : 0,
      background: gradientBackground
        ? `linear-gradient(
        180deg,
        #FFFAFA 0%,
        rgba(196, 196, 196, 0) 59.57%,
        rgba(135, 163, 48, 0.8) 97.07%
      )`
        : solidBackground || theme.palette.common.white
    };
  }
}));

const SectionContainer = ({
  children,
  gradientBackground,
  solidBackground,
  overflowing,
  ...props
}) => {
  const styles = useStyles({
    gradientBackground,
    solidBackground,
    overflowing
  });

  return (
    <Container
      maxWidth={false}
      component="section"
      className={styles.root}
      {...props}
    >
      {children}
    </Container>
  );
};

SectionContainer.defaultProps = {
  solidBackground: undefined,
  gradientBackground: false,
  overflowing: false
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  gradientBackground: PropTypes.bool,
  solidBackground: PropTypes.string,
  overflowing: PropTypes.bool
};

export default SectionContainer;
