import "./index.css"
import { Routes, Route } from 'react-router-dom'
import Signup from './pages/Signup';
import "./assets/Inter.ttf"
import "./assets/IBMPlexMono-ExtraLight.ttf"
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/'element = {<Signup/>} />
          <Route path="/homepage" element = {<HomePage/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
