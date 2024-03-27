import { Home, Favorite, RoomDetail } from './page'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
  <div className='App'>
    <Routes >
    <Route path="/" element={<Home />} />
    <Route path="favorite" element={<Favorite />} />
    <Route path="roomDetail/:id" element={<RoomDetail />} />
    </Routes>
  </div>
</BrowserRouter>
  );
}

export default App;
