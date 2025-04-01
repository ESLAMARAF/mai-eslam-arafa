import React, { useState } from "react";
import { TextField, FormControl, Button, Typography, Box, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: false, password: false });

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) => password.length >= 6;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate inputs
    if (name === "email") setErrors((prev) => ({ ...prev, email: !validateEmail(value) }));
    if (name === "password") setErrors((prev) => ({ ...prev, password: !validatePassword(value) }));
  };

  return (
    <Box sx={{ maxWidth: 350, margin: "auto", padding: 3, textAlign: "center" }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Sign In
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2, color: "#777" }}>
        Hey User, Welcome Back! We’ve Missed You!  
      </Typography>

      <Box sx={{ display: "grid", gap: 2 }}>
        {/* Email Input */}
        <FormControl fullWidth>
          <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#2E2E2E" }}>E-mail</Typography>
          <TextField
            name="email"
            placeholder="Enter your email"
            type="email"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            helperText={errors.email && "Enter a valid email address"}
          />
        </FormControl>

        {/* Password Input */}
        <FormControl fullWidth>
          <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#2E2E2E" }}>Password</Typography>
          <TextField
            name="password"
            placeholder="Enter your password"
            type="password"
            fullWidth
            variant="outlined"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            helperText={errors.password && "Password must be at least 6 characters"}
          />
        </FormControl>
      </Box>

      {/* Forgot Password */}
      <Typography sx={{ textAlign: "right", marginTop: 1 }}>
      <Link onClick={() => navigate("/ResetPassword")}  sx={{ color: "#007BFF", cursor: "pointer" }}>
          Forgot Password?
        </Link>
      </Typography>

      {/* Login Button */}
      <Button
        variant="contained"
        fullWidth
        sx={{ marginTop: 2 }}
        disabled={errors.email || errors.password || !formData.email || !formData.password}
      >
        Sign In as Affiliate
      </Button>

      {/* Signup Link */}
      <Typography variant="body2" sx={{ textAlign: "center", color: "#777", marginTop: 2 }}>
        Don't have an account?{" "}
        <Link onClick={() => navigate("/register")} sx={{ color: "#007BFF", cursor: "pointer" }}>
          Sign Up
        </Link>
      </Typography>
    </Box>
  );
};

export default Login;
