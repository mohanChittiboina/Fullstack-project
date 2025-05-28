import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Add this line

const Registration = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const store = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://127.0.0.1:8000/register/', {
        username,
        email,
        password,
      });

      if (res.status === 200) {
        alert('Registration Successful');
        setRedirect(true);
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        alert('User already exists');
      } else {
        alert('Something went wrong');
      }
    }
  };

  if (redirect) {
    navigate('/Login');
  }

  return (
    <div className="register-wrapper">
      <form className="register-form" onSubmit={store}>
        <h2>Register</h2>

        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Register</button>

        <p className="login-link">
          Already have an account? <a href="/Login">Log in</a>
        </p>
      </form>
    </div>
  );
};

export default Registration;
