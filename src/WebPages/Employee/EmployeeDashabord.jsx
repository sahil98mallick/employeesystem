import React, { useEffect, useState } from 'react'
import { Box, CardContent, Grid, List, Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Skeleton } from '@mui/material'
import Sidebar from '../../Common/Sidebar';
import { useAuth } from '../../Authsection/AuthPage';
import { allleave } from '../../API/AxiosInstance';
import Layout from '../../Common/Layout';

const EmployeeDashabord = () => {
    const [auth] = useAuth();
    const userId = auth?.user?._id;
    console.log(userId);
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
                const userLeave = allLeaveData.filter(item => item.UserId === userId);
                setLeave(userLeave);
                // Count active and inactive leaves
                const activeLeaves = userLeave.filter(item => item.leaveactivestatus === "true");
                const inactiveLeaves = userLeave.filter(item => item.leaveactivestatus === "NA");
                const rejectLeaves = userLeave.filter(item => item.leaveactivestatus === "false");
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
    }, [userId]);
    return (
        <Layout title={"Employee"}>
            <Grid container spacing={2} style={{ height: "auto" }}>
                <Grid item xs={2} style={{ background: "#F8F8F8", display: { xs: 'none', sm: 'block' } }}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10} style={{ background: "#F6F6F6" }}>
                    <Box style={{ width: "97%", marginTop: "10px", background: "#F8F8F8" }}>
                        <Grid container spacing={2}>
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
                                                    <TableCell align="center"><strong>No</strong></TableCell>
                                                    <TableCell align="center"><strong>Name</strong></TableCell>
                                                    <TableCell align="center"><strong>Email</strong></TableCell>
                                                    <TableCell align="center"><strong>Phone</strong></TableCell>
                                                    <TableCell align="center"><strong>Position</strong></TableCell>
                                                    <TableCell align="center"><strong>Start Date</strong></TableCell>
                                                    <TableCell align="center"><strong>End Date</strong></TableCell>
                                                    <TableCell align="center"><strong>Reason</strong></TableCell>
                                                    <TableCell align="center"><strong>Status</strong></TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {leave.slice(0, 4).map((item, key) => (
                                                    <TableRow key={key} className="table-row" style={{ backgroundColor: key % 2 === 0 ? "#f5f5f5" : "transparent" }}>
                                                        <TableCell align="center">{key + 1}</TableCell>
                                                        <TableCell align="center">{item.name}</TableCell>
                                                        <TableCell align="center">{item.email}</TableCell>
                                                        <TableCell align="center">{item.primaryphone}</TableCell>
                                                        <TableCell align="center">{item.position}</TableCell>
                                                        <TableCell align="center">{item.startdate}</TableCell>
                                                        <TableCell align="center">{item.enddate}</TableCell>
                                                        <TableCell align="center">{item.leavereason}</TableCell>
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

export default EmployeeDashabord