import React from "react";
import classname from "classname";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import styles from "./index.module.css";
import { experienceList, eductionList } from "./constant";
import GenericTimeline from "./components/ExperienceTimeline";


const Experience = () => {
  return (
    <>
      <Box  sx={{ flexGrow: 1 }}>
        <Grid
        id={"jouney"}
          className={classname(styles.ExperienceTitleGrid)}
          container
          spacing={0}
        >
          <Grid
            
            className={classname(styles.ExperienceHeader)}
            item
            xs={12}
            md={12}
          >
            {"< Journey >"}
          </Grid>
        </Grid>

        <Grid
          className={classname(styles.ExperienceContentGrid)}
          container
          spacing={0}
        >
          <Grid item xs={12} md={7}>
            <GenericTimeline title={'Work History'} type={"experience"} experienceList={experienceList} />
          </Grid>
          <Grid item xs={12} md={5}>
            <GenericTimeline title={'Education'} type={"education"} experienceList={eductionList} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Experience;
