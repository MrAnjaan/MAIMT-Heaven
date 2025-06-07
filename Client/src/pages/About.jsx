import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-emerald-500 to-emerald-700 text-white p-6">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-4">About Our Project</h1>
        <p className="text-lg text-gray-200">
          We are dedicated to building high-quality applications using modern technologies like React, Vite, Tailwind CSS, and shadcn/ui.
        </p>
        <Button variant="outline" className="mt-6 border-white text-white hover:bg-white hover:text-emerald-600 transition">
          Learn More
        </Button>
      </div>

      {/* Info Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl">
        <Card className="bg-white text-gray-800 shadow-lg rounded-lg p-6">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>We aim to provide innovative solutions that enhance user experience and efficiency.</p>
          </CardContent>
        </Card>

        <Card className="bg-white text-gray-800 shadow-lg rounded-lg p-6">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Creating seamless digital experiences that empower businesses and individuals.</p>
          </CardContent>
        </Card>

        <Card className="bg-white text-gray-800 shadow-lg rounded-lg p-6">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Technologies We Use</CardTitle>
          </CardHeader>
          <CardContent>
            <p>React, Vite, Tailwind CSS, shadcn/ui, and more cutting-edge tools.</p>
          </CardContent>
        </Card>

        <Card className="bg-white text-gray-800 shadow-lg rounded-lg p-6">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Join Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Be part of our journey to innovate and create impactful solutions.</p>
          </CardContent>
        </Card>
      </div>
    </div>
      
      <Footer />
      </div>
  )
}

export default About