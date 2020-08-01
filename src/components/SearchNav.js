import React, { useState, useEffect, useCallback } from 'react'
import 'rbx/index.css'
import { Control, Input, Box, Button, Column, Title } from 'rbx'

const User = React.lazy(() => import('./User.tsx'))

const SearchNav = () => {
  const [data, setData] = useState([])
  const [username, setUsername] = useState('')
  const [show, setShow] = useState(false)

  const onChange = (e) => {
    setUsername(e.target.value)
  }

  //eslint-disable-next-line
  const handleSubmit = async (e) => {
    setShow(true)
    e.preventDefault()
    const response = await fetch(`https://api.github.com/users/${username}`)
    const resultsUser = await response.json()

    const repositories = await fetch(resultsUser.repos_url)

    if (resultsUser) {
      setData(resultsUser)
    }
    console.log(resultsUser)
  }

  return (
    <div style={{ marginTop: '40px' }}>
      <Column.Group centered>
        <Column size="half">
          <Box>
            <Title>Github Finder</Title>
            <Control>
              <Input type="text" value={username} onChange={onChange}></Input>
            </Control>
            <br />
            <Button
              color="primary"
              type="submit"
              onClick={handleSubmit}
              textAlign="centered"
            >
              Submit
            </Button>
          </Box>
        </Column>
      </Column.Group>
      {show ? <User data={data} /> : null}
    </div>
  )
}

export default SearchNav
