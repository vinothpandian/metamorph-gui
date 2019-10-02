import React from "react";
import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: ({ gradientBackground, solidBackground, fullPage }) => ({
    overflow: "hidden",
    height: fullPage ? "100vh" : "calc(100vh - 5.5rem)",
    background: gradientBackground
      ? `linear-gradient(
      180deg,
      #FFFAFA 0%,
      rgba(196, 196, 196, 0) 59.57%,
      rgba(135, 163, 48, 0.8) 97.07%
    )`
      : solidBackground || theme.palette.common.white
  })
}));

const SectionContainer = ({
  children,
  gradientBackground,
  solidBackground,
  fullPage,
  ...props
}) => {
  const styles = useStyles({ gradientBackground, solidBackground, fullPage });

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
  fullPage: false,
  gradientBackground: false
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  gradientBackground: PropTypes.bool,
  solidBackground: PropTypes.string,
  fullPage: PropTypes.bool
};

export default SectionContainer;
