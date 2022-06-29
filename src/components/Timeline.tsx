import React from "react";
import resumeData from "../assets/resumeData.js";
import TimeLineItem from "./TimeLineItem";

const Timeline = () => {
  return (
    <>
      <div className="timeline-container">
        {resumeData.map((data, index) => (
          <TimeLineItem data={data} key={index} />
        ))}
      </div>
      <div>Non</div>
    </>
  );
};

export default Timeline;
