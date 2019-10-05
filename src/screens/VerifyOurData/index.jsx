import React from "react";
import { Grid, Box } from "@material-ui/core";

import WordCloudImage from "../../assets/images/wordcloud.svg";
import SectionContainer from "../../components/SectionContainer";
import DisplayImage from "../../components/DisplayImage";
import Information from "../../components/Information";
import { useGridStyles, useEmphasisStyles } from "../../styles";
import ListLinks from "../../components/ListLinks";

const links = [
  {
    id: 1,
    href: "https://www.kaggle.com/metamorph/uisketch_dataset",
    name: "Discussing it in Kaggle"
  },
  {
    id: 2,
    href: "https://uisketch-survey.web.app/",
    name: "Participating in our survey"
  }
];

const VerifyOurData = () => {
  const gridStyles = useGridStyles();
  const emphasisStyles = useEmphasisStyles();

  return (
    <SectionContainer gradientBackground>
      <Box className={gridStyles.gridContainer}>
        <Box className={gridStyles.leftPane}>
          <Grid container spacing={4} justify="center" alignItems="center">
            <Grid item xs={10}>
              <Information>
                <span>Verify our </span>
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
          <DisplayImage Image={WordCloudImage} type="others" alt="Word Cloud" />
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default VerifyOurData;
