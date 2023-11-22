import { useState } from 'react'

export default function AUseState() {
  const [conter, setCounter] = useState(0)
  return (
    <div>AUseState : {conter}</div>
  )
}
