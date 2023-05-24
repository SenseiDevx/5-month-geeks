import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import {NavBar} from "./Components/NavBar/NavBar";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return <>
    <BrowserRouter>
      <NavBar>
      </NavBar>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="about" element={<AboutPage/>}/>
        <Route path="contacts" element={<ContactsPage/>}/>
        <Route path="portfolio" element={<PortfolioPage/>}/>
        <Route path="login" element={<LoginPage/>}/>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
