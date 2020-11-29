import { Box, CircularProgress, Grid, Tooltip } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from "@material-ui/icons/Create";
import CropPortraitIcon from "@material-ui/icons/CropPortrait";
import GestureIcon from "@material-ui/icons/Gesture";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import ReplayIcon from "@material-ui/icons/Replay";
import SystemUpdateIcon from "@material-ui/icons/SystemUpdate";
import ToggleButton from "@material-ui/lab/ToggleButton";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import domToImage from "dom-to-image";
import React from "react";
import ReactSketchCanvas from "react-sketch-canvas";
import Erase from "../../assets/images/erase.png";
import Pencil from "../../assets/images/pencil.png";
import sample0 from "../../assets/images/samples/lofi-0.jpg";
import sample1 from "../../assets/images/samples/lofi-1.jpg";
import sample2 from "../../assets/images/samples/lofi-2.jpg";
import sample3 from "../../assets/images/samples/lofi-3.jpg";
import sample4 from "../../assets/images/samples/lofi-4.jpg";
import DetectionBox from "../../components/DetectionBox";
import Information from "../../components/Information";
import ListLinks from "../../components/ListLinks";
import SectionContainer from "../../components/SectionContainer";
import { useEmphasisStyles, useGridStyles } from "../../styles";

const useStyles = makeStyles(() => {
  const PencilPointer = `url(${Pencil}) 0 24, pointer`;
  const ErasePointer = `url(${Erase}) 12 12, auto`;

  return {
    sketchGrid: {
      height: "100%",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "0.5fr 1.5fr 1.5fr 0.5fr",
      gridTemplateRows: "1fr",
      gridTemplateAreas: '". sketchArea buttonArea ."',
    },
    sketchArea: {
      gridArea: "sketchArea",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    buttonArea: {
      marginLeft: "1rem",
      gridArea: "buttonArea",
      position: "relative",
      display: "flex",
      direction: "column",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    pencilPointer: {
      cursor: PencilPointer,
    },
    erasePointer: {
      cursor: ErasePointer,
    },
    iconButton: {
      color: "black",
      fontSize: "0.25rem",
      border: "1px solid #555",
    },
    circleButton: {
      borderRadius: "50%",
      color: "black",
      fontSize: "0.25rem",
      border: "1px solid #555",
    },
    shadow: {
      boxShadow: "0px 0.5625rem 1.0625rem 0.5rem  rgba(0,0,0,0.20)",
    },
    image: {
      borderRadius: "0.875rem",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    wrapper: {
      position: "relative",
    },
    buttonSuccess: {
      "&:disabled": {
        backgroundColor: "#9FB559",
      },
    },
    buttonProgress: {
      color: "#9FB559",
      position: "absolute",
      top: 4,
      left: 4,
    },
  };
});

const links = [
  {
    id: 1,
    href: "https://api.metamorph.designwitheve.com/docs/",
    name: "Check our Web API",
  },
  {
    id: 2,
    href: "https://git.designwitheve.com/eve/MetaMorph",
    name: "Check our code repository",
  },
];

const TryItOut = () => {
  const samples = [sample0, sample1, sample2, sample3, sample4];
  const [sample, setSample] = React.useState(0);

  const canvasRef = React.createRef(null);

  const [draw, setDraw] = React.useState(false);
  const [erase, setErase] = React.useState(false);

  const imageRef = React.useRef(null);
  const boxRef = React.useRef(null);

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const [boxes, setBoxes] = React.useState([]);

  const loadNextImage = () => {
    setDraw(false);
    setBoxes([]);
    setLoading(false);
    setSuccess(false);
    setSample(Math.ceil((sample + 1) % samples.length));
  };

  const handleButtonClick = React.useCallback(async () => {
    if (loading) return;

    setSuccess(false);
    setLoading(true);

    const getDataURI = async () => {
      if (draw) {
        const URI = await canvasRef.current.exportImage("jpeg");
        return URI;
      }

      const URI = domToImage.toJpeg(imageRef.current);
      return URI;
    };

    const dataURI = await getDataURI();

    const blob = await (await fetch(dataURI)).blob();

    const fileData = new File([blob], "lo-fi.jpg", { type: "image/jpeg" });

    const minimumProbability = 0.9;
    const formData = new FormData();

    formData.append("image", fileData);

    let results = [];
    try {
      const response = await fetch(
        `${process.env.REACT_APP_URL}/?minimum_probability=${minimumProbability}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status === 200) {
        results = await response.json();
      }
    } catch (error) {
      console.error(error.message);
    }

    let verticalOffset = 0;
    let horizontalOffset = 0;

    if (!draw) {
      const imageRect = imageRef.current.getBoundingClientRect();

      const boxRect = boxRef.current.getBoundingClientRect();

      verticalOffset = imageRect.top - boxRect.top;
      horizontalOffset = imageRect.left - boxRect.left;
    }

    setBoxes(
      results.map((result) => (
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
  }, [canvasRef, draw, loading]);

  const styles = useStyles(erase);
  const gridStyles = useGridStyles();
  const emphasisStyles = useEmphasisStyles();

  const buttonClassname = clsx({
    [styles.buttonSuccess]: success,
  });

  import("../../assets/images/samples/lofi-0.jpg").then((data) => {
    console.log(data);
  });

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
                height={["85%", "75%", "75%", "85%", "75%"]}
                width="100%"
                borderRadius="0.875rem"
                style={{ transform: "rotate(-0.5deg)" }}
                className={styles.shadow}
              />
              <Box
                position="absolute"
                border="1px solid #000"
                height={["75%", "65%", "65%", "75%", "65%"]}
                m={-0.1}
                mt={[-0.8, -1.5]}
                width="93%"
                borderRadius="0.875rem"
                bgcolor="white"
                display="flex"
                justifyContent="center"
                ref={boxRef}
                overflow="hidden"
                className={clsx({
                  [styles.pencilPointer]: !erase,
                  [styles.erasePointer]: erase,
                })}
              >
                {draw ? (
                  <ReactSketchCanvas
                    ref={canvasRef}
                    allowOnlyPointerType="all"
                    strokeWidth={4}
                    strokeColor="black"
                    style={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      borderRadius: "1rem",
                    }}
                  />
                ) : (
                  <img
                    className={styles.image}
                    ref={imageRef}
                    src={samples[sample]}
                    alt="Sample Lo-Fi sketch"
                  />
                )}
                {boxes}
              </Box>
            </Box>
            <Box className={styles.buttonArea}>
              <Box
                position="absolute"
                height={["85%", "75%", "75%", "85%", "75%"]}
                width="100%"
              >
                <Grid container direction="column" wrap="nowrap" spacing={2}>
                  <Grid item>
                    <Tooltip title="Load a sample" placement="right">
                      <IconButton
                        component="div"
                        onClick={loadNextImage}
                        disabled={!draw}
                        className={styles.iconButton}
                      >
                        <SystemUpdateIcon size="small" />
                      </IconButton>
                    </Tooltip>
                  </Grid>
                  <Grid item container direction="row" spacing={2}>
                    <Grid item>
                      <Tooltip title="Draw" placement="right">
                        <IconButton
                          component="div"
                          onClick={() => {
                            setBoxes([]);
                            setLoading(false);
                            setSuccess(false);
                            setDraw(true);
                          }}
                          disabled={draw}
                          className={styles.iconButton}
                        >
                          <GestureIcon size="small" />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                    {draw && (
                      <>
                        <Grid item>
                          <Tooltip title="Erase" placement="right">
                            <ToggleButton
                              value="check"
                              selected={erase}
                              onClick={() => {
                                setBoxes([]);
                                setLoading(false);
                                setSuccess(false);
                                setErase(!erase);
                                canvasRef.current.eraseMode(!erase);
                              }}
                              className={styles.circleButton}
                            >
                              {erase ? (
                                <CreateIcon size="small" />
                              ) : (
                                <CropPortraitIcon size="small" />
                              )}
                            </ToggleButton>
                          </Tooltip>
                        </Grid>
                        <Grid item>
                          <Tooltip title="Clear Canvas" placement="right">
                            <IconButton
                              onClick={() => {
                                setBoxes([]);
                                setLoading(false);
                                setSuccess(false);
                                canvasRef.current.clearCanvas();
                              }}
                              className={styles.circleButton}
                            >
                              <ReplayIcon size="small" />
                            </IconButton>
                          </Tooltip>
                        </Grid>
                      </>
                    )}
                  </Grid>
                  <Grid item className={styles.wrapper}>
                    <Tooltip title="Detect" placement="right">
                      <IconButton
                        component="div"
                        className={`${buttonClassname} ${styles.iconButton} ${styles.buttonMargin}`}
                        disabled={loading || success}
                        onClick={handleButtonClick}
                      >
                        <RemoveRedEyeIcon size="small" />
                      </IconButton>
                    </Tooltip>
                    {loading && (
                      <CircularProgress
                        size={58}
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
