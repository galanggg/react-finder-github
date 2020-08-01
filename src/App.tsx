import React, { Suspense } from 'react'
import 'rbx/index.css'
import './App.css'
import { Container } from 'rbx'

const SearchNav = React.lazy(() => import('./components/SearchNav'))

const App: React.FunctionComponent = () => (
  <div className="App">
    <Container>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchNav />
      </Suspense>
    </Container>
  </div>
)

export default App
