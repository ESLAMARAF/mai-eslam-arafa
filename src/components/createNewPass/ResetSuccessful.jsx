import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"; // Success Icon
import { useNavigate } from "react-router-dom";

const ResetSuccessful = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        maxWidth: 350,
        margin: "auto",
        padding: 3,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Success Icon */}
      <CheckCircleOutlineIcon sx={{ fontSize: 60, color: "green", marginBottom: 2 }} />

      <Typography variant="h5" fontWeight={600} gutterBottom>
        Password Reset Successful
      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
        Your password has been successfully reset. You can now log in with your new password.
      </Typography>

      <Button
        variant="contained"
        fullWidth
        sx={{ marginTop: 2 }}
        onClick={() => navigate("/login")}
      >
        Go to Login
      </Button>
    </Box>
  );
};

export default ResetSuccessful;
