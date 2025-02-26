import React from "react";
import classname from "classname";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import styles from "./index.module.css";
import { Button } from "@mui/material";

const AboutMe = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, height: "fit-content" }}>
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
            {"About Me"}
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
            <div
              variant="outlined"
              className={styles.AboutMeParallax}
            ></div>
          </Grid>
          <Grid
            container
            className={classname(styles.AboutMeBody)}
            item
            xs={12}
            md={7}
          >
            {/* <List dense={false}>{generateList(myPersonalInformation)}</List> */}
            <Grid item xs={12} md={12}>
              <Grid
                item
                xs={12}
                md={12}
                className={classname(styles.AboutMeSemiHeader)}
                sx={{ textAlign: "right" }}
              >
                Who AM I ?
              </Grid>
              <p>
                I am a <b>Software Engineer</b> with expertise in{" "}
                <b>Backend Development</b>, <b>RESTful APIs</b>,{" "}
                <b>Microservices</b>, and <b>Azure Cloud</b>. My journey into
                the world of software engineering has been fueled by a passion
                for problem-solving and building impactful solutions. I
                constantly strive to create scalable and efficient systems that
                solve real-world problems.
              </p>
              <Grid
                item
                xs={12}
                md={12}
                className={classname(styles.AboutMeSemiHeader)}
                sx={{ textAlign: "left" }}
              >
                What drives me ?  
              </Grid>
              <p>
                What drives me is the challenge of turning complex requirements
                into seamless digital experiences. I believe that great software
                is not just about clean code—it's about delivering real value,
                enhancing user experiences, and contributing to meaningful
                innovation.
              </p>

              <p style={{textAlign: "center"}}>
                <i>
                  "I'm not a great programmer; I'm just a good programmer with
                  great habits."
                </i>
              </p>
            </Grid>
            <Button style={{marginLeft: "1%"}}>Download Resume</Button>
          </Grid>
        </Grid>
        {/* <Grid className={classname(styles.AboutMeParallax)} container spacing={2}>
                
        </Grid> */}
      </Box>
    </>
  );
};

export default AboutMe;
