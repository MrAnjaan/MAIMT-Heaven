import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardTitle } from "@/components/ui/card";

const Semester = () => {
  const { coursename } = useParams();
  const navigate = useNavigate();

  // number of semesters based on course bba,bca ke 6 else 4
  const semesterCount = (coursename === 'BCA' || coursename === 'BBA') ? 6 : 4;

  // array of semesters
  const semesters = Array.from({ length: semesterCount }, (_, i) => `${i + 1}`);

  // Function to handle card click
  const handleSemesterClick = (semester) => {
    navigate(`/resources/${coursename}/${semester}`);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-500 to-purple-700 text-white p-6">
        <h1 className="text-4xl font-extrabold mb-2">Course: {coursename}</h1>
        <h1 className="text-4xl font-extrabold mb-10">Choose your Semester</h1>

        {/* Semester Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
          {semesters.map((semester, index) => (
            <Card
              key={index}
              onClick={() => handleSemesterClick(semester)}
              className="bg-white text-gray-800 shadow-lg rounded-lg p-6 flex justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <CardTitle className="text-3xl font-semibold">Semester-{semester}</CardTitle>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Semester;
