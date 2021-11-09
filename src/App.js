import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProfileUpdate from "./pages/ProfileUpdate";

function App() {
  const pageContent = '';

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/update-profile" element={<ProfileUpdate />} />
        </Routes>
        {pageContent}
      </div>
    </Router>
  );
}

export default App;
