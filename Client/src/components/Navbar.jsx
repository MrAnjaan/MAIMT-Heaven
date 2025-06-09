
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = (e) => {
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    handleSuccess("User logged out successfully");
    setTimeout(() => {
      navigate('/login');
    }, 1000)
  }

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-emerald-600 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">MyLogo</div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <Link to="/dashboard" className="text-white hover:text-gray-300 transition">
          Dashboard
        </Link>
        <Link to="/courses" className="text-white hover:text-gray-300 transition">
          Resources
        </Link>
        <Link to="/about" className="text-white hover:text-gray-300 transition">
          About
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-300 transition">
          Contact
        </Link>
      </nav>

      {/* Logout Button */}
      <Button onClick={handleLogout} variant="outline" className="absolute right-4 top-4 border-white hover:bg-red-500 hover:text-white transition hidden md:block">
        Logout
      </Button>

      {/* Mobile Menu */}
      <div className="md:hidden ml-auto">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="flex flex-col space-y-4">
              <div className="text-2xl font-bold text-black">MyLogo</div>
              <Link to="/dashboard" className="text-gray-800 hover:text-gray-900 font-bold" onClick={() => setOpen(false)}>
                Dashboard
              </Link>
              <Link to="/resources" className="text-gray-800 hover:text-gray-900 font-bold" onClick={() => setOpen(false)}>
                Resources
              </Link>
              <Link to="/about" className="text-gray-800 hover:text-gray-900 font-bold" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="text-gray-800 hover:text-gray-900 font-bold" onClick={() => setOpen(false)}>
                Contact
              </Link>
              <Button variant="outline" className="border-gray-800 hover:bg-red-500 hover:text-white transition" onClick={handleLogout}>
                Logout
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <ToastContainer />
    </header>
  );
}
