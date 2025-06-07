import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white p-6">
      {/* Hero Section */}
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-200">
          Have questions or need assistance? Reach out to us, and we'll be happy to help!
        </p>
      </div>

      {/* Contact Form */}
      <Card className="max-w-3xl w-full bg-white text-gray-800 shadow-lg rounded-lg p-6 mt-8">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-center">Send Us a Message</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" className="w-full" />
            <Input type="email" placeholder="Your Email" className="w-full" />
            <Textarea placeholder="Your Message" className="w-full h-32" />
            <Button variant="default" className="w-full">Submit</Button>
          </form>
        </CardContent>
      </Card>

      {/* Social Media Links */}
      <div className="mt-8 text-center">
        <p className="text-lg font-semibold">Follow us on social media:</p>
        <div className="flex space-x-4 mt-2">
          <a href="#" className="text-white hover:text-gray-300 transition">Facebook</a>
          <a href="#" className="text-white hover:text-gray-300 transition">Twitter</a>
          <a href="#" className="text-white hover:text-gray-300 transition">LinkedIn</a>
        </div>
      </div>
    </div>
      
      <Footer />
      </div>
  )
}

export default Contact