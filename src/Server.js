import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const questions = [
    { id: 1, text: "question 1", answer: "1" },
    { id: 2, text: "question 2", answer: "2" },
    { id: 3, text: "question 3", answer: "3" },
    { id: 4, text: "question 4", answer: "4" },
    { id: 5, text: "question 5", answer: "5" },
    { id: 6, text: "question 6", answer: "6" },
    { id: 7, text: "question 7", answer: "7" },
    { id: 8, text: "question 8", answer: "8" },
    { id: 9, text: "question 9", answer: "9" },
    { id: 10, text: "question 10", answer: "10" }
];

let count = 0;
let lastAttemptFailed = false;
let score = 0;  // Score variable

// Route to send the current question and score
app.get("/api/question", (req, res) => {
    res.json({ question: questions[count], score });
});

// Route to handle answer submission
app.post("/api/submit", (req, res) => {
    const { id, answer } = req.body;

    if (!id || !answer?.trim()) {
        return res.status(400).json({ message: "Invalid input. Please enter an answer." });
    }

    console.log(`Received answer for Question ${id}: ${answer}`);

    const currentQuestion = questions.find(q => q.id === id);
    if (!currentQuestion) {
        return res.status(404).json({ message: "Question not found." });
    }

    if (answer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()) {
        // Correct answer: Increase score and move to next question
        score += 1;
        count = (count + 1) % questions.length;
        lastAttemptFailed = false;
        return res.json({ correct: true, score, message: `Correct! Moving to question ${questions[count].id}.` });
    } else {
        if (!lastAttemptFailed) {
            // First incorrect attempt: Enable second input
            lastAttemptFailed = true;
            score -= 1; // Deduct score for first incorrect attempt
            return res.json({ correct: false, retry: true, score, message: "Incorrect! Try again with Input 2." });
        } else {
            // Second incorrect attempt: Move to next question and deduct score
            score -= 1;
            count = (count + 1) % questions.length;
            lastAttemptFailed = false;
            return res.json({ correct: false, retry: false, score, message: `Incorrect! Moving to question ${questions[count].id}.` });
        }
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
