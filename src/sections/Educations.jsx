import React from "react";

const educations = [
  {
    period: "2021 — 2025",
    school: "Bulacan State University- Meneses Campus",
    education: "Bachelor of Science in Computer Science",
    awards: [
      { title: "Dean's Lister", year: "2022-2023" },
      { title: "President's Lister", year: "2023-2024" },
      { title: "President's Lister", year: "2024-2025" },
      { title: "Outstanding Student", year: "2021-2025" },
      { title: "Best in Specialization", year: "2021-2025" },
      { title: "Summa Cum Laude", year: "2021-2025" },
    ],
    current: true,
  },
  {
    period: "2019 — 2021",
    school: "La Consolacion University Philippines",
    education: "Science, Technology, Engineering and Mathematics",
    awards: [
      { title: "With Honors(Grade 11)", year: "2019-2020" },
      { title: "With High Honors(Grade 12)", year: "2020-2021" },
    ],
  },
  {
    period: "2015 — 2019",
    school: "Taliptip National High School",
    education: "Secondary Education",
    awards: [
      { title: "With Honors(Grade 8)", year: "2016-2017" },
      { title: "With Honors(Grade 10)", year: "2018-2019" },
    ],
  },
  {
    period: "2008 — 2015",
    school: "Jose L. Perez Memorial School",
    education: "Primary Education",
    awards: [{ title: "Top 8", year: "2008 — 2015" }],
  },
];

const Educations = () => {
  return (
    <section id="educations" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-3xl
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Educational Background
          </span>
          <h2
            className="text-xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100"
          >
            A timeline of my educational journey and achievements.
          </h2>
          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            "Education is the mos powerful weapon which you can use to change
            the world."
            <br />
            <span className="text-secondary-foreground">-Nelson Mandela</span>
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          <div className="space-y-12">
            {educations.map((edc, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {edc.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 !== 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {edc.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">
                      {edc.education}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {edc.school}
                    </p>
                    <div className="flex flex-col gap-2 mt-4">
                      {edc.awards.map((award, awardIdx) => (
                        <div
                          key={awardIdx}
                          className={`flex items-center px-3 py-1 gap-2 ${
                            idx % 2 !== 0
                              ? "md:flex-row-reverse text-right"
                              : "text-left"
                          }`}
                        >
                          <span className="w-2 h-2 bg-primary rounded-full" />

                          <div
                            className={`text-sm ${
                              idx % 2 !== 0
                                ? "text-left md:text-right"
                                : "md:text-left"
                            }`}
                          >
                            <p className="px-1">{award.title}</p>
                            <p className="px-1 text-foreground/60">
                              {award.year}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
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

export default Educations;
