import { useState, useEffect } from 'react'
import './App.css'
/* import ClassComponent from './components/1ClassComponent'
import FunctionalComponent from './components/2FunctionalComponent'
import { FunctionalNamedComponent } from './components/3FunctionalNamedComponent'
import FunctionalArrowComponent from './components/4FunctionalArrowComponent'
import ParentComponent from './components/5nested_components/ParentComponent'
import PropsRenderComponent from './components/6props/PropsRenderComponent'
import AStateFulComponet from './components/7states_and_effects/AUseState'
import BUseEffect from './components/7states_and_effects/BUseEffect'
import CUseStateWithoutEffect from './components/7states_and_effects/CUseStateWithoutEffect'
import DUseStateCounter from './components/7states_and_effects/DUseStateCounter'
import EUseStateArray from './components/7states_and_effects/EUseStateArray'
import GUseEffectDependency from './components/7states_and_effects/GUseEffectDependency' */
import Login from './components/8forms/Login'
import Logout from './components/8forms/Logout'

function App() {
  const [isLoggedIn, loginSetter] = useState(false)
  useEffect(() => {
    loginSetter(window.sessionStorage && window.sessionStorage.getItem('is-logged-in') && (window.sessionStorage.getItem('is-logged-in') == 1))
    console.log('isLoggedIn', isLoggedIn)
  })
  return (
    <div className="App">
      <span style={{ color: 'red', fontWeight: 'bold' }}>React-Team-Upskill</span>
      <div className="main-content" >
        {
          (isLoggedIn) ?
            (<h2>Hello User||  <Logout updateLoginHandler={loginSetter} /></h2>)
            :
            (<Login updateLoginHandler={loginSetter} />)
        }
      </div>
    </div >
  )
}

export default App
