

import React from "react";
import classname from "classname";

import styles from "./index.module.css";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";

import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import SchoolIcon from "@mui/icons-material/School";

import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const GenericTimeline = ({ title,  type, experienceList = []}) => {
  return (
    <>
      <div className={classname(styles.TimeLineHeader)}>
        {title}
      </div>
      <Timeline
        style={{ marginTop: 0 }}
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {experienceList.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot>
                {type === 'experience' ? (
                  <WorkHistoryIcon className={classname(styles.TimeLineIcon)} />
                ) : (
                  <SchoolIcon className={classname(styles.TimeLineIcon)} />
                )}
              </TimelineDot>
              {index < experienceList.length && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              {type === 'experience' ? (
                <ExperienceCard
                  index={index}
                  jobTitle={item.jobTitle}
                  jobTime={item.jobTime}
                  jobCompany={item.jobCompany}
                  jobDescription={item.jobDescription}
                  tags={item.tags}
              />
              ) : (
                <EducationCard
                  index={index}
                  degreeName={item.degreeName}
                  institutionName={item.institutionName}
                  date={item.date}
                  programName={item.programName}
                  description={item.description}
                  tags={item.tags}
                />
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};

export default GenericTimeline;