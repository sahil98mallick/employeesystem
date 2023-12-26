import React, { useEffect, useState } from 'react'
import { Box, CardContent, Grid, Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, FormControl, InputLabel, Select, TextField, MenuItem, CircularProgress, Card, CardHeader, Avatar, Divider } from '@mui/material'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { allusers, finduser } from '../../API/AxiosInstance';
import Sidebar from '../../Common/Sidebar';
import Layout from '../../Common/Layout';
const SingleEmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [empdetails, setemployeedetails] = useState({})
  const fetchsingleemployee = async () => {
    const response = await finduser(id)
    setemployeedetails(response.data.finddata)
  }
  useEffect(() => {
    fetchsingleemployee()
  }, [id])

  // All Employee Detaiils Fetch Here
  const [employee, setemployee] = useState([]);
  const fethcemployee = async () => {
    const response = await allusers()
    setemployee(response?.data?.UsersData)
  }
  useEffect(() => {
    fethcemployee()
  }, [])

  // Count the active and inactive employees
  const countActiveEmployees = employee?.filter((emp) => emp?.activestatus === true).length;
  const countInactiveEmployees = employee?.filter((emp) => emp?.activestatus === false).length;

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
          {/* Main Content */}
          <Box style={{ width: "97%", marginTop: "10px", height: "auto" }}>
            <Grid style={{ width: "100%" }}>
              <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Card style={{ width: "300px", height: "400px", background: "", borderRadius: "20px" }}>
                  <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="UserImage"
                    style={{ width: "100%", height: "300px", borderRadius: "50%" }} />
                  <TextField type="file" style={{ width: "auto", marginTop: "20px", color: "white" }} focused disabled />
                </Card>
                <Card style={{ width: "800px", height: "auto", background: "#FAF9F8", borderRadius: "20px" }}>
                  <Box>
                    <Box>
                      <center><CardHeader
                        style={{ margin: "0 auto" }}
                        title={empdetails?.name}
                        subheader={empdetails?.position} /></center>
                      <CardContent>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <center>
                              <Typography variant="h4" color="textPrimary" fontFamily={"Times"}>
                                About Me
                              </Typography>
                              <Typography variant="body2" style={{ color: "black", fontFamily: "Times" }}>
                                {empdetails?.aboutuser}
                              </Typography>
                            </center>
                          </Grid>
                          <Box style={{
                            margin: "0 auto", marginTop: "30px", width: "100%",
                            display: "Flex", justifyContent: "space-evenly", flexWrap: "wa"
                          }}>
                            <Grid >
                              <Typography variant="subtitle1" color="textPrimary" fontFamily={"Times"}>
                                Location
                              </Typography>
                              <Typography variant="body2">
                                {empdetails?.currentjoblocation}
                              </Typography>
                            </Grid>
                            <Grid>
                              <Typography variant="subtitle1" color="textPrimary" fontFamily={"Times"}>
                                Email
                              </Typography>
                              <Typography variant="body2">
                                {empdetails?.email}
                              </Typography>
                            </Grid>
                            <Grid>
                              <Typography variant="subtitle1" color="textPrimary" fontFamily={"Times"}>
                                Salary
                              </Typography>
                              <Typography variant="body2">
                                {empdetails?.salary}
                              </Typography>
                            </Grid>
                            <Grid>
                              <Typography variant="subtitle1" color="textPrimary" fontFamily={"Times"}>
                                Primary Phone
                              </Typography>
                              <Typography variant="body2">
                                {empdetails?.primaryphone}
                              </Typography>
                            </Grid>
                            <Grid>
                              <Typography variant="subtitle1" color="textPrimary" fontFamily={"Times"}>
                                Secondary Phone
                              </Typography>
                              <Typography variant="body2">
                                {empdetails?.secondaryphone}
                              </Typography>
                            </Grid>
                          </Box>
                          <Divider />
                          <Box style={{
                            margin: "0 auto", marginTop: "50px", width: "100%",
                            display: "Flex", justifyContent: "space-evenly", fontFamily: "Times"
                          }}>
                            <Grid >
                              <Typography variant="subtitle1" color="textPrimary" fontFamily={"Times"}>
                                Gender
                              </Typography>
                              <Typography variant="body2">
                                {empdetails?.gender}
                              </Typography>
                            </Grid>
                            <Grid>
                              <Typography variant="subtitle1" color="textPrimary" fontFamily={"Times"}>
                                UserName
                              </Typography>
                              <Typography variant="body2">
                                {empdetails?.username}
                              </Typography>
                            </Grid>
                            <Grid>
                              <Typography variant="subtitle1" color="textPrimary" fontFamily={"Times"}>
                                User Type
                              </Typography>
                              <Typography variant="body2">
                                {empdetails?.userType}
                              </Typography>
                            </Grid>
                            <Grid>
                              <Typography variant="subtitle1" color="textPrimary" fontFamily={"Times"}>
                                Status
                              </Typography>
                              <Typography variant="body2">
                                {empdetails.activestatus == true ? (<>Active</>) : (<>In-Active</>)}
                              </Typography>
                            </Grid>
                          </Box>
                        </Grid>
                      </CardContent>
                    </Box>
                    <center>
                      <Box style={{ margin: "0 auto", display: "flex", justifyContent: "space-evenly", width: "50%" }}>
                        <Link to={`/updatesingleemployee/${empdetails._id}`} ><Button variant='contained' color='success'>Edit Profile</Button></Link>
                      </Box>
                    </center><br />
                  </Box>
                </Card>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default SingleEmployeeDetails