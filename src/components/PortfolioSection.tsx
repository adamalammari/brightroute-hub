import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    image: portfolio1,
    title: "نقل بري دولي",
    desc: "إدارة أسطول نقل بري يربط 12 دولة بكفاءة عالية",
    tag: "نقل بري",
  },
  {
    image: portfolio2,
    title: "شحن جوي عاجل",
    desc: "تسليم شحنات طبية حساسة لـ 8 دول في أقل من 48 ساعة",
    tag: "شحن جوي",
  },
  {
    image: portfolio3,
    title: "شحن بحري بالحاويات",
    desc: "نقل أكثر من 5000 حاوية سنوياً عبر الممرات البحرية الرئيسية",
    tag: "شحن بحري",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-surface" dir="rtl">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">أعمالنا</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-3">
            مشاريع <span className="text-gradient">ناجحة ومتميزة</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            نفخر بسجل حافل من المشاريع الناجحة التي تعكس التزامنا بالتميز
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up${i > 0 ? `-delay-${i}` : ""}`}
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
              <div className="absolute bottom-0 p-6 space-y-2">
                <span className="inline-block px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-bold rounded-full">
                  {p.tag}
                </span>
                <h3 className="text-xl font-display font-bold text-primary-foreground">{p.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
