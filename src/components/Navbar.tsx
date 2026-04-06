import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Truck, Phone } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "خدماتنا", href: "#services" },
  { label: "من نحن", href: "#about" },
  { label: "أعمالنا", href: "#portfolio" },
  { label: "الخريطة", href: "#map" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div
        className={`transition-all duration-500 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="bg-primary">
          <div className="section-container flex items-center justify-between h-9 text-xs text-primary-foreground/80" dir="rtl">
            <span>شريكك اللوجستي الموثوق في المملكة العربية السعودية</span>
            <a href="tel:+966551234567" className="flex items-center gap-1.5 hover:text-accent transition-colors" dir="ltr">
              <Phone className="w-3 h-3" />
              +966 55 123 4567
            </a>
          </div>
        </div>
      </div>

      <div className="section-container flex items-center justify-between h-16" dir="rtl">
        <a href="#hero" className="flex items-center gap-2.5 font-display font-extrabold text-xl group">
          <div className="w-9 h-9 rounded-lg gradient-orange flex items-center justify-center group-hover:scale-110 transition-transform">
            <Truck className="w-5 h-5 text-accent-foreground" />
          </div>
          <span className={scrolled ? "text-primary" : "text-primary-foreground"}>
            لوجيستك برو
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-secondary/10 ${
                scrolled
                  ? "text-foreground/80 hover:text-secondary"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" className="mr-3" asChild>
            <a href="#quote">طلب عرض سعر</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-400 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-xl border-b border-border pb-4">
          <div className="section-container flex flex-col gap-1" dir="rtl">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-secondary hover:bg-secondary/5 px-4 py-3 rounded-lg transition-all"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" size="sm" className="mt-2" asChild>
              <a href="#quote" onClick={() => setOpen(false)}>طلب عرض سعر</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
