const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const { db } = require("./firebase"); // Correct Firebase Admin import
const app = express();

// Use Render's dynamic port or fall back to 5002 for local dev
const PORT = process.env.PORT || 5002;

// Initialize Firebase Admin SDK (Ensure you have the correct path to your service account key)
const serviceAccount = require("./path/to/service-account-key.json");  // Replace with actual path
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


// Enable CORS and allow specific origins
app.use(cors({
  origin: "https://yeloo1.github.io",  // Your frontend URL (Make sure it's correct)
  methods: ["GET", "POST"],
}));

// Middleware to parse JSON requests
app.use(express.json()); // This is essential for parsing JSON bodies in POST requests

// Signup route
app.post("/signup", async (req, res) => {
  const { email, phoneNumber, userId, idToken } = req.body;  // Expecting idToken from frontend

  // Check if all required fields are present
  if (!email || !phoneNumber || !userId || !idToken) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    // Step 1: Verify the Firebase ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const user = await admin.auth().getUser(decodedToken.uid); // Get user info from token

    // Step 2: Add user data to Firestore
    const userRef = db.collection("users").doc(userId); // Use .collection().doc() for Firestore
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
  res.send("Welcome to server of Transport Cost Calculator! The backend is running.");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
