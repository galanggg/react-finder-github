import React from 'react'
import TimelineItem from './TimelineList'

const Timeline = ({ data }) => {
  return (
    <div className="timeline-container">
      <ul>
        {data.map((user) => (
          <li>{user.login}</li>
        ))}
      </ul>
    </div>
  )
}

export default Timeline
