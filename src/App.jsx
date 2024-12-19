import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import Articles from './routes/Articles';
import SingleArticle from "./routes/SingleArticle";
import Topics from "./routes/Topics";
import Coding from "./routes/Coding";

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/articles' element={<Articles />} />
      <Route path="/articles/:articleId" element={<SingleArticle />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/topics/coding" element={<Coding />} />
    </Routes>
    </>
  )
}

export default App