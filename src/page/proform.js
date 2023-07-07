import React from 'react'


function Proform() {
  return (
    <div>
        <form action="/action_page.php">
    <label for="fname">prodID:</label><br></br>
    <input type="text" id="fname" name="custID"/><br/>
    <label for="fname">prodName:</label><br></br>
    <input type="text" id="lname" name="custFname"/><br/>
    <label for="fname">prodQuantity:</label><br></br>
    <input type="text" id="lname" name="custLname"/><br/>
    <label for="fname">prodUnitprice</label><br></br>
    <input type="text" id="lname" name="custAdress"/><br/>
    {/* <label for="fname">Phone number:</label><br></br>
    <input type="text" id="lname" name="custPhone"/><br/> */}
    <input type="submit" value="Submit"/>
    

  </form>
    </div>
  )
}
export default Proform
