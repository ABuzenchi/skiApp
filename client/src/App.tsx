import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core"; // Importă MantineProvider
import Home from "./pages/home/home";
import Resorts from "./pages/resorts/resorts";
import Forum from "./pages/forum/forum";
import { useEffect, useState } from "react";
import Header from "./components/Header/header";
import UserProfile from "./pages/user-profile/user-profile";

const App = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        onSelectMode(e.matches ? "dark" : "light")
      );
    onSelectMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, []);

  const onSelectMode = (mode: any) => {
    setMode(mode);
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <MantineProvider theme={{ colorScheme: mode }}>
      <BrowserRouter>
        <Header mode={mode} onSelectMode={onSelectMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resorts" element={<Resorts />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/user-profile" element={<UserProfile/>}/>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;
