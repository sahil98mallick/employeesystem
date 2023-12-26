import React from 'react';
import { Box, Card, CardContent, Grid, Typography, Divider, Button, Avatar } from '@mui/material';
import Sidebar from '../Common/Sidebar';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useAuth } from '../Authsection/AuthPage';
import Layout from '../Common/Layout';

const Profile = () => {
  const [auth] = useAuth();

  return (
    <Layout title={"Profile"}>
      <Grid container spacing={2} style={{ height: "auto" }}>
        <Grid item xs={2} style={{ background: "#F8F8F8", display: { xs: 'none', sm: 'block' } }}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} style={{ background: "#F6F6F6" }}>
          <Box style={{ width: "97%", marginTop: "10px", background: "#F8F8F8" }}>
            {!auth.user ? (
              <>
                <center><h4>No Data Found</h4></center>
              </>
            ) : (
              <>
                <Card style={{ maxWidth: 700, margin: "0 auto", marginTop: 50, background: "#EEEFED" }}>
                  <CardContent>
                    <Box display="flex" justifyContent="center">
                      <Avatar
                        alt="User Avatar"
                        src="https://static.vecteezy.com/system/resources/previews/004/307/264/original/tony-stark-robert-downey-black-white-potrait-illustration-free-vector.jpg"
                        sx={{ width: 200, height: 200, borderRadius: '50%' }}
                      />
                    </Box>
                    <Typography variant="h4" color="textPrimary" component="p" align="center">
                      <strong>Name:</strong> {auth.user.name}
                    </Typography>
                    <Typography variant="h6" color="textPrimary" component="p" align="center">
                      <strong>Type:</strong> {auth.user.userType}
                    </Typography>
                    <Typography variant="h6" color="textPrimary" component="p" align="center">
                      <strong>Position:</strong> {auth.user.position}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p" align="center">
                      <strong>Email:</strong> {auth.user.email}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p" align="center">
                      <strong>Phone:</strong> {auth.user.primaryphone}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="p" align='justify'>
                      <br /> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam laborum minima aspernatur maiores molestiae totam, nisi ad non atque quis, perferendis id, incidunt doloremque. Pariatur architecto rerum tempora provident et itaque deleniti ullam harum ipsa, vero dicta accusantium, dolorem delectus velit quod voluptatem quia expedita? Quasi doloribus vel itaque repudiandae.
                    </Typography>
                  </CardContent>
                  <Box sx={{ display: 'flex', justifyContent: "space-evenly", p: 2 }}>
                    <Button
                      variant='contained'
                      color='primary'
                      startIcon={<FacebookIcon />}
                      sx={{ '&:hover': { backgroundColor: '#1877F2' } }}
                    >
                      Facebook
                    </Button>
                    <Button
                      variant='contained'
                      color='success'
                      startIcon={<WhatsAppIcon />}
                      sx={{ '&:hover': { backgroundColor: '#25D366' } }}
                    >
                      WhatsApp
                    </Button>
                    <Button
                      variant='contained'
                      color='info'
                      startIcon={<TwitterIcon />}
                      sx={{ '&:hover': { backgroundColor: '#1DA1F2' } }}
                    >
                      Twitter
                    </Button>
                    <Button
                      variant='contained'
                      color='secondary'
                      startIcon={<InstagramIcon />}
                      sx={{ '&:hover': { backgroundColor: '#C13584' } }}
                    >
                      Instagram
                    </Button>
                  </Box>
                  <Button variant='contained' color='warning' fullWidth sx={{ '&:hover': { backgroundColor: '#FFA500' } }}>
                    Follow Me
                  </Button>
                  <Divider />
                </Card>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Profile;
