import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import SectionContainer from "../../components/SectionContainer";
import InfoBox from "../../components/InfoBox/index";

const useStyles = makeStyles(theme => ({
  gridContainer: {
    height: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
    gridTemplateAreas: '". ." ". ."'
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
      //   solidBackground={`linear-gradient(
      //     180deg,
      //     rgba(135, 163, 48, 0.8),
      //     #87A330
      //   )`}
      solidBackground="#87A330"
      fullPage
    >
      <Box className={styles.gridContainer}>
        <InfoBox title="Model">
          MetaMorph uses TensorFlow Object Detection API with a fine-tuned SSD
          Resnet (RetinaNet) model to detect UI elements
        </InfoBox>
        <InfoBox title="Evaluation">
          MetaMorph provides 84.9% mAP with 72.7% AR
        </InfoBox>
        <InfoBox title="Dataset">
          MetaMorph was trained using 5906 UI element sketches of 19 google
          material design UI elements and 125000 synthetically generated low
          fidelity sketches.
        </InfoBox>
        <InfoBox title="Web API">
          MetaMorph is deployed as a Web API to facilitate reuse
        </InfoBox>
      </Box>
    </SectionContainer>
  );
};

export default SecondContainer;
