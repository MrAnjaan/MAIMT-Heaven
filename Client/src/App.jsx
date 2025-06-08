import { Button } from "@/components/ui/button"
import LoginPage from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard"
import Contact from "./pages/Contact"
import About from "./pages/About"
import { Navigate, Route, Routes } from "react-router-dom"
import Resources from "./pages/Resources"
import SignupPage from "./pages/SignupPage"
import { useState } from "react"
import RefreshHandler from "./RefreshHandler"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) =>{
    return isAuthenticated ? element : <Navigate to={"/login"} />
  }

  return (
    <div >
      {/* <LoginPage /> */}
      {/* <Dashboard /> */}
      <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
      <Routes>
        <Route path="/" element={<Navigate to={'/login'} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element= {<PrivateRoute element={<Dashboard /> } />}/>
        <Route path="/contact" element= {<PrivateRoute element={<Contact /> } />} />
        <Route path="/about" element= {<PrivateRoute element={<About /> } />} />
        <Route path="/resources" element= {<PrivateRoute element={<Resources /> } />} />
      </Routes>
    </div>
  )
}

export default App