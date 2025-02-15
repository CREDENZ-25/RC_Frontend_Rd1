import { Button } from "pixel-retroui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authUser, notAuthUser } from "../../redux/authSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  axios.defaults.withCredentials = true;

  const [logData, setLogData] = useState({
    username: "",
    password: "",
  });

  const addData = (e) => {
    const { name, value } = e.target;
    setLogData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/auth/login", logData, { withCredentials: true });
      toast.success("Login Successful!", { position: "top-center" });
      console.log(res.data);

      dispatch(authUser());
      navigate("/dashboard"); // Navigate after successful login
    } catch (err) {
      toast.warning("Invalid Username or Password", { position: "top-center" });
      dispatch(notAuthUser());
    }
  };

  return (
    <>
      <div className="mainbody flex justify-center items-center min-h-screen p-4">
        <form
          className="loginForm h-[80vh] w-[90vw] max-w-md mx-auto bg--500 bg-center flex flex-col justify-center items-center mt-[3vh] p-[2vw] rounded-lg"
          onSubmit={handleClick}
        >
          <h2 className="header mb-[2vh] text-[5vw] ml-[3vw]">LOGIN</h2>

          <div className="inputBoxes h-[40vh] w-full flex flex-col justify-start items-center bg-500">
            <label className="font-avenixel text-[3vh] mb-[1vh]">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="username1 p-[1.5vh] mb-[2vh] text-[3vh] w-full border rounded-lg"
              onChange={addData}
              value={logData.username}
              autoComplete="off"
            />

            <label className="font-avenixel text-[3vh] mb-[1vh]">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="username p-[1.5vh] mb-[2vh] text-[3vh] w-full border rounded-lg"
              onChange={addData}
              value={logData.password}
              autoComplete="off"
            />

            <Button
              type="submit"
              bg="darkgray"
              shadow="gray"
              className="loginBtn  sm:w-[12rem] h-20 mt-[5vh] bg-[#CA5F93] text-white py-[1vh] rounded-xl text-[2.5vh] "
            >
              Login
            </Button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
