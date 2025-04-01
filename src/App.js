import Login from "./components/login/Login";
import Regist from "./components/register/regist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import ResetPassword from "./components/resitPassword/ResetPassword";
import CreateNewPassword from "./components/createNewPass/CreateNewPassword";
import ResetSuccessful from "./components/createNewPass/ResetSuccessful";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Regist />} />
          <Route path="/CreateNewPassword" element={<CreateNewPassword />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/ResetSuccessful" element={<ResetSuccessful />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
