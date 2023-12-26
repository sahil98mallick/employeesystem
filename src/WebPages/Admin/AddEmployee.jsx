import React, { useState } from 'react'
import { Box, CardContent, Grid, Typography, Card, TextField, Button, MenuItem, Select, InputLabel, FormControl, CircularProgress } from '@mui/material'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { addusers } from '../../API/AxiosInstance';
import Sidebar from '../../Common/Sidebar';
import Layout from '../../Common/Layout';
const AddEmployee = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [isLoading, setisloading] = useState(false);
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    console.log(data);
    setisloading(true)
    try {
      const response = await addusers(data);
      console.log(response);
      if (response.data) {
        toast.success(response.data.message);
        navigate('/viewemployee')
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setisloading(false)
    }
  }
  return (
    <Layout title={"Add Employee"}>
      <Grid container spacing={2} style={{ height: "auto" }}>
        <Grid item xs={2} style={{ background: "#F8F8F8", display: { xs: 'none', sm: 'block' } }}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} style={{ background: "#F6F6F6" }}>
          <Box style={{ width: "97%", marginTop: "10px", background: "#F8F8F8" }}>
            <Grid container spacing={2}>
              {/* First Card */}
              <Grid item xs={12} sm={6} md={4}>
                <CardContent>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    padding="20px"
                    border="1px solid #D7A60C"
                    borderRadius="20px"
                    boxShadow="12px 12px 2px 1px #D8DDE0"
                  >
                    {/* Logo Image */}
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png" // Replace with your image URL
                      alt="Logo"
                      style={{ width: "60px", height: "60px" }} />

                    <div>
                      <Typography variant="h5" component="div" fontFamily={"Times"}>
                        <b><i>Total Employee</i></b>
                      </Typography>
                      <Typography variant="h4" component="div" fontFamily={"Times"}>
                        5
                      </Typography>
                    </div>
                  </Box>
                </CardContent>
              </Grid>
              {/* Second Card */}
              <Grid item xs={12} sm={6} md={4}>
                <CardContent>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    padding="20px"
                    border="1px solid #D7A60C"
                    borderRadius="20px"
                    boxShadow="12px 12px 2px 1px #D8DDE0"
                  >
                    {/* Logo Image */}
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png" // Replace with your image URL
                      alt="Logo"
                      style={{ width: "60px", height: "60px" }} />

                    <div>
                      <Typography variant="h5" component="div" fontFamily={"Times"}>
                        <b><i>Active Employee</i></b>
                      </Typography>
                      <Typography variant="h4" component="div" fontFamily={"Times"}>
                        5
                      </Typography>
                    </div>
                  </Box>
                </CardContent>
              </Grid>

              {/* Third Card */}
              <Grid item xs={12} sm={6} md={4}>
                <CardContent>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    padding="20px"
                    border="1px solid #D7A60C"
                    borderRadius="20px"
                    boxShadow="12px 12px 2px 1px #D8DDE0"
                  >
                    {/* Logo Image */}
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png" // Replace with your image URL
                      alt="Logo"
                      style={{ width: "60px", height: "60px" }} />

                    <div>
                      <Typography variant="h5" component="div" fontFamily={"Times"}>
                        <b><i>In-Active Employee</i></b>
                      </Typography>
                      <Typography variant="h4" component="div" fontFamily={"Times"}>
                        0
                      </Typography>
                    </div>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Box>

          <Box style={{ width: "97%", marginTop: "10px", height: "auto" }}>
            <Grid>
              <Typography variant="h5" align='center' component="h5" color={"primary"}>
                <b>Add Employee Records</b>
              </Typography><br />
              <Card style={{ maxWidth: 880, padding: "0px 5px", margin: "0 auto" }}>
                <CardContent>
                  <form style={{ marginTop: 20 }} onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={1}>
                      <Grid xs={12} sm={6} item>
                        <TextField type='text' placeholder="Enter Name" label="Full Name" variant="outlined" fullWidth
                          {...register("name", { required: true })} />
                        {errors.name?.type === "required" && <p>Name is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField type='text' placeholder="Enter Employee Id" label="Employee Id" variant="outlined" fullWidth
                          {...register("empid", { required: true })} />
                        {errors.empid?.type === "required" && <p>Employee Id is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField type='text' placeholder="E.g: 1995-07-15" label="DoB" variant="outlined" fullWidth
                          {...register("dob", { required: true })} />
                        {errors.empid?.type === "required" && <p>Employee Id is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField type='text' placeholder="Enter UserName" label="UserName" variant="outlined" fullWidth
                          {...register("username", { required: true })} />
                        {errors.username?.type === "required" && <p>UserName is Required</p>}
                      </Grid>
                      <Grid item xs={6}>
                        <TextField type="email" placeholder="Enter Email" label="Email" variant="outlined" fullWidth
                          {...register("email", { required: true })} />
                        {errors.email?.type === "required" && <p>Email is Required</p>}
                      </Grid>
                      <Grid item xs={6}>
                        <TextField type="password" placeholder="Enter Password" label="Password" variant="outlined" fullWidth
                          {...register("password", { required: true })} />
                        {errors.password?.type === "required" && <p>Password is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField type='text' placeholder="Enter position" label="Position" variant="outlined" fullWidth
                          {...register("position", { required: true })} />
                        {errors.position?.type === "required" && <p>Position is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField type='number' placeholder="Enter Phone" label="Primary Phone" variant="outlined" fullWidth
                          {...register("primaryphone", { required: true })} />
                        {errors.primaryphone?.type === "required" && <p>Phone is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField type='number' placeholder="Enter Phone" label="Secondary Phone" variant="outlined" fullWidth
                          {...register("secondaryphone", { required: true })} />
                        {errors.secondaryphone?.type === "required" && <p>Phone is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField type='text' placeholder="Enter salary" label="Salary" variant="outlined" fullWidth
                          {...register("salary", { required: true })} />
                        {errors.salary?.type === "required" && <p>Salary is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField type='text' placeholder="Enter Job Localtion" label="Job Localtion" variant="outlined" fullWidth
                          {...register("currentjoblocation", { required: true })} />
                        {errors.currentjoblocation?.type === "required" && <p>Job Localtion is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <FormControl variant="outlined" fullWidth>
                          <InputLabel htmlFor="gender">Gender</InputLabel>
                          <Select
                            label="Gender"
                            {...register("gender", { required: true })}
                            inputProps={{
                              name: "gender",
                              id: "gender"
                            }}
                          >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Other">Other</MenuItem>
                          </Select>
                        </FormControl>
                        {errors.gender?.type === "required" && <p>Gender is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <FormControl variant="outlined" fullWidth>
                          <InputLabel htmlFor="userType">User-Type</InputLabel>
                          <Select
                            label="User Type"
                            placeholder='Select User Type'
                            {...register("userType", { required: true })}
                            inputProps={{
                              name: "userType",
                              id: "userType"
                            }}
                          >
                            <MenuItem value="Admin">Admin</MenuItem>
                            <MenuItem value="Employee">Employee</MenuItem>
                          </Select>
                        </FormControl>
                        {errors.userType?.type === "required" && <p>User-Type is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <FormControl variant="outlined" fullWidth>
                          <InputLabel htmlFor="activestatus">Select Status</InputLabel>
                          <Select
                            label="User Type"
                            placeholder='Select Active Status'
                            {...register("activestatus", { required: true })}
                            inputProps={{
                              name: "activestatus",
                              id: "activestatus"
                            }}
                          >
                            <MenuItem value="true">Active</MenuItem>
                            <MenuItem value="false">In-Active</MenuItem>
                          </Select>
                        </FormControl>
                        {errors.activestatus?.type === "required" && <p>User-Type is Required</p>}
                      </Grid>
                      <Grid item xs={12}>
                        <TextField type="text" placeholder="Enter Address" label="About" variant="outlined" fullWidth
                          {...register("aboutuser", { required: true })} />
                        {errors.aboutuser?.type === "required" && <p>About User is Required</p>}
                      </Grid>
                      <Grid item xs={12}>
                        <TextField type="text" placeholder="Enter Address" label="Address" variant="outlined" fullWidth
                          {...register("address", { required: true })} />
                        {errors.address?.type === "required" && <p>Address is Required</p>}
                      </Grid>
                      <Grid item xs={12}>
                        <center>
                          <Button type="submit" variant="contained" color="secondary">
                            {isLoading ? <CircularProgress size={20} style={{color:"black"}} /> : <>Submit</>}
                          </Button>
                        </center>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default AddEmployee