import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import Favourite from "./Components/Favourite";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Merge from "./Components/Merge";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
// <Route
//   path="/"
//   render={(props) => (
//     <>
//       <Banner {...props} />
//       <Movies {...props} />
//     </>
//   )}
// />

//         <Route path="/favourites" element={<Favourite />} />
//       </Routes>
//       {/* <Banner /> */}
//       {/* <Movies /> */}
//       {/* <Favourite /> */}
//     </Router>
//   );
// }

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          exact
          // element={<Movies />}
          element={<Merge />}
        />
        <Route path="/favourites" element={<Favourite />} />
      </Routes>
    </Router>
  );
}

export default App;
