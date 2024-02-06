import React,{Component } from 'react';
import './style/style.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
//Data from other Component {datafromap}



class ShowProduct extends Component{

   

    render(){
        const mydata=this.props.alldata;
        const pheader=<tr>
            <th>Car ID</th> 
            <th>Car Brand</th> 
            <th>Car  Price (USD)</th>
            <th>Car Color</th>
            </tr>;

       const cdata =mydata.map((cr,key)=><tr>
        <td>{cr.carID}</td>
       <td>{cr.carBrand}</td>
       <td>{cr.carPrice}</td>
       <td>{cr.carColor}</td>
       </tr>);
        return (
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
         <div className='show-products-container'>
           
           
           

          <h1>Show All Products </h1>
           <table border="1">{pheader}{cdata}</table>
         </div>
         </div>
         </>
        )
    }


}

export default ShowProduct;