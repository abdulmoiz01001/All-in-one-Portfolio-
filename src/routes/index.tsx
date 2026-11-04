import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, BarChart3, BrainCircuit, CheckCircle2,
  Code2, Download, ExternalLink, FileText, Github, Globe2, GraduationCap,
  Linkedin, Mail, Menu, MessageCircle, Rocket, ShieldCheck, Smartphone,
  Sparkles, Target, UserCheck, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdul Moiz — Full-Stack Engineer, AI Specialist & Growth Strategist" },
      { name: "description", content: "Evidence-based portfolio of Abdul Moiz. High-performance full-stack web applications, predictive machine learning pipelines, and measurable growth systems." },
      { property: "og:title", content: "Abdul Moiz — Full-Stack Engineer, AI Specialist & Growth Strategist" },
      { property: "og:description", content: "Digital products, intelligent ML systems, and measurable growth — built with evidence and speed." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = {
  Web: ["React.js", "Next.js", "Node.js", "Express.js", "NestJS", "PostgreSQL", "MongoDB", "WebSockets (Socket.io)", "REST APIs", "Docker"],
  Mobile: ["Flutter", "Dart", "React Native", "60fps Canvas UI", "Hardware Acceleration", "Cross-Platform Architecture"],
  "AI & Data": ["Python", "Pandas", "NumPy", "Scikit-Learn", "XGBoost", "Streamlit", "EDA", "Churn Prediction", "Collaborative Filtering", "Feature Engineering"],
  Growth: ["Meta Ads Manager", "TikTok Ads", "Meta Pixel", "Conversion API (CAPI)", "Commerce Manager", "Shopify Tracking", "Advantage+ Modeling"],
};

const expertise = [
  { icon: Code2, n: "01", title: "Products that perform", copy: "Full-stack web and mobile architectures engineered for sub-second load times, scale, and frictionless user flows.", tags: "React · Next.js · Node.js · Flutter · Socket.io" },
  { icon: BrainCircuit, n: "02", title: "Intelligence that predicts", copy: "Machine learning pipelines, customer churn classifiers, and interactive dashboards that turn data into automated decisions.", tags: "Python · XGBoost · Streamlit · Scikit-Learn" },
  { icon: Target, n: "03", title: "Growth you can measure", copy: "Full-funnel paid acquisition systems with server-side Conversion API (CAPI), pixel diagnostics, and winning creative testing.", tags: "Meta Ads · TikTok · Pixel · CAPI · Catalogs" },
];

const projects = [
  { label: "CONTENT PLATFORM", title: "UrduHindi.com", metric: "SEO & Scale", metricLabel: "Multilingual Reader Architecture", copy: "Engineered a multilingual literary platform with high-traffic responsive reading interfaces, reusable component modularity, and search-indexed SSR structure.", tech: ["React", "Node.js", "Express", "MongoDB"], accent: "bg-lime", link: "https://www.urduhindi.com/" },
  { label: "AI SUPER APP", title: "ShopSphere AI Engine", metric: "73% Recall", metricLabel: "XGBoost Churn & CLV Engine", copy: "End-to-end e-commerce ML dashboard integrating revenue forecasting with XGBoost Regressor, 73% recall churn classifier, item-based collaborative filtering, and Streamlit delivery.", tech: ["Python", "XGBoost", "Pandas", "Streamlit"], accent: "bg-sky" },
  { label: "AI SAAS", title: "AI Avatar Builder", metric: "Real-time", metricLabel: "Avatar Generation Queues", copy: "Built an AI avatar management dashboard featuring automated generation workflows, queue monitoring, user activity metrics, and responsive administrative control panels.", tech: ["React", "Node.js", "Express", "MongoDB"], accent: "bg-coral", link: "https://avatar-dash.vercel.app/" },
  { label: "PROP TECH", title: "Realtifaction", metric: "Lead CRM", metricLabel: "Live-Transfer Routing", copy: "Real estate lead-generation platform supporting qualified buyer/seller matching, automated verification workflows, transaction coordination, and business dashboards.", tech: ["React", "Node.js", "Express", "MongoDB"], accent: "bg-lime", link: "https://www.realtifaction.com/" },
  { label: "LEGAL TECH", title: "Justice In Search", metric: "Intake Flow", metricLabel: "Claimant Screening Pipeline", copy: "High-compliance legal intake platform designed for structured claimant qualification, identity verification, live case introductions, and structured lead routing.", tech: ["React", "Node.js", "Express", "MongoDB"], accent: "bg-sky", link: "https://justiceinsearch.vercel.app/" },
  { label: "HEALTH TECH", title: "TruCGM", metric: "Eligibility", metricLabel: "Medicare Device Verification", copy: "Healthcare eligibility verification platform for Medicare-focused CGM devices, featuring multi-step intake forms, insurance eligibility rules, and structured HIPAA-ready routing.", tech: ["React", "Node.js", "Express", "MongoDB"], accent: "bg-coral", link: "https://trucgm.vercel.app/" },
  { label: "CALCULATOR SAAS", title: "QuickFitCalculator", metric: "20+ Tools", metricLabel: "Dynamic Interactive Engines", copy: "Full-stack SaaS platform providing 20+ health, fitness, and financial calculators with dynamic chart visualizations, instant formula calculations, and pro tier architecture.", tech: ["React", "Node.js", "Express", "MongoDB"], accent: "bg-lime", link: "https://www.quickfitcalculator.com/" },
  { label: "PERSONAL BRANDING", title: "Abdul Samad Portfolio", metric: "Conversion UI", metricLabel: "Creator Showcase & Filters", copy: "High-converting portfolio for a video editor and creator featuring dynamic service showcase filtering, responsive video embeds, and conversion-optimized contact workflows.", tech: ["React", "Node.js", "Express", "MongoDB"], accent: "bg-sky", link: "https://abdulsamad-ruby.vercel.app/" },
  { label: "E-COMMERCE", title: "Janan's Mart HK", metric: "Multi-Category", metricLabel: "Food & Grocery Checkout", copy: "Full-featured e-commerce platform for international groceries and fresh products with category-based ordering flows, responsive shopping carts, and customer fulfillment.", tech: ["React", "Node.js", "Express", "MongoDB"], accent: "bg-coral" },
  { label: "LUXURY RETAIL", title: "TheSwissWatches", metric: "Catalog UX", metricLabel: "Luxury E-Commerce Engine", copy: "High-ticket watch retail platform with high-resolution visual presentation, advanced filtering, cart management, and seamless order checkout flows.", tech: ["React", "Node.js", "Express", "MongoDB"], accent: "bg-lime" },
];

const LINKEDIN_URL = "https://www.linkedin.com/in/abdul-moiz-6750b52a7/";
const GITHUB_URL = "https://github.com/abdulmoiz01001";
const EMAIL_ADDRESS = "abdulmoiz01001@gmail.com";
const WHATSAPP_URL = "https://wa.me/923079469891";

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Expertise", "#expertise"],
    ["Work", "#work"],
    ["Recruiter Brief", "#recruiter-brief"],
    ["Experience", "#experience"],
    ["Skills", "#skills"],
    ["CVs", "#cv"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-17 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="font-display text-lg font-bold text-ink tracking-tight flex items-center gap-1.5">
          <span>AM</span>
          <span className="h-2 w-2 rounded-full bg-primary" />
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub profile"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <Button asChild variant="outline" size="sm" className="h-9 rounded-full px-4 font-semibold ml-1">
            <a href="#cv"><Download className="mr-1.5 h-3.5 w-3.5" /> CVs</a>
          </Button>
          <Button asChild className="button-pop h-9 rounded-full px-5 font-bold">
            <a href="#contact">Contact <ArrowUpRight className="ml-1 h-3.5 w-3.5" /></a>
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-5 md:hidden">
          {links.map(([label, href]) => (
            <a onClick={() => setOpen(false)} key={href} href={href} className="block border-b border-border py-3.5 font-display text-xl font-semibold">
              {label}
            </a>
          ))}
          <div className="flex items-center gap-4 py-4 border-b border-border">
            <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2">
            <Button asChild variant="outline" className="w-full rounded-full">
              <a href="#cv" onClick={() => setOpen(false)}><Download className="mr-1 h-4 w-4" /> CVs</a>
            </Button>
            <Button asChild className="w-full rounded-full">
              <a href="#contact" onClick={() => setOpen(false)}>Get in Touch</a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

function SectionTitle({ eyebrow, title, copy, onDark }: { eyebrow: string; title: string; copy?: string; onDark?: boolean }) {
  return (
    <div className="section-heading mb-12 grid gap-5 lg:grid-cols-[1fr_.65fr] lg:items-end">
      <div>
        <p className={`mb-4 text-xs font-bold uppercase tracking-wider ${onDark ? "text-lime" : "text-primary"}`}>{eyebrow}</p>
        <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.02] md:text-6xl">{title}</h2>
      </div>
      {copy && <p className={`max-w-xl text-base leading-7 lg:justify-self-end ${onDark ? "text-background/70" : "text-muted-foreground"}`}>{copy}</p>}
    </div>
  );
}

function Index() {
  const [skill, setSkill] = useState<keyof typeof skills>("Web");
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: .1, rootMargin: "0px 0px -8% 0px" });
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top" className="min-h-screen overflow-x-clip bg-background text-foreground selection:bg-lime selection:text-ink">
      <Nav />

      {/* Floating Quick Contact Dock with WhatsApp, Email, GitHub & LinkedIn */}
      <aside className="contact-dock fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-background/90 p-2 shadow-xl backdrop-blur-xl md:bottom-8 md:left-auto md:right-7 md:translate-x-0 md:flex-col" aria-label="Quick contact">
        <Button asChild size="icon" className="contact-dock-button rounded-full" aria-label="Chat on WhatsApp">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle className="h-5 w-5" /></a>
        </Button>
        <Button asChild size="icon" variant="outline" className="contact-dock-button rounded-full bg-background" aria-label="Send an email">
          <a href={`mailto:${EMAIL_ADDRESS}`}><Mail className="h-5 w-5" /></a>
        </Button>
        <Button asChild size="icon" variant="outline" className="contact-dock-button rounded-full bg-background" aria-label="LinkedIn Profile">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4" /></a>
        </Button>
        <Button asChild size="icon" variant="outline" className="contact-dock-button rounded-full bg-background hidden md:inline-flex" aria-label="GitHub Profile">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer"><Github className="h-4 w-4" /></a>
        </Button>
        <span className="hidden px-1 font-mono text-[10px] font-bold uppercase text-muted-foreground [writing-mode:vertical-rl] md:block">Reach Out</span>
      </aside>

      {/* Hero Section */}
      <section className="relative min-h-[920px] overflow-hidden px-5 pb-14 pt-28 lg:px-8 lg:pt-36">
        <div className="pointer-events-none absolute left-[-8%] top-26 h-48 w-48 rounded-full border-[38px] border-lime/55 animate-morph md:h-72 md:w-72" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div className="relative z-10 animate-rise">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-border bg-surface px-4 py-2 text-xs font-bold shadow-sm">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-primary" />
              <span>AVAILABLE FOR HIRE · FULL-TIME REMOTE & CONTRACT</span>
            </div>
            <h1 className="font-display text-[clamp(3.5rem,8vw,7.6rem)] font-semibold leading-[.86] tracking-tight">
              Build. <span className="text-primary">Predict.</span><br />Grow.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
              I’m <strong className="text-foreground">Abdul Moiz</strong> — a Full-Stack Engineer, AI Specialist, and Growth Strategist. I engineer high-throughput web applications, deploy predictive machine learning pipelines, and scale data-driven customer acquisition funnels.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="button-pop h-13 rounded-full px-7 text-base font-bold shadow-md">
                <a href="#cv"><Download className="mr-2 h-5 w-5" /> Download CVs</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="button-pop h-13 rounded-full bg-surface px-7 text-base font-bold">
                <a href="#work">View Selected Work <ArrowDownRight className="ml-1 h-5 w-5" /></a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-13 rounded-full px-4 text-sm font-semibold text-muted-foreground hover:text-foreground">
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                  <Linkedin className="mr-1.5 h-4 w-4 text-[#0077b5]" /> LinkedIn
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-13 rounded-full px-4 text-sm font-semibold text-muted-foreground hover:text-foreground">
                <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                  <Github className="mr-1.5 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button asChild variant="ghost" size="lg" className="h-13 rounded-full px-4 text-sm font-semibold text-muted-foreground hover:text-foreground">
                <a href={`mailto:${EMAIL_ADDRESS}`}>
                  <Mail className="mr-1.5 h-4 w-4" /> Email
                </a>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[520px] animate-rise [animation-delay:180ms]">
            <div className="absolute -inset-5 rotate-3 rounded-[45%_55%_48%_52%] bg-lime" />
            <div className="absolute -inset-1 -rotate-3 rounded-[52%_48%_55%_45%] bg-sky/70" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[44%_56%_46%_54%] border-8 border-background bg-muted shadow-2xl">
              <picture>
                <source srcSet="/abdul-moiz-portrait.webp" type="image/webp" />
                <img
                  src="/abdul-moiz-portrait.jpg"
                  alt="Abdul Moiz - Full-Stack Engineer and AI Specialist"
                  width="520"
                  height="650"
                  loading="eager"
                  fetchPriority="high"
                  className="h-full w-full object-cover object-top"
                />
              </picture>
            </div>
            <div className="absolute -left-4 top-[18%] animate-float-y rounded-md border border-border bg-surface p-4 shadow-xl backdrop-blur">
              <p className="text-xs font-bold text-muted-foreground">PRODUCT SPEED</p>
              <p className="font-display text-3xl font-bold text-primary">+35%</p>
            </div>
            <div className="absolute -bottom-3 right-0 animate-float-y rounded-md border border-border bg-ink p-4 text-background shadow-xl [animation-delay:-2s]">
              <p className="text-xs font-bold opacity-70">CAMPAIGN CTR</p>
              <p className="font-display text-3xl font-bold text-lime">4%+</p>
            </div>
          </div>
        </div>

        {/* Quantifiable Evidence Stats */}
        <div className="hero-proof mx-auto mt-20 grid max-w-7xl grid-cols-2 border-y border-border md:grid-cols-4">
          {[
            ["35%", "faster load speed", "MERN & Next.js architecture at Callex LLC"],
            ["40%", "lower latency", "Real-time custom Socket.io pipelines"],
            ["4%+", "campaign CTR", "Full-funnel Meta & TikTok acquisition"],
            ["40+", "engineers trained", "Launched into code production at DOTCOM"],
          ].map(([n, label, sub], i) => (
            <div key={label} className={`p-5 md:p-7 ${i ? "border-l border-border" : ""}`}>
              <strong className="font-display text-3xl md:text-4xl text-foreground">{n}</strong>
              <p className="mt-1 text-xs font-bold uppercase tracking-wider text-primary">{label}</p>
              <p className="mt-1 text-[11px] text-muted-foreground hidden sm:block">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="overflow-hidden border-y border-ink bg-ink py-4 text-background">
        <div className="flex w-max animate-marquee gap-10 font-display text-sm font-semibold uppercase tracking-wider">
          {[...Array(2)].flatMap((_, round) => [
            "Production MERN & Next.js",
            "Predictive ML Pipelines",
            "Hardware-Accelerated 60fps Mobile",
            "Server-Side CAPI Tracking",
            "High-Throughput WebSockets",
            "Available For Global Remote",
          ].map((item) => (
            <span key={`${round}-${item}`} className="flex items-center gap-10">
              {item}
              <Sparkles className="text-lime h-4 w-4" />
            </span>
          )))}
        </div>
      </div>

      {/* RECRUITER EXECUTIVE BRIEF: Instant 30-second candidate scorecard */}
      <section id="recruiter-brief" className="border-b border-border bg-surface/60 px-5 py-20 lg:px-8" data-reveal="rise">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                <UserCheck className="h-4 w-4" /> Recruiter Executive Brief
              </p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold">Candidate at a Glance</h2>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground bg-background px-3.5 py-2 rounded-full border border-border hover:border-primary transition-colors"
              >
                <Linkedin className="h-3.5 w-3.5 text-[#0077b5]" /> View LinkedIn
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground bg-background px-3.5 py-2 rounded-full border border-border hover:border-primary transition-colors"
              >
                <Github className="h-3.5 w-3.5" /> View GitHub
              </a>
              <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground bg-background px-3.5 py-2 rounded-full border border-border">
                <ShieldCheck className="h-4 w-4 text-primary" /> Verified from official CV credentials
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Education</p>
                  <p className="font-semibold text-sm">Mehran University (MUET)</p>
                </div>
              </div>
              <p className="text-sm font-bold text-foreground">BS in Artificial Intelligence</p>
              <p className="mt-1 text-xs text-muted-foreground">2023 — 2027 (Expected) · Core in ML, Algorithms, RDBMS, and Distributed Systems.</p>
            </div>

            <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-lime/25 text-ink">
                  <Rocket className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Active Role</p>
                  <p className="font-semibold text-sm">Callex LLC · Remote</p>
                </div>
              </div>
              <p className="text-sm font-bold text-foreground">Full-Stack Web & Mobile Dev</p>
              <p className="mt-1 text-xs text-muted-foreground">Architecting MERN, Next.js, Flutter, and high-frequency real-time Socket.io architectures.</p>
            </div>

            <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-sky/20 text-foreground">
                  <Globe2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase">Location & Timezone</p>
                  <p className="font-semibold text-sm">Pakistan (UTC+5)</p>
                </div>
              </div>
              <p className="text-sm font-bold text-foreground">Global Remote Availability</p>
              <p className="mt-1 text-xs text-muted-foreground">Full overlap with European and North American working hours. Experienced with remote async workflows.</p>
            </div>

            <div className="rounded-xl border border-border bg-background p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-coral/20 text-foreground">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase">References & Trust</p>
                  <p className="font-semibold text-sm">Available on Request</p>
                </div>
              </div>
              <p className="text-sm font-bold text-foreground">Verified by Founders</p>
              <p className="mt-1 text-xs text-muted-foreground">Endorsed by Callex LLC Founder/CEO & DOTCOM Institute Director (contacts listed on master CV).</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="px-5 py-24 lg:px-8 lg:py-32" data-reveal="rise">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="One partner, three engines"
            title="Where product meets intelligence and growth."
            copy="No handoffs between strategy and execution. I connect full-stack engineering, predictive data algorithms, and customer acquisition campaigns."
          />
          <div className="grid border-t border-border lg:grid-cols-3" data-stagger>
            {expertise.map(({ icon: Icon, n, title, copy, tags }, i) => (
              <article key={title} className={`group py-9 transition-[transform,filter] duration-500 hover:-translate-y-2 hover:drop-shadow-xl lg:px-8 ${i ? "border-t border-border lg:border-l lg:border-t-0" : ""}`}>
                <div className="mb-14 flex items-start justify-between">
                  <Icon className="h-9 w-9 text-primary transition-transform group-hover:rotate-6 group-hover:scale-110" />
                  <span className="font-mono text-xs text-muted-foreground">/{n}</span>
                </div>
                <h3 className="font-display text-3xl font-semibold">{title}</h3>
                <p className="mt-4 leading-7 text-muted-foreground">{copy}</p>
                <p className="mt-7 text-xs font-bold uppercase tracking-wider text-foreground">{tags}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Work Section - Carousel */}
      <section id="work" className="bg-ink px-5 py-24 text-background lg:px-8 lg:py-32" data-reveal="scale">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            onDark
            eyebrow="Selected impact"
            title="Work shaped around the result."
            copy="Every system starts with a concrete business constraint and ends with a verifiable technical metric."
          />
          <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 3500, stopOnInteraction: true })]} className="w-full relative" data-stagger>
            <CarouselContent className="-ml-3 md:-ml-5">
              {projects.map((project, i) => (
                <CarouselItem key={project.title} className="pl-3 md:pl-5 basis-1/2 lg:basis-1/3">
                  <article className="group flex h-full flex-col overflow-hidden rounded-md border border-background/15 bg-background/5 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-background/30 hover:shadow-2xl">
                    <div className={`${project.accent} flex min-h-24 md:min-h-36 items-end p-4 md:p-6 text-ink justify-between`}>
                      <span className="font-display text-3xl md:text-5xl font-bold opacity-25">0{i + 1}</span>
                      <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-wider bg-ink/15 px-2 py-0.5 rounded">
                        {project.label}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-4 md:p-6">
                      <h3 className="font-display text-base md:text-2xl font-semibold leading-tight line-clamp-2 md:line-clamp-none">
                        {project.title}
                      </h3>
                      <p className="mt-2 md:mt-4 flex-1 text-[10px] md:text-sm leading-4 md:leading-6 text-background/70 line-clamp-3 md:line-clamp-none">
                        {project.copy}
                      </p>
                      <div className="mt-3 md:mt-7 flex flex-wrap gap-1 md:gap-2">
                        {project.tech.map((t) => (
                          <span key={t} className="rounded-full border border-background/20 px-1.5 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[10px] leading-none md:leading-normal">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-end justify-between border-t border-background/15 p-4 md:p-6">
                      <div>
                        <strong className="font-display text-lg md:text-2xl font-bold text-lime leading-none md:leading-normal">
                          {project.metric}
                        </strong>
                        <p className="mt-0.5 md:mt-1 text-[8px] md:text-xs text-background/60 leading-none md:leading-normal">
                          {project.metricLabel}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        {'link' in project && project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Visit live demo for ${project.title}`}
                            className="inline-flex items-center gap-1 rounded-full bg-background/10 hover:bg-background/20 px-2.5 py-1 text-xs text-background transition-colors"
                          >
                            <span>Live</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        ) : (
                          <span className="text-[10px] uppercase tracking-wider text-background/40 font-mono">Case Study</span>
                        )}
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex items-center justify-end gap-3">
              <CarouselPrevious className="static translate-y-0 border-border bg-transparent text-background hover:bg-background/10 hover:text-background h-12 w-12" />
              <CarouselNext className="static translate-y-0 border-border bg-transparent text-background hover:bg-background/10 hover:text-background h-12 w-12" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Archive Grid */}
      <section id="archive" className="border-t border-border bg-background px-5 py-24 lg:px-8 lg:py-32" data-reveal="scale">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Complete Archive" title="Every project, mapped out." copy="A full directory of my past work across web platforms, machine learning, and performance systems." />
          <div className="grid grid-cols-2 gap-3 md:gap-4 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] grid-flow-dense mt-10">
            {projects.map((project, i) => {
              const spans = [
                "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
                "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
                "col-span-1 row-span-2 md:col-span-1 md:row-span-2",
                "col-span-2 row-span-1 md:col-span-2 md:row-span-1",
                "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
                "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
                "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
                "col-span-2 row-span-1 md:col-span-2 md:row-span-1",
                "col-span-2 row-span-1 md:col-span-2 md:row-span-1",
                "col-span-1 row-span-1 md:col-span-1 md:row-span-1",
              ];
              const spanClass = spans[i % spans.length];
              return (
                <a 
                  key={project.title} 
                  href={project.link || GITHUB_URL} 
                  target="_blank"
                  rel="noreferrer"
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-surface p-4 md:p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/50 ${spanClass}`}
                >
                  <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition-all duration-700 group-hover:h-full group-hover:w-full group-hover:scale-150 group-hover:opacity-20 opacity-30 ${project.accent}`}></div>
                  <div className="absolute inset-0 bg-background/50 transition-opacity duration-500 group-hover:bg-transparent"></div>
                  
                  <div className="relative z-10 flex w-full items-start justify-between">
                     <span className="font-mono text-xs font-bold text-muted-foreground transition-colors group-hover:text-foreground">0{i + 1}</span>
                     <div className="rounded-full bg-background/60 p-1.5 md:p-2 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-primary group-hover:text-primary-foreground">
                       <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4" />
                     </div>
                  </div>

                  <div className="relative z-10 mt-auto pt-4 transition-transform duration-500 md:mt-10 md:pt-0 md:group-hover:-translate-y-8">
                    <p className="text-[8px] font-bold uppercase tracking-wider text-primary transition-colors group-hover:text-lime md:text-[10px]">{project.label}</p>
                    <h3 className="mt-1 font-display text-lg font-bold leading-tight md:mt-2 md:text-2xl line-clamp-2 md:line-clamp-none">{project.title}</h3>
                    
                    <div className="relative mt-2 w-full opacity-100 md:absolute md:left-0 md:top-full md:mt-4 md:opacity-0 md:transition-all md:duration-500 md:group-hover:opacity-100 md:pointer-events-none">
                        <div className="flex flex-wrap gap-1 md:gap-2">
                          {project.tech.map(t => (
                            <span key={t} className="rounded-full border border-foreground/20 bg-foreground/5 px-1.5 py-0.5 text-[8px] text-foreground md:px-2 md:py-1 md:text-[10px]">
                              {t}
                            </span>
                          ))}
                        </div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-5 py-24 lg:px-8 lg:py-32" data-reveal="left">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Career & Experience" title="Learning fast. Shipping faster." />
          <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
            <div>
              <p className="text-xl leading-8 text-muted-foreground">
                Based in Hyderabad, Pakistan and working remotely with global teams. Completing a BS in Artificial Intelligence at Mehran University while shipping production apps daily.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                <div className="flex items-center gap-3 font-semibold text-sm">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-lime text-ink"><Rocket className="h-5 w-5" /></span>
                  Open to full-time remote roles & select freelance contracts
                </div>
                <div className="flex items-center gap-3 font-semibold text-sm">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-sky/30 text-foreground"><CheckCircle2 className="h-5 w-5" /></span>
                  Verified founder & institute references on master CV
                </div>
              </div>
            </div>
            <div data-stagger>
              {[
                ["2024 — Present", "Full-Stack Web & Mobile Developer", "Callex LLC · Remote", "Architected end-to-end web apps with MERN & Next.js (+35% load speed boost). Standardized Socket.io modules reducing latency by 40%. Engineered 60fps Flutter builds and optimized Postgres indexing (-25% query time)."],
                ["2024 — Present", "Performance Marketer & Strategist", "E-Commerce & Digital Growth Projects · Remote", "Executed full-funnel Meta and TikTok campaigns delivering 1.8% to 4%+ CTR. Configured server-side Conversion API (CAPI), Advantage+ audience modeling, dynamic product catalogs, and creative split tests."],
                ["2023 — 2025", "MERN & Flutter Technical Trainer", "DOTCOM Institute of IT · Hyderabad", "Delivered comprehensive engineering coaching programs, successfully training and launching 40+ junior and mid-level engineers into production pipelines."],
                ["2023 — 2027", "BS Artificial Intelligence", "Mehran University of Engineering & Technology (MUET)", "Advanced coursework in Machine Learning, Algorithms, Data Structures, Relational Databases (RDBMS), and Deep Learning architectures."],
              ].map(([date, title, org, desc]) => (
                <div key={title} className="grid gap-2 border-t border-border py-7 md:grid-cols-[145px_1fr]">
                  <p className="text-xs font-bold text-primary">{date}</p>
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{title}</h3>
                    <p className="mt-1 font-semibold text-foreground/90">{org}</p>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Toolkit Section */}
      <section id="skills" className="border-y border-border bg-secondary/35 px-5 py-24 lg:px-8" data-reveal="right">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Working toolkit" title="The right stack for the right problem." copy="Production-tested technologies across web engineering, mobile development, machine learning, and paid acquisition." />
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
            {Object.keys(skills).map((name) => (
              <Button
                key={name}
                variant={skill === name ? "default" : "outline"}
                className="rounded-full px-5 font-semibold"
                onClick={() => setSkill(name as keyof typeof skills)}
                role="tab"
              >
                {name}
              </Button>
            ))}
          </div>
          <div key={skill} className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border animate-rise md:grid-cols-4" data-stagger>
            {skills[skill].map((item, i) => (
              <div key={item} className="group flex min-h-28 items-end justify-between bg-background p-5 transition-colors duration-300 hover:bg-lime/25">
                <span className="font-display text-lg font-semibold transition-transform duration-300 group-hover:-translate-y-1">{item}</span>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways I Can Help */}
      <section className="px-5 py-24 lg:px-8 lg:py-32" data-reveal="rise">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Core Value Proposition" title="From first idea to next growth curve." copy="How I contribute as a software engineer, AI builder, or growth partner." />
          <div className="grid gap-4 md:grid-cols-2" data-stagger>
            {[
              [Code2, "Product & MVP Development", "Fast, scalable full-stack web platforms from responsive frontends to authenticated backends, databases, and microservices."],
              [BrainCircuit, "AI Dashboards & ML Pipelines", "End-to-end predictive systems, customer churn models, and low-latency analytics dashboards deployed with Python & Streamlit."],
              [Smartphone, "Mobile Application Development", "Fluid 60fps cross-platform mobile apps for iOS and Android engineered with Flutter and React Native."],
              [BarChart3, "Paid Social & Conversion Tracking", "Full-funnel campaign architecture, server-side Conversion API (CAPI) diagnostics, dynamic catalogs, and creative testing."],
            ].map(([Icon, title, copy]) => {
              const ServiceIcon = Icon as typeof Code2;
              return (
                <article key={String(title)} className="group border border-border bg-surface p-7 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-xl md:p-9 rounded-xl">
                  <ServiceIcon className="h-8 w-8 text-primary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
                  <h3 className="mt-12 font-display text-2xl font-semibold">{String(title)}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{String(copy)}</p>
                </article>
              );
            })}
          </div>
          <div className="mt-16 grid gap-3 md:grid-cols-3" data-stagger>
            {[
              ["01", "Discover & Scope", "Analyze the business requirements, architecture bottlenecks, and concrete deliverables."],
              ["02", "Build & Verify", "Ship in rapid milestones, measure real performance against benchmarks, and test thoroughly."],
              ["03", "Deploy & Compound", "Launch to production, monitor telemetry, and optimize for long-term reliability."],
            ].map(([n, t, c]) => (
              <div key={n} className="process-step border-t-2 border-foreground pt-5">
                <span className="text-xs font-bold text-primary font-mono">{n}</span>
                <h3 className="mt-5 font-display text-2xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV DOWNLOAD HUB (Recruiter Favorite) */}
      <section id="cv" className="px-5 pb-24 lg:px-8" data-reveal="scale">
        <div className="mx-auto max-w-7xl border-y border-border py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-2">
                <FileText className="h-4 w-4" /> Recruiter Resource Center
              </p>
              <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold">Download Tailored CVs</h2>
              <p className="mt-2 text-muted-foreground text-sm max-w-xl">
                Choose the specialized resume matching your open headcount. Each CV highlights verified coursework, metrics, and references.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                ["/abdul-moiz-fullstack-cv.pdf", "Full-Stack Web & Mobile", "MERN, Next.js, Flutter, NestJS, Postgres"],
                ["/abdul-moiz-ai-cv.pdf", "AI & Data Science", "Python, XGBoost, Pandas, Streamlit"],
                ["/abdul-moiz-marketing-cv.pdf", "Growth & Meta Ads", "Meta Business Suite, TikTok Ads, CAPI"],
              ].map(([url, title, sub]) => (
                <div key={title} className="flex flex-col justify-between rounded-xl border border-border bg-surface p-4 shadow-sm hover:border-primary transition-colors">
                  <div>
                    <strong className="text-sm font-semibold block">{title}</strong>
                    <span className="text-[11px] text-muted-foreground block mt-1">{sub}</span>
                  </div>
                  <Button asChild size="sm" variant="default" className="mt-4 rounded-full w-full font-semibold">
                    <a href={url} target="_blank" rel="noreferrer" download>
                      <Download className="mr-1.5 h-3.5 w-3.5" /> PDF Download
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden bg-lime px-5 py-24 text-ink lg:px-8 lg:py-32" data-reveal="rise">
        <div className="absolute right-[-10%] top-[-40%] h-96 w-96 animate-orbit rounded-full border-[70px] border-sky/50 pointer-events-none" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-wider">Ready to connect?</p>
          <h2 className="mt-5 max-w-5xl font-display text-[clamp(3.4rem,8vw,7rem)] font-semibold leading-[.9]">
            Let’s make your next engineering hire count.
          </h2>
          <p className="mt-6 text-lg max-w-2xl text-ink/80 font-medium">
            Available for remote full-time opportunities, contract engineering roles, or consulting projects. Quick response guaranteed.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="button-pop h-14 rounded-full bg-ink px-8 text-background hover:bg-ink/90 font-bold shadow-xl">
              <a href={`mailto:${EMAIL_ADDRESS}`}>
                <Mail className="mr-2 h-5 w-5" /> Email {EMAIL_ADDRESS}
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="button-pop h-14 rounded-full border-ink bg-transparent px-8 hover:bg-background/50 font-bold">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp +923079469891
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="button-pop h-14 rounded-full border-ink bg-transparent px-8 hover:bg-background/50 font-bold">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-5 w-5" /> Connect on LinkedIn
              </a>
            </Button>
          </div>

          <div className="mt-18 flex flex-col gap-5 border-t border-ink/20 pt-7 md:flex-row md:items-center md:justify-between">
            <p className="font-semibold text-sm">
              Hyderabad, Pakistan · Available for Global Remote (US / EU / APAC overlap)
            </p>
            <div className="flex items-center gap-6">
              <a href={`mailto:${EMAIL_ADDRESS}`} className="flex items-center gap-2 font-semibold hover:underline text-sm">
                <Mail className="h-4 w-4" /> Email
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-semibold hover:underline text-sm">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-semibold hover:underline text-sm">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink px-5 py-8 text-background lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
          <p className="font-display font-semibold">Abdul Moiz — Build. Predict. Grow.</p>
          <div className="flex items-center gap-5 text-xs text-background/70">
            <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-background transition-colors flex items-center gap-1">
              <Mail className="h-3.5 w-3.5" /> Email
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-background transition-colors flex items-center gap-1">
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-background transition-colors flex items-center gap-1">
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
            <span>© 2026 Abdul Moiz</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
