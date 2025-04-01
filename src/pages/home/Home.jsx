import { Box, Link } from '@mui/material';
import React from 'react';
import { useNavigate } from "react-router-dom";
import TopNav from '../navbar/TopNav';

const Home = () => {
    const navigate = useNavigate();

    return (<Box>
      <TopNav />
         {/* Sign Up Button */}
         <Link onClick={() => navigate("/register")} sx={{ color: "#007BFF", cursor: "pointer" }}>
          Sign Up
        </Link>
    </Box>
      
    );
}

export default Home;
