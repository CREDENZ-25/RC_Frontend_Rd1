
// import "./Login.css";

function Login() {
    return (
      <>
      
        <form className="h-full w-[100vw] bg--500 flex flex-col justify-center items-center ">
            <h2 className="header">LOGIN</h2>
            
           
            <div className="inputBoxes h-[24vh] w-full flex flex-col justify-start items-center bg--500 ">
            <label>Username</label>
            <input type="text" className="username1" ></input>
            
        
        
            <label>Password</label>
            <input type="password" className="username" ></input>
            </div>
            
            
        <button className="loginBtn px-[2vw] bg-[#CA5F93] text-white py-[1vh] " >Login</button>
    
        </form>
        
        
        
  
      </>  
      
    );
  }
  
  export default Login;