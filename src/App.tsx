//@ts-nocheck
import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./themes";

import UserProvider from "./contexts/userContext";
import { BrowserRouter } from "react-router-dom";
import SectionProvider from "./contexts/sectionContext";
import RoutingContainer from "./screens/RoutingContainer";

function App() {
  return (
    <UserProvider>
      <SectionProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <RoutingContainer />
          </BrowserRouter>
        </ThemeProvider>
      </SectionProvider>
    </UserProvider>
  );
}

export default App;
