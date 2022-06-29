const TimeLineItem = ({ data }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <time>{data.time}</time>
        <p>{data.time}</p>
        <p>{data.text}</p>
        <span className="circle"></span>
      </div>
    </div>
  );
};

export default TimeLineItem;
