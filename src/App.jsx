import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Articles from './routes/Articles';
import SingleArticle from "./routes/SingleArticle";

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/articles' element={<Articles />} />
      <Route path="/articles/:articleId" element={<SingleArticle />} />
    </Routes>
    </>
  )
}

export default App
