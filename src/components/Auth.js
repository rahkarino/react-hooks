import React, {useContext} from 'react'
import Card from './UI/Card'
import './Auth.css'
import { AuthContext } from '../context/auth-context'

const Auth = (props) => {
  const authContext = useContext(AuthContext)

  const loginHandler = () => {
    authContext.login()
  }

  return (
    <div className="auth">
      <Card>
        <p>لطفا برای ادامه وارد شوید.</p>
        <button onClick={loginHandler}>ورود</button>
      </Card>
    </div>
  )
}

export default Auth
