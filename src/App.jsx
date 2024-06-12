import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home.jsx";
import { About } from "./Pages/About/About.jsx";
import { Newarticle } from "./Pages/New Article/Newarticle.jsx";
import { Articlepage } from "./Pages/Articlepage/Articlepage.jsx";
import { NotFound } from "./Pages/NotFound/NotFound.jsx";
import dataArticles from "../src/Pages/db.json";
import { createContext, useState } from "react";
export const Appcontext = createContext(null);

function App() {
  const [articles, setArticle] = useState(dataArticles);
  return (
    <Appcontext.Provider value={{ articles, setArticle }}>
      <div>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/newarticle" element={<Newarticle />} />
          <Route path="/about" element={<About />} />
          <Route path="/article/:id" element={<Articlepage />} />
        </Routes>
      </div>
    </Appcontext.Provider>
  );
}

export default App;
