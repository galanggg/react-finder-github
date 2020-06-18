import React from 'react'

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <time>{data.created_at}</time>
      <p>{data['full_name']}</p>
      {data.svn_url && (
        <a href={data.svn_url} target="_blank" rel="noopener noreferrer">
          {data.description}
        </a>
      )}
      <span className="circle" />
    </div>
  </div>
)
export default TimelineItem
