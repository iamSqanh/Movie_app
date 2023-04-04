import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Page/Home";
import MovieList from "./Components/MovieList/MovieList";
import MovieDetail from "./Page/MovieDetail";

function App() {
  return (
    <div className="min-h-[100vh] bg-black text-white">
      <Router>
        <Header/>
        <Routes>
          <Route index element = {<Home />}/>
          <Route path="movie/:id" element = {<MovieDetail />}/>
          <Route path="movies/:type" element = {<MovieList />}/>
          <Route path="/*" element = {<h1>error page</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
