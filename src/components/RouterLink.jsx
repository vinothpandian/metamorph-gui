import React from "react";
import { Link, NavLink } from "react-router-dom";

const RouterLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} {...props} />
));

RouterLink.displayName = "RouterLink";

const RouterNavLink = React.forwardRef((props, ref) => (
  <NavLink innerRef={ref} {...props} />
));

RouterNavLink.displayName = "RouterNavLink";

export { RouterLink, RouterNavLink };
