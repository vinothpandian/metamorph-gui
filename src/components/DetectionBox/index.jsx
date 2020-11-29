import { Box, Tooltip } from "@material-ui/core";
import * as colors from "@material-ui/core/colors";
import PropTypes from "prop-types";
import React from "react";

function titleCase(str) {
  return str
    .toLowerCase()
    .split("_")
    .map(word => word.replace(word[0], word[0].toUpperCase()))
    .join(" ");
}

const boxColors = {
  alert: colors.amber[900],
  button: colors.blue[900],
  card: colors.blueGrey[900],
  checkbox_unchecked: colors.brown[900],
  checkbox_checked: colors.cyan[900],
  chip: colors.deepOrange[900],
  data_table: colors.deepPurple[900],
  drop_down_button: colors.green[900],
  floating_action_button: colors.grey[900],
  grid_list: colors.indigo[900],
  image: colors.purple.A700,
  label: colors.deepOrange.A700,
  menu: colors.lightBlue[900],
  radio_button_unchecked: colors.lightGreen[900],
  radio_button_checked: colors.lime[900],
  slider: colors.orange[900],
  switch_disabled: colors.pink[900],
  switch_enabled: colors.purple[900],
  text_area: colors.red[900],
  text_field: colors.teal[900],
  tooltip: colors.yellow[900]
};

const DetectionBox = ({
  dimension,
  name,
  position,
  probability,
  verticalOffset,
  horizontalOffset
}) => {
  return (
    <Tooltip title={`${titleCase(name)} - ${probability.toFixed(2)}`}>
      <Box
        position="absolute"
        style={{
          border: `0.125rem solid ${boxColors[name]}`
        }}
        top={`${verticalOffset + position.y}px`}
        left={`${horizontalOffset + position.x}px`}
        height={`${dimension.height}px`}
        width={`${dimension.width}px`}
      />
    </Tooltip>
  );
};

DetectionBox.propTypes = {
  dimension: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number
  }).isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number
  }).isRequired,
  probability: PropTypes.number.isRequired,
  verticalOffset: PropTypes.number.isRequired,
  horizontalOffset: PropTypes.number.isRequired
};

export default DetectionBox;
