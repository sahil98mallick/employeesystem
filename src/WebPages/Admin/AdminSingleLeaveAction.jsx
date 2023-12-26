import React, { useEffect, useState } from 'react'
import { Box, CardContent, Grid, Typography, Button, TextField, Card, MenuItem, InputLabel, FormControl, Select, CircularProgress } from '@mui/material'
import Sidebar from '../../Common/Sidebar';
import { useForm } from 'react-hook-form';
import { FindIDleave, updatestatus } from '../../API/AxiosInstance';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../Common/Layout';

const AdminSingleLeaveAction = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setisloading] = useState(false);
    const { register, formState: { errors }, handleSubmit, setValue } = useForm()
    const fetchleavedetails = async () => {
        try {
            const response = await FindIDleave(id)
            setValue("name", response.data.findisngleleave.name)
        } catch (error) {
            toast.error(error.message)
        }
    }
    useEffect(() => {
        fetchleavedetails()
    }, [])
    const onSubmit = async (data) => {
        console.log(data);
        setisloading(true)
        try {
            const leavedetails = await updatestatus(id, data)
            if (leavedetails.data.leavedata) {
                toast.success(leavedetails.data.leavedata)
                navigate("/adminviewleave")
            } else {
                toast.error(leavedetails.data.leavedata)
            }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setisloading(false)
        }
    }
    return (
        <Layout title={"Admin"}>
            <Grid container spacing={2} style={{ height: "auto" }}>
                <Grid item xs={2} style={{ background: "#F8F8F8", display: { xs: 'none', sm: 'block' } }}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10} style={{ background: "#F6F6F6" }}>
                    <Box style={{ width: "95%", marginTop: "50px", height: "auto" }}>
                        <Typography variant="h4" align='center' component="h6" color={"primary"} style={{ fontFamily: "Times" }}>
                            <b>Take Action Against The Leave</b>
                        </Typography><br />

                        <Card style={{ maxWidth: 880, padding: "0px 5px", margin: "0 auto" }}>
                            <CardContent>
                                <form style={{ marginTop: 20 }} onSubmit={handleSubmit(onSubmit)}>
                                    <Grid container spacing={1} padding={1}>
                                        <Grid xs={12} sm={6} item>
                                            <TextField type='text' variant="outlined" fullWidth disabled
                                                {...register("name", { required: true })}
                                            />
                                            {errors.name?.type === "required" && <p>Name is Required</p>}
                                        </Grid>
                                        <Grid xs={12} sm={6} item>
                                            <FormControl variant="outlined" fullWidth>
                                                <InputLabel htmlFor="leaveactivestatus">Select Status</InputLabel>
                                                <Select
                                                    label="Status"
                                                    {...register("leaveactivestatus", { required: true })}
                                                    inputProps={{
                                                        name: "leaveactivestatus",
                                                        id: "leaveactivestatus"
                                                    }}
                                                >
                                                    <MenuItem value="true">Approved</MenuItem>
                                                    <MenuItem value="false">Reject</MenuItem>
                                                </Select>
                                            </FormControl>
                                            {errors.leaveactivestatus?.type === "required" && <p>Status is Required</p>}
                                        </Grid>
                                        <Grid xs={12} sm={12} item>
                                            <br />
                                            <TextField type='text' placeholder="Enter Admin Note" variant="outlined" fullWidth
                                                {...register("adminnote", { required: true })}
                                            />
                                            {errors.adminnote?.type === "required" && <p>Admin Note is Required</p>}
                                        </Grid>
                                        <Grid item xs={12}>
                                            <center><br />
                                                <Button type="submit" variant="contained" color="secondary">
                                                    {isLoading ? <CircularProgress size={20} color="success" /> : <>Submit</>}
                                                </Button>
                                            </center>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>

                    </Box>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default AdminSingleLeaveAction