import React from "react";
import {
  Grid,
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import LaunchOutlinedIcon from "@material-ui/icons/LaunchOutlined";

import WordCloudImage from "../../assets/images/wordcloud.svg";
import SectionContainer from "../../components/SectionContainer";
import DisplayImage from "../../components/DisplayImage";
import Information from "../../components/Information";
import { useGridStyles } from "../../styles";

const useStyles = makeStyles({
  root: {
    height: "100%"
  }
});

const links = [
  {
    id: 1,
    href: "https://www.kaggle.com/metamorph/uisketch_dataset",
    name: "Discussing it in Kaggle"
  },
  {
    id: 2,
    href: "https://uisketch-survey.web.app/",
    name: "Participating in our survey"
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

const VerifyOurData = () => {
  const styles = useStyles();
  const gridStyles = useGridStyles();

  return (
    <SectionContainer>
      <Box className={gridStyles.gridContainer}>
        <Box className={gridStyles.leftPane}>
          <Grid container spacing={4} justify="center" alignItems="center">
            <Grid item xs={10}>
              <Information>
                <span>Verify our </span>
                <span className={styles.secondaryText}>UI Sketch Dataset </span>
                <span>by </span>
                <List dense>{list}</List>
              </Information>
            </Grid>
          </Grid>
        </Box>
        <Box className={gridStyles.rightPane}>
          <DisplayImage Image={WordCloudImage} type="others" alt="Word Cloud" />
        </Box>
      </Box>
    </SectionContainer>
  );
};

export default VerifyOurData;
