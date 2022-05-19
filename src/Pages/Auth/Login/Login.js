import * as React from 'react';
import background from '../../../Assets/Images/background/1.jpg'
import logo from '../../../Assets/Images/background/logo.png'
import '../../../Assets/CSS/Auth/login.css'
import { Link } from 'react-router-dom';
import loginschema from './LoginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  Grid,
  TextField,
  Box,
  Typography,
  Button
} from "@mui/material";



export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginschema)
  });

  const onSubmit = data => console.log(data);

  return (
    <>
      <Grid container sx={{ overflow: 'hidden' }} >
        <Grid item md={4} xs={12} className='logininputcontainer'>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              '& .MuiTextField-root': { marginTop: "1rem", width: '100%' },
              width: "70%"
            }}
            noValidate
            autoComplete="off"
          >

            <Box >
              <img src={logo} alt="company logo" />
            </Box>

            <TextField
              required
              id="outlined-required"
              name="email"
              label="Email"
              size="small"
              type="email"
              {...register("email")}
              error={errors.email ? true : false}
              helperText={errors.email?.message}
            />

            <TextField
              required
              name="password"
              id="outlined-required"
              label="Password"
              size="small"
              type="password"
              {...register("password")}
              error={errors.password ? true : false}
              helperText={errors.password?.message}
            />

            <Button type='submit' className='loginbutton' variant="contained" >login</Button>

            <Typography variant="body2"
              color="primary"
              display="block"
              gutterBottom
              sx={{ marginTop: "1rem", textAlign: 'center' }}>
              <Link to='/forgotpassword' style={{ color: "#49C5B6" }}>Forgot password ?</Link>

            </Typography>


            <Typography
              variant="body"
              display="block"
              gutterBottom
              sx={{ textAlign: 'center' }}>
              Don't have an account? <Link to="/signup" style={{ color: "#49C5B6" }}> Signup </Link>
            </Typography>
          </Box>
        </Grid>
        <Grid item md={8}  >
          <img src={background} className='sidebackground' alt="sidebackground" />
        </Grid>
      </Grid>

    </>
  )
}
