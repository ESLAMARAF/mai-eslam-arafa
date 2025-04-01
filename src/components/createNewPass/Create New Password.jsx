import React, { useState } from "react";
import { Box, FormControl, TextField, Typography, Button } from "@mui/material";

const CreateNewPassword = () => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    password: false,
    confirmPassword: false,
  });

  const validatePassword = (password) => password.length >= 6;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password") {
      setErrors((prev) => ({
        ...prev,
        password: !validatePassword(value),
      }));
    }

    if (name === "confirmPassword") {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: value !== formData.password,
      }));
    }
  };

  const handleSubmit = () => {
    if (!errors.password && !errors.confirmPassword && formData.password) {
      console.log("Password successfully updated!");
      // Implement actual password update logic here
    }
  };

  return (
    <Box sx={{ maxWidth: 350, margin: "auto", padding: 3, textAlign: "center" }}>
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Create New Password
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
        Enter a new password below.
      </Typography>

      {/* Password Field */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <Typography sx={{ fontSize: 14, fontWeight: 500 }}>New Password</Typography>
        <TextField
          name="password"
          placeholder="Enter your new password"
          type="password"
          fullWidth
          variant="outlined"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          helperText={errors.password && "Password must be at least 6 characters"}
        />
      </FormControl>

      {/* Confirm Password Field */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <Typography sx={{ fontSize: 14, fontWeight: 500 }}>Confirm Password</Typography>
        <TextField
          name="confirmPassword"
          placeholder="Confirm your new password"
          type="password"
          fullWidth
          variant="outlined"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={errors.confirmPassword}
          helperText={errors.confirmPassword && "Passwords do not match"}
        />
      </FormControl>

      {/* Submit Button */}
      <Button
        variant="contained"
        fullWidth
        sx={{ marginTop: 2 }}
        onClick={handleSubmit}
        disabled={errors.password || errors.confirmPassword || !formData.password}
      >
        Reset Password
      </Button>
    </Box>
  );
};

export default CreateNewPassword;
