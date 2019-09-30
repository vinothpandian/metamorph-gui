import React from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LinkOutlinedIcon from "@material-ui/icons/LinkOutlined";
import SectionContainer from "../../components/SectionContainer";
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
  },
  sketchGrid: {
    position: "relative"
  },
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
}));

const TryItOut = () => {
  const styles = useStyles();

  return (
    <SectionContainer gradientBackground>
      <Grid
        container
        className={styles.root}
        spacing={2}
        justify="space-around"
      >
        <Grid
          item
          xs={10}
          md={4}
          className={styles.root}
          justify="space-around"
          alignItems="center"
          container
          spacing={4}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Information>
                <span className={styles.secondaryText}>Sketch </span>
                <span>
                  your low fidelity screen and let MetaMorph detect the
                  constituent
                </span>
                <span className={styles.primaryText}> UI elements</span>
              </Information>
            </Grid>
            <Grid item xs={12} container justify="space-around" spacing={2}>
              <Grid item xs={6} lg={4}>
                <InfoButton variant="contained">Detect!</InfoButton>
              </Grid>
              <Grid item xs={6} lg={4} container alignItems="center">
                <InfoButton
                  variant="outlined"
                  href="https://git.designwitheve.com/eve/MetaMorph"
                >
                  Repository
                  <LinkOutlinedIcon
                    style={{ marginLeft: "0.5rem" }}
                    fontSize="small"
                  />
                </InfoButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          className={styles.sketchGrid}
          xs={10}
          md={6}
          container
          justify="center"
          alignItems="center"
        >
          <Box
            position="absolute"
            border="1px solid #000"
            height={["40vh", "80vh"]}
            width="45%"
            style={{ transform: "skew(0.5deg, 1deg)" }}
          />
          <Box
            position="absolute"
            border="1px solid #000"
            height={["35vh", "70vh"]}
            m={-0.25}
            width="40%"
          />
        </Grid>
      </Grid>
    </SectionContainer>
  );
};

export default TryItOut;
