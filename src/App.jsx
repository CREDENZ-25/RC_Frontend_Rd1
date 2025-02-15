
import Login from './pages/Login/Login'

import pixelBg from "./assets/BG_login.png"


function App() {

  return (
    <>
    <div className='h-[100vh] w-full overflow-hidden relative'>
    <img className="pixelBG h-[100vh] absolute top-0 w-[100%] object-fill  z-[-1] opacity-[100%]" src={pixelBg}></img>
      <div className='h-[100vh] w-[100vw] absolute flex justify-center items-center'>
        
        <Login/>
      </div>
      </div>
    </>
  )
}

export default App
