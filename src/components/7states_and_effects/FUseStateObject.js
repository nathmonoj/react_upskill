import { useState } from 'react'

export default function FUseStateObject() {
  const [objVar, setObj] = useState(
    {
      name: 'John',
      title: 'Wick'
    }
  )
  console.log('objVar', objVar)
  return (
    <>
      <button onClick={() => {
        setObj({ ...objVar, name1: 'Bat' })
      }}>Change Counter</button>
      <div>Object Value : {JSON.stringify(objVar)}</div>
    </>
  )
}
