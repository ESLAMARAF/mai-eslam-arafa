import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

const CheckMail = () => {
  return (
    <Box sx={{ maxWidth: 350, margin: "auto", padding: 3, textAlign: "center" }}>
      <MarkEmailReadIcon sx={{ fontSize: 60, color: "primary.main", marginBottom: 2 }} />

      <Typography variant="h5" fontWeight={600} gutterBottom>
      Check your mail      </Typography>
      <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
      We have sent you a reset password link to yor registered email address      </Typography>

      <Button variant="contained" fullWidth sx={{ marginTop: 2 }} component={Link} to="/login">
      Check email app      </Button>
    </Box>
  );
};

export default CheckMail;
