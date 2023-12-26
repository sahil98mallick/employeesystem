import { AppBar, Badge, Box, Button, Divider, IconButton, InputBase, Menu, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../Authsection/AuthPage';

const Navbar = () => {
  const [auth, setauth] = useAuth();
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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

  const notyet = () => {
    toast.warn("Working Progress...")
  }
  const handleBothActions = () => {
    handleClose();
    notyet();
  }
  return (
    <>
      {
        !auth.user ? (
          <>
            <AppBar position="sticky"
              style={{
                background: "#F8F7F9",
                width: "auto",
                padding: "2px"
              }}>
              <Toolbar>
                <IconButton
                  size="normal"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{
                    mr: 2,
                    display: {
                      xs: 'block',
                      sm: 'none',
                    },
                  }}
                >
                  <MenuIcon style={{ color: "black" }} />
                </IconButton>
                <Link to='/' style={{ textDecoration: "none", marginLeft: "100px" }}>
                  <Typography
                    variant="h4"
                    noWrap
                    component="div"
                    sx={{
                      display: { xs: 'none', sm: 'block' }, fontFamily: "Times", color: "black",
                      fontWeight: 800, width: 290,
                    }}>
                    <img src="Images/Logo.png" alt="Logo"
                      style={{ width: "30px", height: "30px" }} />
                    &nbsp;CyberNexa
                  </Typography></Link>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  sx={{
                    width: "800px",
                    mr: 0,
                    ml: 0,
                    mt: 0,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 2,
                    fontFamily: 'Times',
                    fontWeight: 700,
                    fontSize: 25,
                    letterSpacing: '0.1rem',
                    color: 'black',
                    textDecoration: 'none',
                  }}>
                  <h5 style={{ fontWeight: 800 }}>CyberNexa</h5>
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Box
                  sx={{
                    display: {
                      xs: 'none',
                      sm: 'block',
                    },
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "700px",
                    marginRight: "100px",
                    padding: 5
                  }}
                >
                  <Link to='/' style={{ textDecoration: "none" }}>
                    <Button
                      style={{
                        color: "black",
                        fontFamily: "Times",
                        fontWeight: "600",
                      }}
                      sx={{
                        display: { xs: 'none', sm: 'block' },
                        '&:hover': {
                          backgroundColor: '#C9C6CA',
                          color: 'black',
                        },
                      }}
                      color="inherit" >
                      Home
                    </Button></Link>

                  <Link to='/about' style={{ textDecoration: "none" }}>
                    <Button
                      style={{
                        color: "black",
                        fontFamily: "Times",
                        fontWeight: "600",
                      }}
                      sx={{
                        display: { xs: 'none', sm: 'block' },
                        '&:hover': {
                          backgroundColor: '#C9C6CA',
                          color: 'black',
                        },
                      }}
                      color="inherit"
                    >
                      About
                    </Button></Link>
                  <Link to='/contact' style={{ textDecoration: "none" }}>
                    <Button
                      style={{
                        color: "black",
                        fontFamily: "Times",
                        fontWeight: "600",
                      }}
                      sx={{
                        display: { xs: 'none', sm: 'block' },
                        '&:hover': {
                          backgroundColor: '#C9C6CA',
                          color: 'black',
                        },
                      }}
                      color="inherit"
                    >
                      Contact
                    </Button></Link>

                  <Link to='/login' style={{ textDecoration: "none" }}>
                    <Button
                      style={{
                        color: "black",
                        fontFamily: "Times",
                        fontWeight: "600",
                      }}
                      sx={{
                        display: { xs: 'none', sm: 'block' },
                        '&:hover': {
                          backgroundColor: '#C9C6CA',
                          color: 'black',
                        },
                      }}
                      color="inherit">
                      Login
                    </Button></Link>
                </Box>
              </Toolbar>
            </AppBar>
          </>
        ) : (
          <>
            <AppBar position="sticky" style={{ background: "#F9F9F9", fontFamily: "Times", padding: "2px" }}>
              <Toolbar>
                <Link style={{ textDecoration: "none" }}>
                  <Typography
                    variant="h4"
                    wrap
                    component="div"
                    sx={{
                      display: { xs: 'none', sm: 'block' },
                      ml: "150px", fontFamily: "Times", color: "black", fontWeight: "800"
                    }} >
                    {/* <img src="Images/Logo2.png" width={"30px"} height={"30px"}
                      style={{ borderRadius: "50%" }} /> */}
                    &nbsp;CyberNexa
                  </Typography>
                </Link>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-haspopup="true"
                    color="inherit" >
                    <MenuIcon style={{ color: "black" }} />
                  </IconButton>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="show more"
                    aria-haspopup="true"
                    color="inherit">
                    <img src="https://cdn-icons-png.flaticon.com/512/1160/1160358.png" alt="Logo" width={"30px"} height={"30px"}
                      style={{ borderRadius: "50%" }} />
                  </IconButton>
                </Box>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  sx={{
                    mr: 0,
                    ml: 1,
                    mt: 1,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 2,
                    fontFamily: 'Times',
                    fontWeight: 700,
                    fontSize: 15,
                    letterSpacing: '0.2rem',
                    color: 'black',
                    textDecoration: 'none',
                  }} ><h3 style={{ fontWeight: 800 }}>EMS</h3>
                </Typography>
                <Box sx={{ flexGrow: 1 }} />

                {/* Search button */}
                <Box sx={{
                  display: { xs: 'none', md: 'flex' },
                  gap: "25px",
                  justifyContent: "space-between"
                }}>
                  <Box style={{
                    position: 'relative',
                    marginRight: '50px',
                    background: "#D6D6D6",
                    width: "350px",
                    borderRadius: '50px',
                    border: '2px solid #E9E7E7',
                    display: 'flex',
                    alignItems: 'center',
                    display: { xs: 'none', md: 'flex' },
                  }}>
                    <SearchIcon style={{
                      position: 'absolute',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      left: '10px',
                      color: 'gray',
                    }} />
                    <InputBase
                      placeholder="Search..."
                      inputProps={{ 'aria-label': 'search' }}
                      style={{
                        padding: "5px",
                        paddingLeft: '40px',
                        width: '350px',
                        background: 'transparent',
                        fontSize: '16px',
                        color: 'black',
                      }}
                    />
                  </Box>
                </Box>


                <Box sx={{
                  display: { xs: 'none', md: 'flex' }, mr: "30px", gap: "25px",
                  justifyContent: "space-between"
                }}>
                  <IconButton
                    size="large"
                    color="inherit" >
                    <Badge badgeContent={"0"} color="success" >
                      <NotificationsIcon variant='contained' color='primary' />
                    </Badge>
                  </IconButton>
                  <div>
                    <IconButton
                      size="large"
                      edge="end"
                      aria-label="account of current user"
                      aria-controls="avatar-menu"
                      aria-haspopup="true"
                      color="inherit"
                      onClick={handleClick}
                      style={{ background: "#99B48C" }}
                    >
                      <ManageAccountsIcon variant="contained" color="success" style={{ background: "#99B48C" }} />
                    </IconButton>
                    <Menu
                      style={{
                        height: "auto",
                        borderRadius: "20px",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                      }}
                      id="avatar-menu"
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <Box
                        style={{
                          width: "300px",
                          height: "auto",
                          borderRadius: "20px",
                          fontFamily: "Times, serif",
                          fontSize: "20px",
                          textAlign: "center",
                          margin: "0 auto",
                          padding: "20px",
                        }}>
                        <center>
                          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Logo"
                            style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                          />
                        </center>
                        <b>{auth.user.name}</b>
                        <Typography variant="body1" fontWeight={800}>
                          {auth.user.position}
                        </Typography>
                        <Divider />
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "row",
                            marginTop: "20px",
                          }}
                        >
                          <Link to='/profile'>
                            <Button onClick={handleClose} size='small' style={{ color: "green" }}>
                              Profile
                            </Button>
                          </Link>
                          <Link>
                            <Button onClick={handleBothActions} size='small' style={{ color: "red" }}>
                              Password
                            </Button>
                          </Link>
                        </Box>
                        <div style={{ textAlign: "center", marginTop: "20px", marginRight: "0px" }}>
                          <Button variant="outlined" color="warning" onClick={() => { logoutfunction(); handleClose(); }}>
                            Logout
                          </Button>
                        </div>
                      </Box>
                    </Menu>
                  </div>
                </Box>
              </Toolbar>
            </AppBar >
          </>
        )
      }
    </>
  )
}

export default Navbar