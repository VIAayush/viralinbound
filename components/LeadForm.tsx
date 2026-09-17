"use client";

import { useState, type FormEvent } from "react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { useAppState } from "@/lib/app-context";
import { FORM_HELP_OPTIONS, FORM_INDUSTRY_OPTIONS, FORM_TIMELINE_OPTIONS } from "@/lib/content";
import { IconCheck } from "./ui/icons";

type FieldName = "name" | "company" | "email" | "phone" | "industry" | "timeline" | "help";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Record<FieldName, string>): Partial<Record<FieldName, string>> {
  const errors: Partial<Record<FieldName, string>> = {};
  if (!values.name.trim() || values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!values.company.trim()) errors.company = "Please enter a company name.";
  if (!values.email.trim() || !EMAIL_RE.test(values.email.trim())) errors.email = "Please enter a valid work email.";
  if (!values.phone.trim() || values.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
  if (!values.industry) errors.industry = "Please select an industry.";
  if (!values.timeline) errors.timeline = "Please select a timeline.";
  if (!values.help) errors.help = "Please select what you need help with.";
  return errors;
}

const inputBase =
  "w-full rounded-lg border bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-accent";
const labelClass = "text-sm font-medium text-ink-soft";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <span role="alert" className="text-xs font-medium text-crit">
      {message}
    </span>
  );
}

export default function LeadForm() {
  const { leadPrefill, demoMode } = useAppState();
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [values, setValues] = useState<Record<FieldName, string>>({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    timeline: "",
    help: "",
  });

  const [syncedPrefill, setSyncedPrefill] = useState<string | null>(null);
  if (leadPrefill !== syncedPrefill) {
    setSyncedPrefill(leadPrefill);
    if (leadPrefill && (FORM_HELP_OPTIONS as readonly string[]).includes(leadPrefill)) {
      setValues((prev) => ({ ...prev, help: leadPrefill }));
    }
  }

  function setField(field: FieldName, value: string) {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    if (touched[field]) {
      setErrors(validate(nextValues));
    }
  }

  function handleBlur(field: FieldName) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(values));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, company: true, email: true, phone: true, industry: true, timeline: true, help: true });
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("loading");
    window.setTimeout(() => setStatus("done"), 900);
  }

  function fieldClass(field: FieldName) {
    const hasError = touched[field] && errors[field];
    return `${inputBase} ${hasError ? "border-crit focus-visible:outline-crit" : "border-border-strong focus-visible:outline-accent"}`;
  }

  return (
    <section id="contact" className="scroll-mt-16 border-b border-border bg-paper">
      <Container className="py-20 sm:py-24">
        <SectionHeading
          eyebrow="Get started"
          title="Book a Strategy Call"
          description="Tell us a little about the business — a specialist will follow up to understand the requirement before proposing an approach."
        />

        <Reveal className="mt-10 max-w-2xl rounded-2xl border border-border bg-surface p-6 sm:p-8">
          {status === "done" ? (
            <div className="flex flex-col items-center gap-3 py-10 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-good-soft text-good">
                <IconCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl text-ink">Thank you. Your request has been received.</h3>
              <p className="max-w-sm text-sm text-ink-soft">A specialist will reach out shortly to discuss next steps.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={values.name}
                    onChange={(e) => setField("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    aria-invalid={Boolean(touched.name && errors.name)}
                    className={fieldClass("name")}
                  />
                  <FieldError message={touched.name ? errors.name : undefined} />
                </label>
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>Company</span>
                  <input
                    type="text"
                    placeholder="Company name"
                    value={values.company}
                    onChange={(e) => setField("company", e.target.value)}
                    onBlur={() => handleBlur("company")}
                    aria-invalid={Boolean(touched.company && errors.company)}
                    className={fieldClass("company")}
                  />
                  <FieldError message={touched.company ? errors.company : undefined} />
                </label>
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>Work email</span>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    value={values.email}
                    onChange={(e) => setField("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    aria-invalid={Boolean(touched.email && errors.email)}
                    className={fieldClass("email")}
                  />
                  <FieldError message={touched.email ? errors.email : undefined} />
                </label>
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>Phone</span>
                  <input
                    type="tel"
                    placeholder="+91"
                    value={values.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                    onBlur={() => handleBlur("phone")}
                    aria-invalid={Boolean(touched.phone && errors.phone)}
                    className={fieldClass("phone")}
                  />
                  <FieldError message={touched.phone ? errors.phone : undefined} />
                </label>
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>Industry</span>
                  <select
                    value={values.industry}
                    onChange={(e) => setField("industry", e.target.value)}
                    onBlur={() => handleBlur("industry")}
                    aria-invalid={Boolean(touched.industry && errors.industry)}
                    className={fieldClass("industry")}
                  >
                    <option value="" disabled>
                      Select an industry
                    </option>
                    {FORM_INDUSTRY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <FieldError message={touched.industry ? errors.industry : undefined} />
                </label>
                <label className="flex flex-col gap-2">
                  <span className={labelClass}>Timeline</span>
                  <select
                    value={values.timeline}
                    onChange={(e) => setField("timeline", e.target.value)}
                    onBlur={() => handleBlur("timeline")}
                    aria-invalid={Boolean(touched.timeline && errors.timeline)}
                    className={fieldClass("timeline")}
                  >
                    <option value="" disabled>
                      Select a timeline
                    </option>
                    {FORM_TIMELINE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  <FieldError message={touched.timeline ? errors.timeline : undefined} />
                </label>
              </div>

              <label className="flex flex-col gap-2">
                <span className={labelClass}>What do you need help with?</span>
                <select
                  value={values.help}
                  onChange={(e) => setField("help", e.target.value)}
                  onBlur={() => handleBlur("help")}
                  aria-invalid={Boolean(touched.help && errors.help)}
                  className={fieldClass("help")}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {FORM_HELP_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <FieldError message={touched.help ? errors.help : undefined} />
              </label>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-1 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-accent-strong disabled:opacity-60"
              >
                {status === "loading" ? "Submitting…" : "Book a Strategy Call"}
              </button>

              {demoMode && (
                <p className="text-xs text-ink-faint">
                  Demo mode — this submission is simulated locally for this presentation and is not connected to a
                  live CRM.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
