import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, BarChart3, BrainCircuit,
  Code2, Download, Github, Mail, Menu, MessageCircle, Rocket, Smartphone,
  Sparkles, Target, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdul Moiz — Full-Stack, AI & Growth Specialist" },
      { name: "description", content: "I build fast digital products, intelligent data systems, and measurable paid growth for ambitious businesses." },
      { property: "og:title", content: "Abdul Moiz — Full-Stack, AI & Growth Specialist" },
      { property: "og:description", content: "Digital products, intelligent systems, and measurable growth — built together." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const skills = {
  Web: ["React.js", "Next.js", "Node.js", "Express.js", "NestJS", "REST APIs", "WebSockets"],
  Mobile: ["Flutter", "Dart", "React Native", "60fps UI"],
  "AI & Data": ["Python", "Pandas", "NumPy", "Scikit-Learn", "XGBoost", "EDA", "Recommendations"],
  Growth: ["Meta Ads", "TikTok Ads", "Meta Pixel", "CAPI", "Commerce Manager", "Shopify Tracking"],
};

const expertise = [
  { icon: Code2, n: "01", title: "Products that perform", copy: "Full-stack web and mobile experiences engineered for speed, scale, and a frictionless customer journey.", tags: "React · Next.js · Node · Flutter" },
  { icon: BrainCircuit, n: "02", title: "Intelligence that predicts", copy: "Machine learning pipelines and interactive dashboards that turn raw business data into decisions.", tags: "Python · XGBoost · Streamlit" },
  { icon: Target, n: "03", title: "Growth you can measure", copy: "Full-funnel paid social systems with reliable tracking, sharper creative tests, and buyer-focused strategy.", tags: "Meta · TikTok · Pixel · CAPI" },
];

const projects = [
  { label: "CONTENT PLATFORM", title: "UrduHindi.com", metric: "MERN", metricLabel: "Full-Stack Web Developer", copy: "Developed a multilingual Urdu/Hindi content platform featuring structured literary content, responsive reading interfaces, reusable components, and SEO-friendly architecture.", tech: ["React", "Node.js", "Express", "MongoDB"], accent: "bg-lime", link: "https://www.urduhindi.com/" },
  { label: "AI SAAS", title: "AI Avatar Builder", metric: "MERN", metricLabel: "Full-Stack Web Developer", copy: "Built an AI avatar management dashboard with avatar creation workflows, generation monitoring, user activity metrics, performance statistics, and responsive administrative interfaces.", tech: ["React", "Node.js", "Express", "MongoDB"], accent: "bg-sky", link: "https://avatar-dash.vercel.app/" },
  { label: "REAL ESTATE", title: "Realtifaction", metric: "MERN", metricLabel: "Full-Stack Web Developer", copy: "Developed a real-estate lead-generation platform supporting qualified buyer/seller leads, live-transfer workflows, lead verification, transaction coordination services, and responsive business interfaces.", tech: ["React", "Node.js", "Express", "MongoDB"], accent: "bg-coral", link: "https://www.realtifaction.com/" },
  { label: "LEGAL TECH", title: "Justice In Search", metric: "MERN", metricLabel: "Full-Stack Web Developer", copy: "Developed a legal intake platform designed to support claimant screening, qualification workflows, identity verification, live case introductions, and structured routing.", tech: ["React", "Node.js", "Express", "MongoDB"], accent: "bg-lime", link: "https://justiceinsearch.vercel.app/" },
  { label: "HEALTHCARE", title: "TruCGM", metric: "MERN", metricLabel: "Full-Stack Web Developer", copy: "Developed a healthcare eligibility platform for Medicare-focused CGM access, featuring patient intake forms, insurance and device selection, eligibility workflows, and structured information.", tech: ["React", "Node.js", "Express", "MongoDB"], accent: "bg-sky", link: "https://trucgm.vercel.app/" },
  { label: "PERSONAL BRANDING", title: "Abdul Samad Portfolio", metric: "MERN", metricLabel: "Full-Stack Web Developer", copy: "Designed and developed a modern portfolio for a video editor and AI creator, featuring service showcases, categorized filtering, experience timeline, and conversion-focused contact sections.", tech: ["React", "Node.js", "Express", "MongoDB"], accent: "bg-coral", link: "https://abdulsamad-ruby.vercel.app/" },
  { label: "SAAS PLATFORM", title: "QuickFitCalculator", metric: "20+", metricLabel: "Interactive Calculators", copy: "Developed a full-stack calculator SaaS platform offering health, fitness and financial calculators with interactive inputs, personalized calculations, charts, and a free/pro feature architecture.", tech: ["React", "Node.js", "Express", "MongoDB"], accent: "bg-lime", link: "https://www.quickfitcalculator.com/" },
  { label: "E-COMMERCE", title: "Janan's Mart HK", metric: "MERN", metricLabel: "Full-Stack Web Developer", copy: "Developed an e-commerce platform for grocery, fresh-product and restaurant takeaway ordering, implementing product browsing, category-based shopping flows, and customer-focused ordering.", tech: ["React", "Node.js", "Express", "MongoDB"], accent: "bg-sky" },
  { label: "LUXURY RETAIL", title: "TheSwissWatches", metric: "MERN", metricLabel: "Full-Stack Web Developer", copy: "Developed a premium MERN-stack e-commerce platform for luxury watches, featuring product catalogues, detailed presentation, responsive shopping interfaces, and cart/order workflows.", tech: ["React", "Node.js", "Express", "MongoDB"], accent: "bg-coral" }
];

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [["Expertise", "#expertise"], ["Work", "#work"], ["Experience", "#experience"], ["Skills", "#skills"]];
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
    <div className="mx-auto flex h-17 max-w-7xl items-center justify-between px-5 lg:px-8">
      <a href="#top" className="font-display text-lg font-bold text-ink">AM<span className="text-primary">.</span></a>
      <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
        {links.map(([label, href]) => <a key={href} href={href} className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">{label}</a>)}
      </nav>
       <Button asChild className="button-pop hidden h-10 rounded-full px-5 font-bold md:inline-flex"><a href="#contact">Start a project <ArrowUpRight /></a></Button>
      <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <nav className="border-t border-border bg-background px-5 py-5 md:hidden">{links.map(([label, href]) => <a onClick={() => setOpen(false)} key={href} href={href} className="block border-b border-border py-4 font-display text-2xl font-semibold">{label}</a>)}<Button asChild className="mt-5 w-full rounded-full"><a href="#contact">Start a project</a></Button></nav>}
  </header>;
}

function SectionTitle({ eyebrow, title, copy, onDark }: { eyebrow: string; title: string; copy?: string; onDark?: boolean }) {
  return <div className="section-heading mb-12 grid gap-5 lg:grid-cols-[1fr_.65fr] lg:items-end">
    <div><p className={`mb-4 text-xs font-bold uppercase ${onDark ? "text-lime" : "text-primary"}`}>{eyebrow}</p><h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.02] md:text-6xl">{title}</h2></div>
    {copy && <p className={`max-w-xl text-base leading-7 lg:justify-self-end ${onDark ? "text-background/65" : "text-muted-foreground"}`}>{copy}</p>}
  </div>;
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
    <main id="top" className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Nav />
      <aside className="contact-dock fixed bottom-5 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-background/90 p-2 shadow-xl backdrop-blur-xl md:bottom-8 md:left-auto md:right-7 md:translate-x-0 md:flex-col" aria-label="Quick contact">
        <Button asChild size="icon" className="contact-dock-button rounded-full" aria-label="Chat on WhatsApp">
          <a href="https://wa.me/923079469891" target="_blank" rel="noreferrer"><MessageCircle /></a>
        </Button>
        <Button asChild size="icon" variant="outline" className="contact-dock-button rounded-full bg-background" aria-label="Send an email">
          <a href="mailto:abdulmoiz01001@gmail.com"><Mail /></a>
        </Button>
        <span className="hidden px-1 font-mono text-[10px] font-bold uppercase text-muted-foreground [writing-mode:vertical-rl] md:block">Contact</span>
      </aside>
      <section className="relative min-h-[920px] overflow-hidden px-5 pb-14 pt-30 lg:px-8 lg:pt-36">
         <div className="pointer-events-none absolute left-[-8%] top-26 h-48 w-48 rounded-full border-[38px] border-lime/55 animate-morph md:h-72 md:w-72" />
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div className="relative z-10 animate-rise">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-bold"><span className="h-2 w-2 animate-pulse rounded-full bg-primary" /> AVAILABLE FOR SELECT PROJECTS</div>
            <h1 className="font-display text-[clamp(3.5rem,8vw,7.6rem)] font-semibold leading-[.86]">
              Build. <span className="text-primary">Predict.</span><br />Grow.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">I’m <strong className="text-foreground">Abdul Moiz</strong> — a full-stack developer, AI specialist, and performance marketer turning ambitious ideas into products that work and growth that compounds.</p>
            <div className="mt-9 flex flex-wrap gap-3">
               <Button asChild size="lg" className="button-pop h-13 rounded-full px-7 text-base font-bold"><a href="#contact">Start a project <ArrowDownRight /></a></Button>
               <Button asChild variant="outline" size="lg" className="button-pop h-13 rounded-full bg-surface px-7 text-base font-bold"><a href="#work">View selected work</a></Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[520px] animate-rise [animation-delay:180ms]">
            <div className="absolute -inset-5 rotate-3 rounded-[45%_55%_48%_52%] bg-lime" />
            <div className="absolute -inset-1 -rotate-3 rounded-[52%_48%_55%_45%] bg-sky/70" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[44%_56%_46%_54%] border-8 border-background bg-muted">
              <img src="/abdul-moiz-portrait.jpg" alt="Abdul Moiz in professional attire" className="h-full w-full object-cover object-top" />
            </div>
            <div className="absolute -left-4 top-[18%] animate-float-y rounded-md border border-border bg-surface p-4 shadow-xl backdrop-blur"><p className="text-xs font-bold text-muted-foreground">PRODUCT SPEED</p><p className="font-display text-3xl font-bold text-primary">+35%</p></div>
            <div className="absolute -bottom-3 right-0 animate-float-y rounded-md border border-border bg-ink p-4 text-background shadow-xl [animation-delay:-2s]"><p className="text-xs font-bold opacity-70">CAMPAIGN CTR</p><p className="font-display text-3xl font-bold">4%+</p></div>
          </div>
        </div>
         <div className="hero-proof mx-auto mt-20 grid max-w-7xl grid-cols-2 border-y border-border md:grid-cols-4">
          {[["35%", "faster load speed"], ["40%", "lower latency"], ["4%+", "campaign CTR"], ["40+", "engineers trained"]].map(([n, label], i) => <div key={label} className={`p-5 md:p-7 ${i ? "border-l border-border" : ""}`}><strong className="font-display text-3xl md:text-4xl">{n}</strong><p className="mt-1 text-xs font-semibold text-muted-foreground">{label}</p></div>)}
        </div>
      </section>

      <div className="overflow-hidden border-y border-ink bg-ink py-4 text-background">
        <div className="flex w-max animate-marquee gap-10 font-display text-sm font-semibold uppercase">
          {[...Array(2)].flatMap((_, round) => ["Full-stack products", "AI systems", "Mobile apps", "Performance growth", "Better decisions"].map((item) => <span key={`${round}-${item}`} className="flex items-center gap-10">{item}<Sparkles className="text-lime" /></span>))}
        </div>
      </div>

       <section id="expertise" className="px-5 py-24 lg:px-8 lg:py-32" data-reveal="rise">
        <div className="mx-auto max-w-7xl"><SectionTitle eyebrow="One partner, three engines" title="Where product meets intelligence and growth." copy="No handoffs between strategy and execution. I connect the product, the data behind it, and the campaigns that bring customers in." />
           <div className="grid border-t border-border lg:grid-cols-3" data-stagger>
             {expertise.map(({ icon: Icon, n, title, copy, tags }, i) => <article key={title} className={`group py-9 transition-[transform,filter] duration-500 hover:-translate-y-2 hover:drop-shadow-xl lg:px-8 ${i ? "border-t border-border lg:border-l lg:border-t-0" : ""}`}>
              <div className="mb-14 flex items-start justify-between"><Icon className="h-9 w-9 text-primary transition-transform group-hover:rotate-6 group-hover:scale-110" /><span className="font-mono text-xs text-muted-foreground">/{n}</span></div>
              <h3 className="font-display text-3xl font-semibold">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{copy}</p><p className="mt-7 text-xs font-bold uppercase text-foreground">{tags}</p>
            </article>)}
          </div>
        </div>
      </section>

       <section id="work" className="bg-ink px-5 py-24 text-background lg:px-8 lg:py-32" data-reveal="scale">
        <div className="mx-auto max-w-7xl"><SectionTitle onDark eyebrow="Selected impact" title="Work shaped around the result." copy="Every system starts with a business constraint and ends with a measurable improvement." />
           <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 3500, stopOnInteraction: true })]} className="w-full relative" data-stagger>
            <CarouselContent className="-ml-3 md:-ml-5">
              {projects.map((project, i) => (
                <CarouselItem key={project.title} className="pl-3 md:pl-5 basis-1/2 lg:basis-1/3">
                  <article className="group flex h-full flex-col overflow-hidden rounded-md border border-background/15 bg-background/5 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-background/30 hover:shadow-2xl">
                    <div className={`${project.accent} flex min-h-24 md:min-h-36 items-end p-4 md:p-6 text-ink`}><span className="font-display text-3xl md:text-5xl font-bold opacity-25">0{i + 1}</span></div>
                    <div className="flex flex-1 flex-col p-4 md:p-6"><p className="text-[8px] md:text-xs font-bold text-lime uppercase">{project.label}</p><h3 className="mt-1 md:mt-3 font-display text-base md:text-2xl font-semibold leading-tight line-clamp-2 md:line-clamp-none">{project.title}</h3><p className="mt-2 md:mt-4 flex-1 text-[10px] md:text-sm leading-4 md:leading-6 text-background/65 line-clamp-3 md:line-clamp-none">{project.copy}</p><div className="mt-3 md:mt-7 flex flex-wrap gap-1 md:gap-2">{project.tech.map((t) => <span key={t} className="rounded-full border border-background/20 px-1.5 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[10px] leading-none md:leading-normal">{t}</span>)}</div></div>
                    <div className="flex items-end justify-between border-t border-background/15 p-4 md:p-6"><div><strong className="font-display text-lg md:text-2xl font-bold text-lime leading-none md:leading-normal">{project.metric}</strong><p className="mt-0.5 md:mt-1 text-[8px] md:text-xs text-background/60 leading-none md:leading-normal">{project.metricLabel}</p></div>{'link' in project && project.link ? <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`} className="inline-block"><ArrowUpRight className="h-4 w-4 md:h-6 md:w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a> : <ArrowUpRight className="h-4 w-4 md:h-6 md:w-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 opacity-50" />}</div>
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

       <section id="archive" className="border-t border-border bg-background px-5 py-24 lg:px-8 lg:py-32" data-reveal="scale">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Complete Archive" title="Every project, mapped out." copy="A full directory of my past work across web, mobile, AI, and growth." />
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
              ];
              const spanClass = spans[i % spans.length];
              return (
                <a 
                  key={project.title} 
                  href={project.link || "#"} 
                  target={project.link ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-xl border border-border bg-surface p-4 md:p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:border-primary/50 ${spanClass}`}
                >
                  {/* Glowing background orb that expands on hover */}
                  <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition-all duration-700 group-hover:h-full group-hover:w-full group-hover:scale-150 group-hover:opacity-20 opacity-30 ${project.accent}`}></div>
                  
                  {/* Base background fill */}
                  <div className="absolute inset-0 bg-background/50 transition-opacity duration-500 group-hover:bg-transparent"></div>
                  
                  <div className="relative z-10 flex w-full items-start justify-between">
                     <span className="font-mono text-xs font-bold text-muted-foreground transition-colors group-hover:text-foreground">0{i + 1}</span>
                     <div className="rounded-full bg-background/50 p-1.5 md:p-2 backdrop-blur-sm transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-primary group-hover:text-primary-foreground">
                       <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4" />
                     </div>
                  </div>

                  <div className="relative z-10 mt-auto pt-4 transition-transform duration-500 md:mt-10 md:pt-0 md:group-hover:-translate-y-8">
                    <p className="text-[8px] font-bold uppercase tracking-wider text-primary transition-colors group-hover:text-lime md:text-[10px]">{project.label}</p>
                    <h3 className="mt-1 font-display text-lg font-bold leading-tight md:mt-2 md:text-2xl line-clamp-2 md:line-clamp-none">{project.title}</h3>
                    
                    {/* Tech stack: static on mobile, animated hover-reveal on desktop */}
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

       <section id="experience" className="px-5 py-24 lg:px-8 lg:py-32" data-reveal="left"><div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Experience" title="Learning fast. Shipping faster." />
        <div className="grid gap-14 lg:grid-cols-[.65fr_1.35fr]">
          <div><p className="text-xl leading-8 text-muted-foreground">Based in Hyderabad, Pakistan and working remotely. Currently completing a BS in Artificial Intelligence at Mehran University.</p><div className="mt-8 flex items-center gap-3 font-semibold"><span className="grid h-10 w-10 place-items-center rounded-full bg-lime"><Rocket className="h-5 w-5" /></span> Open to global freelance work</div></div>
           <div data-stagger>{[
            ["2024 — Present", "Full-Stack Web & Mobile Developer", "Callex LLC · Remote", "MERN, Next.js, Flutter, React Native and real-time systems."],
            ["2024 — Present", "Performance Marketer", "E-commerce & digital growth projects", "Meta and TikTok funnels, tracking, catalogs, and creative testing."],
            ["2023 — 2025", "MERN & Flutter Technical Trainer", "DOTCOM Institute of IT", "Trained and launched 40+ engineers into production workflows."],
            ["2023 — 2027", "BS Artificial Intelligence", "Mehran University (MUET)", "Machine learning, data structures, algorithms, and databases."],
          ].map(([date, title, org, desc]) => <div key={title} className="grid gap-2 border-t border-border py-7 md:grid-cols-[145px_1fr]"><p className="text-xs font-bold text-primary">{date}</p><div><h3 className="font-display text-2xl font-semibold">{title}</h3><p className="mt-1 font-semibold">{org}</p><p className="mt-3 text-muted-foreground">{desc}</p></div></div>)}</div>
        </div>
      </div></section>

       <section id="skills" className="border-y border-border bg-secondary/35 px-5 py-24 lg:px-8" data-reveal="right"><div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Working toolkit" title="The right stack for the right problem." />
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">{Object.keys(skills).map((name) => <Button key={name} variant={skill === name ? "default" : "outline"} className="rounded-full" onClick={() => setSkill(name as keyof typeof skills)} role="tab">{name}</Button>)}</div>
         <div key={skill} className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border animate-rise md:grid-cols-4" data-stagger>{skills[skill].map((item, i) => <div key={item} className="group flex min-h-28 items-end justify-between bg-background p-5 transition-colors duration-300 hover:bg-lime/25"><span className="font-display text-lg font-semibold transition-transform duration-300 group-hover:-translate-y-1">{item}</span><span className="text-xs text-muted-foreground">0{i + 1}</span></div>)}</div>
      </div></section>

       <section className="px-5 py-24 lg:px-8 lg:py-32" data-reveal="rise"><div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Ways I can help" title="From first idea to next growth curve." />
         <div className="grid gap-4 md:grid-cols-2" data-stagger>{[
          [Code2, "Product & MVP development", "Fast, scalable web platforms from interface to infrastructure."],
          [BrainCircuit, "AI dashboards & analytics", "Predictive systems that make complex data useful."],
          [Smartphone, "Mobile application development", "Fluid cross-platform experiences with Flutter and React Native."],
          [BarChart3, "Paid social & tracking", "Campaign strategy, conversion signals, and creative testing."],
         ].map(([Icon, title, copy]) => { const ServiceIcon = Icon as typeof Code2; return <article key={String(title)} className="group border border-border bg-surface p-7 transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-xl md:p-9"><ServiceIcon className="h-8 w-8 text-primary transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" /><h3 className="mt-12 font-display text-2xl font-semibold">{String(title)}</h3><p className="mt-3 text-muted-foreground">{String(copy)}</p></article>; })}</div>
         <div className="mt-16 grid gap-3 md:grid-cols-3" data-stagger>{[["01", "Discover", "Define the constraint and the outcome."], ["02", "Build & test", "Move quickly, measure honestly, refine."], ["03", "Launch & optimize", "Ship, learn, and compound what works."]].map(([n,t,c]) => <div key={n} className="process-step border-t-2 border-foreground pt-5"><span className="text-xs font-bold text-primary">{n}</span><h3 className="mt-5 font-display text-2xl font-semibold">{t}</h3><p className="mt-2 text-sm text-muted-foreground">{c}</p></div>)}</div>
      </div></section>

       <section className="px-5 pb-24 lg:px-8" data-reveal="scale"><div className="mx-auto max-w-7xl border-y border-border py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"><div><p className="text-xs font-bold uppercase text-primary">Choose the right profile</p><h2 className="mt-2 font-display text-3xl font-semibold">Download my CV</h2></div><div className="flex flex-wrap gap-2">
          {[["/abdul-moiz-fullstack-cv.pdf", "Full-stack CV"], ["/abdul-moiz-ai-cv.pdf", "AI & Data CV"], ["/abdul-moiz-marketing-cv.pdf", "Growth CV"]].map(([url, label]) => <Button asChild key={label} variant="outline" className="rounded-full bg-surface"><a href={url} target="_blank" rel="noreferrer"><Download /> {label}</a></Button>)}
        </div></div>
      </div></section>

       <section id="contact" className="relative overflow-hidden bg-lime px-5 py-24 text-ink lg:px-8 lg:py-32" data-reveal="rise"><div className="absolute right-[-10%] top-[-40%] h-96 w-96 animate-orbit rounded-full border-[70px] border-sky/50" /><div className="relative mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase">Have a real problem to solve?</p><h2 className="mt-5 max-w-5xl font-display text-[clamp(3.4rem,8vw,7rem)] font-semibold leading-[.9]">Let’s make your next move count.</h2>
         <div className="mt-12 flex flex-wrap items-center gap-3"><Button asChild size="lg" className="button-pop h-14 rounded-full bg-ink px-7 text-background hover:bg-ink/90"><a href="mailto:abdulmoiz01001@gmail.com">Tell me about your project <ArrowUpRight /></a></Button><Button asChild variant="outline" size="lg" className="button-pop h-14 rounded-full border-ink bg-transparent px-7 hover:bg-background/50"><a href="https://wa.me/923079469891" target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp +923079469891</a></Button></div>
        <div className="mt-18 flex flex-col gap-5 border-t border-ink/20 pt-7 md:flex-row md:items-center md:justify-between"><p className="font-semibold">Hyderabad, Pakistan · Working remotely</p><div className="flex gap-5"><a href="https://github.com/abdulmoiz01001" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-semibold hover:underline"><Github className="h-5 w-5" /> GitHub</a><a href="mailto:abdulmoiz01001@gmail.com" className="font-semibold hover:underline">Email</a></div></div>
      </div></section>
      <footer className="bg-ink px-5 py-8 text-background lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between"><p className="font-display font-semibold">Abdul Moiz — Build. Predict. Grow.</p><p className="text-background/50">© 2026 Abdul Moiz</p></div></footer>
    </main>
  );
}
