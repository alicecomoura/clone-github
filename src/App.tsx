import { BrowserRouter, Routes, Route } from "react-router-dom";

import "react-calendar-heatmap/dist/styles.css";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Profile } from "./pages/profile/profile";
import { Repository } from "./pages/repository/repository";

import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Repository />} />
      </Routes>

      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
