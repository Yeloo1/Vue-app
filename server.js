const express = require("express");
const cors = require("cors");
const { db } = require("./firebase"); // Correct Firebase Admin import
const app = express();
const PORT = process.env.PORT || 5002;

// Enable CORS and allow specific origins
app.use(cors({
  origin: "*", // Frontend running on port 8080
  methods: ["GET", "POST"], // Allow only specific methods
}));

// Middleware to parse JSON requests
app.use(express.json()); // This is essential for parsing JSON bodies in POST requests

// Signup route
app.post("/signup", async (req, res) => {
  const { email, phoneNumber, userId } = req.body;

  // Check if all required fields are present
  if (!email || !phoneNumber || !userId) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    // Correct Firestore reference using Firebase Admin SDK
    const userRef = db.collection("users").doc(userId); // Use .collection().doc() for Firestore

    // Add user data to Firestore
    await userRef.set({
      email,
      phoneNumber,
      createdAt: new Date(), // Add a creation date to the record
    });

    // Respond with success message
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    // Log the error details to the console
    console.error("Error creating user:", error);

    // Respond with a detailed error message in the response body
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to server of Transport Cost Calculator ! The backend is running.");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
