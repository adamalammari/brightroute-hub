import aboutImage from "@/assets/about-warehouse.jpg";
import { CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const features = [
  "أكثر من 15 عاماً من الخبرة في مجال الخدمات اللوجستية",
  "شبكة شركاء عالمية تغطي أكثر من 50 دولة",
  "فريق محترف ومؤهل يعمل على مدار الساعة",
  "أحدث تقنيات التتبع والمراقبة للشحنات",
];

const AboutSection = () => {
  const [ref, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="about" className="py-24 bg-background overflow-hidden" dir="rtl">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={aboutImage} alt="مستودع حديث ومتطور" className="w-full h-[450px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-5 shadow-xl border border-border/50 animate-float">
              <div className="text-3xl font-extrabold text-accent">+15</div>
              <div className="text-sm text-muted-foreground">سنة خبرة</div>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}>
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
