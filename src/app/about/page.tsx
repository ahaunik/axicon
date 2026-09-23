import Link from "next/link";

const values = [
  {
    title: "Integrity",
    description: "We uphold the highest ethical standards in every inspection and consultation, ensuring transparent and honest reporting.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Excellence",
    description: "Continuous improvement drives our methodology. We invest in advanced tools, training, and certifications to exceed industry benchmarks.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Safety First",
    description: "Every project prioritizes personnel safety and asset integrity. Our protocols meet and exceed international safety standards.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Client Partnership",
    description: "We build long-term relationships through collaborative problem-solving, proactive communication, and delivering measurable value.",
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Aunik Ahmed",
    role: "Business Development & Quality Lead",
    bio: "Mechanical engineer (BUET) with 15+ years across pharmaceutical supply chain, quality inspection, and business development. Expertise in procurement, FAT witnessing, ERP systems, and import/export operations.",
    certifications: ["Pumping Systems II", "Measurement & Verification (IPMVP)", "Explosion Protection Basics", "Inspection & Reporting"],
  },
  {
    name: "Senior Inspection Engineers",
    role: "Technical Inspection Team",
    bio: "Certified API, ASNT, and CSWIP inspectors with extensive experience in pressure vessels, piping, structural steel, and NDT across oil & gas, petrochemical, and marine sectors.",
    certifications: ["API 510/570/653", "ASNT Level II/III", "CSWIP 3.1/3.2", "ISO 9712"],
  },
  {
    name: "Engineering Consultants",
    role: "Engineering Consultancy Team",
    bio: "Multidisciplinary engineers specializing in mechanical, structural, and process engineering. Delivering FEED studies, design reviews, and fitness-for-service assessments.",
    certifications: ["PE Registration", "PMP", "HAZOP Leader", "Risk Assessment"],
  },
];

const milestones = [
  { year: "2009", title: "Founded", description: "AXICON Ltd established in Singapore with a focus on technical inspection services." },
  { year: "2012", title: "ISO 9001 Certification", description: "Achieved ISO 9001:2008 certification for quality management systems." },
  { year: "2015", title: "Regional Expansion", description: "Expanded operations across Southeast Asia with offices in Malaysia and Indonesia." },
  { year: "2018", title: "Engineering Consultancy", description: "Launched multidisciplinary engineering consultancy division." },
  { year: "2021", title: "Digital Transformation", description: "Implemented digital inspection platforms and remote inspection capabilities." },
  { year: "2024", title: "150+ Projects", description: "Completed over 150 projects across oil & gas, petrochemical, marine, and power sectors." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-surface to-white dark:from-brand-surface dark:to-brand-dark py-20 lg:py-32" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23084376%22 fillOpacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary mb-4">About Us</p>
            <h1 id="about-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark dark:text-white leading-tight mb-6">
              Engineering Excellence Since <span className="text-brand-primary">2009</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-secondary dark:text-brand-accent-muted leading-relaxed">
              AXICON Ltd is a leading provider of technical inspection and engineering consultancy services across Singapore and Southeast Asia. With over 15 years of experience, we have built a reputation for delivering quality, safety, and engineering excellence on every project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-brand-dark" aria-labelledby="mission-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in">
              <h2 id="mission-heading" className="text-3xl sm:text-4xl font-bold text-brand-dark dark:text-white mb-6">
                Our Mission & Vision
              </h2>
              <div className="space-y-6 text-lg text-brand-secondary dark:text-brand-accent-muted leading-relaxed">
                <p>
                  <strong className="text-brand-dark dark:text-white">Mission:</strong> To be the trusted partner for technical inspection and engineering consultancy, delivering uncompromising quality and safety through technical expertise, innovation, and client-focused service.
                </p>
                <p>
                  <strong className="text-brand-dark dark:text-white">Vision:</strong> To set the industry standard for inspection and engineering excellence in Southeast Asia, recognized for our technical leadership, integrity, and the lasting value we create for clients and communities.
                </p>
              </div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 mt-8 px-6 py-3 text-base font-semibold text-brand-primary bg-white border-2 border-brand-primary hover:bg-brand-surface rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
              >
                Explore Our Services
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="relative animate-slide-up" style={{ animationDelay: "200ms" }}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-brand-surface border border-brand-border dark:border-brand-border relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-accent/10" aria-hidden="true" />
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-brand-primary/10 text-brand-primary mb-6">
                      <svg className="h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-2">15+ Years</h3>
                    <p className="text-brand-secondary dark:text-brand-accent-muted">Industry Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-surface dark:bg-brand-surface" aria-labelledby="values-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="values-heading" className="text-3xl sm:text-4xl font-bold text-brand-dark dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-brand-secondary dark:text-brand-accent-muted">
              The principles that guide every decision and project we undertake
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="p-8 bg-white dark:bg-brand-dark rounded-xl border border-brand-border dark:border-brand-border hover:border-brand-primary/50 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-primary/10 text-brand-primary mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-dark dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-brand-secondary dark:text-brand-accent-muted leading-relaxed">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-brand-dark" aria-labelledby="team-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="team-heading" className="text-3xl sm:text-4xl font-bold text-brand-dark dark:text-white mb-4">
              Our Expertise
            </h2>
            <p className="text-lg text-brand-secondary dark:text-brand-accent-muted">
              Multidisciplinary teams delivering technical excellence across sectors
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <article
                key={member.name}
                className="p-8 bg-brand-surface dark:bg-brand-surface-hover rounded-xl border border-brand-border dark:border-brand-border animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-brand-dark dark:text-white mb-1">{member.name}</h3>
                  <p className="text-sm font-medium text-brand-primary">{member.role}</p>
                </div>
                <p className="text-brand-secondary dark:text-brand-accent-muted leading-relaxed mb-6">{member.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {member.certifications.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1 text-xs font-medium text-brand-primary bg-brand-primary/10 rounded-full border border-brand-primary/20"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-dark" aria-labelledby="history-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="history-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-brand-accent-muted">
              Milestones that define our growth and commitment to excellence
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brand-border dark:bg-brand-border -translate-x-1/2" aria-hidden="true" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center gap-8 animate-fade-in ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative z-10 flex-1 max-w-xs">
                    <div className={`p-6 rounded-xl border border-white/10 bg-brand-dark-900/70 backdrop-blur-sm ${index % 2 === 0 ? "text-right" : ""}`}>
                      <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-primary text-white font-bold text-lg mb-4 mx-auto md:mx-0 ${index % 2 === 0 ? "ml-auto" : "mr-auto"}`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-brand-accent-muted text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-brand-dark" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-primary rounded-2xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-accent/20 via-transparent to-transparent" aria-hidden="true" />
            <div className="relative max-w-2xl mx-auto">
              <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Let's Build Something Great Together
              </h2>
              <p className="text-lg text-brand-accent-muted mb-8">
                Whether you need technical inspection, engineering consultancy, or project management — our team is ready to deliver.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-brand-primary bg-white rounded-lg hover:bg-brand-surface-hover transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary shadow-lg"
                >
                  Start a Conversation
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}