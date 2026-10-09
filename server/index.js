import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Sample API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Example route for contact form (you can implement actual email sending here)
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("Received message from:", name, email);
  // Here you would typically use something like nodemailer to send an email
  res.json({ success: true, message: "Message received!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
