import React, { useState } from 'react'
import axios from 'axios';
import apiRequest from '../../lib/apiRequest';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setError('')
    const formData = new FormData(e.target);
    const username = formData.get('userName');
    const password = formData.get('password');
    try {
      const res = await apiRequest.post('/auth/register', {
        username,
        password,
      });
     localStorage.setItem("user",JSON.stringify(res.data))
     navigate('/')
    } catch (err) {
      setError(err.response.data.message);
    }finally{
      setLoading(false)
    }
  };
  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input type="text" name='userName' placeholder='Usename' required/>
          <input type="password" name='password' placeholder='Password' required/>
          <button disabled={loading}>Login</button>
          {error && <span>{error}</span>}
          <Link to='/register'>{`Dont't you have an account`}</Link>
          </form>
      </div>
      <div className='imgContainer'>
        <img src='/bg.png' alt='' />
      </div>
    </div>
  )
}

export default Login
