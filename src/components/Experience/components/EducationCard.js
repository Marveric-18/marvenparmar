import React from "react";
import classname from "classname";

import Grid from "@mui/material/Grid";

import styles from "./index.module.css";

const EducationCard = ({
  index,
  institutionName,
  degreeName,
  date,
  programName,
  description = [],
  tags = [],
}) => {
  return (
    <div
      className={classname(
        styles.ExperienceContentGrid,
        styles[`slideLeft-${index}`]
      )}
    >
      <div>
        <Grid item xs={12} md={12} className={classname(styles.Title)}>
          {programName}
        </Grid>
        <Grid item xs={12} md={12} className={classname(styles.SemiTitle)}>
          <div>{institutionName}</div>
          <div>
            {degreeName} ( {date} )
          </div>
        </Grid>

        <Grid item xs={12} md={12} className={classname(styles.Content)}>
          <div>
            <ul>
              {description.map((eachPoint, index) => (
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
    </div>
  );
};

export default EducationCard;
