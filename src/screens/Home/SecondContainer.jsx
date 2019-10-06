import React from "react";
import { Box, makeStyles, Link } from "@material-ui/core";
import SectionContainer from "../../components/SectionContainer";
import InfoBox from "../../components/InfoBox/index";

const useStyles = makeStyles(theme => ({
  gridContainer: {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridTemplateAreas: '". ." ". ."',

    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      height: "auto"
    }
  },
  icon: {
    fontSize: "2rem"
  },
  title: {
    fontSize: "2.25rem"
  },
  content: {
    fontSize: "1.125rem"
  }
}));

const SecondContainer = () => {
  const styles = useStyles();
  return (
    <SectionContainer
      solidBackground={`linear-gradient(
          180deg,
          rgba(135, 163, 48, 0.8),
          #87A330
        )`}
      // solidBackground="#87A330"
      fullPage
      overflowing
    >
      <Box className={styles.gridContainer}>
        <InfoBox title="Model">
          <p>
            <span>MetaMorph uses </span>
            <Link
              underline="always"
              color="textPrimary"
              rel="noopener"
              target="_blank"
              href="https://github.com/tensorflow/models/tree/master/research/object_detection"
            >
              TensorFlow Object Detection API
            </Link>
            <span> </span>
            <span>
              with a fine-tuned SSD Resnet (RetinaNet) model to detect UI
              elements
            </span>
          </p>
        </InfoBox>
        <InfoBox title="Evaluation">
          <p>MetaMorph provides 84.9% mAP with 72.7% AR</p>
        </InfoBox>
        <InfoBox title="Dataset">
          <p>
            MetaMorph was trained using 5,906 UI element sketches of 19 Google
            material design UI elements and 125,000 synthetically generated low
            fidelity sketches.
          </p>
        </InfoBox>
        <InfoBox title="Web API">
          <p>
            <span>MetaMorph is deployed as a </span>
            <Link
              underline="always"
              color="textPrimary"
              rel="noopener"
              target="_blank"
              href="https://api.metamorph.designwitheve.com/docs/"
            >
              Web API
            </Link>
            <span> to facilitate reuse</span>
          </p>
        </InfoBox>
      </Box>
    </SectionContainer>
  );
};

export default SecondContainer;
