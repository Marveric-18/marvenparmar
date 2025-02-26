import React, { createRef, useEffect, useState } from "react";
import classname from "classname";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import styles from "./index.module.css";
import { LinearProgress, Typography } from "@mui/material";

// Individual Progress Bar with Label
function LinearProgressWithLabel({ value, label, color }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
      <Typography variant="body1" gutterBottom>
        {label}
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            sx={{
              height: 12,
              width: '100%',
              borderRadius: 5,
              bgcolor: "grey.300", // Background color for the track
              "& .MuiLinearProgress-bar": {
                backgroundColor: color, // Progress bar color
              },color
            }}
          />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {`${Math.round(value)}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

// Main ProgressBar Component
function ProgressBar({ isVisible }) {
  const [progressList, setProgressList] = React.useState([
    
    { label: "JavaScript", initial: 5, target: 95, current: 5, color: '#74B72E' },
    { label: "TypeScript", initial: 10, target: 75, current: 10, color: 'maroon' },
    { label: "GraphQL", initial: 5, target: 75, current: 5, color: 'maroon' },
    { label: "Node.js", initial: 5, target: 95, current: 5, color: '#74B72E' },
    { label: "REST API", initial: 10, target: 90, current: 10, color: '#74B72E' },
    { label: "Azure DevOps", initial: 50, target: 90, current: 50, color: '#74B72E' },
    { label: "Java", initial: 20, target: 70, current: 20, color: 'maroon' },
   
    { label: "Python", initial: 30, target: 85, current: 30, color: '#ED7014' },
    { label: "SpringBoot", initial: 15, target: 75, current: 15, color: 'maroon' },
    
    { label: "Postgres", initial: 40, target: 75, current: 40, color: 'maroon' },
    
    { label: "Django REST", initial: 25, target: 85, current: 25, color: '#ED7014' },
    { label: "MongoDB", initial: 5, target: 95, current: 5, color: '#74B72E' },
  ]);

  // Simulate progress updates
  React.useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setProgressList((prevProgressList) =>
        prevProgressList.map((progressItem) => ({
          ...progressItem,
          current:
            progressItem.current < progressItem.target
              ? progressItem.current + 1
              : progressItem.current,
        }))
      );
    }, 20);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <Box sx={{ width: "100%", maxWidth: 1000, margin: "0 auto", mt: 4 }}>
      <Grid container spacing={4}>
        {progressList.map((progressItem, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <LinearProgressWithLabel
              value={progressItem.current}
              label={progressItem.label}
              color={progressItem.color}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = createRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            console.log("Here Called");
            setIsVisible(true);
          }
        }
      },
      {
        threshold: 0.4,
      }
    );
    observer.observe(ref.current);
    return () => {
      ref.current && observer.unobserve(ref.current);
    };
  }, [ref]);

  useEffect(() => {
    if (!isVisible) return;
  }, [isVisible]);

  return (
    <>
      <Box sx={{ flexGrow: 1, height: "fit-content" }}>
        <Grid
          className={classname(styles.SkillsTitleGrid)}
          container
          spacing={2}
          ref={ref}
        >
          <Grid
            id={"about"}
            className={classname(styles.SkillsHeader)}
            item
            xs={12}
            md={12}
          >
            {"Skills"}
          </Grid>
        </Grid>
        <Grid
          className={classname(styles.SkillsContentGrid)}
          container
          spacing={2}
        >
          <ProgressBar isVisible={isVisible} />
        </Grid>
      </Box>
    </>
  );
};

export default Skills;
