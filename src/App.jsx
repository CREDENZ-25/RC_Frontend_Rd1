import './pages/Login/Login.css'
import Login from './pages/Login/Login'
import pixelBg from "./assets/BG_login.png"

function App() {

  return (
    <>
    <img className="pixelBG h-[100vh] absolute top-0 w-[100%] object-fill  z-[-1] opacity-[100%] " src={pixelBg}></img>
      <div className='h-[100vh] w-[100vw] absolute flex justify-center items-center'>
        {/* <h1>RC Frontend</h1> */}
        <Login/>
      </div>
    </>
  )
}

export default App
