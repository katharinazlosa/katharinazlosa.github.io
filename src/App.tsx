import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Body from "./components/Body";
import "./styles/style.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/Algebra-seminarski-rad/" element={<Main />} />
          <Route path="/body" element={<Body />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
