import React, { Suspense } from 'react'
import 'rbx/index.css'
const SearchNav = React.lazy(() => import('./components/SearchNav'))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <SearchNav />
      </Suspense>
    </div>
  )
}

export default App
