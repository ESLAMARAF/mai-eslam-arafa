import React, { useState } from "react";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Regist = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);

  const validatePhoneNumber = (number) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(number);
  };

  const handleChange = (event) => {
    const input = event.target.value;
    setPhoneNumber(input);
    setValid(validatePhoneNumber(input)); 
  };

  return (
    <Box sx={{ maxWidth: 350, margin: "auto", padding: 3, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Become An Affiliate
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Please provide us with your basic details and begin enjoying your privileges
      </Typography>
<Box sx={{width:350 ,height:378, display: 'grid',gap:2,top:216,left:15 }}>
<Typography variant="h4" sx={{ fontSize:14 ,fontWeight:500 ,fontFamily:'DM-Sans',display:'flex', color: "#2E2E2E"}} gutterBottom>
Username
      </Typography>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <Input placeholder="Username" fullWidth />
      </FormControl>

      <FormControl fullWidth sx={{ marginBottom: 2 ,display:'grid',gap:2}}>
      <Typography variant="h4" sx={{ fontSize:14 ,fontWeight:500 ,fontFamily:'DM-Sans',display:'flex', color: "#2E2E2E"}} >
      E-mail
      </Typography>
        <Input placeholder="E-mail" type="email" fullWidth />
      </FormControl>

      <FormControl fullWidth sx={{ marginBottom: 2 ,display:'grid',gap:2}}>
      <Typography variant="h4" sx={{ fontSize:14 ,fontWeight:500 ,fontFamily:'DM-Sans',display:'flex', color: "#2E2E2E"}} gutterBottom>
      password
      </Typography>
        <Input placeholder="password" type="password" fullWidth />
      </FormControl>

      <FormControl fullWidth sx={{ marginBottom: 2 ,display:'grid',gap:2 }}>
      <Typography variant="h4"sx={{ fontSize:14 ,fontWeight:500 ,fontFamily:'DM-Sans',display:'flex', color: "#2E2E2E"}} gutterBottom>
        Become An Affiliate
      </Typography>
        <Input sx={{ fontSize:14 ,fontWeight:500 ,fontFamily:'DM-Sans',display:'flex'}}
          placeholder="Phone Number"
          type="text"
          value={phoneNumber}
          onChange={handleChange}
          fullWidth
        />
        {!valid && (
          <Typography color="error" sx={{ fontSize: "0.875rem", marginTop: 1 }}>
            Please enter a valid 10-digit phone number
          </Typography>
        )}
      </FormControl>
      </Box>
      <Button variant="contained" fullWidth>
        Sign Up
      </Button>
    </Box>
  );
};

export default Regist;
