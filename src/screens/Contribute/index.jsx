import React from "react";
import { Grid, Box } from "@material-ui/core";

import ContributeImage from "../../assets/images/contribute.png";
import SectionContainer from "../../components/SectionContainer";
import DisplayImage from "../../components/DisplayImage";
import Information from "../../components/Information";
import { useGridStyles, useEmphasisStyles } from "../../styles";
import ListLinks from "../../components/ListLinks";

const links = [
  {
    id: 1,
    href: "https://uisketch.web.app",
    name: "Sketching UI elements"
  },
  {
    id: 2,
    href: "https://uisketch-lofi.web.app",
    name: "Sketching Low Fidelity prototypes"
  }
];

const Contribute = () => {
  const gridStyles = useGridStyles();
  const emphasisStyles = useEmphasisStyles();

  return (
    <SectionContainer gradientBackground>
      <Box className={gridStyles.gridContainer}>
        <Box className={gridStyles.leftPane}>
          <Grid container spacing={4} justify="center" alignItems="center">
            <Grid item xs={10}>
              <Information>
                <span>Contribute to our </span>
                <span className={emphasisStyles.primaryEmphasis}>
                  UI Sketch Dataset
                </span>
                <span> by </span>
                <ListLinks links={links} />
              </Information>
            </Grid>
          </Grid>
        </Box>
        <Box className={gridStyles.rightPane}>
          <DisplayImage
            Image={ContributeImage}
            type="others"
            alt="UI elements"
          />
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default Contribute;
