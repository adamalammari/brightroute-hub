import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-logistics.jpg";
import { ArrowLeft, Package, Globe } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax on hero image
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Staggered text entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { y: 30, opacity: 0, duration: 0.6 })
        .from(".hero-title", { y: 50, opacity: 0, duration: 0.8 }, "-=0.3")
        .from(".hero-desc", { y: 30, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-buttons", { y: 30, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".hero-stat", { y: 20, opacity: 0, duration: 0.4, stagger: 0.15 }, "-=0.2");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img ref={imageRef} src={heroImage} alt="ميناء شحن عالمي" className="w-full h-full object-cover scale-110" />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/90 via-primary/70 to-primary/50" />
      </div>

      <div className="relative z-10 section-container w-full py-32">
        <div className="max-w-2xl" dir="rtl">
          <div className="text-primary-foreground space-y-6">
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur border border-accent/30">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">شريكك اللوجستي العالمي</span>
            </div>

            <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              حلول شحن و
              <span className="text-gradient block">خدمات لوجستية</span>
              متكاملة حول العالم
            </h1>

            <p className="hero-desc text-lg text-primary-foreground/80 max-w-lg leading-relaxed">
              نقدم لكم خدمات نقل وشحن موثوقة عبر البر والبحر والجو، مع ضمان أعلى معايير الجودة والسرعة في التسليم.
            </p>

            <div className="hero-buttons flex flex-wrap gap-4">
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

            <div className="flex gap-8 pt-6 border-t border-primary-foreground/20">
              {[
                { value: "+15K", label: "شحنة ناجحة" },
                { value: "+50", label: "دولة حول العالم" },
                { value: "99%", label: "رضا العملاء" },
              ].map((stat) => (
                <div key={stat.label} className="hero-stat text-center">
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
