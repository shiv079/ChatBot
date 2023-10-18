import Header from './Components/Header';
import { Routes, Route } from "react-router-dom" ;
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';
import './index.css';


function App() {
  return (
    <main> 
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="*" element={<NotFound />} />
      </Routes>
      Hello World
     
    </main>
  )
}
 
export default App
