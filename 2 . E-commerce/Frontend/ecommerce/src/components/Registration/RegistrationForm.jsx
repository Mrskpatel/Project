import { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function RegistrationForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        console.log({ name, email, password, phone })
        e.preventDefault()
       await axios.post('http://localhost:1085/registor', { name, email, password, phone },{withCredentials : true})
            .then((res) => {
                console.log(res);
                navigate('/Login');
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className='RegistrationForm'>
            <form onSubmit={handleSubmit}>
                <center>
                    <TextField required id="outlined-required" className='Registration-Form-Input' label="Name" name='name' onChange={(e) => setName(e.target.value)} />
                    <TextField required id="outlined-required" className='Registration-Form-Input' label="Phone" name='phone' inputProps={{ maxLength: 10 }} onChange={(e) => setPhone(e.target.value)} style={{ marginTop: "40px" }} />
                    <TextField required id="outlined-required" className='Registration-Form-Input' label="Email" name='email' onChange={(e) => setEmail(e.target.value)} style={{ marginTop: "40px" }} />
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
                        Registration
                    </Button >
                </center>
            </form>
        </div>
    )
}

export default RegistrationForm