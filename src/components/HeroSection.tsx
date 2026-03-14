import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-logistics.jpg";
import { ArrowLeft, Package, Globe } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="ميناء شحن عالمي" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-primary/90 via-primary/70 to-primary/50" />
      </div>

      <div className="relative z-10 section-container w-full py-32 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-6 animate-fade-in-up" dir="rtl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 backdrop-blur border border-accent/30">
              <Globe className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">شريكك اللوجستي العالمي</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              حلول شحن و
              <span className="text-gradient block">خدمات لوجستية</span>
              متكاملة حول العالم
            </h1>

            <p className="text-lg text-primary-foreground/80 max-w-lg leading-relaxed">
              نقدم لكم خدمات نقل وشحن موثوقة عبر البر والبحر والجو، مع ضمان أعلى معايير الجودة والسرعة في التسليم.
            </p>

            <div className="flex flex-wrap gap-4">
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

            {/* Stats */}
            <div className="flex gap-8 pt-6 border-t border-primary-foreground/20">
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

          {/* Quote form */}
          <div id="quote" className="animate-fade-in-up-delay-2">
            <div className="bg-background/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-border/50" dir="rtl">
              <h3 className="text-xl font-display font-bold text-primary mb-6">طلب عرض سعر مجاني</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="الاسم الكامل"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="tel"
                  placeholder="رقم الهاتف"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <select className="w-full px-4 py-3 rounded-lg border border-input bg-surface text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">نوع الشحن</option>
                  <option value="air">شحن جوي</option>
                  <option value="sea">شحن بحري</option>
                  <option value="land">شحن بري</option>
                  <option value="express">شحن سريع</option>
                </select>
                <textarea
                  placeholder="تفاصيل إضافية..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
                <Button variant="hero" className="w-full" size="lg">
                  إرسال الطلب
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
