// import React from "react";
// import classname from "classname";

// import styles from "./index.module.css";
// import ExperienceCard from "./ExperienceCard";
// import EducationCard from "./EducationCard";

// import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
// import SchoolIcon from "@mui/icons-material/School";
// import Timeline from "@mui/lab/Timeline";
// import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
// import TimelineSeparator from "@mui/lab/TimelineSeparator";
// import TimelineConnector from "@mui/lab/TimelineConnector";
// import TimelineContent from "@mui/lab/TimelineContent";
// import TimelineDot from "@mui/lab/TimelineDot";

// const GenericTimeline = ({ title, timelineList }) => {
//   return (
//     <>
//       <div className={classname(styles.TimeLineHeader)}>
//         {title}
//       </div>
//       <Timeline
//         style={{ marginTop: 0 }}
//         sx={{
//           [`& .${timelineItemClasses.root}:before`]: {
//             flex: 0,
//             padding: 0,
//           },
//         }}
//       >
//         {timelineList.map((item, index) => (
//           <TimelineItem key={index}>
//             <TimelineSeparator>
//               <TimelineDot>
//                 {item.type === 'experience' ? (
//                   <WorkHistoryIcon className={classname(styles.TimeLineIcon)} />
//                 ) : (
//                   <SchoolIcon className={classname(styles.TimeLineIcon)} />
//                 )}
//               </TimelineDot>
//               {index < timelineList.length - 1 && <TimelineConnector />}
//             </TimelineSeparator>
//             <TimelineContent>
//               {item.type === 'experience' ? (
//                 <ExperienceCard
//                   index={index}
//                   jobTitle={item.jobTitle}
//                   jobTime={item.jobTime}
//                   jobCompany={item.jobCompany}
//                   jobDescription={item.jobDescription}
//                   tags={item.tags}
//                 />
//               ) : (
//                 <EducationCard
//                   index={index}
//                   degree={item.degree}
//                   institution={item.institution}
//                   date={item.date}
//                   description={item.description}
//                 />
//               )}
//             </TimelineContent>
//           </TimelineItem>
//         ))}
//       </Timeline>
//     </>
//   );
// };

// export default GenericTimeline;
