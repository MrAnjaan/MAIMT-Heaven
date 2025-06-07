import { Button } from "@/components/ui/button"
import LoginPage from "./pages/LoginPage"
import Dashboard from "./pages/Dashboard"
import Contact from "./pages/Contact"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom"
import Resources from "./pages/Resources"

function App() {
  return (
    <div >
      {/* <LoginPage /> */}
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  )
}

export default App