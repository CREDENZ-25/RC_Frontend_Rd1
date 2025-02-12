import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Card } from "pixel-retroui";
import "pixel-retroui/dist/index.css";
import "../index.css";




function Lifelines() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLifeline, setSelectedLifeline] = useState(null);

    // Lifeline Information
    const lifelines = [
        { id: 1, title: "Skip", description: "You can skip the question." },
        { id: 2, title: "Freeze", description: "Time will be frozen for 2 minutes." },
        { id: 3, title: "Double", description: "For 2 minutes, your points will double for correct answers." },
    ];

    return (
        <div>
            <Card
                bg="#393867"
                textColor="#e2b3cc"
                borderColor="#451c44"
                shadowColor="black"
                className="lifelines w-[17vw] h-[38vh] flex flex-col items-center p-1"
                style={{ fontFamily: "MyCustomFont", textDecoration: "none" }}
            >
                {/* LIFELINES Title */}
                <svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                    <text
                        x="50%" y="50%" dominantBaseline="middle" textAnchor="middle"
                        fill="#e2b3cc" stroke="#4a1237" strokeWidth="10" paintOrder="stroke fill"
                        style={{ fontFamily: "MyCustomFont" }} className="custom-shadow3 font-normal lg:text-[5vw] max-lg:text-[2vh]"
                    >
                        LIFELINES
                    </text>
                </svg>

                {/* Lifeline Cards */}
                <div className="flex flex-col items-center gap-2 w-full">
                    {lifelines.map((lifeline) => (
                        <Card
                            key={lifeline.id}
                            bg="#ca5f93"
                            textColor="black"
                            borderColor="black"
                            shadowColor="#c381b5"
                            className="w-[90%] h-[40px] flex  items-center px-2"
                        >
                            <svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                                <text
                                    x="1%" y="50%" dominantBaseline="middle" 
                                    fill="#e2b3cc" stroke="#4a1237" strokeWidth="10" paintOrder="stroke fill"
                                    style={{ fontFamily: "MyCustomFont" }} className="custom-shadow3 font-normal lg:text-[5vw] max-lg:text-[2vh]"
                                >
                                    {lifeline.title}
                                </text>
                            </svg>

                            <div className="flex gap-2">
                                <button onClick={() => { setSelectedLifeline(lifeline); setIsOpen(true); }}>
                                    <FontAwesomeIcon icon={faCircleInfo} style={{ fontSize: "20px" }} color="#4a0f35" />
                                </button>
                                <button>
                                    <FontAwesomeIcon icon={faCirclePlay} style={{ fontSize: "20px" }} color="#4a0f35" />
                                </button>
                            </div>
                        </Card>
                    ))}
                </div>
            </Card>

            {/* Pop-up (With Original Design) */}
            {isOpen && selectedLifeline && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80"
                    onClick={() => setIsOpen(false)} // Close when clicking outside
                    style={{ zIndex: 100 }}
                >
                    <div
                        className="p-6 rounded-lg shadow-lg text-center"
                        style={{
                            width: "300px",
                            height: "300px",
                            backgroundColor: "#1b1230",
                            boxShadow: "0 0 8px #e2b3cc",
                        }}
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                    >
                        {/* Lifeline Card (Unique Content) */}
                        <h2 className="text-2xl font-bold mb-2" style={{ color: "#e2b3cc", fontSize: "35px", marginTop: '50px', }}>
                            {selectedLifeline.title}
                        </h2>
                        <br />
                        <p className="mb-4" style={{ color: "#e2b3cc", fontSize: "15px" }}>
                            {selectedLifeline.description}
                        </p>

                        {/* Close Button */}
                        <button
                            className="absolute  text-white text-lg"
                            style={{ fontFamily: "MyCustomFont", marginLeft: '100px', top: '220px', color: "#e2b3cc" }}
                            onClick={() => setIsOpen(false)}
                        >
                            ✖
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Lifelines;
