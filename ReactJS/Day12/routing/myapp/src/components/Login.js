import React from 'react'
const Login = () => {
  return (
    <div>
        <h1>Login Page</h1>
        <form>
            <label>Username:</label>
            <input type="text" name="username" placeholder="username"/><br/>
            <label>Password:</label>
            <input type="password" name="password" placeholder="password"/><br/>
            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login