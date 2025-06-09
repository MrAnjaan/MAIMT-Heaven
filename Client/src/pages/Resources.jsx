// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const Resources = () => {
//   const { courseName, semester } = useParams();

//   return (
//     <div>
//       <Navbar />
//       {/* bg-gradient-to-b from-indigo-500 to-indigo-700 text-white p-6 */}
//       <div className="flex flex-col items-center justify-center min-h-screen ">
//         <h1 className="text-4xl font-extrabold mb-4">Course: {courseName}</h1>
//         <h2 className="text-3xl font-bold mb-4">Semester: {semester}</h2>
//         {/* You can now load resources based on course and semester */}
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

const Resources = () => {
  const { courseName, semester } = useParams();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch resources when component mounts
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await axios.post('http://localhost:4000/resources', {
          courseName,
          semester
        });
        setResources(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch resources.');
        setLoading(false);
      }
    };

    fetchResources();
  }, [courseName, semester]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-500 to-indigo-700 text-white p-6">
        <h1 className="text-4xl font-extrabold mb-4">Course: {courseName}</h1>
        <h2 className="text-3xl font-bold mb-8">Semester: {semester}</h2>

        {loading ? (
          <p className="text-lg">Loading resources...</p>
        ) : error ? (
          <p className="text-lg text-red-500">{error}</p>
        ) : (
          <div className="overflow-x-auto w-full max-w-5xl">
            <table className="min-w-full bg-white text-gray-800 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="py-3 px-4 text-left">Subject</th>
                  <th className="py-3 px-4 text-left">Syllabus</th>
                  <th className="py-3 px-4 text-left">Books</th>
                  <th className="py-3 px-4 text-left">PYQ</th>
                  <th className="py-3 px-4 text-left">Handwritten Notes</th>
                </tr>
              </thead>
              <tbody>
                {resources.map((item, index) => (
                  <tr key={index} className="border-t hover:bg-gray-100">
                    <td className="py-3 px-4">{item.subject}</td>
                    <td className="py-3 px-4">
                      <a href={item.syllabusPdf} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        View PDF
                      </a>
                    </td>
                    <td className="py-3 px-4">
                      <a href={item.bookPdf} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        View PDF
                      </a>
                    </td>
                    <td className="py-3 px-4">
                      <a href={item.pyqPdf} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        View PDF
                      </a>
                    </td>
                    <td className="py-3 px-4">
                      <a href={item.handwrittenNotesPdf} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                        View PDF
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
