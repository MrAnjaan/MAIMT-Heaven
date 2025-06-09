import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Courses = () => {

  // List of courses
  const courses = ["BCA", "BBA", "MCA", "MBA"];

  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-emerald-500 to-emerald-700 text-white p-6">
        {/* Hero Section */}
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl font-extrabold mb-4">Choose Your Course</h1>
        </div>

        {/* Info Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl w-3xl h-100">
          {courses.map((course) => (
            <Link to={`/semester/${course}`} key={course}>
              <Card className="bg-white text-gray-800 shadow-lg rounded-lg p-6 flex justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300">
                <CardTitle className="text-5xl font-bold">{course}</CardTitle>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Courses
