import React from "react";
import { Grid } from "@material-ui/core";
import SectionContainer from "../components/SectionContainer";

const FullPageStory = story => {
  return (
    <SectionContainer fullPage>
      <Grid
        container
        style={{ height: "100%" }}
        justify="center"
        alignItems="center"
      >
        {story()}
      </Grid>
    </SectionContainer>
  );
};

export default FullPageStory;
