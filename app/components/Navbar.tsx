'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react' // Icons for menu & theme toggle

// Define theme types
type Theme = "yellow" | "brown" | "black" | "white";

// Theme configurations
const themes: Record<Theme, { bg: string; text: string; hover: string }> = {
  yellow: { bg: "bg-yellow-800", text: "text-white", hover: "hover:text-yellow-300" },
  brown: { bg: "bg-yellow-900", text: "text-white", hover: "hover:text-yellow-400" },
  black: { bg: "bg-black", text: "text-white", hover: "hover:text-gray-300" },
  white: { bg: "bg-white", text: "text-black", hover: "hover:text-gray-700" },
};

function Navbar() {
  const [theme, setTheme] = useState<Theme>("yellow"); // Default theme
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  // Cycle through themes
  const toggleTheme = () => {
    const themeList: Theme[] = ["yellow", "brown", "black", "white"];
    const nextTheme = themeList[(themeList.indexOf(theme) + 1) % themeList.length];
    setTheme(nextTheme);
  };

  return (
    <nav className={`transition-all duration-500 ease-in-out ${themes[theme].bg} ${themes[theme].text} p-4`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          CSSC
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["Acceuil", "A propos", "Nos Programmes", "Admissions", "Contacts"].map((item, index) => (
            <Link 
              key={index} 
              href="/" 
              className={`text-lg transition-colors duration-300 ${themes[theme].hover}`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme} 
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 text-black hover:bg-gray-300"
        >
          {theme === "black" ? <Sun size={20} /> : <Moon size={20} />}
          {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 transition-all duration-500">
          {["Acceuil", "A propos", "Nos Programmes", "Admissions", "Contacts"].map((item, index) => (
            <Link 
              key={index} 
              href="/" 
              className={`text-lg ${themes[theme].hover}`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
          
          {/* Theme Toggle Button (Mobile) */}
          <button 
            onClick={toggleTheme} 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 text-black hover:bg-gray-300"
          >
            {theme === "black" ? <Sun size={20} /> : <Moon size={20} />}
            {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
