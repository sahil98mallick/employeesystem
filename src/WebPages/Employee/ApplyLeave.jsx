import React, { useState } from 'react'
import { Box, CardContent, Grid, Typography, TextField, Button, Card, CircularProgress } from '@mui/material'
import Sidebar from '../../Common/Sidebar';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Authsection/AuthPage';
import { toast } from 'react-toastify';
import { applyleave } from '../../API/AxiosInstance';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Common/Layout';

const ApplyLeave = () => {
  const [auth] = useAuth();
  const navigate = useNavigate();
  const [isLoading, setisloading] = useState(false);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    data.UserId = auth.user._id
    data.name = auth.user.name
    data.email = auth.user.email
    data.primaryphone = auth.user.primaryphone
    data.gender = auth.user.gender
    data.userType = auth.user.userType
    data.position = auth.user.position
    data.adminnote = "NA"
    data.leaveactivestatus = "NA"
    console.log(data);
    setisloading(true)
    try {
      const response = await applyleave(data);
      if (response.data.leaveDetails) {
        toast.success(response.data.message);
        navigate("/viewleave")
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setisloading(false)
    }
  }
  return (
    <Layout title={"Employee"}>
      <Grid container spacing={2} style={{ height: "auto" }}>
        <Grid item xs={2} style={{ background: "#F8F8F8", display: { xs: 'none', sm: 'block' } }}>
          <Sidebar />
        </Grid>
        <Grid item xs={10} style={{ background: "#F6F6F6" }}>
          <Box style={{ width: "95%", marginTop: "50px", height: "auto" }}>
            <Typography variant="h4" align='center' component="h6" color={"primary"} style={{ fontFamily: "Times" }}>
              <b>Fill Up The Form</b>
            </Typography><br />

            <Card style={{ maxWidth: 880, padding: "0px 5px", margin: "0 auto" }}>
              <CardContent>
                <form style={{ marginTop: 20 }} onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={1} padding={1}>
                    <Grid xs={12} sm={6} item>
                      <TextField type='date' label="Start Date" variant="outlined" fullWidth focused
                        {...register("startdate", { required: true })}
                      />
                      {errors.startdate?.type === "required" && <p>Start Date is Required</p>}
                    </Grid>
                    <Grid xs={12} sm={6} item>
                      <TextField type='date' label="End Date" variant="outlined" fullWidth focused
                        {...register("enddate", { required: true })}
                      />
                      {errors.enddate?.type === "required" && <p>End Date is Required</p>}
                    </Grid>
                    <Grid xs={12} sm={12} item><br />
                      <TextField type='text' placeholder="Enter Leave Reason" label="Leave Reason" variant="outlined" fullWidth
                        {...register("leavereason", { required: true })}
                      />
                      {errors.leavereason?.type === "required" && <p>Leave Reason is Required</p>}
                    </Grid>
                    <Grid item xs={12}>
                      <center><br />
                        <Button type="submit" variant="contained" color="secondary">
                          {isLoading ? <CircularProgress size={20} style={{ color: "black" }} /> : <>Submit</>}
                        </Button>
                      </center>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>

          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ApplyLeave