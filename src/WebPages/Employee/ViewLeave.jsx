import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Skeleton } from '@mui/material'
import Sidebar from '../../Common/Sidebar';
import { allleave } from '../../API/AxiosInstance';
import { useAuth } from '../../Authsection/AuthPage';
import Layout from '../../Common/Layout';

const ViewLeave = () => {
  const [auth] = useAuth();
  const userId = auth?.user?._id;
  console.log(userId);
  const [leave, setLeave] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchLeaveDetails = async () => {
    setLoading(true);
    try {
      const allLeaveResponse = await allleave();
      if (allLeaveResponse.data && allLeaveResponse.data.empLeave) {
        const allLeaveData = allLeaveResponse.data.empLeave;
        const userLeave = allLeaveData.filter(item => item.UserId === userId);
        setLeave(userLeave);
      }
    } catch (error) {
      console.error('Error fetching leave data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaveDetails();
  }, [userId]);
  return (
    <Layout title={"Employee"}>
      <Grid container spacing={2} style={{ height: "auto" }}>
        <Grid item xs={2} style={{ background: "#F8F8F8", display: { xs: 'none', sm: 'block' } }}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} style={{ background: "#F6F6F6" }}>
          <Box style={{ width: "95%", marginTop: "50px", height: "auto" }}>
            <Typography variant="h4" align='center' component="h6" color={"primary"} style={{ fontFamily: "Times" }}>
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
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </>
              )
            }
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ViewLeave