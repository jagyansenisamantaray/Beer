import { BrowserRouter ,Route,Routes, Navigate} from "react-router-dom";
import "./App.css"
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import NotFound from "./components/NotFound";


function App() {
  return (
    <>
       <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/cart" exact Component={Cart} />
            <Route path="/not-found" Component={NotFound} />
            <Route  path="/"  exact Component={Home} />
            <Route element={<Navigate to="/not-found" />}/>
            
            
          </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
