import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/header/header'
import { Profile } from './pages/profile/profile'
import { Repository } from './pages/repository/repository'

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Profile />}/>
        <Route path="/:username" element={<Profile />}/>
        <Route path="/:username/:reponame" element={<Repository />}/>
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
