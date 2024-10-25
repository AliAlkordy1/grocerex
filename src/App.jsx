import Navbar from './components/navbar.jsx';
import Home from './components/Home.jsx';
import SearchPage from './pages/SearchPage.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {


  return (
    <> 

      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/> }/>
        <Route path="/search" element={<SearchPage/> }/>

      </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
