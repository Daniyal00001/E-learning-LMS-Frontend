"use client"

import React from "react"
import { GraduationCap, Sun, Moon } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
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
    <>
      {/* Desktop Navbar */}
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
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
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
                    <Button variant="outline" size="icon" className="rounded-xl relative">
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

      {/* Mobile Navbar */}
      <MobileNavbar />
    </>
  )
}

function MobileNavbar() {
  const { setTheme } = useTheme()
  const user = true

  return (
    <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-gradient-to-r from-black via-gray-900 to-black text-gray-200 shadow-md">
      {/* Logo */}
      <a
        href="#"
        className="flex items-center space-x-2 text-lg font-bold tracking-wide hover:text-indigo-400 transition-all duration-300"
      >
        <GraduationCap className="h-6 w-6 text-indigo-400" />
        <span>E-Learning LMS</span>
      </a>

      {/* Sheet Trigger (Hamburger Menu) */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="rounded-xl border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-indigo-400"
          >
            <span className="sr-only">Open menu</span>
            ☰
          </Button>
        </SheetTrigger>

        {/* Sheet Content (Sidebar) */}
        <SheetContent side="right" className="bg-gray-900 text-gray-200 border-l border-gray-700">
          <SheetHeader>
            <SheetTitle className="text-gray-100">Menu</SheetTitle>
            <SheetDescription className="text-gray-400">
              Navigate your LMS
            </SheetDescription>
          </SheetHeader>

          <div className="mt-6 flex flex-col space-y-4">
            {user ? (
              <>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-indigo-400 transition-all duration-300">
                  My Learning
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-indigo-400 transition-all duration-300">
                  Edit Profile
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300">
                  Logout
                </button>
                <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-800 hover:text-green-400 transition-all duration-300">
                  Dashboard
                </button>
              </>
            ) : (
              <>
                <button className="w-full px-4 py-2 rounded-lg bg-gray-800 text-gray-200 font-semibold shadow hover:bg-gray-700 hover:text-indigo-400 transition-all duration-300">
                  Login
                </button>
                <button className="w-full px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-500 transition-all duration-300">
                  Signup
                </button>
              </>
            )}

            {/* Theme Toggle */}
            <div className="flex items-center gap-2 pt-4 border-t border-gray-700">
              <Button variant="outline" size="icon" className="rounded-xl" onClick={() => setTheme("light")}>
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-xl" onClick={() => setTheme("dark")}>
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              </Button>
              <Button variant="outline" size="sm" className="rounded-xl" onClick={() => setTheme("system")}>
                System
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
