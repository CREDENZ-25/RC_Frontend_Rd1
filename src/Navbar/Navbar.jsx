import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>REVERSE CODING</h1>
      <div style={styles.links}>
        <a href="#leaderboard" style={styles.link}>
          LEADERBOARD
        </a>
        <a href="#result" style={styles.link}>
          RESULT
        </a>
        <a href="#logout" style={styles.link}>
          LOGOUT
        </a>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 50px",
    backgroundColor: "#1A1B41",
  },
  title: {
    fontFamily: "Avenixel, sans-serif",
    fontSize: "24px",
    color: "#FF79C6",
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "20px",
  },
  link: {
    fontFamily: "Avenixel, sans-serif",
    fontSize: "16px",
    color: "#F8F8F2",
    textDecoration: "none",
    cursor: "pointer",
  },
};

export default Navbar;
