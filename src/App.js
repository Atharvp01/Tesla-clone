import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import ModelS from "./components/ModelS";
import Model3 from "./components/Model3";
import ModelX from "./components/ModelX";
import ModelY from "./components/ModelY";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/models" element={<ModelS />}></Route>
        <Route path="/model3" element={<Model3 />}></Route>
        <Route path="/modelx" element={<ModelX />}></Route>
        <Route path="/modely" element={<ModelY />}></Route>
      </Routes>
    </div>
  );
}

export default App;
