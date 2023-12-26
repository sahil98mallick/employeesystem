import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Button, TextField } from '@mui/material';
import { useAuth } from '../Authsection/AuthPage';

const Footer = () => {
  const [auth] = useAuth()
  const isAdmin = auth?.user?.userType === 'Admin';
  return (
    <>
      <br /><br />
      <Card style={{ background: "#462B25" }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="flex-start"
          flexWrap="wrap"
          p={2}
          m="0 auto"
          width="90%">
          <Box width={250} height={270} bgcolor="transparent" p={2} >
            <Typography variant="h5" component="h4" sx={{ textAlign: "center", fontFamily: "Times", color: "white", fontWeight: "800" }}>
              CyberNexa
            </Typography>
            <Divider /><br />
            <Typography variant="body1" component="p" sx={{ textAlign: "center", fontFamily: "Times", color: "white" }}>
              <strong>Address:</strong> Plot-9, Eco Intelligent Park, Unit No- 7E, 7th Floor, EM Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091
            </Typography>
            <Typography variant="body1" component="p" sx={{ textAlign: "center", fontFamily: "Times", color: "white", marginTop: "20px" }}>
              Email: info@gmail.com <br />
              Phone: +91 8918030206
            </Typography>
          </Box>
          <Box width={250} height={270} bgcolor="transparent" p={2}>
            <Typography variant="h6" component="h4" sx={{ textAlign: "center", fontFamily: "Times", color: "white", fontWeight: "800" }}>
              Useful Links
            </Typography>
            <Divider />
            {
              !auth.user ? (
                <>
                  <List>
                    <ListItem button>
                      <Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link>
                    </ListItem>
                    <ListItem button>
                      <Link to="/about" style={{ textDecoration: "none", color: "white" }}>About</Link>
                    </ListItem>
                    <ListItem button>
                      <Link to="/login" style={{ textDecoration: "none", color: "white" }}>Login</Link>
                    </ListItem>
                    <ListItem button>
                      <Link style={{ textDecoration: "none", color: "white" }}>API Documentation</Link>
                    </ListItem>
                  </List>
                </>
              ) : (
                <>
                  <List>
                    <ListItem button>
                      <Link style={{ textDecoration: "none", color: "white" }}>Home</Link>
                    </ListItem>
                    <ListItem button>
                      <Link style={{ textDecoration: "none", color: "white" }}>About</Link>
                    </ListItem>
                    {
                      isAdmin ? (
                        <>
                          <ListItem button>
                            <Link to='/admindashboard' style={{ textDecoration: "none", color: "white" }}>Dashabord</Link>
                          </ListItem>
                        </>
                      ) : (
                        <>
                          <ListItem button>
                            <Link to='/employeedashbaord' style={{ textDecoration: "none", color: "white" }}>Dashabord</Link>
                          </ListItem>
                        </>
                      )
                    }
                    <ListItem button>
                      <Link style={{ textDecoration: "none", color: "white" }}>API Documentation</Link>
                    </ListItem>
                  </List>
                </>
              )
            }
          </Box>
          <Box width={250} height={270} bgcolor="transparent" p={2}>
            <Typography variant="h6" component="h4" sx={{ textAlign: "center", fontFamily: "Times", color: "white", fontWeight: "800" }}>
              Our Services
            </Typography>
            <Divider />
            <List>
              <ListItem button>
                <Link style={{ textDecoration: "none", color: "white", }}>Web Design</Link>
              </ListItem>
              <ListItem button>
                <Link style={{ textDecoration: "none", color: "white" }}>Web Development</Link>
              </ListItem>
              <ListItem button>
                <Link style={{ textDecoration: "none", color: "white" }}>Product Management</Link>
              </ListItem>
              <ListItem button>
                <Link style={{ textDecoration: "none", color: "white" }}>Marketing</Link>
              </ListItem>
              <ListItem button>
                <Link style={{ textDecoration: "none", color: "white" }}>Graphic Design</Link>
              </ListItem>
            </List>
          </Box>
          <Box width={350} height={270} bgcolor="transparent" p={2}>
            <Typography variant="h6" component="h4" sx={{ textAlign: "center", fontFamily: "Times", color: "white", fontWeight: "800" }}>
              Join Our Newsletter
            </Typography>
            <Divider />
            <Typography sx={{ textAlign: "center", color: "white" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, quam.
            </Typography>
            <br />
            <TextField
              style={{
                borderRadius: "20px",
                background: "white",
                color: "white"
              }}
              variant="outlined"
              placeholder='Enter Your Email'
              fullWidth
              sx={{ marginBottom: 1 }}
            />
            <center>
              <Button
                variant="contained"
                sx={{ bgcolor: "#ff9800" }}>
                Subscribe
              </Button>
            </center>
          </Box>
        </Box>
      </Card >
    </>
  );
};

export default Footer;
