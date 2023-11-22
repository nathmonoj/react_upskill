import { useState, useEffect } from 'react'

export default function GUseEffectDependency() {
  const [counter, setCounter] = useState(0)
  const [lastCounter, setLastCounter] = useState(0)
  const [activity, setActivity] = useState('Nothing Happened')
  useEffect(() => {
    if (lastCounter < counter) {
      setActivity('Incremented')
    }
    else if (lastCounter > counter) {
      setActivity('Decremented')
    }
    setLastCounter(counter)
    console.log('counter', counter)
    //}) // No Dependency
    // }, []) // Once Only Dependency
  }, [counter]) // Stateful Dependency

  return (
    <>
      <h2>whatHappened {activity}</h2>
      <button onClick={() => {
        setCounter((prevCounter) => {
          return prevCounter + 1
        })
      }}>Increment</button>
      <div>Counter: {counter}</div>
      <button onClick={() => {
        setCounter((prevCounter) => {
          return prevCounter - 1
        })
      }}>Decrement</button>
    </>
  )
}
