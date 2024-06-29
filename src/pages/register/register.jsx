import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './register.scss';
import { useState } from 'react';

const Register = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    {
      setLoading(true);
    }
    const formData = new FormData(e.target);
    const username = formData.get('userName');
    const email = formData.get('email');
    const password = formData.get('password');
    try {
      const res = await axios.post('http://localhost:8800/api/auth/register', {
        username,
        email,
        password,
      });
      navigate('/login');
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='registerPage'>
      <div className='formContainer'>
        <form onSubmit={handleSubmit}>
          <h1>Create an Account</h1>
          <input type='text' name='userName' placeholder='User Name' />
          <input type='text' name='email' placeholder='Email' />
          <input type='password' name='password' placeholder='Password' />
          <button disabled={loading}>Register</button>
          {error && <span>{error}</span>}
          <Link to='/login'>Do you have an account?</Link>
        </form>
      </div>
      <div className='imgContainer'>
        <img src='/bg.png' alt='' />
      </div>
    </div>
  );
};

export default Register;
