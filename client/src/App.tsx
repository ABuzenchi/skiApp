import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core"; // Importă MantineProvider
import Home from "./pages/home/home";
import Resorts from "./pages/resorts/resorts";
import Forum from "./pages/forum/forum";
import Header from "./components/Header/header";
import { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { Button } from "@mantine/core";
import { IoMoon } from "react-icons/io5";

const App = () => {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    // Adaugă un listener pentru a actualiza stilurile
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => onSelectMode(e.matches ? 'dark' : 'light'));

    // Setează modul implicit (dark/light)
    onSelectMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    // Curăță listener-ul când componenta este demontată
    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', () => {});
    };
  }, []);

  const onSelectMode = (mode: any) => {
    setMode(mode);
    if (mode === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    // Învelește întreaga aplicație cu MantineProvider
    <MantineProvider theme={{ colorScheme:mode}}>
      <div className="App">
          <div>
            {
              mode === 'dark' ? (
                <Button onClick={() => onSelectMode('light')}><IoSunny /> Light Mode</Button>
              ) : (
                <Button onClick={() => onSelectMode('dark')}><IoMoon /> Dark Mode</Button>
              )
            }
          </div>
      </div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resorts" element={<Resorts />} />
          <Route path="/forum" element={<Forum />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider> // Închiderea MantineProvider
  );
}

export default App;
