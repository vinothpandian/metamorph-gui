import React from "react";
import PropTypes from "prop-types";
import {
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import LaunchOutlinedIcon from "@material-ui/icons/LaunchOutlined";

const ListLinks = ({ links }) => {
  const list = links.map(link => (
    <ListItem key={link.id}>
      <ListItemIcon>
        <LaunchOutlinedIcon />
      </ListItemIcon>
      <ListItemText>
        <Box
          fontSize={["0.85rem", "1rem", "1.25rem", "1.5rem"]}
          fontWeight={200}
        >
          <Link
            rel="noopener"
            target="_blank"
            color="secondary"
            href={link.href}
          >
            {link.name}
          </Link>
        </Box>
      </ListItemText>
    </ListItem>
  ));

  return <List dense>{list}</List>;
};

ListLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      href: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired
};

export default ListLinks;
