import { storiesOf } from "@storybook/react";

import React from "react";
import { Grid } from "@material-ui/core";
import Information from "../components/Information";

const Text = () => {
  return (
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry&#39;s standard dummy
    </p>
  );
};

storiesOf("Information", module)
  .add("Basic", () => (
    <Information>
      <Text />
    </Information>
  ))
  .add("Inside Grid", () => (
    <Grid container>
      <Grid item xs={4}>
        <Information>
          <Text />
        </Information>
      </Grid>
    </Grid>
  ));
