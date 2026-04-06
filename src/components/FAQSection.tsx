import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const faqs = [
  {
    q: "ما هي أنواع الشحن المتاحة لديكم؟",
    a: "نوفر ثلاثة أنواع رئيسية: الشحن الجوي للسرعة القصوى، الشحن البحري للبضائع الكبيرة بتكلفة اقتصادية، والشحن البري لربط المدن والدول المجاورة. كما نقدم خدمة الشحن السريع للحالات العاجلة.",
  },
  {
    q: "كم يستغرق وصول الشحنة؟",
    a: "يعتمد على نوع الشحن والوجهة. الشحن الجوي يستغرق 2-5 أيام، الشحن البحري 15-45 يوماً، والشحن البري 3-10 أيام حسب المسافة. نوفر أيضاً خيار التوصيل العاجل خلال 24-48 ساعة.",
  },
  {
    q: "هل توفرون تأمين على الشحنات؟",
    a: "نعم، نوفر تأمين شامل على جميع الشحنات يغطي الأضرار والفقدان أثناء النقل. يمكنكم اختيار مستوى التغطية المناسب لقيمة بضائعكم.",
  },
  {
    q: "كيف يمكنني تتبع شحنتي؟",
    a: "نوفر نظام تتبع متقدم يعمل على مدار الساعة. بمجرد شحن بضاعتك، ستحصل على رقم تتبع فريد يمكنك استخدامه عبر موقعنا أو تطبيقنا للحصول على تحديثات لحظية عن حالة شحنتك.",
  },
  {
    q: "ما هي الدول التي تغطونها؟",
    a: "نغطي أكثر من 50 دولة حول العالم عبر شبكة شركائنا الاستراتيجيين. تشمل تغطيتنا دول الخليج العربي، الشرق الأوسط، آسيا، أوروبا، أمريكا الشمالية، وأفريقيا.",
  },
  {
    q: "كيف أحصل على عرض سعر؟",
    a: "يمكنك طلب عرض سعر مجاني عبر ملء النموذج في موقعنا أو الاتصال بنا مباشرة. سيقوم فريقنا بدراسة احتياجاتك وتقديم عرض مخصص خلال 24 ساعة.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [ref, isVisible] = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="faq" className="py-24 bg-background" dir="rtl">
      <div className="section-container">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-sm font-semibold text-secondary uppercase tracking-widest">الأسئلة الشائعة</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mt-3">
            كل ما تحتاج <span className="text-gradient">معرفته</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة شيوعاً حول خدمات الشحن والنقل
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-card rounded-2xl border border-border/50 overflow-hidden transition-all duration-500 hover:border-secondary/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 80}ms` : "0ms" }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-right"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="font-display font-bold text-primary text-base">{faq.q}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIndex === i ? "max-h-60 pb-6" : "max-h-0"
                }`}
              >
                <p className="px-6 pr-14 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
