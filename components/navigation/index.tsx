import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigationData } from "@/data/navigation";

interface NavigationProps {
  onNavClick?: () => void;
}

export default function Navigation({ onNavClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false);
    onNavClick?.();
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#66b2b2]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="text-2xl font-black text-[#014d4e]">
            INSTALL<span className="text-[#008888]">PTC</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center font-semibold text-sm uppercase tracking-wider">
          {navigationData.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-[#008888] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gradient-primary text-white px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-[#002525] hover:text-[#008888] hover:bg-[#e0f2f2] transition-colors"
          onClick={handleMobileMenuToggle}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-[#66b2b2]/20 shadow-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <div className="px-4 py-6 space-y-6">
          {navigationData.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block font-semibold text-sm uppercase tracking-wider hover:text-[#008888] transition-colors py-2"
              onClick={handleNavItemClick}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block bg-gradient-primary text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all text-center font-semibold text-sm uppercase tracking-wider mt-4"
            onClick={handleNavItemClick}
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
