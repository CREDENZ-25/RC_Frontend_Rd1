import React from "react";
import Navbar from "./navbar";

const Instructions = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <h2 style={styles.mainTitle}>INSTRUCTIONS</h2>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>INSTR #1</h3>
          <p style={styles.cardContent}>
            Participants are allowed only one login session. Multiple logins are
            not permitted.
          </p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>INSTR #2</h3>
          <p style={styles.cardContent}>
            The contest will run from 6 PM to 7:30 PM, lasting for a duration of
            1.5 hours.
          </p>
        </div>
        <div style={styles.card}>
          <h3 style={styles.cardTitle}>INSTR #3</h3>
          <p style={styles.cardContent}>
            All questions are available in the Question Hub. Additionally, the
            correct submission percentage of all the participants for each
            question is displayed.
          </p>
        </div>
      </div>
      <button style={styles.nextButton}>NEXT</button>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Avenixel, sans-serif",
    backgroundColor: "#1A1B41",
    color: "#F8F8F2",
    minHeight: "100vh",
    padding: "20px",
  },
  mainTitle: {
    textAlign: "center",
    fontSize: "32px",
    color: "#FF79C6",
    margin: "20px 0",
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  card: {
    width: "357px",
    height: "487px",
    backgroundColor: "#25294A",
    borderRadius: "10px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
  },
  cardTitle: {
    fontSize: "20px",
    color: "#8BE9FD",
    marginBottom: "15px",
  },
  cardContent: {
    fontSize: "14px",
    lineHeight: "1.5",
    color: "#F8F8F2",
  },
  nextButton: {
    display: "block",
    margin: "30px auto",
    padding: "15px 40px",
    backgroundColor: "#FF79C6",
    color: "#1A1B41",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textTransform: "uppercase",
  },
};

export default Instructions;
