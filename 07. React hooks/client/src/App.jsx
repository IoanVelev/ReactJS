import { Routes, Route } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import NavBar from "./components/NavBar";
import Article from "./components/Article";


function App() {
  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:articleId/details" element={<Article />} />
      </Routes>
      
    </>
  );
}

export default App;
