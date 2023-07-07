import React, { useEffect, useState } from 'react'
import './customer.css'
import { Link, useNavigate } from 'react-router-dom'
import Dashbord from '../component/dashbord'
import axios from 'axios';
 
 function Customer() {
    const deletehandelSubmit =(custid)=>{
        const popMessage = window.confirm('Are you sure you Want to Delete?');
        if (popMessage){
            axios.delete(`http://localhost:8090/api/v1/customer/${custid}`)
            .then((res)=>{
                Navigate("/customer");
                window.location.reload();
            })
            .catch((error)=> console.log(error));
        }
    };




    const [Customers ,setCustomer] = useState([]);
    const Navigate =useNavigate();

    useEffect(()=>{
        loadCustomer();
    },[]);
    const loadCustomer= async()=>{
        try{
            const result = await axios.get("http://localhost:8090/api/v1/customer");
            setCustomer(result.data);
        }catch(error){
            console.log(error);
        }
    };
  return (


<div>


{/* <div class="d1">
        <center><h2>Hardware shop</h2></center>
        <ul>
            <li><a ><i class="icon icon-home"></i> Dashbord</a></li><br/>
            <li><a ><i class="icon icon-user"></i> Customer</a></li><br/>
            <li><a ><i class="icon-handbag"></i> Product</a></li><br/>
            <li><a ><i class="zmdi zmdi-arrow-right"></i> Sales</a></li><br/>
          <Link to={"/report"}> <li><a > <i class="fa fa-bank"></i>Report</a></li><br/></Link> 
        
        </ul>
</div> */}
<Dashbord/>
<div className="d2">
        <div className="card">
            <div className="card-body">
            <h3 className="card-title">Customer Details</h3>
            <p className="card-textt">Customer </p>
            <p className="card-link">To add another customer</p>
            <Link to={"/form"}><button> Add New</button></Link>
            </div>
        </div><br/><br/>
        <div className="card">
            <div className="card-body">
            <h3  className="card-title">List of customers</h3>
            <p className="card-text">Dashboard</p>
            
            </div>
            <table>
                <tr>
                <th>custID</th>
                <th>CustFname</th>
                <th>custLname</th>
                <th>custPhone </th>
                <th>custAddress</th>
                <th>action</th>
                </tr>
                <tbody>{
                    Customers.length >0 ?(
                        Customers.map((Customers,index) =>(

    
                <tr key={index}>
                <td>{index + 1}</td>
                <td>{Customers.fname}</td>
                <td>{Customers.lname}</td>
                <td>{Customers.address}</td>
                <td>{Customers.phone_number}</td>
                <td> <button onClick={e =>deletehandelSubmit(Customers.custid)} className='btn btn-sm btn-danger ms-1 btn-success'>Delete</button></td>
                </tr>
                    ))
                    ):(
                <tr>
                    <td colSpan="4">muna</td>
                </tr>
                    )
                }
                {/* <Link to{'/update/${cust.ID'} className='btn btn-sm btn-success'>Update</Link> */}
               
                
             </tbody>
                {/* <tr>
                <td></td>
                <td></td>
                <td></td>
                 <td></td>
                <td></td>
                <td></td>
                </tr> */}
                
            </table>
        </div><br/><br/><br/><br/><br/><br/>
        <div class="card">
        <div class="card-body">
        <center><h3 class="card-title">Developed by Munevver</h3></center>
        
    </div>
</div>
        
    </div>

</div>
 
  )
}
export default Customer
