import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Body from "./components/Body";
import Login from "./components/Login";
import { BrowserRouter,Outlet,Routes,Route} from "react-router";

function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
