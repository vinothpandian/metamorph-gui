import React from "react";
import {
  Grid,
  Box,
  Button,
  CircularProgress,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LaunchOutlinedIcon from "@material-ui/icons/LaunchOutlined";
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

const links = [
  {
    id: 1,
    href: "https://git.designwitheve.com/eve/MetaMorph",
    name: "Check our code repository"
  }
];

const list = links.map(link => (
  <ListItem key={link.id}>
    <ListItemIcon>
      <LaunchOutlinedIcon />
    </ListItemIcon>
    <ListItemText>
      <Information>
        <Link rel="noopener" target="_blank" color="secondary" href={link.href}>
          {link.name}
        </Link>
      </Information>
    </ListItemText>
  </ListItem>
));

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

    const results = await Axios.post(
      "http://127.0.0.1:3040/predict",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    )
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
    <SectionContainer>
      <Box className={gridStyles.gridContainer}>
        <Box className={gridStyles.leftPane}>
          <Grid container spacing={4} justify="center" alignItems="center">
            <Grid item xs={10}>
              <Information>
                <span>Sketch your low fidelity screen and let</span>
                <span className={emphasisStyles.primaryEmphasis}>
                  {" "}
                  MetaMorph
                </span>
                <span> detect the constituent UI elements</span>
                <List dense>{list}</List>
              </Information>
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
              height={["70%", "50%", "50%", "70%"]}
              width={["45%", "50%", "45%", "40%"]}
              style={{ transform: "skew(0.695deg, 1.42deg)" }}
              bgcolor="grey.A200"
              className={styles.shadow}
            />
            <Box
              position="absolute"
              border="1px solid #000"
              height={["65%", "45%", "45%", "65%"]}
              m={-0.25}
              width={["40%", "40%", "40%", "35%"]}
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
