import { Truck, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-navy py-16" dir="rtl">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 font-display font-extrabold text-xl text-primary-foreground">
              <Truck className="w-7 h-7 text-accent" />
              <span>لوجيستك برو</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-md">
              شركة رائدة في مجال النقل والخدمات اللوجستية، نقدم حلول شحن متكاملة تغطي جميع أنحاء العالم بأعلى معايير الجودة والموثوقية.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {["الرئيسية", "خدماتنا", "من نحن", "أعمالنا", "تواصل معنا"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-primary-foreground/50 hover:text-accent transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-primary-foreground mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-primary-foreground/50">
                <Phone className="w-4 h-4 text-accent" />
                <span dir="ltr">+966 50 000 0000</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/50">
                <Mail className="w-4 h-4 text-accent" />
                info@logisticpro.com
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/50">
                <MapPin className="w-4 h-4 text-accent" />
                الرياض، المملكة العربية السعودية
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/40">
            © 2026 لوجيستك برو. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
