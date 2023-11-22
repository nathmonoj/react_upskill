import { useState, useEffect } from 'react'

export default function BUseEffect() {
  const [conter, setCounter] = useState(0)
  const [conter2, setCounter2] = useState(0)
  useEffect(() => {
    console.log('Inside useEffect conter', conter)
    setTimeout(() => {
      let newCounter = conter + 1
      setCounter(newCounter)
    }, 1000)
  })

  return (
    <div>Conter :: {conter}</div>
  )
}
