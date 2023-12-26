import { Box, Button, Card, CardContent, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { fetchbanner } from '../API/AxiosInstance';
import Layout from '../Common/Layout';

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [banner, setbanner] = useState([]);
  const bannerdetails = async () => {
    const response = await fetchbanner();
    const bannerdata = response.data.bannerdata;
    setbanner(bannerdata)
  }

  useEffect(() => {
    bannerdetails();
  }, [])
  return (
    <Layout title={"Contact"}>
      {/* Start Crousal Design Part */}
      <Carousel
        height="425px"
        index={activeIndex}
        autoPlay={true}
        animation="slide"
        timeout={300}
        navButtonsAlwaysVisible={true}
        fullHeightHover={true}
        navButtonsProps={{
          style: {
            background: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '50%',
            color: 'white',
            width: '36px',
            height: '36px',
            margin: '0 10px',
          },
        }}
        onChange={(index) => setActiveIndex(index)}
      >
        {banner.map((banner, index) => (
          <Paper key={index} elevation={3} style={{ margin: 10, height: "auto", maxWidth: '100%' }}>
            <div style={{ position: 'relative' }}>
              <img src={`https://restapinodejs.onrender.com/api/banner/photo/${banner._id}`} alt={`Image ${index}`} style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '58vh' }} />
              <div
                className="banner-text"
                style={{
                  border: "2px solid #8AFB60",
                  width: "750px",
                  height: "200px",
                  position: 'absolute',
                  bottom: 0,
                  left: 350,
                  right: 0,
                  top: 180,
                  background: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  padding: '8px',
                  transition: 'top 0.5s ease-in-out',
                }}>
                <h2 style={{ fontFamily: "Times", color: "white" }}>{banner.title}</h2>
                <Typography variant="body1" color={"white"} style={{ fontFamily: "Times", color: "white", height: "100px" }}>{banner.description}</Typography>
                <center><Button variant='contained' color='warning' size='xl'>Read More</Button></center><br />
              </div>
            </div>
          </Paper>
        ))}
      </Carousel>
      {/* End Crousal Design  Part */}


      {/* Start Contact Page */}
      <Box style={{ marginTop: "50px" }}>
        <Typography gutterBottom variant="h4" align="center" style={{ marginTop: 20, fontFamily: "Times" }}>
          Contact Us
        </Typography>
        <Box style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Card style={{ width: "45%", height: "500px", background: "pink" }}>
            <iframe
              title="Google Map"
              width="100%"
              height="100%"
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.2126179789667!2d88.36056549999999!3d22.600152000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275927b0061ad%3A0x496c2fab98874c86!2sWebskitters%20Technology%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sus!4v1613040323222!5m2!1sen!2sus"
              allowFullScreen
            ></iframe>
          </Card>

          <Box style={{ width: "550px", height: "500px" }}>
            <Grid>
              <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" align='center' fontFamily={"Times"}>
                    Contact Us
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                    Fill up the form and our team will get back to you within 24 hours.
                  </Typography>
                  <form>
                    <Grid container spacing={1}>
                      <Grid xs={12} sm={6} item>
                        <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                      </Grid>
                      <Grid xs={12} sm={6} item>
                        <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                      </Grid>
                      <Grid item xs={12}>
                        <center><Button type="submit" variant="contained" color="primary" >Submit</Button></center>
                      </Grid>

                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Box>
        </Box>
      </Box>
      {/* End Contact Page */}
    </Layout>
  )
}

export default Contact