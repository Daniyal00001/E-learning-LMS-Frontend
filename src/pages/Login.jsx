import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";



export default function Login() {
 
{/* ++++++++++++++++++++++++++++++++++++++++++ Handle input +++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
  
 const [login , setlogin ] = useState ({ email : "",  password : ""});
 const [signup , setsignup ] = useState ({ name : "", email : "",  password : ""});


{/* +++++++++++++++++++++++++++++++++++  Handle Registrartion (login / signup) ++++++++++++++++++++++++++++++++++++ */}

 const handleRegistration = (e,type)=>{
    e.preventDefault();
    const InputData = type === "login" ? login : signup;
    console.log(InputData);
 }
        



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white border rounded-lg p-6 shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Login / SignUp</h1>
        <Tabs defaultValue="login" className="w-full">

{/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

          <TabsList className="mb-4 flex justify-center">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">SignUp</TabsTrigger>
          </TabsList>

{/* +++++++++++++++++++++++++++++++++++++++++ Login tab ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

          <TabsContent value="login">
            <p className="text-center text-gray-600 mb-4">
              Please enter your details below to access your account
            </p>
            <form onSubmit={(e) => handleRegistration(e, "login")} className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Email"
                required
                className="border rounded px-3 py-2 w-full"
                name="email"
                value={login.email}
                onChange={(e) => setlogin({ ...login, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="border rounded px-3 py-2 w-full"
                name="password"
                value={login.password}
                onChange={(e) => setlogin({ ...login, password: e.target.value })}
              />
              <button
                type="submit"
                className="bg-blue-500 text-white rounded py-2 mt-2 hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          </TabsContent>

{/* +++++++++++++++++++++++++++++++++++++++++++++  SignUp Tab  +++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

          <TabsContent value="signup">
            <p className="text-center text-gray-600 mb-4">
              Please enter your details to create a new one
            </p>
            <form onSubmit={(e) => handleRegistration(e, "signup")} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Full Name"
                required 
                className="border rounded px-3 py-2 w-full"
                name="name"
                value={signup.name}
                onChange={(e) => setsignup({ ...signup, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="border rounded px-3 py-2 w-full"
                name="email"
                value={signup.email}
                onChange={(e) => setsignup({ ...signup, email: e.target.value })}
              />
              <input
                type="password"
                placeholder="Password"
                required
                className="border rounded px-3 py-2 w-full"
                name="password"
                value={signup.password}
                onChange={(e) => setsignup({ ...signup, password: e.target.value })}
              />
              <button
                type="submit"
                className="bg-green-500 text-white rounded py-2 mt-2 hover:bg-green-600"
              >
                Sign Up
              </button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
