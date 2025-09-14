// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";

// const Contact = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-500 to-green-700 text-white p-6">
//       {/* Hero Section */}
//       <div className="text-center max-w-3xl">
//         <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
//         <p className="text-lg text-gray-200">
//           Have questions or need assistance? Reach out to us, and we'll be happy to help!
//         </p>
//       </div>

//       {/* Contact Form */}
//       <Card className="max-w-3xl w-full bg-white text-gray-800 shadow-lg rounded-lg p-6 mt-8">
//         <CardHeader>
//           <CardTitle className="text-xl font-bold text-center">Send Us a Message</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form className="space-y-4">
//             <Input type="text" placeholder="Your Name" className="w-full" />
//             <Input type="email" placeholder="Your Email" className="w-full" />
//             <Textarea placeholder="Your Message" className="w-full h-32" />
//             <Button variant="default" className="w-full">Submit</Button>
//           </form>
//         </CardContent>
//       </Card>

//       {/* Social Media Links */}
//       <div className="mt-8 text-center">
//         <p className="text-lg font-semibold">Follow us on social media:</p>
//         <div className="flex space-x-4 mt-2">
//           <a href="#" className="text-white hover:text-gray-300 transition">Facebook</a>
//           <a href="#" className="text-white hover:text-gray-300 transition">Twitter</a>
//           <a href="#" className="text-white hover:text-gray-300 transition">LinkedIn</a>
//         </div>
//       </div>
//     </div>

//       <Footer />
//       </div>
//   )
// }

// export default Contact



// import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Mail, Phone, MapPin } from 'lucide-react';

// const Contact = () => {
//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       <Navbar />

//       <main className="flex-1">
//         {/* Hero Section */}
//         <section className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-16">
//           <div className="container mx-auto text-center px-4">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
//             <p className="text-lg max-w-2xl mx-auto">
//               Have questions or need assistance? We'd love to hear from you.
//             </p>
//           </div>
//         </section>

//         {/* Contact Content */}
//         <section className="py-12 container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Contact Form */}
//             <Card className="shadow-lg">
//               <CardHeader>
//                 <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <form className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium mb-1">Name</label>
//                       <Input placeholder="Your name" />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium mb-1">Email</label>
//                       <Input type="email" placeholder="your@email.com" />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium mb-1">Message</label>
//                     <Textarea placeholder="Your message" rows={5} />
//                   </div>
//                   <Button className="w-full bg-green-600 hover:bg-green-700">
//                     Send Message
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>

//             {/* Contact Info */}
//             <div className="space-y-6">
//               <div className="bg-gray-50 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-start">
//                     <Mail className="w-5 h-5 mr-3 mt-0.5 text-green-600" />
//                     <div>
//                       <p className="font-medium">Email</p>
//                       <p className="text-gray-600">contact@maimt.com</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <Phone className="w-5 h-5 mr-3 mt-0.5 text-green-600" />
//                     <div>
//                       <p className="font-medium">Phone</p>
//                       <p className="text-gray-600">+1 234 567 8900</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <MapPin className="w-5 h-5 mr-3 mt-0.5 text-green-600" />
//                     <div>
//                       <p className="font-medium">Address</p>
//                       <p className="text-gray-600">123 College Street, MAIMT Campus</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-gray-50 p-6 rounded-lg">
//                 <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//                 <div className="flex space-x-4">
//                   <a href="#" className="text-green-600 hover:text-green-700">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
//                     </svg>
//                   </a>
//                   <a href="#" className="text-green-600 hover:text-green-700">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//                     </svg>
//                   </a>
//                   <a href="#" className="text-green-600 hover:text-green-700">
//                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   )
// }

// export default Contact


import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-16">
          <div className="container mx-auto text-center px-4">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p
              className="text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have questions or need assistance? We'd love to hear from you.
            </motion.p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-12 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              className="shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-white border border-gray-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <Input placeholder="Your name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <Input type="email" placeholder="your@email.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Message</label>
                      <Textarea placeholder="Your message" rows={5} />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="bg-white shadow-lg border border-gray-200 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 mt-0.5 text-green-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">contact@maimt.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 mt-0.5 text-green-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+1 234 567 8900</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-0.5 text-green-600" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">123 College Street, MAIMT Campus, Jagadhri</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Contact;
