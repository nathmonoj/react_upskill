import { useState } from 'react'

export default function EUseStateArray() {
  const [arrVar, setArr] = useState([0, 1, 2])
  console.log('arrVar', arrVar)
  return (
    <>
      <button onClick={() => {
        setArr((prevArr) => [...prevArr, (prevArr.length + 1)])
      }}>Change Counter</button>
      <div>Array Value : {arrVar}</div>
    </>
  )
}
