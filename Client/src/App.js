import * as React from "react";
import "./App.css";
import GlobalStyles from "@mui/material/GlobalStyles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./pages/small-screen-nav";
import { AppContextContainer } from "./app-context";
import Routes from "./pages/applicationRoutes";

function App() {
  return (
    <>
      <AppContextContainer>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />
        <Routes>
          <Header></Header>
        </Routes>
      </AppContextContainer>
    </>
  );
}

export default App;
