import React from "react";
import { Grid, Box, CircularProgress, Tooltip } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/styles";
import LoopIcon from "@material-ui/icons/Loop";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import clsx from "clsx";
import { green } from "@material-ui/core/colors";
import Axios from "axios";
import domToImage from "dom-to-image";
import SectionContainer from "../../components/SectionContainer";
import Information from "../../components/Information";
import { useGridStyles, useEmphasisStyles } from "../../styles";

import sample0 from "../../assets/images/samples/lofi-0.jpg";
import sample1 from "../../assets/images/samples/lofi-1.jpg";
import DetectionBox from "../../components/DetectionBox";
import ListLinks from "../../components/ListLinks";

const useStyles = makeStyles(theme => ({
  sketchGrid: {
    height: "100%",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1.5fr 0.5fr 1fr",
    gridTemplateRows: "1fr",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 2fr 1fr 1fr"
    },

    gridTemplateAreas: '". sketchArea buttonArea ."'
  },
  sketchArea: {
    gridArea: "sketchArea",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonArea: {
    gridArea: "buttonArea",
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  iconButton: {
    fontSize: "0.25rem",
    border: "1px solid #aaa"
  },
  shadow: {
    boxShadow: "0px 0.875rem 0.875rem rgba(0,0,0,0.25)"
  },
  image: {
    borderRadius: "0.875rem",
    width: "100%",
    height: "auto"
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
    top: -6,
    left: -6,
    zIndex: 1
  }
}));

const links = [
  {
    id: 1,
    href: "https://git.designwitheve.com/eve/MetaMorph",
    name: "Check our code repository"
  }
];

const TryItOut = () => {
  const styles = useStyles();
  const gridStyles = useGridStyles();
  const emphasisStyles = useEmphasisStyles();

  const samples = [sample0, sample1];
  const [sample, setSample] = React.useState(0);

  const imageRef = React.useRef(null);
  const boxRef = React.useRef(null);

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const [boxes, setBoxes] = React.useState([]);

  const loadNextImage = () => {
    setBoxes([]);
    setSample(Math.ceil((sample + 1) % samples.length));
  };

  const buttonClassname = clsx({
    [styles.buttonSuccess]: success
  });

  const handleButtonClick = React.useCallback(async () => {
    if (loading) return;

    setSuccess(false);
    setLoading(true);

    const dataURI = await domToImage.toJpeg(imageRef.current);
    const blob = await (await fetch(dataURI)).blob();
    const fileData = new File([blob], samples[sample]);

    const minimumProbability = 0.8;
    const formData = new FormData();

    formData.append("image", fileData);
    formData.append("minimum_probability", minimumProbability);

    const results = await Axios.post(process.env.REACT_APP_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(response => response.data)
      .catch(err => {
        throw err;
      });

    const imageRect = imageRef.current.getBoundingClientRect();
    const boxRect = boxRef.current.getBoundingClientRect();

    const verticalOffset = imageRect.top - boxRect.top;
    const horizontalOffset = imageRect.left - boxRect.left;

    setBoxes(
      results.map(result => (
        <DetectionBox
          key={`${result.name}_${result.position.x}`}
          verticalOffset={verticalOffset}
          horizontalOffset={horizontalOffset}
          {...result}
        />
      ))
    );

    setSuccess(true);
    setLoading(false);
  }, [loading, sample, samples]);

  return (
    <SectionContainer gradientBackground>
      <Box className={gridStyles.gridContainer}>
        <Box className={gridStyles.leftPane}>
          <Grid container spacing={4} justify="center" alignItems="center">
            <Grid item xs={10}>
              <Information>
                <span>
                  Sketch your low fidelity screen or try loading our sample
                  screen and let
                </span>
                <span className={emphasisStyles.primaryEmphasis}>
                  {" "}
                  MetaMorph
                </span>
                <span> detect the constituent UI elements</span>
                <ListLinks links={links} />
              </Information>
            </Grid>
          </Grid>
        </Box>
        <Box className={gridStyles.rightPane}>
          <Box className={styles.sketchGrid}>
            <Box className={styles.sketchArea}>
              <Box
                position="absolute"
                border="1px solid #000"
                height={["70%", "50%", "50%", "70%"]}
                width="100%"
                borderRadius="0.875rem"
                style={{ transform: "rotate(-0.2deg)" }}
                className={styles.shadow}
              />
              <Box
                position="absolute"
                border="1px solid #000"
                height={["65%", "45%", "45%", "65%"]}
                m={-0.25}
                width="90%"
                borderRadius="0.875rem"
                bgcolor="white"
                display="flex"
                justifyContent="center"
                ref={boxRef}
              >
                <img
                  className={styles.image}
                  ref={imageRef}
                  src={samples[sample]}
                  alt="Sample Lo-Fi sketch"
                />
                {boxes}
              </Box>
            </Box>
            <Box className={styles.buttonArea}>
              <Box
                position="absolute"
                height={["70%", "50%", "50%", "70%"]}
                width="100%"
              >
                <Grid container justify="flex-end" spacing={2}>
                  <Grid item>
                    <Tooltip title="Load a sample">
                      <IconButton
                        onClick={loadNextImage}
                        className={styles.iconButton}
                      >
                        <LoopIcon size="small" />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  <Grid item className={styles.wrapper}>
                    <Tooltip title="Detect">
                      <IconButton
                        className={`${buttonClassname} ${styles.iconButton}`}
                        disabled={loading}
                        onClick={handleButtonClick}
                      >
                        <RemoveRedEyeIcon size="small" />
                      </IconButton>
                    </Tooltip>
                    {loading && (
                      <CircularProgress
                        size={68}
                        className={styles.buttonProgress}
                      />
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default TryItOut;
