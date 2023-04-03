import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Page/Home";

function App() {
  return (
    <div className="min-h-[100vh] bg-black text-white">
      <Router>
        <Header/>
        <Routes>
          <Route index element = {<Home />}/>
          <Route path="movie/:id" element = {<h1>movie detail page</h1>}/>
          <Route path="movies/:type" element = {<h1>movie list page</h1>}/>
          <Route path="/*" element = {<h1>error page</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
