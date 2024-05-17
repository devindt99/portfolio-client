import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import AboutPage from "./pages/AboutPage/AboutPage"
import FullStackPage from "./pages/FullStackPage/FullStackPage"
import GameDevPage from "./pages/GameDevPage/GameDevPage"
import Header from "./components/Header/Header"




function App() {


  return (
    
    <div className="app">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/fullstack' element={<FullStackPage/>}/>
          <Route path='/gamedev' element={<GameDevPage/>}/>
        </Routes>

      </BrowserRouter>
      </div>
  )
}

export default App
