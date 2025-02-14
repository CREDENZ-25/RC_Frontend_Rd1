import './App.css'
import Navbar from './Navbar/Navbar.jsx';
import Layout from './Layout/Layout.jsx';

function App() {

  return (
    <>
      <div className="main-app h-[100vh] w-[100vw] flex flex-col justify-center items-center  ">
        <Navbar/>
      <Layout/>
      </div>
    </>
  )
}

export default App;
