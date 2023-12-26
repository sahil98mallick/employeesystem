import React, { useEffect, useState } from 'react'
import { Box, CardContent, Grid, List, Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, Skeleton } from '@mui/material'
import { Link } from 'react-router-dom';
import Sidebar from '../../Common/Sidebar';
import { allleave } from '../../API/AxiosInstance';
import Layout from '../../Common/Layout';

const AdminViewLeave = () => {
  const [leave, setLeave] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeLeavesCount, setActiveLeavesCount] = useState(0);
  const [inactiveLeavesCount, setInactiveLeavesCount] = useState(0);
  const [rejectLeavesCount, setrejectLeavesCount] = useState(0);

  const fetchLeaveDetails = async () => {
    setLoading(true);
    try {
      const allLeaveResponse = await allleave();
      if (allLeaveResponse.data && allLeaveResponse.data.empLeave) {
        const allLeaveData = allLeaveResponse.data.empLeave;
        setLeave(allLeaveData);
        // Count active and inactive leaves
        const activeLeaves = allLeaveData.filter(item => item.leaveactivestatus === "true");
        const inactiveLeaves = allLeaveData.filter(item => item.leaveactivestatus === "NA");
        const rejectLeaves = allLeaveData.filter(item => item.leaveactivestatus === "false");
        setActiveLeavesCount(activeLeaves.length);
        setInactiveLeavesCount(inactiveLeaves.length);
        setrejectLeavesCount(rejectLeaves.length);
      }
    } catch (error) {
      console.error('Error fetching leave data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaveDetails();
  }, []);
  return (
    <Layout title={"Admin"}>
      <Grid container spacing={2} style={{ height: "auto" }}>
        <Grid item xs={2} style={{ background: "#F8F8F8", display: { xs: 'none', sm: 'block' } }}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} style={{ background: "#F6F6F6" }}>
          <Box style={{ width: "97%", marginTop: "10px", background: "#F8F8F8" }}>
            <center><h2>Welcome to Admin Dashbaord</h2></center>
            <Grid container spacing={10}>
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
                        {activeLeavesCount}
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
                        {inactiveLeavesCount}
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
                        <b><i>Rejected Leave</i></b>
                      </Typography>
                      <Typography variant="h4" component="div" fontFamily={"Times"}>
                        {rejectLeavesCount}
                      </Typography>
                    </div>
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Box>

          <Box style={{ width: "97%", marginTop: "10px", height: "auto" }}>
            <Typography variant="h6" align='center' component="h6" color={"primary"}>
              <b>Employee Leave Records</b>
            </Typography><br />

            {
              loading ? (
                <>
                  <Skeleton style={{ maxWidth: "90%", margin: "0 auto", height: "100px" }} />
                  <Skeleton style={{ maxWidth: "90%", margin: "0 auto", height: "100px" }} />
                  <Skeleton style={{ maxWidth: "90%", margin: "0 auto", height: "100px" }} />
                </>
              ) : (
                <>
                  <TableContainer component={Paper} style={{ maxWidth: "90%", margin: "0 auto" }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell align="center"><strong style={{ fontFamily: "Times" }}>No</strong></TableCell>
                          <TableCell align="center"><strong style={{ fontFamily: "Times" }}>Name</strong></TableCell>
                          <TableCell align="center"><strong style={{ fontFamily: "Times" }}>Email</strong></TableCell>
                          <TableCell align="center"><strong style={{ fontFamily: "Times" }}>Phone</strong></TableCell>
                          <TableCell align="center"><strong style={{ fontFamily: "Times" }}>Position</strong></TableCell>
                          <TableCell align="center"><strong style={{ fontFamily: "Times" }}>Start Date</strong></TableCell>
                          <TableCell align="center"><strong style={{ fontFamily: "Times" }}>End Date</strong></TableCell>
                          <TableCell align="center"><strong style={{ fontFamily: "Times" }}>Reason</strong></TableCell>
                          <TableCell align="center"><strong style={{ fontFamily: "Times" }}>Status</strong></TableCell>
                          <TableCell align="center"><strong style={{ fontFamily: "Times" }}>Action</strong></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {leave.map((item, key) => (
                          <TableRow key={key} className="table-row" style={{ backgroundColor: key % 2 === 0 ? "#f5f5f5" : "transparent" }}>
                            <TableCell align="center" style={{ fontFamily: "Times" }}>{key + 1}</TableCell>
                            <TableCell align="center" style={{ fontFamily: "Times" }}>{item.name}</TableCell>
                            <TableCell align="center" style={{ fontFamily: "Times" }}>{item.email}</TableCell>
                            <TableCell align="center" style={{ fontFamily: "Times" }}>{item.primaryphone}</TableCell>
                            <TableCell align="center" style={{ fontFamily: "Times" }}>{item.position}</TableCell>
                            <TableCell align="center" style={{ fontFamily: "Times" }}>{item.startdate}</TableCell>
                            <TableCell align="center" style={{ fontFamily: "Times" }}>{item.enddate}</TableCell>
                            <TableCell align="center" style={{ fontFamily: "Times" }}>{item.leavereason}</TableCell>
                            <TableCell align="center">
                              <span
                                style={{
                                  color: item.leaveactivestatus === "true" ? 'green' : item.leaveactivestatus === "false" ? 'red' : 'blue', // Change 'blue' to the desired color for 'Pending'
                                  fontWeight: 'bold',
                                }}
                              >
                                {item.leaveactivestatus === "true" ? "Approved" : item.leaveactivestatus === "false" ? "Rejected" : "Pending"}
                              </span>
                            </TableCell>
                            <TableCell align="center"><Link to={`/adminSingleleaveaction/${item._id}`} style={{ color: "green" }}>
                              <Button variant='contained' color='warning' size='small' style={{ fontFamily: "Times", borderRadius: "20px" }}>Action</Button>
                            </Link>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer><br /><br />
                </>
              )
            }
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default AdminViewLeave