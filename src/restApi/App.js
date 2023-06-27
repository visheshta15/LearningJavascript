
import React from 'react'
import App1 from './App1'
import GetApi from './GetApi'
import PostData from './PostData'

function App() {
  return (
    <div>
        <h1>Rest Api </h1>
        <hr />
        <GetApi />
        <hr />
        <PostData />
        <App1 />
        <hr />
    </div>
  )
}

export default App