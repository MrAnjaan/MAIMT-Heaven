// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Link } from 'react-router-dom';

// const Courses = () => {

//   // List of courses
//   const courses = ["BCA", "BBA", "MCA", "MBA"];

//   return (
//     <div>
//       <Navbar />

//       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-emerald-500 to-emerald-700 text-white p-6">
//         {/* Hero Section */}
//         <div className="text-center max-w-3xl">
//           <h1 className="text-4xl font-extrabold mb-4">Choose Your Course</h1>
//         </div>

//         {/* Info Cards Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl w-3xl h-100">
//           {courses.map((course) => (
//             <Link to={`/semester/${course}`} key={course}>
//               <Card className="bg-white text-gray-800 shadow-lg rounded-lg p-6 flex justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300">
//                 <CardTitle className="text-5xl font-bold">{course}</CardTitle>
//               </Card>
//             </Link>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </div>
//   )
// }

// export default Courses


// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Link } from 'react-router-dom';

// const Courses = () => {
//   // List of courses
//   const courses = ["BCA", "BBA", "MCA", "MBA"];

//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       <Navbar />

//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="bg-gradient-to-r from-emerald-500 to-emerald-700 text-white py-16">
//           <div className="container mx-auto text-center px-4">
//             <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Choose Your Course</h1>
//             <p className="text-lg max-w-2xl mx-auto">
//               Explore our diverse range of courses and find the perfect fit for your future.
//             </p>
//           </div>
//         </section>

//         {/* Info Cards Section */}
//         <section className="py-12 container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {courses.map((course) => (
//               <Link to={`/semester/${course}`} key={course}>
//                 <Card className="bg-white text-gray-800 shadow-lg rounded-lg p-6 flex justify-center items-center cursor-pointer hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
//                   <CardTitle className="text-5xl font-bold">{course}</CardTitle>
//                 </Card>
//               </Link>
//             ))}
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default Courses;



import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Clock, Users } from 'lucide-react';

const Courses = () => {
  // Course data with additional details
  const courses = [
    {
      code: "BCA",
      name: "Bachelor of Computer Applications",
      duration: "3 Years",
      students: "240+ Enrolled"
    },
    {
      code: "BBA",
      name: "Bachelor of Business Administration",
      duration: "3 Years",
      students: "90+ Enrolled"
    },
    {
      code: "MCA",
      name: "Master of Computer Applications",
      duration: "2 Years",
      students: "80+ Enrolled"
    },
    {
      code: "MBA",
      name: "Master of Business Administration",
      duration: "2 Years",
      students: "110+ Enrolled"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-600 to-teal-500 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[center_top]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Shape Your Future With Our Courses
              </h1>
              <p className="text-xl text-emerald-100 mb-8">
                Discover programs designed to launch your career to new heights
              </p>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-600"
              >
                <a href="#courses">
                  Explore Courses
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Academic Programs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive curriculum, expert faculty, and industry-aligned learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Link to={`/semester/${course.code}`} key={course.code}>
                <Card className="h-full bg-white shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group">
                  <CardHeader className="pb-0">
                    <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-emerald-50 mb-4 text-emerald-600">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-2xl font-bold group-hover:text-emerald-600 transition-colors">
                      {course.code}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {course.name}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{course.students}</span>
                      </div>
                    </div>
                    <Button
                      variant="link"
                      className="mt-4 px-0 text-emerald-600 hover:no-underline group-hover:underline"
                    >
                      View Details →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-emerald-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join hundreds of students who have transformed their careers with our programs
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link to="/contact">
                  Contact Admissions
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/about">
                  About Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Courses;
