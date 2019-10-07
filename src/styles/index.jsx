import { makeStyles } from "@material-ui/styles";

export const useGridStyles = makeStyles(theme => ({
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "1.25fr 1.75fr",
    gridTemplateRows: "1fr",
    gridTemplateAreas: ". .",
    height: "100%",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
      gridTemplateRows: "1fr 1fr",
      gridTemplateAreas: '"." "."'
    }
  },
  leftPane: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  rightPane: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

export const useEmphasisStyles = makeStyles(theme => ({
  primaryEmphasis: {
    color: theme.palette.primary.main
  },
  secondaryEmphasis: {
    color: theme.palette.secondary.main
  }
}));
