import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// Optional: allow JSON body parsing if needed
app.use(express.json());

// === Sample Questions by Category ===
const questions = {
  easy: [
    "What’s your favorite color?",
    "What’s your dream vacation spot?",
    "If you could eat one food forever, what would it be?",
    "What’s your go-to comfort show or movie?",
  ],
  medium: [
    "Describe your perfect day.",
    "If you could switch jobs with anyone, who would it be?",
    "What hobby would you love to master?",
    "What’s something you recently learned that surprised you?",
  ],
  hard: [
    "What motivates you the most in tough times?",
    "What’s your biggest life lesson so far?",
    "When was the last time you truly stepped out of your comfort zone?",
  ],
  "quite-tough": [
    "What’s the hardest decision you’ve ever made?",
    "What fear have you overcome recently?",
    "What failure taught you the most valuable lesson?",
  ],
  dangerous: [
    "Take a deep breath and relax. You deserve it 😌",
    "Stretch for a minute and grab some water!",
    "It’s break time — smile at someone nearby 😄",
  ],
  break: [
    "Have a round of cards ♠️♥️♣️♦️",
    "Scroll through your gallery to the period of October 2024. Choose a picture and talk about it 🤓",
    "The person in front of you has to show you a magic trick 🪄",
    "State a random fact"
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
