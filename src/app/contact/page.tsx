"use client";

import { useState } from "react";
import Link from "next/link";

interface FormState {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  [key: string]: string;
}

const initialFormState: FormState = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

const services = [
  "Technical Inspection",
  "Engineering Consultancy",
  "Quality Assurance & QC",
  "Project Management",
  "Other / General Inquiry",
];

const contactInfo = [
  {
    label: "Email",
    value: "info@axicon-ltd.com",
    href: "mailto:info@axicon-ltd.com",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+65 1234 5678",
    href: "tel:+6512345678",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "AXICON Ltd",
    href: "https://www.linkedin.com/company/axicon-ltd/",
    icon: (
      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.19 8.69a4.5 4.5 0 010 7.81l3.06 3.06a4.5 4.5 0 11-6.37 6.37l-1.23-1.23a4.5 4.5 0 116.37-6.37z" />
      </svg>
    ),
  },
];

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export default function ContactPage() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formError, setFormError] = useState("");

  const validateForm = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) newErrors.message = "Please enter a message";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setStatus("submitting");
    setFormError("");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          ...formData,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.error) {
        throw new Error(data.message || "Request failed");
      }
      setStatus("success");
      setFormData(initialFormState);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setStatus("error");
      setFormError(message);
    }
  };

  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-surface to-white dark:from-brand-surface dark:to-brand-dark py-20 lg:py-32" aria-labelledby="contact-hero-heading">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fillRule=%22evenodd%22%3E%3Cg fill=%22%23084376%22 fillOpacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-primary mb-4">Get in Touch</p>
            <h1 id="contact-hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark dark:text-white leading-tight mb-6">
              Let's <span className="text-brand-primary">Connect</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-secondary dark:text-brand-accent-muted leading-relaxed">
              Whether you're planning a new project or need technical support, we'd love to hear from you. Send us a message and our team will respond within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-brand-dark" aria-labelledby="contact-form-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 animate-fade-in">
              <h2 id="contact-form-heading" className="sr-only">Contact Form</h2>

              {status === "success" ? (
                <div className="rounded-xl border border-brand-accent/30 bg-brand-accent/5 p-8 text-center animate-fade-in" role="status" aria-live="polite">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-accent/20 text-brand-primary mb-4">
                    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-brand-dark dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-brand-secondary dark:text-brand-accent-muted mb-6">Thank you for reaching out. We'll get back to you within one business day.</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-brand-primary bg-white border-2 border-brand-primary hover:bg-brand-surface rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                        Full Name <span className="text-brand-primary" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? "name-error" : undefined}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent ${
                          errors.name
                            ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                            : "border-brand-border dark:border-brand-border bg-white dark:bg-brand-surface"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                        Email Address <span className="text-brand-primary" aria-hidden="true">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "email-error" : undefined}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent ${
                          errors.email
                            ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                            : "border-brand-border dark:border-brand-border bg-white dark:bg-brand-surface"
                        }`}
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                        Company <span className="text-brand-secondary/60 dark:text-brand-accent-muted/60">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-brand-border dark:border-brand-border bg-white dark:bg-brand-surface transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                        placeholder="Company Ltd"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                        Phone <span className="text-brand-secondary/60 dark:text-brand-accent-muted/60">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-brand-border dark:border-brand-border bg-white dark:bg-brand-surface transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                        placeholder="+65 1234 5678"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-brand-border dark:border-brand-border bg-white dark:bg-brand-surface transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                    >
                      <option value="">Select a service...</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-dark dark:text-white mb-2">
                      Message <span className="text-brand-primary" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent resize-none ${
                        errors.message
                          ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                          : "border-brand-border dark:border-brand-border bg-white dark:bg-brand-surface"
                      }`}
                      placeholder="Tell us about your project or inquiry..."
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-brand-primary hover:bg-brand-primary-light rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>

                  {status === "error" && (
                    <p className="mt-4 text-sm text-red-600 dark:text-red-400" role="alert">
                      {formError || "Something went wrong. Please try again or contact us directly via email."}
                    </p>
                  )}
                </form>
              )}
            </div>

            <aside className="animate-slide-up" style={{ animationDelay: "200ms" }} aria-label="Contact information">
              <div className="bg-brand-surface dark:bg-brand-surface-hover rounded-xl p-8 border border-brand-border dark:border-brand-border sticky top-20">
                <h2 className="text-xl font-semibold text-brand-dark dark:text-white mb-6">Direct Contact</h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-primary/10 text-brand-primary" aria-hidden="true">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-brand-dark dark:text-white">{item.label}</p>
                        {item.label === "LinkedIn" ? (
                          <Link
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-base text-brand-secondary dark:text-brand-accent-muted hover:text-brand-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded"
                          >
                            {item.value}
                          </Link>
                        ) : (
                          <a
                            href={item.href}
                            className="text-base text-brand-secondary dark:text-brand-accent-muted hover:text-brand-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded"
                          >
                            {item.value}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-brand-border dark:border-brand-border">
                  <h3 className="text-sm font-semibold text-brand-dark dark:text-white mb-3">Office Location</h3>
                  <p className="text-sm text-brand-secondary dark:text-brand-accent-muted leading-relaxed">
                    AXICON Ltd<br />
                    Singapore<br />
                    Serving Southeast Asia
                  </p>
                </div>

                <div className="mt-8">
                  <Link
                    href="https://www.linkedin.com/company/axicon-ltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 text-base font-semibold text-white bg-brand-primary hover:bg-brand-primary-light rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 shadow-sm hover:shadow-md"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Follow on LinkedIn
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-surface dark:bg-brand-surface" aria-labelledby="map-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="map-heading" className="text-3xl sm:text-4xl font-bold text-brand-dark dark:text-white mb-4">
              Find Us
            </h2>
            <p className="text-lg text-brand-secondary dark:text-brand-accent-muted">
              Headquartered in Singapore, serving clients across Southeast Asia
            </p>
          </div>
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-brand-border dark:border-brand-border bg-brand-surface-hover">
            <iframe
              title="AXICON Ltd location map"
              src="https://www.google.com/maps?q=Singapore&output=embed"
              className="w-full h-full grayscale-[0.2]"
              loading="lazy"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-brand-primary/5 pointer-events-none" aria-hidden="true" />
          </div>
        </div>
      </section>
    </>
  );
}