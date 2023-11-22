import { useState } from 'react'

export default function CUseStateWithoutEffect() {
  const [color, setColor] = useState('Red')
  /* function buttonClicked() {
    setColor('Blue')
  } */
  return (
    <>
      <button onClick={() => setColor('Blue')}>Change Color</button>
      <div>Color :: {color}</div>
    </>
  )
}
