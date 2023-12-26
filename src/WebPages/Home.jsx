import { Box, Button, Card, CardContent, Divider, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import { fetchbanner, fetchservice, fetchtestimonials } from '../API/AxiosInstance';
import Layout from '../Common/Layout';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [banner, setbanner] = useState([]);
  const [services, setservices] = useState([]);
  const [testimonial, settestimonial] = useState([])
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const bannerdetails = async () => {
    const response = await fetchbanner();
    const bannerdata = response.data.bannerdata;
    setbanner(bannerdata)
  }

  const servicedetails = async () => {
    const response2 = await fetchservice();
    const servicedata = response2.data.data;
    setservices(servicedata)
  }

  const testimonialdetails = async () => {
    const response3 = await fetchtestimonials();
    console.log(response3.data.testimonials);
    const testimonialdata = response3.data.testimonials;
    settestimonial(testimonialdata)
  }


  useEffect(() => {
    bannerdetails();
    servicedetails();
    testimonialdetails();
  }, [])


  // Test Part
  console.log(banner);

  return (
    <Layout title={"Home"}>
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

      {/* Start About Us Section Design */}
      <Box style={{ background: "#F2F3F4", height: "auto", width: "100%" }}>
        <Typography gutterBottom variant="h4" align="center" style={{ marginTop: 20, fontFamily: "Times" }}>
          About US
        </Typography>
        <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
          <Box
            style={{
              height: "350px",
              width: "500px",
              background: "transparent",
              backgroundImage: `url('Images/Logo.png')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px"
            }}>

          </Box>
          <Box style={{ display: "flex", justifyContent: "space-between", height: "350px", width: "700px", background: "" }}>
            <Box style={{ width: "1300px" }}>
              <Typography
                gutterBottom
                variant="body1"
                align="center"
                style={{
                  marginTop: 20,
                  fontFamily: "Times",
                  textAlign: "justify",
                  transition: "color 0.3s",
                  cursor: "pointer",
                  color: "initial"
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#2471A3";

                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "initial";

                }}>
                At CyberNexa, we're on a mission to redefine the future of technology by delivering innovative solutions that empower businesses to thrive in a digital world. With a relentless commitment to excellence, we bring together cutting-edge technology, visionary ideas, and a passionate team to transform the way organizations operate, connect, and innovate.
              </Typography>

              <Typography gutterBottom variant="h6" align="center" style={{ marginTop: 20, fontFamily: "Times", textAlign: "justify", fontStyle: "italic" }}>
                Our Mission & Vision
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                align="center"
                style={{
                  marginTop: 20,
                  fontFamily: "Times",
                  textAlign: "justify",
                  transition: "color 0.3s",
                  cursor: "pointer",
                  color: "initial"
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = "#0B8BF5";

                }}
                onMouseLeave={(e) => {
                  e.target.style.color = "initial";

                }}
              >
                Our vision is to be the catalyst for digital transformation, setting the benchmark for IT excellence and enabling our clients to achieve their goals with precision and efficiency. We strive to be at the forefront of technology innovation, consistently exceeding the expectations of our clients.
              </Typography>

            </Box>
          </Box>
        </Box><br />
      </Box>
      <br /><br />
      {/* End About Us Section Design */}

      {/* Start Services Section */}
      <Box style={{ background: "#F8F9F9", height: "auto", width: "100%" }}>
        <Typography gutterBottom variant="h4" align="center" style={{ marginTop: 20, fontFamily: "Times" }}>
          Our Services
        </Typography><Divider style={{
          margin: "0 auto", width: "100px", height: "10px",
          background: "#58D68D", borderRadius: "20px"
        }} />
        <Typography gutterBottom variant="body1" align="center" style={{ fontFamily: "Times" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, reiciendis!<Divider /><br />
        </Typography>
        <Box style={{ margin: "0 auto" }}>
          <Box style={{ margin: "0 auto", display: "flex", justifyContent: "space-between", flexWrap: "wrap", width: "65%", height: "auto", gap: "50px" }}>
            {
              services?.map((item, key) => {
                return (
                  <>
                    <Card
                      key={key}
                      style={{
                        width: "250px",
                        height: "250px",
                        borderRadius: "20px",
                        boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)",
                        border: "2px solid #F8EBB7",
                        backgroundColor: isHovered ? '#F9E79F' : 'transparent', // Change background color on hover
                        transition: "background-color 0.3s", // Smooth transition for background color
                      }}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <center>
                        <img src="https://as1.ftcdn.net/v2/jpg/02/15/15/08/1000_F_215150815_D248bPxiY2K1QDO7PixyuGDBVO89TOuW.jpg"
                          alt="SkillImage" height={"100px"} width={"100px"} style={{ borderRadius: "50%", marginTop: "20px" }} />
                      </center>
                      <CardContent style={{ textAlign: 'center' }}>
                        <Typography
                          variant="h6"
                          component="div"
                          style={{
                            marginTop: "10px",
                            fontFamily: "Times",
                            fontWeight: "800",
                            transition: "color 0.3s",
                            cursor: "pointer",
                            color: "initial"
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.color = "#0B8BF5";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = "initial";
                          }}
                        >
                          {item.name}
                        </Typography>

                        <Typography variant="body2" style={{ textAlign: "center", marginTop: "10px" }}>
                          {item.details.slice(0, 50)}
                        </Typography>
                      </CardContent>
                    </Card>


                  </>
                )
              })
            }
          </Box>
        </Box> <br /><br />
      </Box>
      {/* End Services Section */}

      {/* Start Testimonial Part */}
      <Box style={{ background: "#F8F9F9", height: "auto", width: "100%" }}>
        <Typography gutterBottom variant="h4" align="center" style={{ marginTop: 20, fontFamily: "Times" }}>
          Testimonials
        </Typography><Divider style={{
          margin: "0 auto", width: "100px", height: "10px",
          background: "#58D68D", borderRadius: "20px"
        }} />
        <Typography gutterBottom variant="body1" align="center" style={{ fontFamily: "Times" }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, reiciendis!<Divider /><br />
        </Typography>
        <Box style={{ margin: "0 auto" }}>
          <Box style={{
            margin: "0 auto", display: "flex", justifyContent: "space-between",
            flexWrap: "wrap", width: "80%", height: "auto", gap: "50px"
          }}>
            {
              testimonial?.map((item, key) => {
                return (
                  <>
                    <Card
                      key={key}
                      style={{
                        width: "550px",
                        height: "220px",
                        borderRadius: "20px",
                        boxShadow: "0px 0px 10px 5px rgba(0, 0, 0, 0.2)",
                        border: "2px solid #EDBB99",
                        backgroundColor: isHovered1 ? '#FCF3CF' : '#F2F3F4',
                        transition: "background-color 0.3s",
                      }}
                      onMouseEnter={handleMouseEnter1}
                      onMouseLeave={handleMouseLeave1}
                    >
                      <Box style={{ display: "Flex", justifyContent: "space-around" }}>
                        <img src={`https://restapinodejs.onrender.com/api/testimonials/photo/${item._id}`}
                          alt="SkillImage" height={"150px"} width={"120px"} style={{ borderRadius: "50%", marginTop: "20px", marginLeft: "10px" }} />
                        <CardContent style={{ textAlign: 'justify' }}>
                          <Typography
                            variant="h6"
                            component="div"
                            style={{
                              marginTop: "10px",
                              fontFamily: "Times",
                              fontWeight: "800",
                              transition: "color 0.3s",
                              cursor: "pointer",
                              color: "#273746"
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.color = "#D35400";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.color = "#273746";
                            }}
                          >
                            {item.name}
                          </Typography>
                          <i style={{ fontFamily: "Times", color: "#BB8FCE" }}>{item.position}</i>

                          <Typography variant="body2" style={{ textAlign: "center", marginTop: "15px", fontFamily: "Times" }}>
                            {item.talk}
                          </Typography>
                        </CardContent>
                      </Box>
                    </Card>
                  </>
                )
              })
            }
          </Box>
        </Box> <br /><br />
      </Box>
      {/* End  Testimonial Part */}
    </Layout>
  )
}

export default Home