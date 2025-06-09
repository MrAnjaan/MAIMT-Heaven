import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from '../utils';
import axios from 'axios';

export default function LoginPage() {

  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    password: '',
    email: '',
    student_id: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const copyLoginInfo = { ...loginInfo };
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const {email, student_id, password } = loginInfo;
    if (!email || !student_id || !password) {
      return handleError('All fields are required');
    }
    // API call to signup
    try {
      const url = "http://localhost:4000/user/login";
      const response = await axios.post(url, loginInfo);
      const { success, message,jwtToken, name, email, student_id, error } = response.data;

      localStorage.setItem('token', jwtToken);
      localStorage.setItem('loggedInUser', JSON.stringify({name,email,student_id}));

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      }


    } catch (error) {
      if (error.response) {
        const backendMessage = error.response.data?.error?.details[0].message || "Signup failed";
        handleError(backendMessage);
      } else {
        console.error("Unknown error:", error.message);
        handleError("Something went wrong");
      }
    }
  }

  
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-emerald-600 shadow-md">
        <div className="text-xl font-bold">MyLogo</div>
        <div className="flex justify-between gap-2">
          <Button variant="outline" >
            <a href="#login-form">Login</a>
          </Button>
          <Button variant="outline" >
            <Link to={'/signup'}>Signup</Link>
          </Button>
        </div>

      </header>

      {/* Main section 1 */}
      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-6 pt-16 pb-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Hii MAIMTIAN
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 ">
            Log in to access exclusive resources and notes.
          </p>
         
        </div>
      </main>

      {/* Main Section 2*/}
      <main className="flex flex-1 items-center justify-center p-6" id="login-form">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <Label htmlFor="student_id">Student ID</Label>
                <Input id="student_id" name='student_id' type="text" placeholder="Enter your student id" onChange={handleChange} value={loginInfo.student_id} />
              </div>
              {/* <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" name='name' placeholder="Enter your name" onChange={handleChange} value={loginInfo.name} />
              </div> */}
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" name='email' placeholder="Enter your email" onChange={handleChange} value={loginInfo.email} />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" name='password' placeholder="Enter your password" onChange={handleChange} value={loginInfo.password} />
              </div>
              <Button className="w-full">Login</Button>
              {/* <p>Already have an account? <Link to={'/signup'}>SignUp</Link> </p> */}
            </form>
          </CardContent>
        </Card>
        <ToastContainer />
      </main>

      {/* Footer */}
      {/* <footer className="text-center p-4 bg-gray-100">
        © 2025 MyWebsite. All rights reserved.
      </footer> */}
      <Footer />
    </div>
  );
}
