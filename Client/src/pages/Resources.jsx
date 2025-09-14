
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const Resources = () => {
//   const { coursename, semester } = useParams();
//   const [resources, setResources] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   // Fetch resources when component mounts
//   useEffect(() => {
//     const fetchResources = async () => {
//       try {
//         console.log(coursename, semester)
//         const response = await axios.post('http://localhost:4000/user/resource', {
//           coursename,
//           semester
//         });
//         setResources(response.data.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch resources.');
//         setLoading(false);
//       }
//     };

//     fetchResources();
//   }, [coursename, semester]);

//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-500 to-indigo-700 text-white p-6">
//         <h1 className="text-4xl font-extrabold mb-4">Course: {coursename}</h1>
//         <h2 className="text-3xl font-bold mb-8">Semester: {semester}</h2>

//         {loading ? (
//           <p className="text-lg">Loading resources...</p>
//         ) : error ? (
//           <p className="text-lg text-red-500">{error}</p>
//         ) : (
//           <div className="overflow-x-auto w-full max-w-5xl">
//             <table className="min-w-full bg-white text-gray-800 rounded-lg overflow-hidden">
//               <thead>
//                 <tr className="bg-gray-200 text-gray-700">
//                   <th className="py-3 px-4 text-left">Subject</th>
//                   <th className="py-3 px-4 text-left">Syllabus</th>
//                   <th className="py-3 px-4 text-left">Books</th>
//                   <th className="py-3 px-4 text-left">PYQ</th>
//                   <th className="py-3 px-4 text-left">Handwritten Notes</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {resources.map((item, index) => (
//                   <tr key={index} className="border-t hover:bg-gray-100">
//                     <td className="py-3 px-4">{item.subject}</td>
//                     <td className="py-3 px-4">
//                       <a href={item.syllabus.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                         View PDF
//                       </a>
//                     </td>
//                     <td className="py-3 px-4">
//                       <a href={item.books.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                         View PDF
//                       </a>
//                     </td>
//                     <td className="py-3 px-4">
//                       <a href={item.previousPapers} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                         View PDF
//                       </a>
//                     </td>
//                     <td className="py-3 px-4">
//                       <a href={item.otherNotes} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                         View PDF
//                       </a>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Resources;



import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Notebook, FileSearch, Download } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Resources = () => {
  const { coursename, semester } = useParams();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.post('http://localhost:4000/user/resource', {
          coursename,
          semester
        });
        setResources(response.data.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch resources. Please try again later.');
        setLoading(false);
      }
    };

    fetchResources();
  }, [coursename, semester]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{coursename}</h1>
              <h2 className="text-2xl md:text-3xl font-medium mb-4">Semester {semester} Resources</h2>
              <p className="text-lg text-emerald-100 max-w-2xl mx-auto">
                Access all your study materials in one place
              </p>
            </motion.div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-12 container mx-auto px-4">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="h-40">
                  <CardContent className="p-6">
                    <div className="animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center text-red-500">{error}</CardTitle>
              </CardHeader>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">{resource.subject}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5 text-emerald-600" />
                          <a
                            href={resource.syllabus.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-600 hover:underline flex items-center gap-1"
                          >
                            Syllabus <Download className="w-4 h-4" />
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <BookOpen className="w-5 h-5 text-emerald-600" />
                          <a
                            href={resource.books.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-600 hover:underline flex items-center gap-1"
                          >
                            Books <Download className="w-4 h-4" />
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <FileSearch className="w-5 h-5 text-emerald-600" />
                          <a
                            href={resource.previousPapers}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-600 hover:underline flex items-center gap-1"
                          >
                            Previous Papers <Download className="w-4 h-4" />
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <Notebook className="w-5 h-5 text-emerald-600" />
                          <a
                            href={resource.otherNotes}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-600 hover:underline flex items-center gap-1"
                          >
                            Notes <Download className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-emerald-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Need help finding resources?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Contact our academic support team for assistance
            </p>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              Contact Support
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Resources;
