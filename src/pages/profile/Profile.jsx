import React from 'react';
import List from '../../component/list/List';
import './profile.scss';
import apiRequest from '../../lib/apiRequest';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const res = apiRequest.post('/auth/logout');
      localStorage.removeItem('user');
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='profilePage'>
      <div className='details'>
        <div className='wrapper'>
          <div className='title'>
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className='info'>
            <span>
              Avatar:
              <img src='' alt='' />
              <span>
                Username: <b>Kirubha</b>
              </span>
              <span>
                E-mail: <b>Kirubha@gmail.com</b>
              </span>
              <button onClick={handleLogout}>Logout</button>
            </span>
          </div>
          <div className='title'>
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          {/* <List/> */}
          <div className='title'>
            <h1>Saved List</h1>
          </div>
          {/* <List/> */}
        </div>
      </div>
      <div className='chatContainer'>
        <div className='wrapper'></div>
      </div>
    </div>
  );
};

export default Profile;
