import React, { useState, useEffect } from 'react'
import TimelineItem from './TimelineItem'

const Timeline = ({ user }) => {
  const [timeline, setTimeline] = useState([])

  var abortController = new AbortController()
  const fetchData = async () => {
    const response = await fetch(
      `https://api.github.com/users/${user.login}/repos`,
      { signal: abortController.signal },
    )
    const results = await response.json()
    setTimeline(results)
  }

  useEffect(() => {
    fetchData()
    return function cancel() {
      abortController.abort()
    }
    //eslint-disable-next-line
  }, [user])

  console.log(timeline)
  return (
    timeline.length > 0 && (
      <div className="timeline-container">
        {timeline.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    )
  )
}

export default Timeline
