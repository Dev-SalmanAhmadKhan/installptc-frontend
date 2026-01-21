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

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Close mobile menu if open
    setIsMobileMenuOpen(false);

    // Call optional onNavClick callback
    onNavClick?.();

    // If it's a hash link (internal navigation)
    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Calculate offset for fixed header
        const headerHeight = 80; // Match your header height
        const targetPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          targetPosition + window.pageYOffset - headerHeight;

        // Smooth scroll to element
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Update URL hash without scrolling
        window.history.pushState(null, "", href);
      }
    } else {
      // For external links or non-hash links, navigate normally
      window.location.href = href;
    }
  };

  const handleGetStartedClick = () => {
    setIsMobileMenuOpen(false);
    onNavClick?.();

    // Smooth scroll to contact section
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      const headerHeight = 80;
      const targetPosition = contactElement.getBoundingClientRect().top;
      const offsetPosition = targetPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      window.history.pushState(null, "", "#contact");
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#66b2b2]/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => handleSmoothScroll(e, "#hero")}
            className="text-2xl font-black text-[#014d4e] hover:text-[#008888] transition-colors"
          >
            INSTALL<span className="text-[#008888]">PTC</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center font-semibold text-sm uppercase tracking-wider">
          {navigationData.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="hover:text-[#008888] transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#014d4e] to-[#008888] transition-all group-hover:w-full"></span>
            </a>
          ))}
          <button
            onClick={handleGetStartedClick}
            className="bg-gradient-primary text-white px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all hover:bg-linear-to-r from-[#014d4e] to-[#008888] cursor-pointer"
          >
            Get Started
          </button>
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
        <div className="px-4 py-6 space-y-4">
          {navigationData.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="block font-semibold text-sm uppercase tracking-wider hover:text-[#008888] transition-colors py-3 px-4 rounded-lg hover:bg-[#e0f2f2]"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={handleGetStartedClick}
            className="w-full bg-gradient-primary text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all hover:bg-gradient-primary/20 font-semibold text-sm uppercase "
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
