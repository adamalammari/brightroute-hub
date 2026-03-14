import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Truck } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "خدماتنا", href: "#services" },
  { label: "من نحن", href: "#about" },
  { label: "أعمالنا", href: "#portfolio" },
  { label: "الخريطة", href: "#map" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#hero" className="flex items-center gap-2 font-display font-extrabold text-xl text-primary">
          <Truck className="w-7 h-7 text-accent" />
          <span>لوجيستك برو</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-secondary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" asChild>
            <a href="#quote">طلب عرض سعر</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border pb-4">
          <div className="section-container flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-secondary py-2"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" size="sm" asChild>
              <a href="#quote" onClick={() => setOpen(false)}>طلب عرض سعر</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
