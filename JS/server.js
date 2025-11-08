import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Optional: allow JSON body parsing if needed
app.use(express.json());

// === Sample Questions by Category ===
const questions = {
  easy: [
    "How are you?",
    "How are you enjoying your time here?",
    "Are you fluent in the language you've been learning?",
    "How's work",
    "How's your family?",
  ],
  medium: [
    "Of all the countries you've travelled to, which one did you fall in love the most? Were any core memories formed?",
    "Do you like your job?",
    "Where do you see yourself in 5 years?",
  ],
  hard: [
    "What is the proudest thing that you've achieved so far?",
    "Describe one of your lowest moments so far?",
    "How did you feel building up to the date of flying back here? What about now?",
    "Has there been any repriotisation in your priorities or life mindset?"
  ],
  "quite-tough": [
    "Bublub",
  ],
  dangerous: [
    "This information is unavailable. Please request directly"
  ],
  break: [
    "Have a round of cards ♠️♥️♣️♦️",
    "Scroll through your gallery to the period of December 2024. Choose a picture and talk about it 🤓",
    "The person in front of you has to show you a magic trick 🪄",
    "Drink water",
    "Take a deep breath and relax. You deserve it 😌",
    "Stretch for a minute and grab some water!",
    "It’s break time — smile at someone nearby 😄",
  ],
};

// === API Route ===
app.get("/api/questions", (req, res) => {
  res.json(questions);
});

// === Root Route (Optional) ===
// You can show a simple message when someone visits the base URL
app.get("/", (req, res) => {
  res.send("Welcome to the Question Generator API! 🎯");
});

// === Server Listener ===
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
