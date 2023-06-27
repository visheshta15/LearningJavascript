import React from 'react'
import { pure } from 'recompose';

// Optimizing a functional component so that React can treat it as a pure component shouldn’t necessarily require that you convert the component to a class component.

// The Recompose package provides a broad collection of higher-order components (HOCs) that are very useful for dealing with functional components. The Recompose package exports a [{ pure }] HOC that tries to optimize a React component by preventing updates on the component unless a prop has changed, using shallowEqual() to test for changes.

// Using the pure HOC, our functional component can be wrapped as follows:


function FCPC() {
  return (
    <div>
        <h1>FCPC</h1>
        <h6> package : npm i recompose  -- X not working</h6>
        <h6> package : npm i react-recompose</h6>
    </div>
  )
}

export default pure(FCPC);