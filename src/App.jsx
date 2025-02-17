import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import './index.css';
import Rashmi_Question from './Rashmi_Question';
import Navbar from './Navbar/Navbar';



function App() {
  return (
    <>
    
    
      <div className='text-3xl font-bold ' id='root'>
        <Navbar/>
        
        <Rashmi_Question/>
      </div>
      </>

  );
}

export default App;
