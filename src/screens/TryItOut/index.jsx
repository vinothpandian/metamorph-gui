import React from "react";
import { Grid, Box, Button, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LinkOutlinedIcon from "@material-ui/icons/LinkOutlined";
import LoopIcon from "@material-ui/icons/Loop";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import clsx from "clsx";
import { green } from "@material-ui/core/colors";
import SectionContainer from "../../components/SectionContainer";
import Information from "../../components/Information";
import InfoButton from "../../components/InfoButton";
import { useGridStyles, useEmphasisStyles } from "../../styles";

import sample0 from "../../assets/images/samples/lofi-0.jpg";
import sample1 from "../../assets/images/samples/lofi-1.jpg";

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
  },
  shadow: {
    boxShadow: "0px 0.875rem 0.875rem rgba(0,0,0,0.25)"
  },
  image: {
    width: "auto",
    height: "100%"
  },
  wrapper: {
    position: "relative"
  },
  buttonSuccess: {
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700]
    }
  },
  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12
  }
}));

function getDataBlob(image, imageType) {
  return new Promise((resolve, reject) => {
    try {
      const img = document.createElement("img");
      img.src = image;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.setAttribute("width", img.naturalWidth);
        canvas.setAttribute("height", img.naturalHeight);
        canvas.getContext("2d").drawImage(img, 0, 0);

        resolve(canvas.toDataURL(`image/${imageType}`));
      };
    } catch (e) {
      reject(e);
    }
  });
}

const TryItOut = () => {
  const styles = useStyles();
  const gridStyles = useGridStyles();
  const emphasisStyles = useEmphasisStyles();

  const samples = [sample0, sample1];
  const [sample, setSample] = React.useState(0);

  const loadNextImage = () => {
    setSample(Math.ceil((sample + 1) % samples.length));
  };

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [styles.buttonSuccess]: success
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

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
              width={["45%", "45%", "45%", "40%"]}
              style={{ transform: "skew(0.695deg, 1.42deg)" }}
              bgcolor="grey.A200"
              className={styles.shadow}
            />
            <Box
              position="absolute"
              border="1px solid #000"
              height={["65%", "45%", "65%"]}
              m={-0.25}
              width={["40%", "40%", "40%", "35%"]}
              bgcolor="white"
              display="flex"
              justifyContent="center"
            >
              <img
                className={styles.image}
                src={samples[sample]}
                alt="Sample Lo-Fi sketch"
              />
            </Box>
            <Box position="absolute" bottom={["5%", "15%", "5%"]}>
              <Grid container justify="space-around" spacing={2}>
                <Grid item>
                  <Button
                    className={styles.button}
                    variant="outlined"
                    onClick={loadNextImage}
                  >
                    Load a sample
                    <LoopIcon className={styles.rightIcon} size="small" />
                  </Button>
                </Grid>
                <Grid item className={styles.wrapper}>
                  <Button
                    variant="outlined"
                    className={buttonClassname}
                    disabled={loading}
                    onClick={handleButtonClick}
                  >
                    Detect
                    <RemoveRedEyeIcon
                      className={styles.rightIcon}
                      size="small"
                    />
                  </Button>
                  {loading && (
                    <CircularProgress
                      size={24}
                      className={styles.buttonProgress}
                    />
                  )}
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
