import React from "react";
import classname from "classname";

import Grid from "@mui/material/Grid";

import styles from "./index.module.css";

const ExperienceCard = ({
  index,
  jobTitle,
  jobTime,
  jobCompany,
  jobDescription,
  tags,
}) => {
  return (
    <div className={classname(styles.ExperienceContentGrid, styles[`slideLeft-${index}`])}>
      <Grid item xs={12} md={12} className={classname(styles.Title)}>
        <b>{jobTitle}</b>
      </Grid>
      <Grid item xs={12} md={12} className={classname(styles.SemiTitle)}>
        {jobCompany} ({jobTime})
      </Grid>
      <Grid item xs={12} md={12} className={classname(styles.Content)}>
        <div>
          <ul>
            {jobDescription.map((eachPoint, index) => (
              <li>{eachPoint}</li>
            ))}
          </ul>
        </div>
      </Grid>
      <Grid item xs={12} md={12} className={classname(styles.TagList)}>
        <ul className={classname(styles.tags)}>
          {tags.map((eachTag, index) => (
            <li>
              <a href="#eachTag" className={classname(styles.tag)}>
                {eachTag}
              </a>
            </li>
          ))}
        </ul>
      </Grid>
    </div>
  );
};

export default ExperienceCard;
