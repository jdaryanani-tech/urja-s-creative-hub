import { ArrowRight, Check, Clock3, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

type PageKey = "about" | "programs" | "training" | "placements" | "admissions" | "contact";

const pageContent: Record<PageKey, {
  label: string;
  title: string;
  accent: string;
  intro: string;
  image: string;
}> = {
  about: {
    label: "About Us",
    title: "A practical path into the café industry.",
    accent: "Aroma",
    intro: "Aroma Institute combines structured classroom learning, live café exposure, and an industry network to help ambitious people build real hospitality careers.",
    image: "/reference-assets/pexels-sydnee-more-30355262-6936981_1771624143483-DDs4UDqC.jpg",
  },
  programs: {
    label: "Our Programs",
    title: "Specialized training for modern café careers.",
    accent: "Programs",
    intro: "Choose a focused route into coffee, beverage craft, café operations, or entrepreneurship — with practical learning built into every stage.",
    image: "/reference-assets/barista.png",
  },
  training: {
    label: "Learn & Earn",
    title: "Learn in class. Grow on the floor.",
    accent: "Training model",
    intro: "Our industry-integrated model blends daily classes with practical shifts, mentorship, and real customer experience inside operating cafés.",
    image: "/reference-assets/training-bg.mp4",
  },
  placements: {
    label: "Industry Network",
    title: "A stronger first step after graduation.",
    accent: "Placement support",
    intro: "From café groups to beverage brands, our network helps students find the right environment to start, grow, and keep building their craft.",
    image: "/reference-assets/placement-bg.mp4",
  },
  admissions: {
    label: "How to Join",
    title: "Your café journey starts with one conversation.",
    accent: "Admissions",
    intro: "Apply in a few simple steps, speak with our counselors, and choose a program aligned with your goals, schedule, and ambitions.",
    image: "/reference-assets/pexels-julieaagaard-2467287_1771624608263-9kryoICD.jpg",
  },
  contact: {
    label: "Get in Touch",
    title: "Let’s plan your next move.",
    accent: "Contact",
    intro: "Tell us what you want to learn or build. Our admissions team will help you find the right program and next step.",
    image: "/reference-assets/pexels-quang-nguyen-vinh-222549-2159065_1771624542454-BFXj1F3D.jpg",
  },
};

const programs = [
  ["Professional Barista Certification", "3 Months", "Build espresso, brewing, service, and café workflow confidence."],
  ["Advanced Brewing & Café Operations", "6 Months", "Go deeper into specialty coffee, operations, leadership, and paid internship experience."],
  ["Professional Mixology & Mocktail Specialist", "9 Months", "Learn beverage craft, flavor science, signature drinks, and menu engineering."],
  ["Café Entrepreneur Incubation Program", "12 Months", "Move from idea to launch with financial, operational, and opening support."],
];

export function SectionPage({ page }: { page: PageKey }) {
  const content = pageContent[page];
  const isVideo = content.image.endsWith(".mp4");

  return (
    <div className="inner-page">
      <header className="inner-page-nav">
        <Link to="/" className="inner-brand" aria-label="Aroma Institute home">
          <img src="/reference-assets/ChatGPT_Image_Feb_24__2026__01_47_11_AM-removebg-preview_1771878331386-DZgDAf7x.png" alt="Aroma Institute logo" />
          <span><strong>AROMA</strong><small>INSTITUTE OF CAFE &amp; HOSPITALITY MANAGEMENT</small></span>
        </Link>
        <nav aria-label="Page navigation">
          <Link to="/about">About</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/training">Training</Link>
          <Link to="/placements">Placements</Link>
          <Link to="/admissions">Admissions</Link>
        </nav>
        <Button asChild className="inner-apply"><Link to="/contact">Apply Now</Link></Button>
      </header>

      <main>
        <section className="inner-hero">
          {isVideo ? <video autoPlay muted loop playsInline><source src={content.image} type="video/mp4" /></video> : <img src={content.image} alt="" />}
          <div className="inner-hero-shade" />
          <div className="inner-hero-content page-shell">
            <p className="section-label">{content.label}</p>
            <h1>{content.title}</h1>
            <p>{content.intro}</p>
            <div className="hero-actions"><Button asChild className="button-primary"><Link to="/contact">Start a conversation <ArrowRight /></Link></Button><Button asChild className="button-dark"><Link to="/">Explore the institute</Link></Button></div>
          </div>
        </section>

        {page === "programs" ? <section className="inner-content page-shell"><p className="section-label">{content.accent}</p><h2 className="section-title">Find your <em>direction</em></h2><div className="inner-program-grid">{programs.map(([name, duration, text]) => <article key={name} className="inner-program-card"><div className="inner-program-meta"><Clock3 /> {duration}</div><h3>{name}</h3><p>{text}</p><Link to="/contact">Ask about this program <ArrowRight /></Link></article>)}</div></section> : <section className="inner-content page-shell"><div className="inner-story-grid"><div><p className="section-label">{content.accent}</p><h2 className="section-title">Built around <em>real work</em>, not just theory.</h2></div><div className="inner-story-copy"><p>{content.intro} Our approach is intentionally practical: learn a skill, apply it in a real environment, receive feedback, and keep improving.</p><ul><li><Check /> Structured classroom foundations</li><li><Check /> Hands-on exposure in live cafés</li><li><Check /> Mentorship from working professionals</li><li><Check /> Placement and founder support</li></ul></div></div></section>}

        <section className="inner-band"><div className="page-shell inner-band-content"><div><p className="section-label">Ready when you are</p><h2>Make your next step <em>count.</em></h2></div><div className="inner-band-actions"><Button asChild className="button-light"><Link to="/contact">Apply Now <ArrowRight /></Link></Button><Button asChild variant="ghost" className="call-button"><a href="tel:+919274868669"><Phone /> Book Counseling Call</a></Button></div></div></section>
      </main>
      <footer className="inner-footer"><span>© 2026 Aroma Institute of Cafe &amp; Hospitality Management</span><Link to="/">Return to home</Link></footer>
    </div>
  );
}