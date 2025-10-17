//componentes do projeto
import Header from "./componentes/Header.jsx";
//Pacotes externos
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//páginas do projeto
import Home from "./pages/Home.jsx";
import Artist from "./pages/Artist.jsx";
import Songs from "./pages/Songs.jsx";
import Song from "./pages/Song.jsx";
import Artists from "./pages/Artists.jsx";

function App() {
 

  return (
      <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Artist/:id" element={<Artist/>}></Route>
      <Route path="/Artists" element={<Artists />}></Route>
      <Route path="/Artists/artist/:id" element={<Artist />} />
      <Route path="/Song/:id" element={<Song />}></Route>
      <Route path="/Songs" element={<Songs />}></Route>
      <Route path="/Songs/Song/:id" element={<Song />} />

      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
