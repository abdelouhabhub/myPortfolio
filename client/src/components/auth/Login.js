import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Home from '../../pages/Home';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an API call to authenticate the user's credentials
      const response = await axios.post('http://localhost:5000/api/users/login', { username, password });

      // Handle the response based on the authentication result
      if (response.data._id) {
        // Authentication successful
        localStorage.setItem("user", {_id: response.data._id, username: response.data.username});
        navigate("/home")
        console.log('Login successful');
        // Redirect the user to the home page        navigate('/home');
      } else {
        // Authentication failed
        console.log('Login failed');
        // Display an error message to the user
        // You can set an error state and display the error message in the UI
      }
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.error('Error:', error.message);
      // Display an error message to the user
      // You can set an error state and display the error message in the UI
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username: </Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            value={username}
            onChange={handleUsernameChange}
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password: </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
