import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button";
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {

    const [student, setStudent] = useState(null);
    useEffect(() => {
    axios.get("http://localhost:4000/dashboard") // Replace with your actual API URL
      .then((response) => setStudent(response.data))
      .catch((error) => console.error("Error fetching student data:", error));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Welcome to MAIMT-Heaven
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
           Your one-stop destination for academic resources and success.
          </p>
        </div>

        <div className="p-6">
      <h2 className="text-2xl font-bold">Student Dashboard</h2>
      {student ? (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Roll Number:</strong> {student.rollNumber}</p>
          <p><strong>Course:</strong> {student.course}</p>
          <p><strong>Email:</strong> {student.email}</p>
        </div>
      ) : (
        <p>Loading student data...</p>
      )}
    </div>
      </main>

      

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Dashboard