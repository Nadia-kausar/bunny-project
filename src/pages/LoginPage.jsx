import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(null); // null/true/false
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoginSuccess(null);
    if (!validate()) return;

    setLoading(true);

    const storedUser = JSON.parse(localStorage.getItem("user")); // Get the user from localStorage

    setTimeout(() => {
      setLoading(false);
      // Compare entered credentials with stored credentials
      if (
        storedUser &&
        storedUser.email === email &&
        storedUser.password === password
      ) {
        setLoginSuccess(true); // Login successful
      } else {
        setLoginSuccess(false); // Invalid email or password
      }
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form} noValidate>
        <h2 style={styles.title}>Login to ShopEasy</h2>

        {loginSuccess === true && (
          <div style={{ ...styles.message, ...styles.success }}>
            Login successful! Redirecting...
          </div>
        )}
        {loginSuccess === false && (
          <div style={{ ...styles.message, ...styles.error }}>
            Invalid email or password.
          </div>
        )}

        <label htmlFor="email" style={styles.label}>
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            ...styles.input,
            borderColor: errors.email ? "#c00" : "#ccc",
          }}
          disabled={loading}
        />
        {errors.email && <small style={styles.errorText}>{errors.email}</small>}

        <label htmlFor="password" style={styles.label}>
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            ...styles.input,
            borderColor: errors.password ? "#c00" : "#ccc",
          }}
          disabled={loading}
        />
        {errors.password && <small style={styles.errorText}>{errors.password}</small>}

        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <div style={styles.signupPrompt}>
          Not registered?{" "}
          <Link to="/signup" style={styles.signupLink}>
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#ttt",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  form: {
    backgroundColor: "#fff",
    color: "#000",
    padding: "40px",
    borderRadius: "8px",
    maxWidth: "400px",
    width: "100%",
    boxSizing: "border-box",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    marginBottom: "24px",
    fontSize: "28px",
    fontWeight: "bold",
    textAlign: "center",
  },
  label: {
    marginBottom: "8px",
    fontWeight: "600",
    fontSize: "14px",
  },
  input: {
    padding: "12px 10px",
    marginBottom: "12px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
    boxSizing: "border-box",
    outlineColor: "#000",
  },
  button: {
    padding: "12px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "12px",
  },
  errorText: {
    color: "#c00",
    fontSize: "12px",
    marginBottom: "8px",
  },
  message: {
    textAlign: "center",
    fontWeight: "600",
    marginBottom: "16px",
    padding: "10px",
    borderRadius: "4px",
  },
  success: {
    backgroundColor: "#d4edda",
    color: "#155724",
  },
  error: {
    backgroundColor: "#f8d7da",
    color: "#721c24",
  },
  signupPrompt: {
    marginTop: "16px",
    fontSize: "14px",
    textAlign: "center",
  },
  signupLink: {
    color: "#000",
    fontWeight: "bold",
    textDecoration: "none",
  },
};
