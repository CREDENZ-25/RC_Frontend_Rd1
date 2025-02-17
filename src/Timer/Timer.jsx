import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Timer() {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 minutes in seconds

    useEffect(() => {
        if (timeLeft <= 0) {
            navigate("#"); // Redirect when timer reaches 0
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer); // Cleanup interval on unmount
    }, [timeLeft, navigate]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    return (
        <div className="text-2xl font-bold text-center p-4 bg-gray-800 text-white rounded-md w-40 mx-auto">
            Time Left: {formatTime(timeLeft)}
        </div>
    );
};

export default Timer;
