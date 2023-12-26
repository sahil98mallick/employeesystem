import React, { useEffect, useState } from 'react'
import { Box, CardContent, Grid, Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { allusers, deleteuser, updateemployeeactivestatus } from '../../API/AxiosInstance';
import Sidebar from '../../Common/Sidebar';
import { toast } from 'react-toastify';
import Layout from '../../Common/Layout';
const ViewEmployee = () => {
  const [employee, setemployee] = useState([]);
  const [loadmore, setloadmore] = useState(10)
  const fethcemployee = async () => {
    const response = await allusers()
    setemployee(response.data.UsersData)
  }
  useEffect(() => {
    fethcemployee()
  }, [])
  const moredata = () => {
    setloadmore(loadmore + 5)
  }
  // Count the active and inactive employees
  const countActiveEmployees = employee.filter((emp) => emp.activestatus === true).length;
  const countInactiveEmployees = employee.filter((emp) => emp.activestatus === false).length;

  // Function to update employee active status
  const handleStatusChange = async (employeeId, newStatus) => {
    try {
      const data = { activestatus: newStatus };

      const response = await updateemployeeactivestatus(employeeId, data);
      if (response.status === 200) {
        toast.success(response.data.message)
        const updatedEmployee = employee.map(item => {
          if (item._id === employeeId) {
            return { ...item, activestatus: newStatus };
          }
          return item;
        });
        setemployee(updatedEmployee);
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error('Error updating employee status:', error);
    }
  };

  // Delete User Details Function
  const deleteuserdetails = async (id) => {
    try {
      const deletedata = await deleteuser(id);
      if (deletedata.data.success) {
        toast.success(deletedata.data.message)
        fethcemployee()
      } else {
        toast.error(deletedata.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }
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
            <Typography variant="h4" align='center' component="h4" color={"primary"}>
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
                    <TableCell align="center"><strong>Change</strong></TableCell>
                    <TableCell align="center"><strong>Action</strong></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    employee?.slice(0, loadmore)?.map((item, key) => {
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
                            <TableCell align="center">
                              <Button variant='conatined' size='small'
                                onClick={() => handleStatusChange(item._id, !item.activestatus)}
                                style={{
                                  background: item.activestatus ? 'red' : 'green',
                                  color: "white", fontFamily: "Times"
                                }} >
                                {item.activestatus ? "OFF" : "ON"}
                              </Button>
                            </TableCell>
                            <TableCell align="center"><Link to={`/viewsingleemployee/${item._id}`} style={{ color: "green" }}>
                              <Button size='small' variant='outlined' color='primary'><VisibilityIcon /></Button></Link>
                              &nbsp; <Link to={`/updatesingleemployee/${item._id}`}> <Button size='small' variant='outlined' color='success'><CreateIcon /></Button>
                              </Link>  &nbsp;
                              <Button size='small' variant='outlined' color='warning' onClick={() => { deleteuserdetails(item._id) }}><DeleteIcon /></Button></TableCell>
                          </TableRow>
                        </>
                      )
                    })
                  }

                </TableBody>
              </Table>
              {loadmore < employee.length && <><center><Button onClick={moredata}><RotateLeftIcon /></Button></center></>}
            </TableContainer>
            {/* End Employee Table Details */}
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ViewEmployee