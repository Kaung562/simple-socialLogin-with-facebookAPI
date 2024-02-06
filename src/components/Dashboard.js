import React,{ Component } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import ShowAllCar from './ShowCar'
import AddCar from './AddCar'
import axios from 'axios';
import './style/style.css';

class Dashboard extends Component{
    constructor(){
        super()
        this.state={
          cars: [],
          selectedTab: 'show',
        };
      }
    
      componentDidMount(){
        axios.get('http://localhost:9090/showCar')
        .then(res=>{
          this.setState({
            cars:res.data
          })
        })
        .catch(error=>{
          console.log(error);
        })
      }

      
      render(){
      
        return(
          <>
          <div className="container">
            <h1>XYZ CAR</h1>
            <nav className="nav">
          
           <Link to="/add" className="link">
              ADD Product
            </Link>
            <Link to="/show" className="link">
              Show Product
            </Link>

            </nav>


          </div>
        </>
        )
      }
}

export default Dashboard;