import * as React from 'react';
import { Grid, TextField, Box, Typography, Button } from "@mui/material";
import background from '../../../Assets/Images/background/1.jpg'
import logo from '../../../Assets/Images/background/logo.png'
import '../../../Assets/CSS/Auth/Signup.css'
import { Link } from 'react-router-dom';
import signupschema from './SignupSchema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export default function Signup() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signupschema)
    });
    const onSubmit = data => console.log(data);

    return (
        <>
            <Grid container sx={{ overflow: 'hidden', height: "100vh" }} >

                <Grid item md={5} xs={12} className='signupinputcontainer'  >

                    <Grid container
                        component='form'
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)}
                        sx={{
                            width: "80%",
                            display: "flex",
                            justifyContent: 'space-between'
                        }}
                    >
                        <Grid container > <img src={logo} alt= "company logo"/></Grid>

                        <Grid item md={5.5} xs={12} className='signupinputbox' >
                            <Box
                                sx={{
                                    '& .MuiTextField-root': { marginTop: "1rem", width: '100%' },
                                    width: "100%"
                                }}
                            >

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="First Name"
                                    name="firstname"
                                    size="small"
                                    {...register("firstname")}
                                    error={errors.firstname ? true : false}
                                    helperText={errors.firstname?.message}
                                />

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Last Name"
                                    name="lastname"
                                    size="small"
                                    {...register("lastname")}
                                    error={errors.lastname ? true : false}
                                    helperText={errors.lastname?.message}
                                />


                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Designation"
                                    size="small"
                                    name="designation"
                                    {...register("designation")}
                                    error={errors.designation ? true : false}
                                    helperText={errors.designation?.message}
                                />

                            </Box>
                        </Grid>

                        <Grid item md={5.5} xs={12} className='signupinputbox'>
                            <Box
                                sx={{
                                    '& .MuiTextField-root': { marginTop: "1rem", width: '100%' },
                                    width: "100%"
                                }}
                            >

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Year of Experience"
                                    size="small"
                                    name="yearofexperience"
                                    {...register("yearofexperience")}
                                    error={errors.yearofexperience ? true : false}
                                    helperText={errors.yearofexperience?.message}
                                />

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Email"
                                    size="small"
                                    name="email"
                                    {...register("email")}
                                    error={errors.email ? true : false}
                                    helperText={errors.email?.message}
                                />

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Phone Number"
                                    size="small"
                                    name="phonenumber"
                                    {...register("phonenumber")}
                                    error={errors.phonenumber ? true : false}
                                    helperText={errors.phonenumber?.message}
                                />


                            </Box>
                        </Grid>

                        <Grid container justifyContent='center'  >
                            <Button type='submit' className='signupbutton' variant="contained" >Signup</Button>
                            <Typography
                                variant="body"
                                display="block"
                                gutterBottom
                                sx={{ marginTop: '1rem' }}
                            >
                                Already have an account? <Link to='/' style={{ color: "#49C5B6" }}> Login </Link>
                            </Typography>
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item md={7}  >
                    <img src={background} className='sidebackground' alt= "sidebackground"/>
                </Grid>
            </Grid>

        </>
    )
}
