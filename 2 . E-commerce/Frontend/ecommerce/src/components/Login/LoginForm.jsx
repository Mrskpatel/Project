import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log({ email, password })
    e.preventDefault()
    await axios.post('http://localhost:1085/login', { email, password }, { withCredentials: true })
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div className='LoginForm'>
      <center>
        <form action="" onSubmit={handleSubmit}>
          <TextField required id="outlined-required" className='Registration-Form-Input' label="Email" name='email' onChange={(e) => setEmail(e.target.value)} />
          <TextField required id="outlined-required" className='Registration-Form-Input' label="Password" name='password' onChange={(e) => setPassword(e.target.value)} style={{ marginTop: "40px" }} />
          <Button type='submit'
            variant="outlined"
            className="Registration-Button"
            sx={{
              color: "#FF7E28",
              borderColor: "#FDC9A3",
              "&:hover": {
                borderColor: "#FF7E28",
                backgroundColor: "rgba(255, 126, 40, 0.1)"
              }
            }} style={{ marginTop: "40px" }}>
            Login
          </Button>
        </form>
      </center>
    </div>
  )
}

export default LoginForm