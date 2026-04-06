import { useEffect, useRef } from "react";
import aboutImage from "@/assets/about-warehouse.jpg";
import { CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "أكثر من 15 عاماً من الخبرة في مجال الخدمات اللوجستية",
  "شبكة شركاء عالمية تغطي أكثر من 50 دولة",
  "فريق محترف ومؤهل يعمل على مدار الساعة",
  "أحدث تقنيات التتبع والمراقبة للشحنات",
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".about-image", {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(imageRef.current, {
        scrollTrigger: { trigger: imageRef.current, start: "top 90%", toggleActions: "play none none none" },
        x: -80, opacity: 0, duration: 1, ease: "power3.out",
      });

      gsap.from(".about-content > *", {
        scrollTrigger: { trigger: ".about-content", start: "top 90%", toggleActions: "play none none none" },
        x: 60, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-background overflow-hidden" dir="rtl">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div ref={imageRef} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={aboutImage} alt="مستودع حديث ومتطور" className="about-image w-full h-[450px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-5 shadow-xl border border-border/50 animate-float">
              <div className="text-3xl font-extrabold text-accent">+15</div>
              <div className="text-sm text-muted-foreground">سنة خبرة</div>
            </div>
          </div>

          <div className="about-content space-y-6">
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">من نحن</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight">
              شريكك الموثوق في
              <span className="text-gradient block">عالم الخدمات اللوجستية</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              منذ تأسيسها، تسعى شركتنا لتقديم أفضل حلول النقل والشحن على المستوى المحلي والدولي. نحن نؤمن بأن كل شحنة تستحق عناية خاصة، ونعمل بجد لضمان وصولها بأمان وفي الوقت المحدد.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              نفخر بفريقنا المتخصص الذي يجمع بين الخبرة العميقة والتكنولوجيا المتقدمة لتقديم تجربة لوجستية لا مثيل لها.
            </p>
            <ul className="space-y-3 pt-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
