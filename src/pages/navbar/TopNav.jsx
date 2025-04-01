
import { useState } from "react";
import {
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  Button
} from "@mui/material";
import GroupsIcon from '@mui/icons-material/Groups';
import {
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setMode} from "../../state";
import FlexBetween from "../../styles/FlexBetween";

const TopNav = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const isNonMobileScreens = useMediaQuery("(min-width: 2000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const alt = theme.palette.background.alt;


  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
      <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
           
          </FlexBetween>
        )}
      </FlexBetween>

      {/* DESKTOP NAV */}
        <FlexBetween gap="2rem">
         
          <Notifications sx={{ fontSize: "25px" }} /> 
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <Help sx={{ fontSize: "25px" }} />
           
        </FlexBetween>
      
        

      {/* LeftNAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="100%"
          left="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            
           <Button><Message sx={{ fontSize: "25px" }} />Home</Button> 
           <Button><GroupsIcon sx={{ fontSize: "25px" }} />Groups</Button> 
           
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default TopNav;
