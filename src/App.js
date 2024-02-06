
import React,{Component, useState, useEffect } from 'react';
import './App.css';
import ShowAllCar from './components/ShowCar'
import AddCar from './components/AddCar';
import LoginHome from './components/LoginHome';
import LoginForm from './components/LoginForm';
import Home from './components/Home'
import {BrowserRouter as Router,Routes,Route,Link, Navigate, useNavigate} from "react-router-dom"
import axios from 'axios';
import './index.css'
import FacebookLoginComponent from './components/FacebookLoginComponent';
import Dashboard from './components/Dashboard';



  const App = () => {
    const [user, setUser] = useState(null);
    const [cars, setCars] = useState([]);




  // componentDidMount();{
  //   axios.get('http://localhost:9090/api/private/showCar'
  //   )
  //   .then(res=>{
  //     this.setState({
  //       cars:res.data
  //     })
  //   })
  //   .catch(error=>{
  //     console.log(error);
  //   })
  // };

  useEffect(() => {
    // Fetch data when the component mounts
    axios.get('http://localhost:9090/api/private/showCar')
      .then(res => {
        setCars(res.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  
  const handleLogin = (userData) => {
     setUser(userData);
 
    };
    return(
    
      <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/dashboard" replace /> : <LoginForm onLogin={handleLogin} />} />
        <Route path="/login/facebook" element={user ? <Navigate to="/dashboard" replace /> : <FacebookLoginComponent onLogin={handleLogin} />} />
        {/* <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} /> */}
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/add" element={<AddCar />}></Route>
        <Route path='/show' element={<ShowAllCar alldata={cars} />}></Route>

        
      </Routes>
    </Router>
     
    )
  };

export default App;




  // useEffect(() => {
  //   // Fetch data when the component mounts
  //   axios.get('http://localhost:9090/showData')
  //     .then(res => {
  //       setProducts(res.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);