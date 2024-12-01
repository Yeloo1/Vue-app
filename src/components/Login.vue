<template>
  <div class="login-container">
    <h1 class="title">Login</h1>

    <form @submit.prevent="login">
      <input
        type="email"
        v-model="email"
        placeholder="Enter your email"
        required
      />
      <input
        type="password"
        v-model="password"
        placeholder="Enter your password"
        required
      />
      <button type="submit">Log In</button>
    </form>

    <!-- Link to Sign Up page -->
    <p class="signup-link">
      Don't have an account? <router-link to="/signup">Sign up here</router-link>
    </p>
  </div>
</template>

<script>
import { auth, db } from "../firebase";  // Import Firebase auth and firestore
import { signInWithEmailAndPassword } from "firebase/auth";  // Firebase auth methods
import { getDoc, doc } from "firebase/firestore";  // Firestore methods

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        // Sign the user in with email and password
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;

        // Fetch user data from Firestore using the UID
        const userDoc = await getDoc(doc(db, "users", user.uid));

        if (userDoc.exists()) {
          console.log("User Data:", userDoc.data());
          alert("Login successful!");
          
          // Redirect to TransportationChoice.vue after successful login
          this.$router.push('/transportation');  // Redirect to transportation choice page
        } else {
          alert("No user data found in Firestore.");
        }
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    },
  },
};
</script>

<style scoped>
/* Styles for the Login form */
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f9;
  font-family: 'Arial', sans-serif;
}

.title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

input {
  padding: 12px;
  margin-bottom: 15px;
  width: 100%;
  max-width: 380px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

button {
  background-color: #007bff;
  color: white;
  font-size: 18px;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  max-width: 380px;
  margin-top: 10px;
  font-weight: bold;
}

button:hover {
  background-color: #0056b3;
}

/* Styling for the Sign-Up link */
.signup-link {
  margin-top: 20px;
  font-size: 14px;
}

.signup-link a {
  color: #007bff;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>
