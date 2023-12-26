import React, { useState } from 'react'
import { Box, Button, Card, CardContent, CircularProgress, Grid, TextField, Typography } from '@mui/material'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useAuth } from '../Authsection/AuthPage';
import { toast } from 'react-toastify';
import { loginfunction } from '../API/AxiosInstance';
import Layout from '../Common/Layout';

const Login = () => {
    const [auth, setauth] = useAuth();
    const [isLoading, setisloading] = useState(false);
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        setisloading(true);

        try {
            const response = await loginfunction(data);
            console.log(response);
            const logindt = response.data;

            if (logindt.success) {
                if (logindt.user.userType === "Employee" && logindt.user.activestatus === true) {
                    toast.success(logindt.message);
                    setauth({
                        ...auth,
                        user: logindt.user,
                        token: logindt.token
                    });
                    localStorage.setItem("auth", JSON.stringify(response.data));
                    navigate("/employeedashbaord");
                } else if (logindt.user.userType === "Admin" && logindt.user.activestatus === true) {
                    toast.success(logindt.message);
                    setauth({
                        ...auth,
                        user: logindt.user,
                        token: logindt.token
                    });
                    localStorage.setItem("auth", JSON.stringify(response.data));
                    navigate("/admindashboard");
                } else if (logindt.user.activestatus === false) {
                    toast.error("Your account is blocked....Please Contact Your Administration");
                }
            } else {
                toast.error(logindt.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setisloading(false);
        }
    };

    return (
        <Layout title={"Login"}>
            <div>
                <Typography gutterBottom variant="h3" align="center" style={{ marginTop: 20, fontFamily: "Times" }}>
                    Login to Employee Management System
                </Typography>
                <Grid>
                    <Card style={{ maxWidth: 480, padding: "0px 5px", margin: "0 auto" }}>
                        <Box style={{ display: "flex", justifyContent: "space-evenly", marginTop: "10px" }}>
                            <Button variant='contained' color='success' size="large">
                                GitHub
                            </Button>
                            <Button variant='contained' color='warning' size="large">
                                Git Lab
                            </Button>
                            <Button variant='contained' color='primary' size="large">
                                Google
                            </Button>
                        </Box>

                        <CardContent>
                            <center>
                                <Card style={{ width: 150, height: 150, borderRadius: "50%" }}>
                                    <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt='Logo' width={150} height={150} />
                                </Card>
                            </center>
                            <form style={{ marginTop: 20 }} onSubmit={handleSubmit(onSubmit)}>
                                <Grid container spacing={4}>
                                    <Grid item xs={12}>
                                        <TextField type="text" placeholder="Enter Username" label="Username" variant="outlined" fullWidth
                                            {...register("username", { required: true })} />
                                        {errors.username?.type === "required" && <p>Email is Required</p>}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="password" placeholder="Enter Password" label="Password" variant="outlined" fullWidth
                                            {...register("password", { required: true })} />
                                        {errors.password?.type === "required" && <p>Password is Required</p>}
                                    </Grid>
                                    <Grid item xs={6} style={{ margin: "0 auto" }}>
                                        <Button type='submit' variant="contained" style={{ background: "#2A6BEE" }} fullWidth>
                                            {isLoading ? <CircularProgress size={20} style={{ color: "black" }} /> : <><VpnKeyIcon />&nbsp;Sign-In</>}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        </Layout>
    )
}

export default Login