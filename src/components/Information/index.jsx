import React from "react";
import PropTypes from "prop-types";

import Box from "@material-ui/core/Box";

const Information = ({ children }) => (
  <Box fontSize={["1.25rem", "1.5rem", "2rem", "2.25rem"]} fontWeight={200}>
    {children}
  </Box>
);

Information.propTypes = {
  children: PropTypes.node.isRequired
};

export default Information;
