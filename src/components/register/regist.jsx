import React, { useState } from "react";
import { TextField, FormControl, Button, Typography, Box } from "@mui/material";

const Regist = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const validatePhoneNumber = (number) => /^\d{10}$/.test(number);

  const handleChange = (event) => {
    const input = event.target.value;
    setPhoneNumber(input);
    setValid(validatePhoneNumber(input));
  };

  return (
    <Box sx={{ maxWidth: 350, margin: "auto", padding: 3, display: "grid", gap: 2 , justifyContent:"center" }}>
      <Typography variant="h4" gutterBottom>
        Become An Affiliate
      </Typography>
      <Typography variant="body1" sx={{  marginBottom: 2, fontWeight: 400, fontSize: 14 }}>
        Please provide us with your basic details and begin enjoying your privileges.
      </Typography>
       
       <Box sx={{display: "grid" , gap:1 , height:378}}>
      <FormControl fullWidth>
        <Typography sx={{ fontSize: 14, fontWeight: 500, fontFamily: "DM Sans", color: "#2E2E2E", }}>
          Username
        </Typography>
        <TextField sx={{width:357 , height:46}} placeholder="Enter your username" type="text" fullWidth variant="outlined" />
      </FormControl>

      <FormControl fullWidth>
        <Typography sx={{ fontSize: 14, fontWeight: 500, fontFamily: "DM Sans", color: "#2E2E2E" }}>
          Email
        </Typography>
        <TextField sx={{width:357 , height:46}} placeholder="Enter your email" type="email" fullWidth variant="outlined" />
      </FormControl>

      <FormControl fullWidth>
        <Typography sx={{ fontSize: 14, fontWeight: 500, fontFamily: "DM Sans", color: "#2E2E2E" }}>
          Password
        </Typography>
        <TextField sx={{width:357 , height:46}} placeholder="Enter your password" type="password" fullWidth variant="outlined" />
      </FormControl>

      <FormControl fullWidth>
        <Typography sx={{ fontSize: 14, fontWeight: 500, fontFamily: "DM Sans", color: "#2E2E2E" }}>
          Phone Number
        </Typography>
        <TextField sx={{width:357 , height:46}}
          placeholder="Enter your phone number"
          type="tel"
          value={phoneNumber}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          inputProps={{ maxLength: 10 }}
        />
        
        {!valid && (
          <Typography color="error" sx={{ fontSize: "0.875rem", marginTop: 1 }}>
            Please enter a valid 10-digit phone number.
          </Typography>
        )}
      </FormControl>
      </Box>
      <Button sx={{width:357 , height:46}} variant="contained" fullWidth disabled={!valid}>
        Sign Up
      </Button>
    </Box>
  );
};

export default Regist;
