import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";
import style from './App.module.css'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <nav className={`navbar navbar-expand-lg ${style.nav}`} >
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className={`nav-link ${style.a}`} to="/">Catálogo</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${style.a}`} to="/dados">Novo</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<LivroLista />} />
          <Route path="/dados" element={<LivroDados />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
