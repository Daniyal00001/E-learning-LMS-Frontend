"use client"

import React from "react"
import { GraduationCap, Sun, Moon } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useTheme } from "@/components/ui/theme-provider"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const { setTheme } = useTheme()
  const user = true

  return (
    <nav className="w-full bg-gradient-to-r from-black via-gray-900 to-black text-gray-200 shadow-lg backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Navbar Left */}
        <a
          href="#"
          className="flex items-center space-x-2 text-xl font-bold tracking-wide hover:text-indigo-400 transition-all duration-300"
        >
          <GraduationCap className="h-7 w-7 text-indigo-400 drop-shadow-glow" />
          <span className="drop-shadow-md">E-Learning LMS</span>
        </a>

        {/* Navbar Right */}
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              {/* Account Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className=" bg-gray-800 text-gray-200 font-semibold rounded-xl shadow hover:bg-gray-700 hover:text-indigo-400 transition-all duration-300">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-44 rounded-xl shadow-lg bg-gray-900 text-gray-200 border border-gray-700">
                  <DropdownMenuLabel className="font-semibold text-gray-300">
                    Account
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem className="hover:bg-gray-800 hover:text-indigo-400">
                    My Learning
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-800 hover:text-indigo-400">
                    Edit Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-red-600 hover:text-white">
                    Logout
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-700" />
                  <DropdownMenuItem className="hover:bg-gray-800 hover:text-green-400">
                    Dashboard
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Theme Toggle Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-xl">
                    <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <button className="px-4 py-2 rounded-xl bg-gray-800 text-gray-200 font-semibold shadow hover:bg-gray-700 hover:text-indigo-400 hover:scale-105 transition-all duration-300">
                Login
              </button>
              <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-500 hover:scale-105 transition-all duration-300">
                Signup
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
