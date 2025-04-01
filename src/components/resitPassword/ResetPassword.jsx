import React, { useState } from "react";
import { TextField, FormControl, Button, Typography, Box, Link } from "@mui/material";
import CheckMail from "./CheckMail";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(!validateEmail(e.target.value));
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      setSubmitted(true);
    }
  };

  return (
    <Box sx={{ maxWidth: 350, margin: "auto", padding: 3, textAlign: "center" }}>
     

      {!submitted ? (
        <>
         <Typography variant="h5" fontWeight={600} gutterBottom>
        Reset Password
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
        Enter your email to receive password reset instructions.
      </Typography>
          <FormControl fullWidth>
            <Typography sx={{ fontSize: 14, fontWeight: 500 }}>Email</Typography>
            <TextField
              name="email"
              placeholder="Enter your email"
              type="email"
              fullWidth
              variant="outlined"
              value={email}
              onChange={handleChange}
              error={error}
              helperText={error && "Please enter a valid email address"}
            />
          </FormControl>

          <Button
            variant="contained"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={handleSubmit}
            disabled={error || !email}
          >
            Send Reset Link
          </Button>

          <Typography variant="body2" sx={{ marginTop: 2 }}>
            <Link href="/login" underline="none" color="primary">
              Back to Login
            </Link>
          </Typography>
        </>
      ) : (
        <CheckMail/>
      )}
    </Box>
  );
};

export default ResetPassword;

