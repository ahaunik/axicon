import Link from "next/link";

const serviceCategories = [
  {
    id: "inspection",
    title: "Technical Inspection",
    description: "Comprehensive inspection services ensuring asset integrity, regulatory compliance, and operational safety across industrial sectors.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    services: [
      {
        title: "API 510/570/653 Inspections",
        description: "Pressure vessel, piping, and storage tank inspections per API standards with certified inspectors.",
        features: ["In-service & turnaround inspections", "Fitness-for-service assessments", "RBI & corrosion monitoring"],
      },
      {
        title: "Non-Destructive Testing (NDT)",
        description: "Full suite of NDT methods performed by ASNT/ISO 9712 certified Level II & III technicians.",
        features: ["UT, RT, MT, PT, ET, VT", "Phased Array & TOFD", "IR thermography"],
      },
      {
        title: "Welding Inspection",
        description: "CSWIP/AWS certified welding inspectors for fabrication, construction, and repair projects.",
        features: ["WPS/PQR qualification", "In-process & final inspection", "Welder qualification testing"],
      },
      {
        title: "Lifting Equipment Certification",
        description: "Statutory inspections and certification of cranes, lifts, and rigging equipment per MOM/WSH regulations.",
        features: ["Periodic thorough examinations", "Load testing & certification", "Wire rope & chain inspection"],
      },
    ],
  },
  {
    id: "engineering",
    title: "Engineering Consultancy",
    description: "Multidisciplinary engineering expertise delivering feasibility studies, design reviews, and technical advisory for capital projects.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    services: [
      {
        title: "FEED & Detailed Design",
        description: "Front-end engineering design and detailed engineering for mechanical, structural, and piping systems.",
        features: ["Process & utility piping design", "Pressure vessel & heat exchanger design", "Structural steel & civil works"],
      },
      {
        title: "Fitness-for-Service (FFS)",
        description: "API 579-1/ASME FFS Level 1-3 assessments for damaged or degraded equipment remaining life evaluation.",
        features: ["Remaining life assessment", "Rerating & derating analysis", "Repair method evaluation"],
      },
      {
        title: "Risk-Based Inspection (RBI)",
        description: "API 580/581 compliant RBI programs optimizing inspection intervals and resource allocation.",
        features: ["Qualitative & quantitative RBI", "Inspection planning optimization", "Risk ranking & mitigation"],
      },
      {
        title: "HAZOP & Risk Studies",
        description: "Process hazard analysis, HAZOP facilitation, LOPA, QRA, and SIL determination studies.",
        features: ["HAZOP/HAZID facilitation", "LOPA & SIL classification", "Quantitative risk assessment"],
      },
    ],
  },
  {
    id: "quality",
    title: "Quality Assurance & QC",
    description: "End-to-end quality management from vendor surveillance to site QA/QC, ensuring conformance to specifications and standards.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    services: [
      {
        title: "Vendor Surveillance & Expediting",
        description: "Global vendor quality surveillance, factory acceptance testing (FAT), and expediting services.",
        features: ["FAT/SAT witnessing", "Source inspection & surveillance", "Expediting & progress monitoring"],
      },
      {
        title: "Site QA/QC Management",
        description: "Full-site quality management including ITP development, NCR handling, and turnover management.",
        features: ["ITP/QCP development", "NCR/CAPA management", "Punch list & preservation"],
      },
      {
        title: "Quality System Audits",
        description: "ISO 9001, ISO 14001, ISO 45001 internal and supplier audits by certified lead auditors.",
        features: ["Management system audits", "Process & product audits", "Gap analysis & improvement"],
      },
      {
        title: "Material Verification (PMI)",
        description: "Positive material identification using XRF/OES for alloy verification and grade confirmation.",
        features: ["XRF & OES testing", "Carbon steel to exotic alloys", "Heat number traceability"],
      },
    ],
  },
  {
    id: "project-management",
    title: "Project Management",
    description: "Integrated project management services from concept to commissioning, delivering projects on time, within budget, and to specification.",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    services: [
      {
        title: "EPC Project Management",
        description: "Full lifecycle EPC project management for oil & gas, petrochemical, and power projects.",
        features: ["Schedule & cost control", "Contract management", "Commissioning & startup"],
      },
      {
        title: "Construction Management",
        description: "Site construction management, supervision, and HSE oversight for industrial construction projects.",
        features: ["Site supervision & coordination", "HSE management & auditing", "Progress reporting & documentation"],
      },
      {
        title: "Shutdown & Turnaround",
        description: "Specialized management of plant shutdowns, turnarounds, and outages (STO) with minimal downtime.",
        features: ["STO planning & scheduling", "Work pack preparation", "Safety-critical execution"],
      },
      {
        title: "Owner's Engineering",
        description: "Independent owner's engineer services for project oversight, design review, and technical due diligence.",
        features: ["Design review & verification", "Technical due diligence", "Contractor performance monitoring"],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-primary-lightest via-white to-brand-surface py-20 lg:py-32" aria-labelledby="services-hero-heading">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23084376%22 fillOpacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary mb-4">Our Services</p>
            <h1 id="services-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-primary leading-tight mb-6">
              Comprehensive <span className="text-brand-accent">Technical Solutions</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-secondary leading-relaxed">
              From technical inspection and engineering consultancy to quality assurance and project management — we deliver integrated services that ensure safety, compliance, and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {serviceCategories.map((category, catIndex) => (
        <section
          key={category.id}
          id={category.id}
          className={`py-20 ${catIndex % 2 === 0 ? "bg-white" : "bg-brand-surface"}`}
          aria-labelledby={`${category.id}-heading`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16">
              <div className="animate-fade-in" style={{ animationDelay: `${catIndex * 100}ms` }}>
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary mb-2">Service Category</p>
                <h2 id={`${category.id}-heading`} className="text-3xl sm:text-4xl font-bold text-brand-primary">
                  {category.title}
                </h2>
              </div>
              <p className="text-lg text-brand-secondary max-w-xl animate-slide-up" style={{ animationDelay: `${catIndex * 100 + 100}ms` }}>
                {category.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {category.services.map((service, svcIndex) => (
                <article
                  key={service.title}
                  className="group p-6 bg-white rounded-xl border border-brand-border hover:border-brand-accent/50 hover:shadow-xl transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${catIndex * 100 + svcIndex * 150}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-brand-accent/10 text-brand-accent mb-5 group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-brand-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-brand-secondary leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <ul className="space-y-2" role="list">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-brand-secondary">
                        <svg className="h-4 w-4 text-brand-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: `${catIndex * 100 + category.services.length * 150}ms` }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-brand-primary bg-white border-2 border-brand-primary hover:bg-brand-surface-hover rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
              >
                Inquire About {category.title}
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-brand-primary relative overflow-hidden" aria-labelledby="cta-heading">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-accent/20 via-transparent to-transparent" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-primary-light/20 rounded-2xl p-8 sm:p-12 lg:p-16 text-center border border-brand-primary-light/30">
            <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-brand-primary-lightest mb-8 max-w-2xl mx-auto">
              Our multidisciplinary teams can design integrated service packages tailored to your project's unique requirements. Let's discuss how we can support your next project.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-brand-primary bg-white rounded-lg hover:bg-brand-surface-hover transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brand-primary shadow-lg"
            >
              Request a Proposal
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}