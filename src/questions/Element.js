import React from 'react'

function Element() {
  const element = React.createElement(
    'div',
    {id: 'login-btn'},
    'Login'
  )
  console.log(element);
  return (
    <div>
    <hr />
      Element
    </div>
  )
}

export default Element