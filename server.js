const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const { db } = require("./firebase"); // Correct Firebase Admin import
const app = express();

// Initialize Firebase Admin SDK with your service account credentials
admin.initializeApp({
  credential: admin.credential.applicationDefault(), // Or use service account credentials
});

// Use Render's dynamic port or fall back to 5002 for local dev
const PORT = process.env.PORT || 5002;

// Enable CORS and allow specific origins
app.use(cors({
  origin: "https://yeloo1.github.io/Vue-app/#/",  // Add your frontend domain here
  methods: ["GET", "POST"],
}));

// Middleware to parse JSON requests
app.use(express.json());

// Firebase ID token verification middleware
async function verifyIdToken(req, res, next) {
  const idToken = req.body.idToken;

  if (!idToken) {
    return res.status(403).json({ message: "No ID token provided" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;  // Store user data in request object for further use
    next();  // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Error verifying ID token:", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
}

// Signup route with token verification
app.post("/signup", verifyIdToken, async (req, res) => {
  const { email, phoneNumber, userId } = req.body;

  // Check if all required fields are present
  if (!email || !phoneNumber || !userId) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    // Correct Firestore reference using Firebase Admin SDK
    const userRef = db.collection("users").doc(userId);

    // Add user data to Firestore
    await userRef.set({
      email,
      phoneNumber,
      createdAt: new Date(),
    });

    // Respond with success message
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    console.error("Error creating user:", error);
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
