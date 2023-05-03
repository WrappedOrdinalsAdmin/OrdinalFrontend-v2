// import Header from "./components/header";
// import Footer from "./components/footer";
// import Main from "./components/main";
// import Explore from "./components/explore";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// function App() {
//   return (
//     <Router>
//       <div className="wrapper">
//         <Header />
//         <Main />
//         <Footer />  
//       </div>      
//       <Routes>
// 					<Route path='/explore' exact component={Explore} />
// 				</Routes>
//     </Router>
//   );
// }

// export default App;


import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home";
import Explore from "./components/explore";
import Market from "./components/market";
import Collections from "./components/collections";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/market" element={<Market />}>
          <Route index element={<Market />} />
          <Route path="market" element={<Market />} />
        </Route>
        <Route path="/explore" element={<Explore />}>
          <Route index element={<Explore />} />
          <Route path="explore" element={<Explore />} />
        </Route>
        <Route path="/exhibition" element={<Collections />}>
          <Route index element={<Collections />} />
          <Route path="exhibition" element={<Collections />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

