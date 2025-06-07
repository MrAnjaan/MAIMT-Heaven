import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-emerald-600 shadow-md">
        <div className="text-xl font-bold">MyLogo</div>
        <Button variant="outline" >
           <Link to={'/dashboard'}>Login</Link> 
            </Button>
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
          {/* <Button variant="default" size="lg">
            Get Started
          </Button> */}
        </div>
      </main>

      {/* Main Section 2*/}
      <main className="flex flex-1 items-center justify-center p-6" id="login-form">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="student_id">Student ID</Label>
                <Input id="student_id" type="text" placeholder="Enter your student id" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" />
              </div>
              <Button className="w-full">Sign In</Button>
            </form>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      {/* <footer className="text-center p-4 bg-gray-100">
        © 2025 MyWebsite. All rights reserved.
      </footer> */}
      <Footer />
    </div>
  );
}
