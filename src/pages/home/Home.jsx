import { Box, Link } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (<Box>
         {/* Sign Up Button */}
         <Link onClick={() => navigate("/register")} sx={{ color: "#007BFF", cursor: "pointer" }}>
          Sign Up
        </Link>
    </Box>
      
    );
}

export default Home;
