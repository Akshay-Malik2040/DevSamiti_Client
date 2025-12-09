import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Body from "./components/Body";
import Login from "./components/Login";
import { BrowserRouter, Outlet, Routes, Route } from "react-router";
import { Provider } from 'react-redux'
import appStore from "./store/appStore";

function App() {
  return (
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
  )
}

export default App
