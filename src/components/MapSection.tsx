const hubs = [
  { name: "دبي", top: "45%", left: "62%" },
  { name: "شنغهاي", top: "40%", left: "78%" },
  { name: "روتردام", top: "28%", left: "48%" },
  { name: "سنغافورة", top: "58%", left: "76%" },
  { name: "نيويورك", top: "35%", left: "25%" },
  { name: "جدة", top: "47%", left: "57%" },
  { name: "مومباي", top: "48%", left: "68%" },
];

const MapSection = () => {
  return (
    <section id="map" className="py-24 gradient-navy" dir="rtl">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">شبكتنا العالمية</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mt-3">
            نصل إلى كل مكان <span className="text-accent">حول العالم</span>
          </h2>
          <p className="text-primary-foreground/60 mt-4 max-w-2xl mx-auto">
            شبكة واسعة من المراكز اللوجستية في أهم المدن والموانئ العالمية
          </p>
        </div>

        {/* Stylized map */}
        <div className="relative max-w-5xl mx-auto animate-fade-in-up-delay-1">
          <div className="relative aspect-[2/1] rounded-2xl overflow-hidden border border-primary-foreground/10">
            {/* SVG World map outline */}
            <svg viewBox="0 0 1000 500" className="w-full h-full" fill="none">
              {/* Simplified world continents */}
              <path
                d="M150,150 Q200,100 280,120 T400,110 Q430,100 460,120 T520,130 L530,180 Q500,200 460,190 T380,200 Q350,220 300,210 T200,200 Q170,190 150,150Z"
                fill="hsl(217 91% 60% / 0.1)"
                stroke="hsl(217 91% 60% / 0.3)"
                strokeWidth="1"
              />
              <path
                d="M440,100 Q480,80 520,90 T580,85 Q610,80 640,100 T680,110 L690,150 Q670,170 640,160 T580,170 Q550,180 520,170 T460,160 Q440,150 440,100Z"
                fill="hsl(217 91% 60% / 0.1)"
                stroke="hsl(217 91% 60% / 0.3)"
                strokeWidth="1"
              />
              <path
                d="M550,130 Q600,110 680,130 T800,120 Q830,130 850,160 T830,220 L780,250 Q740,240 700,250 T620,240 Q580,230 560,200 T550,130Z"
                fill="hsl(217 91% 60% / 0.1)"
                stroke="hsl(217 91% 60% / 0.3)"
                strokeWidth="1"
              />
              <path
                d="M500,200 Q530,190 560,210 T600,230 Q610,260 590,300 T540,340 L500,330 Q480,300 490,260 T500,200Z"
                fill="hsl(217 91% 60% / 0.1)"
                stroke="hsl(217 91% 60% / 0.3)"
                strokeWidth="1"
              />
              <path
                d="M200,220 Q240,200 300,230 T380,250 Q400,280 380,330 T320,380 L260,370 Q230,340 220,300 T200,220Z"
                fill="hsl(217 91% 60% / 0.1)"
                stroke="hsl(217 91% 60% / 0.3)"
                strokeWidth="1"
              />
              <path
                d="M700,250 Q740,230 800,260 T860,300 Q870,340 840,380 T780,400 L720,380 Q700,350 710,310 T700,250Z"
                fill="hsl(217 91% 60% / 0.1)"
                stroke="hsl(217 91% 60% / 0.3)"
                strokeWidth="1"
              />
              {/* Shipping routes */}
              <path
                d="M250,150 Q400,200 570,160"
                stroke="hsl(25 95% 53% / 0.4)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              <path
                d="M570,160 Q650,180 780,150"
                stroke="hsl(25 95% 53% / 0.4)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              <path
                d="M570,160 Q600,220 760,270"
                stroke="hsl(25 95% 53% / 0.4)"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
            </svg>

            {/* Hub dots */}
            {hubs.map((hub) => (
              <div
                key={hub.name}
                className="absolute group"
                style={{ top: hub.top, left: hub.left, transform: "translate(-50%,-50%)" }}
              >
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse-dot" />
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-primary shadow-lg">
                    {hub.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
