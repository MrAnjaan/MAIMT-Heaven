// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// const About = () => {
//   return (
//     <div>
//       <Navbar />

//       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-emerald-500 to-emerald-700 text-white p-6">
//       {/* Hero Section */}
//       <div className="text-center max-w-3xl">
//         <h1 className="text-4xl font-extrabold mb-4">About Our Project</h1>
//         <p className="text-lg text-gray-200">
//           We are dedicated to building high-quality applications using modern technologies like React, Vite, Tailwind CSS, and shadcn/ui.
//         </p>
//         <Button variant="outline" className="mt-6 border-white text-white hover:bg-white hover:text-emerald-600 transition">
//           Learn More
//         </Button>
//       </div>

//       {/* Info Cards Section */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl">
//         <Card className="bg-white text-gray-800 shadow-lg rounded-lg p-6">
//           <CardHeader>
//             <CardTitle className="text-xl font-bold">Our Mission</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p>We aim to provide innovative solutions that enhance user experience and efficiency.</p>
//           </CardContent>
//         </Card>

//         <Card className="bg-white text-gray-800 shadow-lg rounded-lg p-6">
//           <CardHeader>
//             <CardTitle className="text-xl font-bold">Our Vision</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p>Creating seamless digital experiences that empower businesses and individuals.</p>
//           </CardContent>
//         </Card>

//         <Card className="bg-white text-gray-800 shadow-lg rounded-lg p-6">
//           <CardHeader>
//             <CardTitle className="text-xl font-bold">Technologies We Use</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p>React, Vite, Tailwind CSS, shadcn/ui, and more cutting-edge tools.</p>
//           </CardContent>
//         </Card>

//         <Card className="bg-white text-gray-800 shadow-lg rounded-lg p-6">
//           <CardHeader>
//             <CardTitle className="text-xl font-bold">Join Us</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p>Be part of our journey to innovate and create impactful solutions.</p>
//           </CardContent>
//         </Card>
//       </div>
//     </div>

//       <Footer />
//       </div>
//   )
// }

// export default About


import React from 'react';
import {
  BookOpen,
  Code,
  Users,
  Rocket,
  ChevronRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-emerald-600" />,
      title: "Our Mission",
      description: "Deliver cutting-edge solutions that transform user experiences through innovation and attention to detail"
    },
    {
      icon: <Rocket className="w-8 h-8 text-emerald-600" />,
      title: "Our Vision",
      description: "Shape the future of digital interaction with intuitive, performance-driven applications"
    },
    {
      icon: <Code className="w-8 h-8 text-emerald-600" />,
      title: "Technologies",
      description: "React, Vite, Tailwind CSS, shadcn/ui - leveraging modern web development's best tools"
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: "Join Us",
      description: "Become part of our passionate team building tomorrow's solutions today"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <motion.div
          className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white pt-24 pb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-emerald-200">Our Project</span>
              </h1>
              <p className="text-xl text-emerald-100 leading-relaxed mb-8">
                We're redefining digital experiences through thoughtful design and
                cutting-edge technology to create solutions that make an impact
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600 transition-all duration-300 px-8 py-6 text-lg"
              >
                Explore Our Work
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="container mx-auto px-6 py-16 -mt-12 z-10 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  className="bg-white shadow-xl rounded-xl hover:shadow-2xl transition-all duration-300 border-0 group"
                >
                  <CardHeader className="pb-0">
                    <div className="flex items-center justify-center w-16 h-16 bg-emerald-50 rounded-full mb-6">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="bg-white py-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we create and build
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="bg-gray-50 p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">User -Centric</h3>
                <p className="text-gray-600">
                  Every decision starts and ends with the user experience and needs
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-50 p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  We constantly push boundaries to discover better solutions
                </p>
              </motion.div>
              <motion.div
                className="bg-gray-50 p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Excellence</h3>
                <p className="text-gray-600">
                  Quality craftsmanship is non-negotiable in everything we create
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
