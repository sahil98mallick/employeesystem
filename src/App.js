import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Common/Navbar';
import Home from './WebPages/Home';
import Login from './WebPages/Login';
import Profile from './WebPages/Profile';
import Footer from './Common/Footer';
import AddEmployee from './WebPages/Admin/AddEmployee';
import AdminDashboard from './WebPages/Admin/AdminDashboard';
import AdminViewLeave from './WebPages/Admin/AdminViewLeave';
import SingleEmployeeDetails from './WebPages/Admin/SingleEmployeeDetails';
import UpdateEmployeeDetails from './WebPages/Admin/UpdateEmployeeDetails';
import ViewEmployee from './WebPages/Admin/ViewEmployee';
import ViewLeave from './WebPages/Employee/ViewLeave';
import ApplyLeave from './WebPages/Employee/ApplyLeave';
import EmployeeDashabord from './WebPages/Employee/EmployeeDashabord';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminSingleLeaveAction from './WebPages/Admin/AdminSingleLeaveAction';
import About from './WebPages/About';
import Contact from './WebPages/Contact';
import { useAuth } from './Authsection/AuthPage';

function App() {
  const [auth, setauth] = useAuth();
  function PrivateRoute({ children }) {
    const token = localStorage.getItem("auth") || sessionStorage.getItem("auth");
    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  }
  const PublicRoute = [
    {
      path: "/",
      components: <Home />
    },
    {
      path: "/login",
      components: <Login />
    },
    {
      path: "/contact",
      components: <Contact />
    },
    {
      path: "/about",
      components: <About />
    },
  ]

  const ProtectedRoute = [
    {
      path: "/addemployee",
      components: <AddEmployee />
    },
    {
      path: "/profile",
      components: <Profile />
    },
    {
      path: "/viewemployee",
      components: <ViewEmployee />
    },
    {
      path: "/admindashboard",
      components: <AdminDashboard />
    },
    {
      path: "/employeedashbaord",
      components: <EmployeeDashabord />
    },
    {
      path: "/adminviewleave",
      components: <AdminViewLeave />
    },
    {
      path: "/adminSingleleaveaction/:id",
      components: <AdminSingleLeaveAction />
    },
    {
      path: "/viewsingleemployee/:id",
      components: < SingleEmployeeDetails />
    },
    {
      path: "/updatesingleemployee/:id",
      components: <UpdateEmployeeDetails />
    },
    {
      path: "/applyleave",
      components: <ApplyLeave />
    },
    {
      path: "/viewleave",
      components: <ViewLeave />
    },
  ]


  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Router>
        <Routes>
          {/* Public Route */}
          {
            PublicRoute?.map((item, key) => {
              return (
                <>
                  <Route
                    key={key + 1}
                    path={item.path}
                    element={item.components} />
                </>
              )
            })
          }

          {/* Private Route */}

          {
            ProtectedRoute?.map((item, key) => {
              return (
                <>
                  <Route
                    key={key + 1}
                    path={item.path}
                    element={<PrivateRoute>{item.components}</PrivateRoute>} />
                </>
              )
            })
          }
          {/* <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/categoryWiseBlogLists/:id' element={<CategoryWiseBlogLists />} />
          <Route path='/singleblogdetails/:_id' element={<SingleBlogDetails />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/Apidocuments' element={<ApiDocumentation />} /> */}
        </Routes>


        {/* <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/addemployee' element={<AddEmployee />} />
          <Route path='/viewemployee' element={<ViewEmployee />} />
          <Route path='/admindashboard' element={<AdminDashboard />} />
          <Route path='/employeedashbaord' element={<EmployeeDashabord />} />
          <Route path='/adminviewleave' element={<AdminViewLeave />} />
          <Route path='/adminSingleleaveaction/:id' element={<AdminSingleLeaveAction />} />
          <Route path='/viewsingleemployee/:id' element={<SingleEmployeeDetails />} />
          <Route path='/updatesingleemployee/:id' element={<UpdateEmployeeDetails />} />
          <Route path='/applyleave' element={<ApplyLeave />} />
          <Route path='/viewleave' element={<ViewLeave />} />
        </Routes> */}
      </Router>
    </>
  );
}

export default App;
