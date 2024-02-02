import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Jost', sans-serif;
  background: linear-gradient(to bottom, #39cfc9, #166a91, #294646);
`;

const Main = styled.div`
  width: 450px;
  height: 600px;
  overflow: hidden;
  background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/ cover;
  border-radius: 10px;
  box-shadow: 5px 20px 50px #000;
`;

const Form = styled.form`
  position: relative;
  width: 100%;
  height: 100%;
  h5 {
    text-align: center;
    margin-top: 20px;
    color: #fff;
  }
`;

const Label = styled.label`
  color: #fff;
  font-size: 2.3em;
  justify-content: center;
  display: flex;
  margin: 60px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.5s ease-in-out;
`;

const Input = styled.input`
  width: 60%;
  height: 40px;
  background: #e0dede;
  justify-content: center;
  display: flex;
  margin: 20px auto;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 60%;
  height: 40px;
  margin: 10px auto;
  justify-content: center;
  display: block;
  color: #fff;
  background: #26e0e9;
  font-size: 1em;
  font-weight: bold;
  margin-top: 30px;
  outline: none;
  border: none;
  border-radius: 5px;
  transition: 0.2s ease-in;
  cursor: pointer;

  .link {
    color: #fff;
    font-size: 1em;
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    background: #4493b8;
  }
`;

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/auth/register" , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        console.log('User created successfully');
        navigate("/");

        // Redirect or show a success message
      } else {
        console.error('Failed to create user');
        // Handle error: show error message or redirect
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error: show error message or redirect
    }
  };

  return (
    <Container>
      <Main>
        <Form className="signup" onSubmit={handleSubmit}>
          <Label>Sign up</Label>
          <Input
            type="text"
            name="name"
            placeholder="User name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button type="submit">Sign up</Button>
          <h5>Already have an Account ?</h5>
          <Button>
            <Link className="link" to="/login">Login</Link>
          </Button>
        </Form>
      </Main>
    </Container>
  );
};

export default Signup;
