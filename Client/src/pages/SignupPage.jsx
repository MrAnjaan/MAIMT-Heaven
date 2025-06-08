import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function SignupPage() {

    const navigate = useNavigate(); // windows.href ki jgh

    const [signupInfo, setSignupInfo] = useState({
        name: '',
        password: '',
        email: '',
        student_id: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        const copySignupInfo = { ...signupInfo };
        copySignupInfo[name] = value;
        setSignupInfo(copySignupInfo);
    }

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, email, student_id, password } = signupInfo;
        if (!name || !email || !student_id || !password) {
            return handleError('All fields are required');
        }
        // API call to signup
        try {
            const url = "http://localhost:4000/user/signup";
            const response = await axios.post(url, signupInfo);
            const { success, message } = response.data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login');
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
                        <Link to={'/login'}>Login</Link>
                    </Button>
                    <Button variant="outline" >
                        <Link to={'/signup'}>Signup</Link>
                    </Button>
                </div>
            </header>


            {/* Main Section 2*/}
            <main className="flex flex-1 items-center justify-center p-6" id="login-form">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>Sign Up</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-4" onSubmit={handleSignup}>
                            <div>
                                <Label htmlFor="student_id">Student ID</Label>
                                <Input id="student_id" name='student_id' autoFocus type="text" placeholder="Enter your student id" onChange={handleChange} value={signupInfo.student_id} />

                            </div>
                            <div>
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" type="text" name='name' placeholder="Enter your name" onChange={handleChange} value={signupInfo.name} />

                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" name='email' placeholder="Enter your email" onChange={handleChange} value={signupInfo.email} />
                            </div>
                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" name='password' placeholder="Enter your password" onChange={handleChange} value={signupInfo.password} />
                            </div>
                            <Button className="w-full">Sign Up</Button>
                        </form>
                    </CardContent>
                </Card>
                <ToastContainer />
            </main>
            <Footer />
        </div>
    );
}
