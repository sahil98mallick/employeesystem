import axios from "axios"

const baseURL = "https://nodenexus.onrender.com"
const baseURL2 = "https://restapinodejs.onrender.com/api";

// API implementation for Login Purposes
export const loginfunction = async (data) => {
    return axios.post(`${baseURL}/nodeserver/user/login`, data)
}

// API implementation for User Registration Purposes
export const addusers = async (data) => {
    return axios.post(`${baseURL}/nodeserver/user/register`, data)
}

// API implementation for Find All Users Purposes
export const allusers = async () => {
    return axios.get(`${baseURL}/nodeserver/user/allusers`)
}

// API implementation for Edit Purposes
export const updateemployee = async (id, data) => {
    return axios.put(`${baseURL}/nodeserver/user/updateuserdetail/${id}`, data)
}


// API implementation for Update Active Status Purposes
export const updateemployeeactivestatus = async (id, data) => {
    return axios.put(`${baseURL}/nodeserver/user/updateuseractivestatus/${id}`, data)
}

// API implementation for Delete User Purposes
export const deleteuser = async (id) => {
    return axios.delete(`${baseURL}/nodeserver/user/deleteuser/${id}`)
}

// API implementation for Find Single User Purposes
export const finduser = async (id) => {
    return axios.get(`${baseURL}/nodeserver/user/singleuser/${id}`)
}

// Apply Leave
export const applyleave = async (data) => {
    return axios.post(`${baseURL}/nodeserver/leave/apply`, data)
}

// Find All Leave details
export const allleave = async () => {
    return axios.get(`${baseURL}/nodeserver/leave/allleavedetails`)
}

// Find Leave by UserID
export const FindIDleave = async (id) => {
    return axios.get(`${baseURL}/nodeserver/leave/findsingleleavedeatils/${id}`)
}


// Update leave Status with Admin Note

export const updatestatus = async (id, data) => {
    return axios.put(`${baseURL}/nodeserver/leave/leavestatus/${id}`, data)
}

// Home // About // Services

// Fetch Banner Details

export const fetchbanner = async () => {
    return await axios.get(`${baseURL2}/banner`)
}

// Fetch Services Details

export const fetchservice = async () => {
    return await axios.get(`${baseURL2}/service`)
}

// Fetch Testimonials Details
export const fetchtestimonials = async () => {
    return await axios.get(`${baseURL2}/testimonial`)
}

// Fetch Out Team Members Details
export const fetchteammembers = async () => {
    return await axios.get(`${baseURL2}/team`)
}
