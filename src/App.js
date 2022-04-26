import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./Components/Images/logo1.png";
import HomePage from "./Components/HomePage/HomePage.js";
import Questions from "./Components/Questions/Questions.js";
import LoginPage from "./Components/LoginPage/LoginPage";
import SignupPage from "./Components/SignupPage/SignupPage";

function App() {
  return (
    <>
      <Router>
      
        <nav className="app navbar  navbar-expand-lg navbar-light bg-light px-5 fixed-top">
          <div class="container-fluid">
            <span className="navbar-toggler-icon mx-2 ml-5"></span>

            <Link to="/" className="navbar-brand">
              <img src={logo} alt="logo" style={{ width: "160px" }} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item   ">
                  <Link to="/about" className="nav-link disabled">
                    About
                  </Link>
                </li>
                <li lassName="nav-item mr-4">
                  <Link to="/product" className="nav-link disabled">
                    Products
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/team" className="nav-link disabled">
                    For Team
                  </Link>
                </li>
                <li className="nav-item mr-4 active">
                  <Link to="/questions" className="nav-link">
                    Questions
                  </Link>
                </li>
                <li className="nav-item mr-4">
                  <Link to="/company" className="nav-link disabled">
                    Company
                  </Link>
                </li>
              </ul>
              <form className="d-flex mx-auto my-lg-0 ">
                <span className="fas fa-search search"></span>
                <input
                  type="text"
                  className="form-control pr-5 pl-4 searchInput"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Search..."
                  style={{ width: "350px" }}
                />
              </form>
              <div className="d-flex justify-content-end  ">
                <Link to="/login" className="nav-link">
                  <button
                    className="btn btn-outline-primary my-sm-0 btn-sm px-3 ml-0"
                    type="submit"
                    style={{ backgroundColor: "#e3f2fd", color: "gray" }}
                  >
                    Log in
                  </button>
                </Link>

                <Link to="/signup" className="nav-link">
                  <button
                    className="btn btn-primary my-sm-0 btn-sm px-3"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </nav>


        <Routes>
        <Route path="login" element={ <LoginPage /> } />
          <Route index element={<HomePage />} />
          <Route path="questions" element={<Questions />} />
          <Route path="signup" element={<SignupPage />} />
         
          {/* <Route path="about" element={<About />} />
          <Route path="" element={<Products />} />
          <Route path="team" element={<Team />} />
          <Route path="questions" element={<Questions />} />
          <Route path="jobs" element={<Jobs />} />
          
         
          <Route path="footer" element={<Footer />}>
          <Route path=":questions" element={<Footer />} /> */}
          {/* </Route>
          <Route path="" element={<p>Please select something</p>} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
