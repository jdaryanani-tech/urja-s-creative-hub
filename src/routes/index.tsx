import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Clock3,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  Sparkles,
  Youtube,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aroma Institute | Cafe & Hospitality Management" },
      {
        name: "description",
        content:
          "India's practical, industry-integrated hospitality academy for future cafe professionals and founders.",
      },
      {
        property: "og:title",
        content: "Aroma Institute | Cafe & Hospitality Management",
      },
      {
        property: "og:description",
        content:
          "Learn, intern, earn, and launch with Aroma Institute's practical hospitality programs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AromaHome,
});

const logo =
  "/reference-assets/ChatGPT_Image_Feb_24__2026__01_47_11_AM-removebg-preview_1771878331386-DZgDAf7x.png";

const programs = [
  {
    name: "Professional Barista Certification",
    duration: "3 Months",
    badge: "Most Popular",
    image: "/reference-assets/barista.png",
    description:
      "Master coffee foundations, espresso techniques, service skills, and café professionalism.",
  },
  {
    name: "Advanced Brewing & Café Operations",
    duration: "6 Months",
    badge: "Learn & Earn",
    image: "/reference-assets/brewing.png",
    description:
      "Specialty brewing, operations training, leadership exposure, and paid internship experience.",
  },
  {
    name: "Professional Mixology & Mocktail Specialist",
    duration: "9 Months",
    badge: "Alcohol-Free",
    image: "/reference-assets/mocktails.png",
    description:
      "Craft mocktails, signature beverages, flavor science, and beverage menu engineering.",
  },
  {
    name: "Café Entrepreneur Incubation Program",
    duration: "12 Months",
    badge: "For Founders",
    image: "/reference-assets/entrepreneur.png",
    description:
      "From ideation to execution — build your own café with complete financial, operational, and launch planning.",
  },
];

const partners = [
  ["Kaffa Coffee Roasters", "/reference-assets/kaffa.png"],
  ["Café Coffee Day", "/reference-assets/ccd.png"],
  ["Starbucks", "/reference-assets/starbucks.png"],
  ["Cafe Brewgarten", "/reference-assets/brewgarten.png"],
  ["Sip of Hope", "/reference-assets/sip.png"],
  ["Korebi Coffee Roasters", "/reference-assets/korebi.png"],
  ["Blue Tokai Coffee", "/reference-assets/bluetokai.webp"],
  ["FYRO", "/reference-assets/fyro.png"],
];

const admissionSteps = [
  {
    title: "Application",
    description: "Fill out the online application form with your details and program preference.",
    image: "/reference-assets/admission-step1-application-OlUlsPGM.png",
  },
  {
    title: "Screening Interview",
    description: "A brief screening call to understand your goals and assess program fit.",
    image: "/reference-assets/admission-step2-interview-tejmOWPK.png",
  },
  {
    title: "Admission Confirmation",
    description: "Receive your admission offer letter and complete the enrollment process.",
    image: "/reference-assets/admission-step3-confirmation-Du1qyQ9L.png",
  },
  {
    title: "Orientation & Training Begins",
    description: "Join the orientation session and begin your practical training journey.",
    image: "/reference-assets/admission-step4-orientation-DtbXTu13.png",
  },
];

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function SectionTitle({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <h2 className={`section-title${light ? " section-title-light" : ""}`}>{children}</h2>;
}

function AromaHome() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<(typeof programs)[number] | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const closeMobile = () => setMobileOpen(false);
  const scrollTo = (id: string) => {
    closeMobile();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const submitApplication = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="aroma-site">
      <header className="site-nav">
        <div className="nav-inner">
          <button className="brand-lockup" type="button" onClick={() => scrollTo("hero")} aria-label="Back to home">
            <img src={logo} alt="Aroma Institute Logo" />
            <span className="brand-copy">
              <strong>AROMA</strong>
              <small>INSTITUTE OF CAFE &amp; HOSPITALITY MANAGEMENT</small>
            </span>
          </button>

          <nav className={`desktop-nav${mobileOpen ? " mobile-nav-open" : ""}`} aria-label="Primary navigation">
            {[
              ["About", "about"],
              ["Programs", "programs"],
              ["Training Model", "training"],
              ["Placements", "placements"],
              ["Admissions", "admissions"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <button type="button" key={id} onClick={() => scrollTo(id)}>
                {label}
              </button>
            ))}
          </nav>

          <Button className="nav-apply" onClick={() => scrollTo("contact")}>
            Apply Now
          </Button>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="mobile-menu-button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      <main>
        <section id="hero" className="hero-section">
          <div className="hero-image" />
          <div className="hero-shade" />
          <div className="hero-content page-shell">
            <div className="admission-pill"><span />Admissions Open 2026-27</div>
            <h1>
              Creating the Next
              <br />
              Generation of <em>Café</em>
              <br />
              <em>Professionals</em> &amp;
              <br />
              Founders
            </h1>
            <p>
              India&apos;s Practical, Industry-Integrated Hospitality Academy where students <strong>Learn</strong>, <strong>Intern</strong>, <strong>Earn</strong>, and <strong>Launch</strong>.
            </p>
            <div className="hero-actions">
              <Button className="button-primary" onClick={() => scrollTo("programs")}>
                Explore Programs <ArrowRight />
              </Button>
              <Button className="button-dark" onClick={() => scrollTo("contact")}>Apply Now</Button>
            </div>
            <div className="hero-stats">
              <div><strong>50+</strong><span>Students Trained</span></div>
              <div><strong>100%</strong><span>Placement Assist</span></div>
              <div><strong>20+</strong><span>Industry Partners</span></div>
              <div><strong>4</strong><span>Specialized Programs</span></div>
            </div>
          </div>
          <button className="scroll-cue" type="button" onClick={() => scrollTo("about")} aria-label="Scroll to about">
            <ArrowDown />
          </button>
        </section>

        <section id="about" className="about-section textured-section">
          <video className="section-video" autoPlay muted loop playsInline poster="/reference-assets/pexels-sydnee-more-30355262-6936981_1771624143483-DDs4UDqC.jpg">
            <source src="/reference-assets/about-bg.mp4" type="video/mp4" />
          </video>
          <div className="section-overlay light-overlay" />
          <div className="page-shell about-grid content-layer">
            <div className="about-copy">
              <SectionLabel>About Us</SectionLabel>
              <SectionTitle>About Aroma</SectionTitle>
              <p className="lead-copy">Aroma Institute of Cafe &amp; Hospitality Management is a practical hospitality academy focused on developing job-ready professionals and launch-ready café entrepreneurs.</p>
              <p>We provide structured classroom training combined with real-world internships inside live cafés. Our programs are designed for ambitious students and future founders who want real industry exposure — not just theory.</p>
              <div className="feature-list">
                {["Learn While You Earn Model", "100% Placement Assistance", "Multilingual Learning Support", "Real Café Internship Exposure", "Founder Incubation Program"].map((item) => (
                  <div key={item}><Check />{item}</div>
                ))}
              </div>
            </div>
            <div className="about-stamp"><Sparkles /><span>Practical<br />by design</span></div>
          </div>
        </section>

        <section id="programs" className="programs-section textured-section">
          <div className="programs-image" />
          <div className="section-overlay programs-overlay" />
          <div className="page-shell content-layer">
            <div className="center-heading">
              <SectionLabel>Our Programs</SectionLabel>
              <SectionTitle>Specialized Training <em>Programs</em></SectionTitle>
              <p>Industry-focused programs designed to transform passionate individuals into skilled professionals and successful café entrepreneurs.</p>
            </div>
            <div className="program-grid">
              {programs.map((program) => (
                <article className="program-card" key={program.name}>
                  <div className="program-image-wrap">
                    <img src={program.image} alt={program.name} />
                    <span className="program-badge">{program.badge}</span>
                  </div>
                  <div className="program-card-body">
                    <div className="duration"><Clock3 /> {program.duration}</div>
                    <h3>{program.name}</h3>
                    <p>{program.description}</p>
                    <Button variant="outline" className="details-button" onClick={() => setSelectedProgram(program)}>
                      View Details <ArrowRight />
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="training" className="training-section textured-section">
          <video className="section-video" autoPlay muted loop playsInline>
            <source src="/reference-assets/training-bg.mp4" type="video/mp4" />
          </video>
          <div className="section-overlay training-overlay" />
          <div className="page-shell content-layer">
            <div className="training-heading">
              <SectionLabel>Learn &amp; Earn</SectionLabel>
              <SectionTitle>Industry-Integrated Training Model</SectionTitle>
              <p>Students attend structured daily classes and gain hands-on experience through real internship shifts inside operational cafés and partner hospitality brands.</p>
            </div>
            <div className="training-grid">
              {[
                ["Paid Internship Model", "Earn while you learn through structured paid internships at partner cafés."],
                ["Real Customer Exposure", "Work directly with real customers in live café environments."],
                ["Shift-Based Learning", "Flexible shift schedules combining classroom theory with practical shifts."],
                ["Industry Mentorship", "Learn from experienced café owners and hospitality professionals."],
                ["Placement Assistance", "Dedicated placement support connecting you with top hospitality brands."],
              ].map(([title, text], index) => (
                <div className="training-item" key={title}>
                  <span>0{index + 1}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="placements" className="placements-section textured-section">
          <div className="section-overlay plain-overlay" />
          <div className="page-shell content-layer">
            <div className="center-heading placement-heading">
              <SectionLabel>Industry Network</SectionLabel>
              <SectionTitle>Industry Tie-Ups &amp; <em>Placement Assistance</em></SectionTitle>
              <p>We provide 100% placement assistance through our network of cafés, hotels, beverage brands, and hospitality partners across Gujarat and beyond.</p>
            </div>
            <div className="partner-grid">
              {partners.map(([name, image]) => <div className="partner-logo" key={name}><img src={image} alt={name} /></div>)}
            </div>
            <p className="more-partners">...and many more hospitality brands across Gujarat and India</p>
          </div>
        </section>

        <section id="admissions" className="admissions-section textured-section">
          <div className="admissions-image" />
          <div className="section-overlay admissions-overlay" />
          <div className="page-shell content-layer">
            <div className="center-heading admission-heading">
              <SectionLabel>How to Join</SectionLabel>
              <SectionTitle>Admission <em>Process</em></SectionTitle>
              <p>A simple, streamlined admission process to get you started on your café career journey.</p>
            </div>
            <div className="admission-grid">
              {admissionSteps.map((step, index) => (
                <article className="admission-card" key={step.title}>
                  <img src={step.image} alt={step.title} />
                  <SectionLabel>Step {index + 1}</SectionLabel>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
            <p className="emi-note">Flexible EMI options available</p>
          </div>
        </section>

        <section className="cta-section textured-section">
          <div className="cta-image" />
          <div className="section-overlay cta-overlay" />
          <div className="cta-content page-shell content-layer">
            <SectionTitle light>Ready to Start Your Career or Launch<br />Your Café?</SectionTitle>
            <p>Take the first step toward a rewarding career in the café and hospitality industry.<br />Apply now or speak with our counselors to find the right program for you.</p>
            <div className="cta-actions">
              <Button className="button-light" onClick={() => scrollTo("contact")}>Apply Now <ArrowRight /></Button>
              <Button variant="ghost" className="call-button" asChild><a href="tel:+919274868669"><Phone /> Book Counseling Call</a></Button>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section textured-section">
          <div className="contact-image" />
          <div className="section-overlay contact-overlay" />
          <div className="page-shell content-layer">
            <div className="center-heading contact-heading">
              <SectionLabel>Get in Touch</SectionLabel>
              <SectionTitle>Start Your <em>Journey</em></SectionTitle>
              <p>Fill out the form below and our admissions team will reach out to you within 24 hours.</p>
            </div>
            <div className="contact-grid">
              <form className="application-form" onSubmit={submitApplication}>
                <div className="form-row">
                  <label>Full Name<input name="name" required placeholder="Your full name" /></label>
                  <label>Phone Number<input name="phone" required type="tel" placeholder="Your phone number" /></label>
                </div>
                <label>Email Address<input name="email" required type="email" placeholder="your@email.com" /></label>
                <label>Program Interest<select name="program" defaultValue="" required><option value="" disabled>Select a program</option>{programs.map((program) => <option key={program.name}>{program.name}</option>)}</select></label>
                <label>Message (Optional)<textarea name="message" placeholder="Tell us about your goals and interests..." /></label>
                <Button className="submit-button" type="submit">{submitted ? "Application Sent" : "Submit Application"} {submitted ? <Check /> : <Send />}</Button>
                {submitted && <p className="success-message" role="status">Thank you — our admissions team will be in touch within 24 hours.</p>}
              </form>
              <aside className="contact-details">
                <h3>Contact Information</h3>
                <div className="contact-detail"><MapPin /><div><strong>Address</strong><p>Gurukul Road, Memnagar, Ahmedabad, Gujarat, India</p></div></div>
                <div className="contact-detail"><Phone /><div><strong>Phone</strong><p>+91 9274868669</p></div></div>
                <div className="contact-detail"><Mail /><div><strong>Email</strong><p>admissions@aromainstitute.in</p></div></div>
                <div className="office-hours"><h4>Office Hours</h4><p>Monday – Saturday: 9:00 AM – 6:00 PM<br />Sunday: Closed</p></div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-shell footer-grid">
          <div className="footer-brand"><div className="footer-mark"><img src={logo} alt="Aroma Institute Logo" /><div><strong>Aroma</strong><small>INSTITUTE OF CAFE &amp; HOSPITALITY</small></div></div><p>India&apos;s practical, industry-integrated hospitality academy where students Learn, Intern, Earn, and Launch.</p><div className="socials"><a href="#contact" aria-label="Instagram"><Instagram /></a><a href="#contact" aria-label="Facebook"><Facebook /></a><a href="#contact" aria-label="LinkedIn"><Linkedin /></a><a href="#contact" aria-label="YouTube"><Youtube /></a></div></div>
          <FooterLinks title="Quick Links" links={[["About Us", "about"], ["Programs", "programs"], ["Placements", "placements"], ["Admissions", "admissions"], ["Contact", "contact"]]} onNavigate={scrollTo} />
          <FooterLinks title="Programs" links={programs.map((program) => [program.name, "programs"])} onNavigate={scrollTo} />
          <div className="footer-contact"><h3>Contact</h3><p>Gurukul Road, Memnagar, Ahmedabad,<br />Gujarat, India</p><p>+91 9274868669</p><p>admissions@aromainstitute.in</p></div>
        </div>
        <div className="page-shell footer-bottom"><span>© 2026 Aroma Institute of Cafe &amp; Hospitality Management. All rights reserved.</span><span>Privacy Policy &nbsp;&nbsp; Terms of Service</span></div>
      </footer>

      {selectedProgram && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProgram(null)}>
          <div className="program-modal" role="dialog" aria-modal="true" aria-labelledby="program-modal-title" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" onClick={() => setSelectedProgram(null)} aria-label="Close program details"><X /></button>
            <img src={selectedProgram.image} alt="" />
            <SectionLabel>{selectedProgram.badge} · {selectedProgram.duration}</SectionLabel>
            <h2 id="program-modal-title">{selectedProgram.name}</h2>
            <p>{selectedProgram.description}</p>
            <Button className="button-primary" onClick={() => { setSelectedProgram(null); scrollTo("contact"); }}>Apply for this program <ArrowRight /></Button>
          </div>
        </div>
      )}
    </div>
  );
}

function FooterLinks({ title, links, onNavigate }: { title: string; links: string[][]; onNavigate: (id: string) => void }) {
  return <div className="footer-links"><h3>{title}</h3>{links.map(([label, id]) => <button key={label} type="button" onClick={() => onNavigate(id)}>{label}</button>)}</div>;
}