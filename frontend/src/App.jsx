// import { HashRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
// import Register from "./Register";
// import Login from "./Login";

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/" element={<Navigate to="/login" />} />
//           <Route path="*" element={<h2 style={{ textAlign: "center" }}>404: Page Not Found</h2>} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import logo from "./assets/Title-logo.png";

const link = document.createElement("link");
link.rel = "icon";
link.href = logo;
document.head.appendChild(link);


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h2 style={{ textAlign: "center" }}>404: Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;

