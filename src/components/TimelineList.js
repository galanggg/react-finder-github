import React from 'react'

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <ul>
      <li>{data.login}</li>
    </ul>
  </div>
)
export default TimelineItem
