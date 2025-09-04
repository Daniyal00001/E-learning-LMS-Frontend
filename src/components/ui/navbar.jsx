import React from "react";
import { GraduationCap, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  return (
    <nav className="w-full bg-primary text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo & Text */}
        <a href="#" className="flex items-center space-x-2 text-lg font-semibold">
          <GraduationCap className="h-6 w-6" />
          <span>E-Learning LMS</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-200 transition">Home</a>
          <a href="#" className="hover:text-gray-200 transition">Courses</a>
          <a href="#" className="hover:text-gray-200 transition">About</a>
          <a href="#" className="hover:text-gray-200 transition">Contact</a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-white">
              <div className="flex flex-col space-y-4 mt-8">
                <a href="#" className="hover:text-gray-200 transition">Home</a>
                <a href="#" className="hover:text-gray-200 transition">Courses</a>
                <a href="#" className="hover:text-gray-200 transition">About</a>
                <a href="#" className="hover:text-gray-200 transition">Contact</a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };