import React from 'react'
import './form.css'
import { useState} from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Form() {

  const[inputfname,setfname] =useState('');
  const[inputlname,setlname] = useState('');
  const[inputaddress,setaddress]=useState('');
  const[inputphone,setphone]=useState('');
  const navigate =useNavigate();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const requestdata ={
        fname:inputfname,
        lname:inputlname,
        address:inputaddress,
        phone_number:inputphone
      };
      axios.post(`http://localhost:8090/api/v1/save`,requestdata).then(response =>{
            console.log(response.data);
            //Inaonesha data ambayo imeingia
             navigate("/customer");
        }).catch(error=>{
            console.error(error);
        })
    }

  
  return (
    <div>
    <form  onSubmit={handleSubmit}>
   
    <label for="fname">First name:</label><br></br>
    <input type="text" id="lname" name="custFname" value ={inputfname} onChange={event => setfname (event.target.value)}/><br/>

    <label for="fname">Last name:</label><br></br>
    <input type="text" id="lname" name="custLname" value ={inputlname} onChange={event => setlname (event.target.value)}/><br/>

    <label for="fname">Address:</label><br></br>
    <input type="text" id="lname" name="custAdress"  value ={inputaddress} onChange={event => setaddress (event.target.value)}/><br/>

    <label for="fname">Phone number:</label><br></br>
    <input type="text" id="lname" name="custPhone"  value ={inputphone} onChange={event => setphone (event.target.value)}/><br/>

    <input type="submit" value="Submit"/>
    

  </form>
  </div>
  )
}
export default Form
