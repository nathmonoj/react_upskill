import { useState } from 'react'

export default function DUseStateCounter() {
  const [counter, setCounter] = useState(0)
  const [boolVal, setBoolVal] = useState(false)
  console.log('boolVal', boolVal)
  return (
    <>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>Change Counter</button>
      <div>Counter :: {counter}</div>
      <button onClick={() => setBoolVal((prevBool) => !prevBool)}>Change Bool Val</button>
      <div>Boolean Value :: {boolVal && 'True'}</div>
    </>
  )
}
