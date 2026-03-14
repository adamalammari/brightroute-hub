import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Send, Phone, Mail } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const QuoteSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".quote-content", {
        scrollTrigger: { trigger: ".quote-content", start: "top 80%" },
        x: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.from(".quote-form", {
        scrollTrigger: { trigger: ".quote-form", start: "top 80%" },
        x: -60,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="quote" className="py-24 bg-surface" dir="rtl">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content side */}
          <div className="quote-content space-y-8">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">تواصل معنا</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight">
              احصل على عرض سعر
              <span className="text-gradient block">مجاني اليوم</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              فريقنا المتخصص جاهز لمساعدتك في اختيار الحل اللوجستي الأمثل لاحتياجاتك. تواصل معنا الآن واحصل على عرض سعر مخصص خلال 24 ساعة.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary">اتصل بنا</div>
                  <div className="text-sm text-muted-foreground" dir="ltr">+966 50 000 0000</div>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-background rounded-xl border border-border/50">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-sm font-bold text-primary">راسلنا</div>
                  <div className="text-sm text-muted-foreground">info@logisticpro.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form side */}
          <div className="quote-form">
            <div className="bg-background rounded-2xl p-8 shadow-2xl border border-border/50">
              <h3 className="text-xl font-display font-bold text-primary mb-6">طلب عرض سعر مجاني</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="الاسم الأول"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                  <input
                    type="text"
                    placeholder="اسم العائلة"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
                <input
                  type="tel"
                  placeholder="رقم الهاتف"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                />
                <div className="grid grid-cols-2 gap-4">
                  <select className="w-full px-4 py-3 rounded-lg border border-input bg-surface text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow">
                    <option value="">نوع الشحن</option>
                    <option value="air">شحن جوي</option>
                    <option value="sea">شحن بحري</option>
                    <option value="land">شحن بري</option>
                    <option value="express">شحن سريع</option>
                  </select>
                  <input
                    type="text"
                    placeholder="الوزن التقريبي (كجم)"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="مدينة الشحن"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                  <input
                    type="text"
                    placeholder="مدينة الوصول"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring transition-shadow"
                  />
                </div>
                <textarea
                  placeholder="تفاصيل إضافية عن الشحنة..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-surface text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-shadow"
                />
                <Button variant="hero" className="w-full" size="lg">
                  <Send className="w-4 h-4 ml-2" />
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

export default QuoteSection;
