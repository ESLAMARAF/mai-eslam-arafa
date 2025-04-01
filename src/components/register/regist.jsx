import React, { useState } from "react";
import { TextField, FormControl, Button, Typography, Box, Checkbox, FormControlLabel, IconButton , Link } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; 
import { useNavigate } from "react-router-dom";

const Regist = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const validatePassword = (password) => password.length >= 6;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    if (name === "email") setErrors((prev) => ({ ...prev, email: !validateEmail(value) }));
    if (name === "password") setErrors((prev) => ({ ...prev, password: !validatePassword(value) }));
  };

  return (
    <Box sx={{ maxWidth: 357, margin: "auto", padding: 3, display: "grid", gap: 2, justifyContent: "center" }}>
      {/* Back Button */}
      <IconButton sx={{ justifyContent: "flex-start" }}>
        <ArrowBackIcon />
      </IconButton>

      {/* Heading */}
      <Box >
        <Typography variant="h5" sx={{ fontWeight: 600 }}>Become An Affiliate</Typography>
        <Typography variant="body2" sx={{ color: "rgba(154, 154, 154, 1)" }}>
          Please provide us with your basic details and begin enjoying your privileges.
        </Typography>
      </Box>

      {/* Form Fields */}
      <Box sx={{ display: "grid", gap: 2 }}>
        <FormControl fullWidth>
          <Typography sx={{ fontSize: 14, fontWeight: 500 }}>Username</Typography>
          <TextField name="username" placeholder="Enter your username" fullWidth variant="outlined" />
        </FormControl>

        <FormControl fullWidth>
          <Typography sx={{ fontSize: 14, fontWeight: 500 }}>Email</Typography>
          <TextField
            name="email"
            placeholder="Enter your email"
            type="email"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            helperText={errors.email && "Please enter a valid email address"}
          />
        </FormControl>

        <FormControl fullWidth>
          <Typography sx={{ fontSize: 14, fontWeight: 500 }}>Password</Typography>
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

        {/* Phone Input with Country Flag */}
        <FormControl fullWidth>
          <Typography sx={{ fontSize: 14, fontWeight: 500 }}>Phone Number</Typography>
          <PhoneInput
            country={"us"} // Default country
            value={formData.phoneNumber}
            onChange={(phone) => setFormData((prev) => ({ ...prev, phoneNumber: phone }))}
            inputStyle={{
              width: "100%",
              height: 40,
              borderRadius: 4,
              border: "1px solid #ccc",
              paddingLeft: 48, // Adjust to align text properly with the flag
            }}
            buttonStyle={{
              borderRadius: "4px 0px 0px 4px",
              border: "1px solid #ccc",
            }}
          />
        </FormControl>
      </Box>

      {/* Checkbox */}
      <FormControlLabel
  control={<Checkbox name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />}
  label={
    <>
      I Agree with <Button variant="text" size="small">Terms and Conditions</Button>
    </>
  }
/>

      {/* Sign Up Button */}
      <Button
        sx={{ width: "100%", height: 46 }}
        variant="contained"
        disabled={!formData.agreeTerms || Object.values(errors).some((err) => err)}
      >
        Sign Up
      </Button>

      {/* Footer Text */}
      <Typography variant="body2" sx={{ textAlign: "center", color: "rgba(154, 154, 154, 1)", marginTop: 2 }}>
        Already have an account? <Link onClick={() => navigate("/Login")} sx={{ color: "#007BFF", cursor: "pointer" }}>Sign In</Link>
      </Typography>
    </Box>
  );
};

export default Regist;
