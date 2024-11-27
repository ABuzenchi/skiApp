import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Home from "./pages/home/home";
import Resorts from "./pages/resorts/resorts";
import Forum from "./pages/forum/forum";
import UserProfile from "./pages/user-profile/user-profile";
import Header from "./components/Header/header";
import useTheme from "./hooks/useTheme";

const App = () => {
  const { mode, onSelectMode } = useTheme();

  return (
    <MantineProvider theme={{ colorScheme: mode }}>
      <BrowserRouter>
        <Header mode={mode} onSelectMode={onSelectMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resorts" element={<Resorts />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;