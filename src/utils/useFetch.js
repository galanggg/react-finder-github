import React, { useState, useEffect } from 'react'

const useFetch = (url, options) => {
  const [user, setUser] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options)
        const results = await response.json()
        setUser(results)
      } catch (error) {
        setError(error)
        console.log(`there is an ${error}`)
      }
    }
    fetchData()
  })
  return { user, error }
}

export default useFetch
