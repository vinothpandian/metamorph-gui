/* eslint-disable react/prop-types */
import React from "react";
import { Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useSpring, animated } from "react-spring";
import SectionContainer from "../../components/SectionContainer";
import Information from "../../components/Information";
import InfoButton from "../../components/InfoButton";
import { useGridStyles, useEmphasisStyles } from "../../styles";

import phone from "../../assets/images/home-phone.svg";
import UI from "../../assets/images/home-ui.svg";

const off = {
  xl: [70, 80],
  lg: [60, 70],
  md: [50, 60],
  sm: [40, 50],
  xs: [10, 20]
};

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  common: {
    position: "absolute",
    willChange: "transform",
    height: "auto"
  },

  outlinedButton: {
    borderRadius: "2rem",
    fontSize: "0.75rem",
    fontWeight: 300,
    color: theme.palette.common.black,
    textTransform: "none",

    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem"
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.25rem"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.25rem"
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.5rem"
    },
    border: `2px solid ${theme.palette.primary.main}`,

    "&:hover": {
      border: `2px solid ${theme.palette.primary.light}`
    }
  },

  card1: {
    width: "100%"
  },
  card2: {
    width: "65%",
    filter: `drop-shadow(
      -${off.xs[0]}px ${off.xs[1]}px
      2px rgba(0, 0, 0, 0.25))`,

    [theme.breakpoints.up("sm")]: {
      filter: `drop-shadow(
      -${off.sm[0]}px ${off.sm[1]}px
      2px rgba(0, 0, 0, 0.25))`
    },
    [theme.breakpoints.up("md")]: {
      filter: `drop-shadow(
      -${off.md[0]}px ${off.md[1]}px
      2px rgba(0, 0, 0, 0.25))`
    },
    [theme.breakpoints.up("lg")]: {
      filter: `drop-shadow(
      -${off.lg[0]}px ${off.lg[1]}px
      2px rgba(0, 0, 0, 0.25))`
    },
    [theme.breakpoints.up("xl")]: {
      filter: `drop-shadow(
      -${off.xl[0]}px ${off.xl[1]}px
      2px rgba(0, 0, 0, 0.25))`
    }
  },

  card2Container: {
    transform: `translate3d(${off.xs[0]}px, -${off.xs[1]}px, 0)`,
    [theme.breakpoints.up("sm")]: {
      transform: `translate3d(${off.sm[0]}px, -${off.sm[1]}px, 0)`
    },
    [theme.breakpoints.up("md")]: {
      transform: `translate3d(${off.md[0]}px, -${off.md[1]}px, 0)`
    },
    [theme.breakpoints.up("lg")]: {
      transform: `translate3d(${off.lg[0]}px, -${off.lg[1]}px, 0)`
    },
    [theme.breakpoints.up("xl")]: {
      transform: `translate3d(${off.xl[0]}px, -${off.xl[1]}px, 0)`
    }
  }
}));

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 8}px,${y / 8}px,0)`;

const Home = () => {
  const styles = useStyles();
  const gridStyles = useGridStyles();
  const emphasisStyles = useEmphasisStyles();

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 }
  }));

  const { xy } = props;

  return (
    <SectionContainer gradientBackground>
      <Box className={gridStyles.gridContainer}>
        <Box className={gridStyles.leftPane}>
          <Grid container spacing={4} justify="center" alignItems="center">
            <Grid item xs={10}>
              <Information>
                <span>MetaMorph is an object detector fine-tuned to </span>
                <span className={emphasisStyles.primaryEmphasis}>locate</span>
                <span> and </span>
                <span className={emphasisStyles.primaryEmphasis}>classify</span>
                <span> UI elements from low-fidelity sketches</span>
              </Information>
            </Grid>
            <Grid item xs={10} container justify="center" spacing={2}>
              <Grid item xs={6} lg={4}>
                <InfoButton to="/try-it-out" variant="contained">
                  Try out!
                </InfoButton>
              </Grid>
              <Grid item xs={6} lg={4}>
                <InfoButton
                  className={styles.outlinedButton}
                  to="/contribute"
                  variant="outlined"
                >
                  Contribute
                </InfoButton>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box
          className={gridStyles.rightPane}
          onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
          <Box
            position="absolute"
            display="flex"
            justifyContent="center"
            alignItems="center"
            height={["70%", "50%", "50%", "70%"]}
            width={["70%", "50%", "55%", "40%"]}
          >
            <animated.img
              className={`${styles.common} ${styles.card1}`}
              src={phone}
              alt="Phone"
              style={{ transform: xy.interpolate(trans1) }}
            />
          </Box>
          <Box
            position="absolute"
            display="flex"
            justifyContent="center"
            alignItems="center"
            my={[-1.5]}
            mx={[2]}
            height={["70%", "50%", "50%", "70%"]}
            width={["70%", "50%", "55%", "40%"]}
            className={styles.card2Container}
          >
            <animated.img
              className={`${styles.common} ${styles.card2}`}
              src={UI}
              alt="UI"
              style={{ transform: xy.interpolate(trans2) }}
            />
          </Box>
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default Home;
