import React from "react";
import classname from "classname";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import styles from "./index.module.css";

const generateList = (items) => (
  <List>
    {items.map((item, index) => (
      <ListItem key={index} className={classname(styles.ListItem)}>
        <ListItemIcon>
          <ArrowRightIcon />
        </ListItemIcon>
        <ListItemText
          primary={
            <span className={classname(styles.listItem, styles.listKey)}>
              {item.key}
            </span>
          }
          secondary={
            <span className={classname(styles.listItem)}>
              {item.value ? item.value : null}
            </span>
          }
        />
      </ListItem>
    ))}
  </List>
);

// Example usage:
const myPersonalInformation = [
  { key: "Full Name", value: "Marven Parmar" },
  { key: "Email", value: "marvenparmar@gmail.com" },
  { key: "Phone", value: "+1 (416) 732-7975" },
  { key: "Address", value: "Toronto, Ontario; Canada" },
  { key: "Birthdate", value: "1st Sept, 1998" },
];

const AboutMe = () => {
  return (
    <>
    {/* <Box sx={{ flexGrow: 1 }}>
        <Grid className={classname(styles.AboutMeParallax)} container spacing={2}>
                
        </Grid>
      </Box> */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          className={classname(styles.AboutMeTitleGrid)}
          container
          spacing={2}
        >
          <Grid
            id={"about"}
            className={classname(styles.AboutMeHeader)}
            item
            xs={12}
            md={12}
          >
            {"< About Me >"}
          </Grid>
        </Grid>
        <Grid
          className={classname(styles.AboutMeContentGrid)}
          container
          spacing={2}
        >
          <Grid
            style={{ paddingLeft: "0px", paddingTop: "0px" }}
            item
            xs={12}
            md={5}
          >
            <List dense={false}>{generateList(myPersonalInformation)}</List>
          </Grid>
          <Grid
            container
            className={classname(styles.AboutMeBody)}
            item
            xs={12}
            md={7}
          >
            <Grid item xs={12} md={12}>
              I am an aspiring Full Stack Developer, Backend Engineer, and Cloud
              Solutions Developer. Proficient in the MERN stack, MEAN stack,
              Spring Boot, Django, JavaScript, TypeScript, Java, Python, and
              more.
              <br />
              <br />
              With more than <b>3 Years of Industry exprience</b>, I have
              excellent exposure of Software architecture and Designing,
              Database Management of both Sql and NoSQL, & Cloud Resource
              management with Azure and AWS.
            </Grid>
            <Grid className={classname()} item xs={12} md={12}>
              <b>{"<< "}</b>I'm not a great programmer; I'm just a good
              programmer with great habits. ~Kent Beck
              <b>{" >>"}</b>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classname(styles.AboutMeParallax)} container spacing={2}>
                
        </Grid>
      </Box>
      
    </>
  );
};

export default AboutMe;
