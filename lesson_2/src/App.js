import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import PostDetail from "./components/PostDetail/PostDetail";
import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<MainPage/>}/>
          <Route path='posts' element={<PostsPage/>}/>
        </Route>
        <Route path="posts/:id" element={<PostDetail/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
  </>
}

export default App;
