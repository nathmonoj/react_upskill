import React from 'react'

export default function EnvironementComponent() {
  return (
    <div>EnvironementComponent :: {process.env.REACT_APP_TEST_VAR}</div>
  )
}
