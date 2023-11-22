import { useEffect } from 'react'

export default function Logout({ updateLoginHandler }) {
  useEffect(() => {
    console.log('Logout clicked')
  })

  return (
    <span onClick={() => {
      window.sessionStorage.removeItem('is-logged-in')
      updateLoginHandler(false)
    }}>Logout</span>
  )
}
