



import './App.css';
import Customer from './page/customer';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
// import Dashbord from './component/dashbord';
import Darshbordd from './page/darshbordd';
import Sales from './page/sales';
import Product from './page/product';
import Report from './page/report';
import Form from './page/form';
import Proform from './page/proform';
import Home from './page/home';

function App() {
  return (
    
    <div >

    <BrowserRouter>
    
    
    
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    
    

      <Route exact path='/dashbordd' element={<Darshbordd/>}/>

      <Route path='/customer' element={<Customer/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route exact path='/product' element={<Product/>}/>
      <Route path='/proform' element={<Proform/>}/>
      <Route exact path='/sales' element={<Sales/>}/>
      
    
       <Route path='/report' element={<Report/>}/> 
       {/* <Route exact path='/' element={<Darshbordd/>}/> */}

       

    </Routes>
    </BrowserRouter>
  
    
      
      
      {/* <home/> */}
      
      {/* <Dashbord/> */}
      
    </div>
  );
}

export default App;

