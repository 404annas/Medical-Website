import { Phone, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/abstract-logo.svg";
import { Link } from "react-router-dom";
import CareForm from "./CareForm";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);

  // Effect for component mount animation
  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 100); // Short delay for transition
    return () => clearTimeout(timeout);
  }, []);

  // Effect for scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect to lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out
          ${
            isScrolled
              ? "bg-black/60 shadow-lg backdrop-blur-xl "
              : "bg-transparent"
          }
          ${
            isMounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          }
        `}
      >
        <div className="max-w-8xl mx-auto px-6 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="text-3xl text-white font-bold tracking-tighter"
            >
              <img src={logo} className="w-26 object-cover" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden  lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => window.scrollTo(0, 0)}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <button
                onClick={() => setFormOpen(true)}
                className="group relative inline-flex items-center justify-center cursor-pointer px-6 py-2.5 overflow-hidden border border-[#E6B59E] rounded-full bg-[#4D273F] text-white font-medium transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-4 h-4 mr-2 transition-all duration-300" />
                <span>Get Care</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden cursor-pointer">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 -mr-2 text-white cursor-pointer"
              >
                <Menu size={30} className="" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <div
        className={`fixed inset-0 z-[100] bg-gray-900/95 backdrop-blur-xl transition-opacity duration-500 ease-in-out lg:hidden
          ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <div className="flex justify-between items-center p-6 h-20 border-b border-gray-800">
          <img src={logo} className="w-26 object-cover" />

          <button onClick={() => setIsMenuOpen(false)} className="p-2 -mr-2">
            <X className="text-white" size={30} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-[calc(100%-5rem)]">
          <ul className="text-center space-y-8">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={`transition-all duration-500 ease-out ${
                  isMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  to={link.href}
                  onClick={handleLinkClick}
                  className="text-3xl font-semibold text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={`absolute bottom-16 transition-all duration-500 ease-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${navLinks.length * 100}ms` }}
          >
            <button className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-full bg-purple-600 text-white font-semibold text-lg">
              <Phone className="w-5 h-5 mr-3" />
              <span>Get Care</span>
            </button>
          </div>
        </div>
      </div>
      <CareForm isOpen={isFormOpen} onClose={() => setFormOpen(false)} />
    </>
  );
};

export default Navbar;
