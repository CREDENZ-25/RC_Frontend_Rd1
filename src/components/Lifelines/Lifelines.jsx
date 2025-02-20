import React, { useState } from "react";

import Info from "./InfoCard.jsx";
import double from "../../assets/doublePoints.svg";
import freeze from "../../assets/freeze.svg";
import skip from "../../assets/skip.svg";
import { Button } from "pixel-retroui";


function Lifelines() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLifeline, setSelectedLifeline] = useState(null);

    // Lifeline Information
    const [lifelines, setLifelines] = useState([
        { id: 1, title: "Skip", description: "You can skip the question.", endpoint: "lifeline1" },
        { id: 2, title: "Freeze", description: "Time will be frozen for 2 minutes.", endpoint: "lifeline2" },
        { id: 3, title: "Double", description: "For 2 minutes, your points will double for correct answers.", endpoint: "lifeline3" },
    ]);

    const handleLifelineUse = async (endpoint) => {
        try {
            const response = await fetch(`http://localhost:5000/${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });

            const data = await response.json();
            console.log(data.message);

            // Update the lifelines state to disable the used lifeline
            setLifelines(prevLifelines =>
                prevLifelines.map(lifeline =>
                    lifeline.endpoint === endpoint ? { ...lifeline, used: true } : lifeline
                )
            );
        } catch (error) {
            console.error("Error using lifeline:", error);
        }
    };


    return (
        <div className="container">
      <div className="Lifelines">LIFELINES</div>
      <div className="flex-container">
        <div className="flex-item">
          <Info
            number="1"
            img={skip}
            desc="Skip"
            title="Skip"
            more="Allows you to Skip a question, Will be available from the start and can be only used once"
          ></Info>
        </div>
        <div className="flex-item">
          <Info
            number="2"
            img={freeze}
            desc="Freeze Time"
            title="Freeze Time"
            more="Increase your time by two minutes, Available after a streak of 3 questions"
          ></Info>
        </div>
        <div className="flex-item">
          <Info
            number="3"
            img={double}
            desc="Double Points"
            title="Double Points"
            more="available after streak of 4 questions (marks: +10/-2 for 1st attempt, +4/-2 for 2nd attempt) for 2 min
"
          ></Info>
        </div>
      </div>
      <div className="next">
        <Button
          className="next-button"
          shadowColor="#bc6f90"
          borderColor="#bc6f90"
          bg="#0d1234"
        >
          NEXT
        </Button>
      </div>
    </div>
    );
}

export default Lifelines;
