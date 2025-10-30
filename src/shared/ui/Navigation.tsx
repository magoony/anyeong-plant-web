"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/shared/ui/shadcn/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Doctor", path: "/doctor" },
    { name: "Treatments", path: "/treatments" },
    { name: "Space", path: "/space" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;
  const isHomePage = pathname === "/";
  const isTransparent = !isScrolled && isHomePage;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={
                isTransparent
                  ? "/images/header_logo_white.png"
                  : "/images/header_logo.png"
              }
              alt="Anyeong Plant Dental Clinic"
              width={1904}
              height={382}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant="ghost"
                  className={
                    isActive(item.path)
                      ? isTransparent
                        ? "text-white font-bold hover:text-white/80"
                        : "text-foreground font-medium"
                      : isTransparent
                      ? "text-white/90 font-semibold hover:text-white"
                      : "text-muted-foreground hover:text-foreground"
                  }
                >
                  {item.name}
                </Button>
              </Link>
            ))}
            {/* <ThemeSelector /> */}
            <Link href="/contact">
              <Button variant="default" className="ml-4">
                Book Appointment
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${
              isTransparent ? "text-white" : "text-foreground"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div
            className={`md:hidden py-4 border-t ${
              isTransparent ? "border-white/20" : "border-border"
            }`}
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start ${
                      isActive(item.path)
                        ? isTransparent
                          ? "text-white font-bold"
                          : "text-foreground font-medium"
                        : isTransparent
                        ? "text-white/90 font-semibold"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
              {/* <div className="flex items-center justify-between pt-2 pb-2">
                <span
                  className={`text-sm pl-3 ${
                    isTransparent ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  색상 테마
                </span>
                <ThemeSelector />
              </div> */}
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="default" className="w-full mt-2">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
