import React from 'react'
import './report.css'
import Dashbord from '../component/dashbord'

 function Report() {
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
                <h3 className="card-title">Sales Report</h3>
                <p className="card-textt">Report </p>
                
                </div>
            </div><br/><br/>
            <div className="card">
                <div className="card-body">
                <h3  className="card-title">List of sold product</h3>
                <p className="card-text">Report</p>
                
                </div>
                <table>
                <tr>
                <th>Product</th>
                <th>Quantity sold</th>
                <th>Total amount</th>
                <th>Remain</th>
                <th>Profit</th>
                </tr>
                {/* <tr>
                <td>Sharifa</td>
                <td>Khelef</td>
                <td>1</td>
                </tr>
                <tr>
                <td>Rukia</td>
                <td>Abuu</td>
                <td>2</td>
                </tr> */}

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
export default Report
