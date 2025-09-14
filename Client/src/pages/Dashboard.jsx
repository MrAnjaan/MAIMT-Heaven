

import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarDays, BookOpen, GraduationCap } from 'lucide-react';
import { announcements as Announcements } from '../assets/Announcement';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUserData = () => {
    try {
      const userData = localStorage.getItem('loggedInUser ');
      console.log("Fetched user data from localStorage:", userData); // Log the raw data
      if (userData) {
        const user = JSON.parse(userData);
        console.log("Parsed user data:", user); // Log the parsed user object
        setLoggedInUser(user);
      } else {
        console.warn("No user data found in localStorage.");
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(fetchUserData, 800);
    return () => clearTimeout(timer);
  }, []);

  const announcements = Announcements;

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow">
        <motion.div
          className="container mx-auto px-6 py-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-transparent bg-clip-text">
            Welcome to MAIMT-Heaven
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
            Your one-stop destination for academic resources and success.
          </p>

          <Button asChild variant="default" size="lg" className="mt-4">
            <Link to="/courses">Explore Courses</Link>
          </Button>
        </motion.div>

        {/* Dashboard Content */}
        <div className="container mx-auto px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Student Profile Card */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Student Profile</CardTitle>
                  <CardDescription>Your personal information</CardDescription>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="space-y-4">
                      <Skeleton className="h-10 w-full" />
                      <Skeleton className="h-8 w-3/4" />
                      <Skeleton className="h-8 w-2/3" />
                    </div>
                  ) : loggedInUser ? (
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <Avatar className="h-20 w-20">
                        <AvatarFallback className="bg-emerald-100 text-emerald-600">
                          {loggedInUser.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <p className="text-lg font-semibold">{loggedInUser.name}</p>
                          <p className="text-sm text-gray-500">{loggedInUser.email}</p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="font-medium">Student ID</p>
                            <p>{loggedInUser.student_id}</p>
                          </div>
                          <div>
                            <p className="font-medium">Course</p>
                            <p>{loggedInUser.courseName || "N/A"}</p>
                          </div>
                          <div>
                            <p className="font-medium">Institute</p>
                            <p>MAIMT</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p>No user data available. Please login.</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Quick Actions</CardTitle>
                  <CardDescription>Access key features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full" asChild>
                      <Link to="/courses" className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        View Courses
                      </Link>
                    </Button>
                    <Button
                      className="w-full"
                      variant="outline"
                      onClick={() => {
                        if (loggedInUser?.courseName) {
                          navigate(`/semester/${loggedInUser.courseName}`);
                        } else {
                          navigate('/semester');
                        }
                      }}
                    >
                      <GraduationCap className="w-4 h-4" />
                      Semester Resources
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Announcements Card */}
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Announcements</CardTitle>
                  <CardDescription>Latest updates from university</CardDescription>
                </CardHeader>
                <CardContent>
                  {loading ? (
                    <div className="space-y-4">
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-6 w-5/6" />
                      <Skeleton className="h-6 w-4/5" />
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {announcements.map((announcement, index) => (
                        <div key={index} className="p-3 border rounded-lg hover:bg-gray-50 transition">
                          <div className="flex items-center gap-3">
                            <CalendarDays className="w-4 h-4 text-emerald-600" />
                            <p>{announcement}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
