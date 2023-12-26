import React, { useEffect, useState } from 'react'
import { Box, CardContent, Grid, List, Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import Sidebar from '../../Common/Sidebar';
import { allusers } from '../../API/AxiosInstance';
import Layout from '../../Common/Layout';

const AdminDashboard = () => {
  const [employee, setemployee] = useState([]);
  const fethcemployee = async () => {
    const response = await allusers()
    setemployee(response.data.UsersData)
  }
  useEffect(() => {
    fethcemployee()
  }, [])
  return (
    <Layout title={"Admin"}>
      <Grid container spacing={2} style={{ height: "auto" }}>
        <Grid item xs={2} style={{ background: "#F8F8F8", display: { xs: 'none', sm: 'block' } }}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} style={{ background: "#F6F6F6" }}>
          <Box style={{ width: "97%", marginTop: "10px", background: "#F8F8F8" }}>
            <center><h2>Welcome to Admin Dashbaord</h2></center>
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
                        {employee?.length}
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
                        <b><i>Approved Leave</i></b>
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
                        <b><i>Pending Leave</i></b>
                      </Typography>
                      <Typography variant="h4" component="div" fontFamily={"Times"}>
                        5
                      </Typography>
                    </div>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Box>

          <Box style={{ width: "97%", marginTop: "10px", height: "auto" }}>
            <Typography variant="h6" align='center' component="h6" color={"primary"}>
              <b>Employee Records</b>
            </Typography><br />

            {/* Start Employee Table Details */}
            <TableContainer component={Paper} style={{ maxWidth: "90%", margin: "0 auto" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center"><strong>No</strong></TableCell>
                    <TableCell align="center"><strong>Name</strong></TableCell>
                    <TableCell align="center"><strong>Email</strong></TableCell>
                    <TableCell align="center"><strong>Position</strong></TableCell>
                    <TableCell align="center"><strong>Status</strong></TableCell>
                    <TableCell align="center"><strong>Action</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    employee?.slice(0, 4)?.map((item, key) => {
                      return (
                        <>
                          <TableRow className="table-row" style={{ backgroundColor: "#f5f5f5" }}>
                            <TableCell align="center">{key + 1}</TableCell>
                            <TableCell align="center">{item.name}</TableCell>
                            <TableCell align="center">{item.email}</TableCell>
                            <TableCell align="center">{item.userType}</TableCell>
                            <TableCell align="center">
                              <span
                                style={{
                                  color: item.activestatus ? 'green' : 'red',
                                  fontWeight: 'bold',
                                }}
                              >
                                {item.activestatus ? "Online" : "Offline"}
                              </span>
                            </TableCell>
                            <TableCell align="center"><Link to={`/viewsingleemployee/${item._id}`} style={{ color: "green" }}><VisibilityIcon /></Link>
                            </TableCell>
                          </TableRow>
                        </>
                      )
                    })
                  }
                </TableBody>
              </Table>
            </TableContainer>
            {/* End Employee Table Details */}
          </Box>

          {/* Upcoming Card Details */}
          <Box style={{ width: "97%", marginTop: "20px" }}>
            <Grid container spacing={2}>
              {/* First Card */}
              <Grid item xs={12} sm={6} md={4}>
                <CardContent>
                  <Box
                    height={350}
                    width={370}
                    alignItems="center"
                    justifyContent="space-between"
                    padding="8px 20px"
                    border="1px solid #D7A60C"
                    borderRadius="10px" >
                    <Typography variant="h6" component="h6" color={"primary"}>
                      <b>Notice Board</b>
                    </Typography>
                    <Box>
                      <Table>
                        <List style={{ overflow: 'auto', maxHeight: 300, }}>
                          <TableHead>
                            <TableCell align="justify" style={{ color: "#02343C" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quae! (21-Oct-2023)</TableCell>
                          </TableHead>

                        </List>
                      </Table>
                    </Box>
                  </Box>
                </CardContent>
              </Grid>
              {/* Second Card */}
              <Grid item xs={12} sm={6} md={4}>
                <CardContent>
                  <Box
                    height={350}
                    width={370}
                    alignItems="center"
                    justifyContent="space-between"
                    padding="8px 20px"
                    border="1px solid #D7A60C"
                    borderRadius="10px" >
                    <Typography variant="h6" component="h6" color={"primary"}>
                      <b>Upcoming Events</b>
                    </Typography>
                    <Box>
                      <Table>
                        <List style={{ overflow: 'auto', maxHeight: 300, }}>
                          <TableHead>
                            <TableCell align="justify" style={{ color: "#02343C" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quae! (21-Oct-2023)</TableCell>
                          </TableHead>
                          <TableHead>
                            <TableCell align="justify" style={{ color: "#02343C" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quae! (21-Oct-2023)</TableCell>
                          </TableHead>

                        </List>
                      </Table>
                    </Box>
                  </Box>
                </CardContent>
              </Grid>

              {/* Third Card */}
              <Grid item xs={12} sm={6} md={4}>
                <CardContent>
                  <Box
                    height={350}
                    width={370}
                    alignItems="center"
                    justifyContent="space-between"
                    padding="8px 20px"
                    border="1px solid #D7A60C"
                    borderRadius="10px" >
                    <Typography variant="h6" component="h6" color={"primary"}>
                      <b>Upcoming Holidays</b>
                    </Typography>
                    <Box>
                      <Table>
                        <List style={{ overflow: 'auto', maxHeight: 300, }}>
                          <TableHead>
                            <TableCell align="justify" style={{ color: "#02343C" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quae! (21-Oct-2023)</TableCell>
                          </TableHead>
                          <TableHead>
                            <TableCell align="justify" style={{ color: "#02343C" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quae! (21-Oct-2023)</TableCell>
                          </TableHead>
                          <TableHead>
                            <TableCell align="justify" style={{ color: "#02343C" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, quae! (21-Oct-2023)</TableCell>
                          </TableHead>
                        </List>
                      </Table>
                    </Box>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default AdminDashboard