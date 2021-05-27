import React, {useContext} from 'react'
import Auth from './components/Auth'
import {AuthContext} from './context/auth-context'
import Products from './components/Products/Products'
import useDarkMode from './hooks/dark-mode'

const App = (props) => {
  const [theme, toggleTheme] = useDarkMode()
  const authContext = useContext(AuthContext)
  let content = <Auth />
  if(authContext.isAuth) {
    content = (
      <div
      className="app"
      style={{
        backgroundColor: theme === 'dark' ? '#212121' : '#f0f0f0',
        color: theme === 'dark' ? '#f0f0f0' : '#212121',
        transition: '.3s all',
        textAlign: 'center'
      }}
      >
        <Products />
        <button type="button" onClick={toggleTheme}>Change Theme</button>
      </div>
    )
  }
  return content
}

export default App
