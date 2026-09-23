import Link from "next/link";

const highlights = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Certified Inspections",
    description: "ISO 9001 certified technical inspections ensuring compliance with international standards and local regulations.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Engineering Excellence",
    description: "Multidisciplinary engineering consultancy delivering innovative solutions for complex industrial challenges.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Rapid Response",
    description: "24/7 emergency response capability with dedicated teams across Singapore and Southeast Asia.",
  },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Expert Engineers" },
  { value: "98%", label: "Client Retention" },
];

export default function HomePage() {
  return (
    <>
      <section
        className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Photo slideshow background */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="hero-slideshow__layer" style={{ backgroundImage: "url('/axicon/images/hero/refinery.jpg')", ["--i" as string]: 0 }} />
          <div className="hero-slideshow__layer" style={{ backgroundImage: "url('/axicon/images/hero/engineer.jpg')", ["--i" as string]: 1 }} />
          <div className="hero-slideshow__layer" style={{ backgroundImage: "url('/axicon/images/hero/industry.jpg')", ["--i" as string]: 2 }} />
          <div className="hero-slideshow__layer" style={{ backgroundImage: "url('/axicon/images/hero/construction.jpg')", ["--i" as string]: 3 }} />
        </div>
        {/* Readability overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/95 via-brand-primary/65 to-brand-primary/25" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-accent-muted mb-4 animate-slide-up" style={{ animationDelay: "100ms" }}>
              Technical Inspection & Engineering Consultancy
            </p>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up"
              style={{ animationDelay: "200ms" }}
            >
              Engineering Excellence, <span className="text-brand-accent">Delivered</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-primary-lightest max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "300ms" }}>
              AXICON Ltd provides world-class technical inspection and engineering consultancy services across Singapore and Southeast Asia. Committed to quality, safety, and engineering excellence since 2009.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "400ms" }}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-brand-accent hover:bg-brand-accent-light rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 shadow-sm hover:shadow-md"
              >
                Get a Quote
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white border-2 border-white/80 hover:bg-white/10 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <svg className="h-6 w-6 text-brand-accent/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <section className="py-16 bg-brand-surface" aria-labelledby="stats-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="stats-heading" className="sr-only">Key Statistics</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 bg-white rounded-xl border border-brand-border shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-accent mb-2" aria-label={stat.value}>
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-brand-secondary uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" aria-labelledby="highlights-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="highlights-heading" className="text-3xl sm:text-4xl font-bold text-brand-primary mb-4">
              Why Choose AXICON Ltd
            </h2>
            <p className="text-lg text-brand-secondary">
              Our core competencies that set us apart in the industry
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <article
                key={highlight.title}
                className="group p-8 bg-brand-surface rounded-xl border border-brand-border hover:border-brand-accent/50 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-brand-accent/10 text-brand-accent mb-6 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-brand-primary mb-3">
                  {highlight.title}
                </h3>
                <p className="text-brand-secondary leading-relaxed">
                  {highlight.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-surface" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-primary rounded-2xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-accent/20 via-transparent to-transparent" aria-hidden="true" />
            <div className="relative max-w-2xl mx-auto">
              <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-brand-primary-lightest mb-8">
                Partner with AXICON Ltd for technical inspection and engineering consultancy that delivers results. Let's discuss your requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-brand-primary bg-white rounded-lg hover:bg-brand-surface-hover transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary shadow-lg"
              >
                Contact Us Today
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}