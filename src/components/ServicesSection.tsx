import { useEffect, useRef } from "react";
import { Plane, Ship, Truck, Clock, Shield, Headphones } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  { icon: Plane, title: "الشحن الجوي", desc: "خدمات شحن جوي سريعة وآمنة لجميع أنحاء العالم مع تتبع مباشر لشحناتك.", color: "text-secondary", bg: "bg-secondary/10" },
  { icon: Ship, title: "الشحن البحري", desc: "حلول شحن بحري اقتصادية للبضائع الكبيرة مع تغطية لأهم الموانئ العالمية.", color: "text-secondary", bg: "bg-secondary/10" },
  { icon: Truck, title: "الشحن البري", desc: "شبكة نقل بري واسعة تربط المدن والدول بكفاءة عالية وتكلفة مناسبة.", color: "text-accent", bg: "bg-accent/10" },
  { icon: Clock, title: "التوصيل السريع", desc: "خدمة التوصيل العاجل لضمان وصول شحناتك في أسرع وقت ممكن.", color: "text-secondary", bg: "bg-secondary/10" },
  { icon: Shield, title: "التأمين على الشحنات", desc: "تأمين شامل على جميع الشحنات لحمايتها من أي مخاطر أثناء النقل.", color: "text-secondary", bg: "bg-secondary/10" },
  { icon: Headphones, title: "دعم على مدار الساعة", desc: "فريق دعم متخصص متاح 24/7 لمساعدتك في كل خطوة من عملية الشحن.", color: "text-accent", bg: "bg-accent/10" },
];

const ServicesSection = () => {
  const [ref, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="services" className="py-24 bg-surface" dir="rtl">
      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">خدماتنا</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-3">
            حلول شحن <span className="text-gradient">شاملة ومتكاملة</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            نوفر لكم مجموعة واسعة من خدمات النقل والشحن لتلبية جميع احتياجاتكم اللوجستية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group bg-background rounded-2xl p-8 border border-border/50 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <div className={`w-14 h-14 rounded-xl ${s.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <s.icon className={`w-7 h-7 ${s.color}`} />
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
