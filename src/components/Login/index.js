import React, {useState} from 'react'
import './index.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (username === 'Vaibhav' && password === 'Vaibhav@1234') {
      // Redirect to homepage or set logged-in state
      console.log('Login successful')
    } else {
      console.log('Invalid credentials')
    }
  }

  return (
    <div className="container">
      <h2 className="heading">Login</h2>
      <form>
        <div className="user-container">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="pass-container">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className="button" type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
