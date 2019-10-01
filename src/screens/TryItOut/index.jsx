import React from "react";
import { Grid, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LinkOutlinedIcon from "@material-ui/icons/LinkOutlined";
import LoopIcon from "@material-ui/icons/Loop";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import SectionContainer from "../../components/SectionContainer";
import Information from "../../components/Information";
import InfoButton from "../../components/InfoButton";
import { useGridStyles, useEmphasisStyles } from "../../styles";

const useStyles = makeStyles(theme => ({
  sketchGrid: {
    height: "100%",
    position: "relative"
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  button: {
    marginRight: theme.spacing(1)
  }
}));

const TryItOut = () => {
  const styles = useStyles();
  const gridStyles = useGridStyles();
  const emphasisStyles = useEmphasisStyles();

  return (
    <SectionContainer gradientBackground>
      <Box className={gridStyles.gridContainer}>
        <Box className={gridStyles.leftPane}>
          <Grid container spacing={4} justify="center" alignItems="center">
            <Grid item xs={10}>
              <Information>
                <span className={emphasisStyles.secondaryEmphasis}>Sketch</span>
                <span>
                  {" "}
                  your low fidelity screen and let MetaMorph detect the
                  constituent
                </span>
                <span className={emphasisStyles.primaryEmphasis}>
                  {" "}
                  UI elements
                </span>
              </Information>
            </Grid>
            <Grid item xs={10} container justify="space-around" spacing={2}>
              <Grid item xs={6} lg={4} container alignItems="center">
                <InfoButton
                  variant="contained"
                  href="https://git.designwitheve.com/eve/MetaMorph"
                >
                  Repository
                  <LinkOutlinedIcon
                    className={styles.rightIcon}
                    fontSize="small"
                  />
                </InfoButton>
              </Grid>
              <Grid item xs={6} lg={4}>
                {/* <InfoButton variant="contained">Detect!</InfoButton> */}
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box className={gridStyles.rightPane}>
          <Grid
            className={styles.sketchGrid}
            container
            justify="center"
            alignItems="center"
          >
            <Box
              position="absolute"
              border="1px solid #000"
              height={["70%", "50%", "70%"]}
              width="45%"
              style={{ transform: "skew(0.695deg, 1.42deg)" }}
              bgcolor="grey.A200"
            />
            <Box
              position="absolute"
              border="1px solid #000"
              height={["65%", "45%", "65%"]}
              m={-0.25}
              width="40%"
              bgcolor="white"
            />
            <Box position="absolute" bottom={["5%", "15%", "5%"]}>
              <Grid container justify="space-around" spacing={2}>
                <Grid item>
                  <Button className={styles.button} variant="outlined">
                    Load sample
                    <LoopIcon className={styles.rightIcon} size="small" />
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined">
                    Detect
                    <RemoveRedEyeIcon
                      className={styles.rightIcon}
                      size="small"
                    />
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default TryItOut;
