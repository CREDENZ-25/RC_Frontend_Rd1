import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <div className="Navbar">
      <div>
        <h3 className='rc'>RC</h3>
      </div>
      <div>
        <a className="leaderboard" href="">LEADERBOARD</a>
        <a className="result" href="">RESULT</a>

        {/* Box behind Logout */}
        <div className="logout-box">
          <a className="logout" href="">LOGOUT</a>
        </div>
      </div>
    </div>  
    </>
  );
};

export default Navbar;
