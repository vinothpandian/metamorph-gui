import React from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as HomeImage } from "../../assets/images/home-image.svg";
import SectionContainer from "../../components/SectionContainer";
import DisplayImage from "../../components/DisplayImage";
import Information from "../../components/Information";
import InfoButton from "../../components/InfoButton";
import { useGridStyles } from "../../styles";

const useStyles = makeStyles({
  root: {
    height: "100%"
  }
});

const FirstSection = () => {
  const styles = useStyles();
  const gridStyles = useGridStyles();

  return (
    <SectionContainer gradientBackground>
      <Box className={gridStyles.gridContainer}>
        <Box className={gridStyles.leftPane}>
          <Grid container spacing={4} justify="center" alignItems="center">
            <Grid item xs={10}>
              <Information>
                <span>Lorem Ipsum is </span>
                <span className={styles.secondaryText}>simply </span>
                <span>
                  dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry&#39;s
                </span>
                <span className={styles.primaryText}> standard dummy</span>
              </Information>
            </Grid>
            <Grid item xs={10} container justify="space-around" spacing={2}>
              <Grid item xs={6} lg={4}>
                <InfoButton to="/try-it-out" variant="contained">
                  Try it out!
                </InfoButton>
              </Grid>
              <Grid item xs={6} lg={4}>
                <InfoButton to="/contribute" variant="outlined">
                  Contribute
                </InfoButton>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box className={gridStyles.rightPane}>
          <DisplayImage Image={HomeImage} type="svg" alt="UI Components" />
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default FirstSection;
