import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import Dashbord from '../component/dashbord'

function Product() {
  return (
    <div><div>


    {/* <div class="d1">
            <center><h2>Hardware shop</h2></center>
            <ul>
                <li><a ><i class="icon icon-home"></i> Dashbord</a></li><br/>
                <li><a ><i class="icon icon-user"></i> Customer</a></li><br/>
                <li><a ><i class="icon-handbag"></i> Product</a></li><br/>
                <li><a ><i class="zmdi zmdi-arrow-right"></i> Sales</a></li><br/>
                <li><a > <i class="fa fa-bank"></i>Report</a></li><br/>
            
            </ul>
    </div> */}
    <Dashbord/>
    <div className="d2">
            <div className="card">
                <div className="card-body">
                <h3 className="card-title">Product Details</h3>
                <p className="card-textt">Product </p>
                <p className="card-link">To add another Product</p>
                <Link to={"/proform"}><button> Add New</button></Link>
                </div>
            </div><br/><br/>
            <div className="card">
                <div className="card-body">
                <h3  className="card-title">List of Product</h3>
                <p className="card-text">Product</p>
                
                </div>
                <table>
                    <tr>
                    <th>prodID</th>
                    <th>prodName</th>
                    <th>prodUnitprice</th>
                    </tr>
                    <tr>
                    <td>01</td> 
                    <td>Butter</td>
                    <td>5000</td>
                    </tr>
                    <tr>
                    <td>02</td> 
                    <td>Chocolate</td>
                    <td>4500</td>
                    </tr>
    
                </table>
            </div><br/><br/><br/><br/><br/><br/>
            <div class="card">
            <div class="card-body">
            <center><h3 class="card-title">Developed by Munevver</h3></center>
            
        </div>
    </div>
            
        </div>
    
    </div></div>
  )
}
export default Product
