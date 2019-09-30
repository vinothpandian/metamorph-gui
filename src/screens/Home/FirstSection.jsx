import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as HomeImage } from "../../assets/images/home-image.svg";
import SectionContainer from "../../components/SectionContainer";
import DisplayImage from "../../components/DisplayImage";
import Information from "../../components/Information";
import InfoButton from "../../components/InfoButton";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  secondaryText: {
    color: theme.palette.secondary.main
  },
  primaryText: {
    color: theme.palette.primary.main
  }
}));

const FirstSection = () => {
  const styles = useStyles();

  return (
    <SectionContainer gradientBackground>
      <Grid
        container
        className={styles.root}
        spacing={2}
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={10} md={4} container spacing={4}>
          <Grid item xs={12}>
            <Information>
              <span>Lorem Ipsum is </span>
              <span className={styles.secondaryText}>simply </span>
              <span>
                dummy text of the printing and typesetting industry. Lorem Ipsum
                has been the industry&#39;s
              </span>
              <span className={styles.primaryText}> standard dummy</span>
            </Information>
          </Grid>
          <Grid item xs={12} container justify="space-around" spacing={2}>
            <Grid item xs={6} lg={5}>
              <InfoButton variant="contained">Try it out!</InfoButton>
            </Grid>
            <Grid item xs={6} lg={5}>
              <InfoButton variant="outlined">Contribute</InfoButton>
            </Grid>
          </Grid>
        </Grid>
        <DisplayImage Image={HomeImage} alt="UI Components" />
      </Grid>
    </SectionContainer>
  );
};

export default FirstSection;
