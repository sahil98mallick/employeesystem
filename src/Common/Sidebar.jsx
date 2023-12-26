import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Box, Card, Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import EventNoteIcon from '@mui/icons-material/EventNote';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../Authsection/AuthPage';

const Sidebar = () => {
  const [auth, setauth] = useAuth();
  const navigate = useNavigate();
  const [openProfile, setOpenProfile] = useState(false);
  const [openLeave, setOpenLeave] = useState(false);

  const handleClickProfile = () => {
    setOpenProfile(!openProfile);
  };

  const handleClickLeave = () => {
    setOpenLeave(!openLeave);
  };

  // logout Function
  const logoutfunction = () => {
    toast.warn("Logout Successfully...")
    setauth({
      ...auth,
      user: null,
      token: ""
    })
    localStorage.removeItem("auth");
    navigate("/login")
  }
  const isAdmin = auth?.user?.userType === 'Admin';
  const notyet = () => {
    toast.warn("Working Progress...")
  }
  return (
    <>
      {
        isAdmin ? (
          <>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                ml: "3px",
                position: "sticky",
                height: "auto",
                padding: "3px",
                background: "#EBEBEB",
                width: "235px",
                marginTop: "0px"
              }}>
              <Card
                style={{
                  width: "230px",
                  height: "auto",
                  background: "#EBEBEB",
                }}>
                <List
                  style={{ padding: "1px", height: "auto" }}
                  sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    padding: "5px"
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader" >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"   >
                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="UserImage"
                      style={{
                        width: "150px", height: "150px", borderRadius: "50%",
                        marginTop: "10px", border: "2px solid #437545"
                      }} /><br />
                    <h3 style={{ fontFamily: "Times", }}> {auth?.user?.name}</h3>
                  </Box>
                  <Divider />
                  <Link to='/admindashboard' style={{ textDecoration: "none", color: "black" }}>
                    <ListItemButton sx={{
                      '&:hover': {
                        backgroundColor: '#1C5DCA',
                        borderRadius: "20px",
                        color: "whitesmoke"
                      },
                    }}>
                      <ListItemIcon>
                        <DashboardIcon style={{ color: "#E77B0F" }} />
                      </ListItemIcon>
                      <ListItemText primary="Dashboard" />
                    </ListItemButton>
                  </Link>
                  <Link to='/profile' style={{ textDecoration: "none", color: "black" }}>
                    <ListItemButton sx={{
                      '&:hover': {
                        backgroundColor: '#1C5DCA',
                        borderRadius: "20px",
                        color: "whitesmoke"
                      },
                    }}>
                      <ListItemIcon>
                        <SupervisedUserCircleIcon style={{ color: "#0CD5D5" }} />
                      </ListItemIcon>
                      <ListItemText primary="Profile" />
                    </ListItemButton>
                  </Link>
                  <ListItemButton onClick={handleClickProfile} >
                    <ListItemIcon>
                      <SettingsAccessibilityIcon style={{ color: "#F51A0F" }} />
                    </ListItemIcon>
                    <ListItemText primary="Employee" />
                    {openProfile ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openProfile} timeout="auto" unmountOnExit>
                    <List component="div">
                      <Link to='/addemployee' style={{ textDecoration: "none", color: "black" }}>
                        <ListItemButton sx={{
                          pl: 4, '&:hover': {
                            backgroundColor: '#1C5DCA',
                            borderRadius: "20px",
                            color: "whitesmoke"
                          },
                        }}>
                          <ListItemIcon>
                            <AddCircleIcon style={{ color: "#F76E52" }} />
                          </ListItemIcon>
                          <ListItemText primary="New" />
                        </ListItemButton>
                      </Link>
                      <Link to='/viewemployee' style={{ textDecoration: "none", color: "black" }}>
                        <ListItemButton sx={{
                          pl: 4, '&:hover': {
                            backgroundColor: '#1C5DCA',
                            borderRadius: "20px",
                            color: "whitesmoke"
                          },
                        }}>
                          <ListItemIcon>
                            <PlaylistAddCheckCircleIcon style={{ color: "#E95AC4" }} />
                          </ListItemIcon>
                          <ListItemText primary="Records" />
                        </ListItemButton>
                      </Link>
                    </List>
                  </Collapse>
                  <ListItemButton onClick={handleClickLeave} >
                    <ListItemIcon>
                      <InboxIcon style={{ color: "#30B83C" }} />
                    </ListItemIcon>
                    <ListItemText primary="Leave" />
                    {openLeave ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openLeave} timeout="auto" unmountOnExit>
                    <List component="div">
                      <Link to='/applyleave' style={{ textDecoration: "none", color: "black" }}>
                      </Link>
                      <Link to='/adminviewleave' style={{ textDecoration: "none", color: "black" }}>
                        <ListItemButton sx={{
                          pl: 4, '&:hover': {
                            backgroundColor: '#1C5DCA',
                            borderRadius: "20px",
                            color: "whitesmoke"
                          },
                        }}>
                          <ListItemIcon>
                            <PlaylistAddCheckCircleIcon style={{ color: "#E95AC4" }} />
                          </ListItemIcon>
                          <ListItemText primary="Records" />
                        </ListItemButton>
                      </Link>
                    </List>
                  </Collapse>
                  <Link style={{ textDecoration: "none", color: "black" }} onClick={notyet}>
                    <ListItemButton sx={{
                      '&:hover': {
                        backgroundColor: '#1C5DCA',
                        borderRadius: "20px",
                        color: "whitesmoke"
                      },
                    }}>
                      <ListItemIcon>
                        <FilterFramesIcon style={{ color: "#CCD789" }} />
                      </ListItemIcon>
                      <ListItemText primary="Notice Board" onClick={notyet} />
                    </ListItemButton>
                  </Link>
                  <Link style={{ textDecoration: "none", color: "black" }} onClick={notyet}>
                    <ListItemButton sx={{
                      '&:hover': {
                        backgroundColor: '#1C5DCA',
                        borderRadius: "20px",
                        color: "whitesmoke"
                      },
                    }}>
                      <ListItemIcon>
                        <EventNoteIcon style={{ color: "lightblue" }} />
                      </ListItemIcon>
                      <ListItemText primary="Events" />
                    </ListItemButton>
                  </Link>
                  <Link style={{ textDecoration: "none", color: "black" }} onClick={notyet}>
                    <ListItemButton sx={{
                      '&:hover': {
                        backgroundColor: '#1C5DCA',
                        borderRadius: "20px",
                        color: "whitesmoke"
                      },
                    }}>
                      <ListItemIcon>
                        <StorefrontIcon style={{ color: "lightcoral" }} />
                      </ListItemIcon>
                      <ListItemText primary="Holidays" />
                    </ListItemButton>
                  </Link>
                  <ListItemButton onClick={logoutfunction} sx={{
                    '&:hover': {
                      backgroundColor: '#1C5DCA',
                      borderRadius: "20px",
                      color: "whitesmoke",
                    },
                  }}>
                    <ListItemIcon>
                      <ExitToAppIcon style={{ color: "red" }} />
                    </ListItemIcon>
                    <ListItemText primary="Sign-out" />
                  </ListItemButton>
                </List>
              </Card>
            </Box>
          </>
        ) : (
          <>
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                ml: "3px",
                position: "sticky",
                height: "auto",
                padding: "3px",
                background: "#EBEBEB",
                width: "235px",
                marginTop: "0px"
              }}>
              <Card
                style={{
                  width: "230px",
                  height: "auto",
                  background: "#EBEBEB",
                }}>
                <List
                  style={{ padding: "1px", height: "auto" }}
                  sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    padding: "5px"
                  }}
                  component="nav"
                  aria-labelledby="nested-list-subheader" >
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                  >

                    <img
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                      alt="UserImage"
                      style={{ width: "150px", height: "150px", borderRadius: "50%", marginTop: "10px", border: "2px solid #437545" }}
                    /><br />
                    <h3 style={{ fontFamily: "Times", }}>{auth?.user?.name}</h3>
                  </Box>
                  <Divider />
                  <Link to='/employeedashbaord' style={{ textDecoration: "none", color: "black" }}>
                    <ListItemButton sx={{
                      '&:hover': {
                        backgroundColor: '#1C5DCA',
                        borderRadius: "20px",
                        color: "whitesmoke"
                      },
                    }}>
                      <ListItemIcon>
                        <DashboardIcon style={{ color: "#E77B0F" }} />
                      </ListItemIcon>
                      <ListItemText primary="Dashboard" />
                    </ListItemButton>
                  </Link>
                  <Link to='/profile' style={{ textDecoration: "none", color: "black" }}>
                    <ListItemButton sx={{
                      '&:hover': {
                        backgroundColor: '#1C5DCA',
                        borderRadius: "20px",
                        color: "whitesmoke"
                      },
                    }}>
                      <ListItemIcon>
                        <SupervisedUserCircleIcon style={{ color: "#0CD5D5" }} />
                      </ListItemIcon>
                      <ListItemText primary="Profile" />
                    </ListItemButton>
                  </Link>
                  <ListItemButton onClick={handleClickLeave} >
                    <ListItemIcon>
                      <InboxIcon style={{ color: "#30B83C" }} />
                    </ListItemIcon>
                    <ListItemText primary="Leave" />
                    {openLeave ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={openLeave} timeout="auto" unmountOnExit>
                    <List component="div">
                      <Link to='/applyleave' style={{ textDecoration: "none", color: "black" }}>
                        <ListItemButton sx={{
                          pl: 4, '&:hover': {
                            backgroundColor: '#1C5DCA',
                            borderRadius: "20px",
                            color: "whitesmoke"
                          },
                        }}>
                          <ListItemIcon>
                            <AddCircleIcon style={{ color: "#F76E52" }} />
                          </ListItemIcon>
                          <ListItemText primary="Apply" />
                        </ListItemButton>
                      </Link>
                      <Link to='/viewleave' style={{ textDecoration: "none", color: "black" }}>
                        <ListItemButton sx={{
                          pl: 4, '&:hover': {
                            backgroundColor: '#1C5DCA',
                            borderRadius: "20px",
                            color: "whitesmoke"
                          },
                        }}>
                          <ListItemIcon>
                            <PlaylistAddCheckCircleIcon style={{ color: "#E95AC4" }} />
                          </ListItemIcon>
                          <ListItemText primary="Records" />
                        </ListItemButton>
                      </Link>
                    </List>
                  </Collapse>
                  <Link style={{ textDecoration: "none", color: "black" }} onClick={notyet}>
                    <ListItemButton sx={{
                      '&:hover': {
                        backgroundColor: '#1C5DCA',
                        borderRadius: "20px",
                        color: "whitesmoke"
                      },
                    }}>
                      <ListItemIcon>
                        <FilterFramesIcon style={{ color: "#CCD789" }} />
                      </ListItemIcon>
                      <ListItemText primary="Notice Board" />
                    </ListItemButton>
                  </Link>
                  <Link style={{ textDecoration: "none", color: "black" }} onClick={notyet}>
                    <ListItemButton sx={{
                      '&:hover': {
                        backgroundColor: '#1C5DCA',
                        borderRadius: "20px",
                        color: "whitesmoke"
                      },
                    }}>
                      <ListItemIcon>
                        <EventNoteIcon style={{ color: "lightblue" }} />
                      </ListItemIcon>
                      <ListItemText primary="Events" />
                    </ListItemButton>
                  </Link>
                  <Link style={{ textDecoration: "none", color: "black" }} onClick={notyet}>
                    <ListItemButton sx={{
                      '&:hover': {
                        backgroundColor: '#1C5DCA',
                        borderRadius: "20px",
                        color: "whitesmoke"
                      },
                    }}>
                      <ListItemIcon>
                        <StorefrontIcon style={{ color: "lightcoral" }} />
                      </ListItemIcon>
                      <ListItemText primary="Holidays" />
                    </ListItemButton>
                  </Link>
                  <ListItemButton onClick={logoutfunction} sx={{
                    '&:hover': {
                      backgroundColor: '#1C5DCA',
                      borderRadius: "20px",
                      color: "whitesmoke",
                    },
                  }}>
                    <ListItemIcon >
                      <ExitToAppIcon style={{ color: "red" }} />
                    </ListItemIcon>
                    <ListItemText primary="Sign-out" />
                  </ListItemButton>
                </List>
              </Card>
            </Box>
          </>
        )
      }
    </>
  )
}

export default Sidebar