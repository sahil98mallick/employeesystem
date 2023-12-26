import React, { useEffect, useState } from 'react'
import { Box, CardContent, Grid, Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, FormControl, InputLabel, Select, TextField, MenuItem, CircularProgress, Card } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate, useParams } from 'react-router-dom';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { allusers, finduser, updateemployee } from '../../API/AxiosInstance';
import Sidebar from '../../Common/Sidebar';
import Layout from '../../Common/Layout';
const UpdateEmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const { register, formState: { errors }, handleSubmit, setValue } = useForm();
  const [isLoading, setisloading] = useState(false);
  const fetchsingleemployee = async () => {
    try {
      const singledata = await finduser(id)
      console.log(singledata.data);
      setValue("name", singledata.data.finddata.name)
      setValue("empid", singledata.data.finddata.empid)
      setValue("dob", singledata.data.finddata.dob)
      setValue("email", singledata.data.finddata.email)
      setValue("username", singledata.data.finddata.username)
      setValue("position", singledata.data.finddata.position)
      setValue("secondaryphone", singledata.data.finddata.secondaryphone)
      setValue("currentjoblocation", singledata.data.finddata.currentjoblocation)
      setValue("activestatus", singledata.data.finddata.activestatus)
      setValue("aboutuser", singledata.data.finddata.aboutuser)
      setValue("gender", singledata.data.finddata.gender)
      setValue("salary", singledata.data.finddata.salary)
      setValue("primaryphone", singledata.data.finddata.primaryphone)
      setValue("address", singledata.data.finddata.address)
      setValue("userType", singledata.data.finddata.userType)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchsingleemployee()
  }, [id])


  const onSubmit = async (data) => {
    data.activestatus = "true"
    console.log(data);
    try {
      const updateemp = await updateemployee(id, data)
      console.log(updateemp.data);
      if (updateemp.data) {
        toast.success(updateemp.data.message)
        navigate(`/viewsingleemployee/${id}`)
      } else {
        toast.error(updateemp.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  // All Employee Detaiils Fetch Here
  const [employee, setemployee] = useState([]);
  const fethcemployee = async () => {
    const response = await allusers()
    setemployee(response.data.UsersData)
  }
  useEffect(() => {
    fethcemployee()
  }, [])

  // Count the active and inactive employees
  const countActiveEmployees = employee?.filter((emp) => emp.activestatus === true).length;
  const countInactiveEmployees = employee?.filter((emp) => emp.activestatus === false).length;

  // Testing
  return (
    <Layout title={"Admin"}>
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
                        {employee.length}
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
                        {countActiveEmployees}
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
                        {countInactiveEmployees}
                      </Typography>
                    </div>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Box>

          <Box style={{ width: "97%", marginTop: "10px", height: "auto" }}>
            <Typography variant="h6" align='center' component="h6" color={"primary"}>
              <b>Update Emplyee Details</b>
            </Typography><br />
            <Grid>
              <Card style={{ maxWidth: 880, padding: "0px 5px", margin: "0 auto" }}>
                <CardContent>
                  <form style={{ marginTop: 20 }} onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={1}>
                      <Grid xs={12} sm={6} item>
                        <TextField type='text' placeholder="Enter Name" label="Full Name" variant="outlined" fullWidth
                          {...register("name", { required: true })} focused />
                        {errors.name?.type === "required" && <p>Name is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField type='text' placeholder="Enter Employee Id" label="Employee Id" variant="outlined" fullWidth
                          {...register("empid", { required: true })} focused />
                        {errors.empid?.type === "required" && <p>Employee Id is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField type='text' placeholder="E.g: 1995-07-15" label="DoB" variant="outlined" fullWidth
                          {...register("dob", { required: true })} focused />
                        {errors.dob?.type === "required" && <p>DoB is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField type='text' placeholder="Enter UserName" label="UserName" variant="outlined" fullWidth
                          {...register("username", { required: true })} focused />
                        {errors.username?.type === "required" && <p>UserName is Required</p>}
                      </Grid>
                      <Grid item xs={6}>
                        <TextField type="email" placeholder="Enter Email" label="Email" variant="outlined" fullWidth
                          {...register("email", { required: true })} focused />
                        {errors.email?.type === "required" && <p>Email is Required</p>}
                      </Grid>
                      <Grid item xs={6}>
                        <TextField type="password" placeholder="Enter Password" label="Password" variant="outlined" fullWidth
                          {...register("password", { required: true })} focused />
                        {errors.password?.type === "required" && <p>Password is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField type='text' placeholder="Enter position" label="Position" variant="outlined" fullWidth
                          {...register("position", { required: true })} focused />
                        {errors.position?.type === "required" && <p>Position is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField type='number' placeholder="Enter Phone" label="Primary Phone" variant="outlined" fullWidth
                          {...register("primaryphone", { required: true })} focused />
                        {errors.primaryphone?.type === "required" && <p>Phone is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField type='number' placeholder="Enter Phone" label="Secondary Phone" variant="outlined" fullWidth
                          {...register("secondaryphone", { required: true })} focused />
                        {errors.secondaryphone?.type === "required" && <p>Phone is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField type='text' placeholder="Enter salary" label="Salary" variant="outlined" fullWidth
                          {...register("salary", { required: true })} focused />
                        {errors.salary?.type === "required" && <p>Salary is Required</p>}
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField type='text' placeholder="Enter Job Localtion" label="Job Localtion" variant="outlined" fullWidth
                          {...register("currentjoblocation", { required: true })} focused />
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
                          {...register("aboutuser", { required: true })} focused />
                        {errors.aboutuser?.type === "required" && <p>About User is Required</p>}
                      </Grid>
                      <Grid item xs={12}>
                        <TextField type="text" placeholder="Enter Address" label="Address" variant="outlined" fullWidth
                          {...register("address", { required: true })} focused />
                        {errors.address?.type === "required" && <p>Address is Required</p>}
                      </Grid>
                      <Grid item xs={12}>
                        <center>
                          <Button type="submit" variant="contained" color="secondary">
                            {isLoading ? <CircularProgress size={20} color="success" /> : <>Submit</>}
                          </Button>
                        </center>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid><br /><br />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default UpdateEmployeeDetails