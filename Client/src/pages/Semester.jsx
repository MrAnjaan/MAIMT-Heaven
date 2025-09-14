// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { Card, CardTitle } from "@/components/ui/card";

// const Semester = () => {
//   const { coursename } = useParams();
//   const navigate = useNavigate();

//   // number of semesters based on course bba,bca ke 6 else 4
//   const semesterCount = (coursename === 'BCA' || coursename === 'BBA') ? 6 : 4;

//   // array of semesters
//   const semesters = Array.from({ length: semesterCount }, (_, i) => `${i + 1}`);

//   // Function to handle card click
//   const handleSemesterClick = (semester) => {
//     navigate(`/resources/${coursename}/${semester}`);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-500 to-purple-700 text-white p-6">
//         <h1 className="text-4xl font-extrabold mb-2">Course: {coursename}</h1>
//         <h1 className="text-4xl font-extrabold mb-10">Choose your Semester</h1>

//         {/* Semester Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
//           {semesters.map((semester, index) => (
//             <Card
//               key={index}
//               onClick={() => handleSemesterClick(semester)}
//               className="bg-white text-gray-800 shadow-lg rounded-lg p-6 flex justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300"
//             >
//               <CardTitle className="text-3xl font-semibold">Semester-{semester}</CardTitle>
//             </Card>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Semester;


// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import { Card, CardTitle } from "@/components/ui/card";
// import { BookOpen, GraduationCap } from 'lucide-react';

// const Semester = () => {
//   const { coursename } = useParams();
//   const navigate = useNavigate();

//   // Number of semesters based on course
//   const semesterCount = (coursename === 'BCA' || coursename === 'BBA') ? 6 : 4;

//   // Course descriptions
//   const courseDescriptions = {
//     'BCA': 'Bachelor of Computer Applications',
//     'BBA': 'Bachelor of Business Administration',
//     'MCA': 'Master of Computer Applications',
//     'MBA': 'Master of Business Administration'
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       <Navbar />

//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="relative bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-20 overflow-hidden">
//           <div className="absolute inset-0 opacity-10">
//             <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[center_top]"></div>
//           </div>
//           <div className="container mx-auto text-center px-4 relative z-10">
//             <div className="flex justify-center mb-4">
//               <GraduationCap className="w-12 h-12" />
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold mb-2">{courseDescriptions[coursename] || coursename}</h1>
//             <h2 className="text-2xl md:text-3xl font-medium mb-6">Choose Your Semester</h2>
//             <p className="text-lg max-w-2xl mx-auto text-emerald-100">
//               Select a semester to access course materials, resources, and study guides
//             </p>
//           </div>
//         </section>

//         {/* Semester Cards Section */}
//         <section className="py-16 container mx-auto px-4">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {Array.from({ length: semesterCount }, (_, i) => {
//               const semester = i + 1;
//               return (
//                 <Card
//                   key={semester}
//                   onClick={() => navigate(`/resources/${coursename}/${semester}`)}
//                   className="bg-white text-gray-800 group hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 hover:border-emerald-200"
//                 >
//                   <div className="p-6 flex flex-col items-center text-center">
//                     <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
//                       <BookOpen className="w-6 h-6" />
//                     </div>
//                     <CardTitle className="text-2xl font-semibold group-hover:text-emerald-600 transition-colors">
//                       Semester {semester}
//                     </CardTitle>
//                     <p className="text-gray-500 mt-1 text-sm">
//                       {semester <= semesterCount / 2 ? `Year ${Math.ceil(semester / 2)}` : `Year ${Math.ceil(semester / 2)}`}
//                     </p>
//                     <div className="mt-3">
//                       <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-600">
//                         View Resources
//                       </span>
//                     </div>
//                   </div>
//                 </Card>
//               );
//             })}
//           </div>
//         </section>

//         {/* Additional Help Section */}
//         <section className="py-12 bg-emerald-50">
//           <div className="container mx-auto px-4 text-center">
//             <h2 className="text-2xl font-semibold text-gray-800 mb-4">Need Help Choosing?</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto mb-6">
//               Contact our academic advisors for guidance on your semester selection
//             </p>
//             <button
//               onClick={() => navigate('/contact')}
//               className="px-6 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
//             >
//               Contact Support
//             </button>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default Semester;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card } from "@/components/ui/card";
import { BookOpen, ChevronRight, Clock, Users, BarChart2, Award, GraduationCap } from 'lucide-react'; // Import GraduationCap here
import { motion } from 'framer-motion';
import { Skeleton } from '@/components/ui/skeleton';

const Semester = () => {
  const { coursename } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  // Number of semesters based on course
  const semesterCount = (coursename === 'BCA' || coursename === 'BBA') ? 6 : 4;

  // Course details with enrollment stats
  const courseDetails = {
    'BCA': {
      fullName: 'Bachelor of Computer Applications',
      stats: {
        activeStudents: '850+',
        passRate: '98%',
        duration: '3 Years'
      }
    },
    'BBA': {
      fullName: 'Bachelor of Business Administration',
      stats: {
        activeStudents: '720+',
        passRate: '96%',
        duration: '3 Years'
      }
    },
    'MCA': {
      fullName: 'Master of Computer Applications',
      stats: {
        activeStudents: '450+',
        passRate: '95%',
        duration: '2 Years'
      }
    },
    'MBA': {
      fullName: 'Master of Business Administration',
      stats: {
        activeStudents: '600+',
        passRate: '97%',
        duration: '2 Years'
      }
    }
  };

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[size:60px] opacity-5"></div>
      </div>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-600 to-teal-500 text-white py-24 px-4">
          <motion.div
            initial={{ opacity: 0.8, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto text-center"
          >
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
              {courseDetails[coursename]?.fullName || coursename}
            </h1>
            <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
              Explore your academic journey semester by semester
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="container mx-auto px-4 mt-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {loading ? (
                <>
                  <Skeleton className="h-24 rounded-xl" />
                  <Skeleton className="h-24 rounded-xl" />
                  <Skeleton className="h-24 rounded-xl" />
                </>
              ) : (
                <>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <Users className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold">{courseDetails[coursename]?.stats.activeStudents}</h3>
                    <p className="text-sm text-emerald-100">Active Students</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <BarChart2 className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold">{courseDetails[coursename]?.stats.passRate}</h3>
                    <p className="text-sm text-emerald-100">Pass Rate</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 col-span-2 md:col-span-1"
                  >
                    <Clock className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="text-2xl font-bold">{courseDetails[coursename]?.stats.duration}</h3>
                    <p className="text-sm text-emerald-100">Program Duration</p>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Semester Cards Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-center mb-12 text-gray-800"
            >
              Select Your Semester
            </motion.h2>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-40 rounded-xl" />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {Array.from({ length: semesterCount }).map((_, i) => {
                  const semester = i + 1;
                  return (
                    <motion.div
                      key={semester}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Card
                        onClick={() => navigate(`/resources/${coursename}/${semester}`)}
                        className="bg-white group relative overflow-hidden border border-gray-200 hover:border-emerald-100 transition-colors shadow-sm hover:shadow-md rounded-xl h-full cursor-pointer"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative p-6 h-full flex flex-col">
                          <div className="w-14 h-14 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">
                            <BookOpen className="w-6 h-6" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-1 group-hover:text-emerald-600 transition-colors">
                            Semester {semester}
                          </h3>
                          <p className="text-sm text-gray-500 mb-4">
                            Year {Math.ceil(semester / 2)} • {semester <= semesterCount / 2 ? 'First Half' : 'Second Half'}
                          </p>
                          <div className="mt-auto flex items-center text-emerald-600 group-hover:text-emerald-700 transition-colors">
                            <span className="font-medium">View Resources</span>
                            <ChevronRight className="w-4 h-4 ml-1" />
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-tr from-gray-50 to-emerald-50">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center bg-emerald-100 rounded-full w-16 h-16 mb-6">
              <Award className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join hundreds of successful alumni who started right where you are now
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm hover:shadow-md flex items-center"
              >
                Contact Academic Advisor
              </button>
              <button
                onClick={() => navigate('/courses')}
                className="px-6 py-3 bg-white text-emerald-600 rounded-lg hover:bg-gray-50 transition-colors border border-emerald-200 shadow-sm hover:shadow-md flex items-center"
              >
                Explore Other Courses
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Semester;
