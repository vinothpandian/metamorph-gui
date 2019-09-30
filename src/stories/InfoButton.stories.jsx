import { storiesOf } from "@storybook/react";

import React from "react";

import { Grid } from "@material-ui/core";
import InfoButton from "../components/InfoButton";
import FullPageStory from "./FullPageStory";

storiesOf("InfoButton", module)
  .addDecorator(FullPageStory)
  .add("Basic", () => <InfoButton variant="contained">Basic</InfoButton>)
  .add("Outlined", () => <InfoButton variant="outlined">Outlined</InfoButton>)
  .add("In Grid", () => (
    <Grid item xs={2}>
      <InfoButton variant="outlined">Outlined</InfoButton>
      <InfoButton variant="contained">Outlined</InfoButton>
    </Grid>
  ));
