import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Mobility from './pages/Mobility';
import Freetown from './pages/Freetown';
import VR from './pages/VR';
import WanderIndy from './pages/WanderIndy';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-study/mobility" element={<Mobility />} />
      <Route path="/case-study/freetown" element={<Freetown />} />
      <Route path="/case-study/vr" element={<VR />} />
      <Route path="/case-study/wander-indy" element={<WanderIndy />} />
    </Routes>
  );
}
