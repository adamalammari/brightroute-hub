import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-logistics.jpg";
import { ArrowLeft, Package, Globe } from "lucide-react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="ميناء شحن عالمي" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/90 via-primary/70 to-primary/50" />
      </div>

      <div className="relative z-10 section-container w-full py-32">
        <div className="max-w-2xl" dir="rtl">
          <div className="text-primary-foreground space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur border border-accent/30 animate-fade-in-up">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">شريكك اللوجستي العالمي</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight animate-fade-in-up-delay-1">
              حلول شحن و
              <span className="text-gradient block">خدمات لوجستية</span>
              متكاملة حول العالم
            </h1>

            <p className="text-lg text-primary-foreground/80 max-w-lg leading-relaxed animate-fade-in-up-delay-2">
              نقدم لكم خدمات نقل وشحن موثوقة عبر البر والبحر والجو، مع ضمان أعلى معايير الجودة والسرعة في التسليم.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up-delay-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#quote" className="flex items-center gap-2">
                  طلب عرض سعر
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="#services" className="flex items-center gap-2">
                  <Package className="w-4 h-4" />
                  استكشف خدماتنا
                </a>
              </Button>
            </div>

            <div className="flex gap-8 pt-6 border-t border-primary-foreground/20 animate-fade-in-up-delay-3">
              {[
                { value: "+15K", label: "شحنة ناجحة" },
                { value: "+50", label: "دولة حول العالم" },
                { value: "99%", label: "رضا العملاء" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-extrabold text-accent">{stat.value}</div>
                  <div className="text-xs text-primary-foreground/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
