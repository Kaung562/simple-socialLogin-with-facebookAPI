import React,{ Component } from "react";
import axios from 'axios';
import './style/style.css'
import { Link } from "react-router-dom";

class AddCar extends Component{

    constructor(){
        super();
        this.state={
            "carID" : '',
            "carBrand" : '',
            "carPrice" : '',
            "carColor" : ''
        }
    }

    idChange=(event)=>{
        this.setState({
            carID:event.target.value
        })
    }

    nameChange=(event)=>{
        this.setState({
            carBrand:event.target.value
        })
    }

    priceChange=(event)=>{
        this.setState({
            carPrice:event.target.value
        })
    }

    colorChange=(event)=>{
        this.setState({
            carColor:event.target.value
        })
    }

    addCar=(event)=>{
        axios.post('http://localhost:9090/api/private/addCar', this.state)
        .then(res=>{
            console.log(res.data);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render(){
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
            <div className="form-container">
                <h1>ADD CAR </h1>
                <form onSubmit={this.addCar}> 
                    Car Id<input type="text" value={this.state.carID} onChange={this.idChange}></input><br/>
                    Car Name<input type="text" value={this.state.carBrand} onChange={this.nameChange}></input><br/>
                    Car Price<input type="text" value={this.state.carPrice} onChange={this.priceChange}></input><br/>
                    Car Color<select onChange={this.colorChange}>
                        <option>RED</option>
                        <option>BLUE</option>
                        <option>WHITE</option>
                        <option>BLACK</option>
                    </select>
                    <br/>
                    <button type="submit">ADD</button>
                </form>
            </div>
            </div>
            </>
        )
    }
}

export default AddCar;