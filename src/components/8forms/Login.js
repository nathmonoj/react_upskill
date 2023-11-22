import { useState } from 'react'

export default function Login({ updateLoginHandler }) {
  // States for login
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function loginSubmit(evt) {
    evt.preventDefault()
    updateLoginHandler(email && password && true)
    window.sessionStorage.setItem('is-logged-in', 1)

    console.log('Form Submitted')
    console.log('email', email)
    console.log('password', password)
  }


  return (
    <>
      <h2>Login form</h2>
      <form onSubmit={loginSubmit}>
        <input
          type='text'
          placeholder='Email'
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        />
        <br />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <br />
        <input type="submit" />
      </form>
    </>

  )
}
