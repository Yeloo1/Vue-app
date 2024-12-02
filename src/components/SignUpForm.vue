<template>
  <div class="signup-container">
    <h1 class="title">Sign up</h1>
    
    <form class="signup-form" @submit.prevent="signUp">
      <!-- User Input -->
      <input
        class="form-input"
        type="text"
        v-model="email"
        placeholder="Enter your email"
        required
      />
      <!-- Password Input -->
      <input
        class="form-input"
        type="password"
        v-model="password"
        placeholder="Enter your password"
        required
      />
      <!-- Phone Number Input -->
      <input
        class="form-input"
        type="tel"
        v-model="phoneNumber"
        placeholder="Enter your phone number"
        required
      />
      <!-- Sign Up Button -->
      <button class="signup-button" type="submit">
        SIGN UP
      </button>
    </form>

    <!-- Login Button -->
    <button class="login-button" @click="goToLogin">
      Already have an account? <span class="highlight">Log In</span>
    </button>
  </div>
</template>

<script>
import { auth } from "../firebase";  // Import Firebase Authentication
import { createUserWithEmailAndPassword } from "firebase/auth";  // Firebase Auth methods
import axios from "axios";  // Axios for backend requests

export default {
  name: "SignUpForm",
  data() {
    return {
      email: "",
      password: "",
      phoneNumber: "",
    };
  },
  methods: {
    async signUp() {
      try {
        // Step 1: Create user with Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
        const user = userCredential.user;

        console.log('User created:', user);  // Debugging: log user credentials

 // Step 2: Send user data to backend to store in Firestore
const response = await axios.post("https://vue-app-7dwt.onrender.com/signup", {
  email: this.email,
  phoneNumber: this.phoneNumber,
  userId: user.uid,  // Send user ID to backend
});

console.log('Backend response:', response);  // Log the response from backend


        // Step 3: Handle successful sign-up
        if (response.status === 201) {
          alert("Sign-up successful!");
          this.$router.push("/login");
        } else {
          alert("Error in saving user data.");
        }
      } catch (error) {
        console.error('Error during sign-up:', error);  // Debugging: log errors
        alert(`Error: ${error.message}`);
      }
    },
    goToLogin() {
      this.$router.push('/login');
    }
  },
};
</script>



<style scoped>
.signup-container {
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

.signup-form {
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form-input {
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
}

.signup-button {
  background-color: #007bff;
  color: white;
  padding: 12px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
}

.signup-button:hover {
  background-color: #0056b3;
}

.login-button {
  background: none;            /* Remove the background */
  color: #333;                 /* Dark text color */
  font-size: 16px;
  border: none;                /* Remove border */
  padding: 0;                  /* No padding */
  text-decoration: none;       /* Remove underline */
  cursor: pointer;            /* Pointer cursor on hover */
  width: auto;                 /* Let width adjust based on text */
  margin-top: 10px;
}

.login-button .highlight {
  color: #007bff;              /* Blue color for 'Log In' text */
  text-decoration: underline;  /* Underline the 'Log In' text */
}

.login-button .highlight:hover {
  color: #0056b3;              /* Darker blue on hover */
  text-decoration: none;       /* Remove underline on hover */
}
</style>
