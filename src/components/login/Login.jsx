import React from "react";
import { TextField, FormControl, Button, Typography, Box } from "@mui/material";

const Login = () => {
  return (
    <Box sx={{ maxWidth: 350, margin: "auto", padding: 3, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Become An Affiliate
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Please provide us with your basic details and begin enjoying your privileges.
      </Typography>

      <Box sx={{ display: "grid", gap: 2 }}>
        <FormControl fullWidth>
          <Typography sx={{ fontSize: 14, fontWeight: 500, fontFamily: "DM Sans", color: "#2E2E2E" }}>
            E-mail
          </Typography>
          <TextField placeholder="Enter your email" type="email" fullWidth variant="outlined" />
        </FormControl>

        <FormControl fullWidth>
          <Typography sx={{ fontSize: 14, fontWeight: 500, fontFamily: "DM Sans", color: "#2E2E2E" }}>
            Password
          </Typography>
          <TextField placeholder="Enter your password" type="password" fullWidth variant="outlined" />
        </FormControl>
      </Box>

      <Button variant="contained" fullWidth sx={{ marginTop: 2 }}>
        Sign Up as Affiliate
      </Button>
    </Box>
  );
};

export default Login;
