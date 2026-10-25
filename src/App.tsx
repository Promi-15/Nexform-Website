import { FormEvent, ReactNode, useEffect, useRef, useState } from "react"
import {
  ArrowRight,
  Check,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"

const BASE = import.meta.env.BASE_URL || "/"
const asset = (path: string) =>
  path.startsWith("http")
    ? path
    : `${BASE.endsWith("/") ? BASE : `${BASE}/`}${path.replace(/^\.?\//, "")}`

const ALT_HERO =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260609_135737_0da59642-725b-451a-997b-b0283d95a42a.png&w=1280&q=85"

const images = {
  portrait: asset("images/philosophy-cybernetic-face.jpg"),
  portraitDark: asset("images/study-03-human-robot-interaction.jpg"),
  eye: asset("images/study-02-perception-vision.jpg"),
  eyeShadow: asset("images/study-02-perception-vision.jpg"),
  engineering: asset("images/tech-01-structural-support.jpg"),
  material: asset("images/tech-04-material-integration.jpg"),
  interface: asset("images/tech-03-adaptive-mechanics.jpg"),
}

const navItems = [
  ["Technology", "modules"],
  ["Materials", "biotech"],
  ["Applications", "applications"],
  ["Explore", "demo"],
  ["FAQ", "faq"],
]

function Logo() {
  return (
    <span className="logo-mark" aria-label="NEXFORM home">
      <i />
      <i />
      <i />
    </span>
  )
}

function ButtonLink({
  children,
  href,
  secondary = false,
}: {
  children: ReactNode
  href: string
  secondary?: boolean
}) {
  return (
    <a className={`button-link ${secondary ? "secondary" : ""}`} href={href}>
      <span>{children}</span>
      <ArrowRight size={16} />
    </a>
  )
}

function Nav({ onConnect }: { onConnect: () => void }) {
  const [open, setOpen] = useState(false)
  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="nav-desktop">
        <a className="nav-logo" href="#top">
          <Logo />
        </a>
        {navItems.map(([label, id]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
        <button className="connect-small" onClick={onConnect}>
          Book a demo
        </button>
      </div>
      <a className="mobile-logo" href="#top">
        <Logo />
      </a>
      <button
        className="menu-toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
      {open && (
        <div className="mobile-menu" id="mobile-menu">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label} <ChevronRight size={15} />
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false)
              onConnect()
            }}
          >
            Connect
          </button>
        </div>
      )}
    </nav>
  )
}

type Arc = {
  radius: number
  start: number
  end: number
  dot: number
  stat: string
  suffix?: string
  label: string
}

const arcData: Arc[] = [
  {
    radius: 330,
    start: -92,
    end: 16,
    dot: -46,
    stat: "10",
    suffix: "+",
    label: "YEARS REAL",
  },
  {
    radius: 395,
    start: -56,
    end: 60,
    dot: 2,
    stat: "40",
    suffix: "+",
    label: "USE FORMS",
  },
  {
    radius: 460,
    start: -14,
    end: 72,
    dot: 44,
    stat: "95",
    suffix: "%",
    label: "REPEAT MEMBERS",
  },
]

const point = (radius: number, angle: number) => {
  const radians = (angle * Math.PI) / 180
  return {
    x: -110 + radius * Math.cos(radians),
    y: 300 + radius * Math.sin(radians),
  }
}

function arcPath(arc: Arc) {
  const a = point(arc.radius, arc.start)
  const b = point(arc.radius, arc.end)
  return `M ${a.x} ${a.y} A ${arc.radius} ${arc.radius} 0 0 1 ${b.x} ${b.y}`
}

function StatsArcs() {
  return (
    <svg
      className="stats-arcs"
      viewBox="0 0 380 700"
      preserveAspectRatio="xMaxYMid meet"
      aria-hidden="true"
    >
      <defs>
        {arcData.map((arc, index) => {
          const start = point(arc.radius, arc.start)
          const end = point(arc.radius, arc.end)
          return (
            <linearGradient
              key={index}
              id={`arc-gradient-${index}`}
              gradientUnits="userSpaceOnUse"
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
            >
              <stop offset="0%" stopColor="white" stopOpacity="0" />
              <stop offset="22%" stopColor="white" stopOpacity=".5" />
              <stop offset="55%" stopColor="white" stopOpacity=".5" />
              <stop offset="85%" stopColor="white" stopOpacity=".1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          )
        })}
      </defs>
      {arcData.map((arc, index) => {
        const dot = point(arc.radius, arc.dot)
        const len = arc.radius * (((arc.end - arc.start) * Math.PI) / 180)
        return (
          <g
            key={arc.label}
            className="stat-group"
            style={
              { "--delay": `${0.4 + index * 0.22}s` } as React.CSSProperties
            }
          >
            <path
              className="stat-arc"
              d={arcPath(arc)}
              stroke={`url(#arc-gradient-${index})`}
              style={{ "--len": len } as React.CSSProperties}
            />
            <circle className="stat-ring" cx={dot.x} cy={dot.y} r="7" />
            <circle className="stat-dot" cx={dot.x} cy={dot.y} r="3.4" />
            <g
              className="stat-copy"
              transform={`translate(${dot.x + 16} ${dot.y + 4})`}
            >
              <text className="stat-number">
                {arc.stat}
                <tspan className="stat-suffix" dy="-8">
                  {arc.suffix}
                </tspan>
              </text>
              <text className="stat-label" y="22">
                {arc.label}
              </text>
            </g>
          </g>
        )
      })}
    </svg>
  )
}

function Hero({ onConnect }: { onConnect: () => void }) {
  const revealRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    let frame = 0
    let currentX = -999
    let currentY = -999
    let targetX = -999
    let targetY = -999
    let gridX = 0
    let gridY = 0
    let targetGridX = 0
    let targetGridY = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    const move = (event: MouseEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      targetGridX = (event.clientX / window.innerWidth - 0.5) * 16
      targetGridY = (event.clientY / window.innerHeight - 0.5) * 16
    }
    const leave = () => {
      targetX = -999
      targetY = -999
      targetGridX = 0
      targetGridY = 0
    }
    const draw = () => {
      currentX += (targetX - currentX) * 0.28
      currentY += (targetY - currentY) * 0.28
      gridX += (targetGridX - gridX) * 0.18
      gridY += (targetGridY - gridY) * 0.18
      ctx?.clearRect(0, 0, canvas.width, canvas.height)
      const gradient = ctx?.createRadialGradient(
        currentX,
        currentY,
        0,
        currentX,
        currentY,
        260,
      )
      if (gradient && ctx) {
        gradient.addColorStop(0, "rgba(0,0,0,1)")
        gradient.addColorStop(0.4, "rgba(0,0,0,1)")
        gradient.addColorStop(0.6, "rgba(0,0,0,.75)")
        gradient.addColorStop(0.75, "rgba(0,0,0,.4)")
        gradient.addColorStop(0.88, "rgba(0,0,0,.12)")
        gradient.addColorStop(1, "rgba(0,0,0,0)")
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        const mask = `url(${canvas.toDataURL()})`
        revealRef.current?.style.setProperty("mask-image", mask)
        revealRef.current?.style.setProperty("-webkit-mask-image", mask)
      }
      gridRef.current?.style.setProperty(
        "transform",
        `translate3d(${gridX}px, ${gridY}px, 0) scale(1.04)`,
      )
      frame = requestAnimationFrame(draw)
    }
    resize()
    window.addEventListener("resize", resize)
    heroRef.current?.addEventListener("mousemove", move)
    heroRef.current?.addEventListener("mouseleave", leave)
    frame = requestAnimationFrame(draw)
    return () => {
      window.removeEventListener("resize", resize)
      heroRef.current?.removeEventListener("mousemove", move)
      heroRef.current?.removeEventListener("mouseleave", leave)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section className="hero" id="top" ref={heroRef}>
      <div
        className="hero-base"
        style={{ backgroundImage: `url("${asset("nexform-hero-new.jpg")}")` }}
      />
      <div
        className="hero-alt"
        ref={revealRef}
        style={{ backgroundImage: `url("${ALT_HERO}")` }}
      />
      <div className="hero-grid" ref={gridRef} />
      <div className="hero-shade" />
      <StatsArcs />
      <div className="hero-content">
        <p className="eyebrow hero-rise delay-1">
          NEXTFORM · <em>ADVANCED ROBOTICS</em>
        </p>
        <h1 className="hero-rise delay-2">
          Robotic systems
          <br />
          built around
          <br />
          human capability.
        </h1>
        <p className="hero-copy hero-rise delay-3">
          NEXTFORM designs adaptive robotic structures that extend human strength, precision and endurance. Built for engineers, clinicians and teams who need technology that works with people.
        </p>
        <div className="hero-actions hero-rise delay-4">
          <button className="hero-cta" onClick={onConnect}>
            <span>Book a demo</span> <ArrowRight size={18} />
          </button>
          <a className="button-link secondary hero-secondary-cta" href="#biotech">
            <span>Explore materials</span> <ArrowRight size={16} />
          </a>
        </div>
      </div>
      <div className="hero-index">N·F · 001</div>
    </section>
  )
}

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string
  title: string
  copy?: string
}) {
  return (
    <header className="section-header">
      <p className="eyebrow red">{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </header>
  )
}

function ImageWithFallback({
  src,
  alt,
  className = "",
}: {
  src: string
  alt: string
  className?: string
}) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`image-shell ${className} ${failed ? "image-failed" : ""}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

const modules = [
  [
    "01",
    "Structural Support",
    "Lightweight frames that carry load where the body needs it.",
    "[40% lighter than standard frames]",
    asset("images/user-module-01.png"),
  ],
  [
    "02",
    "Sensory Interface",
    "Sensors that read movement and respond in real time.",
    "[Response time under 10 ms]",
    asset("images/user-module-02.png"),
  ],
  [
    "03",
    "Adaptive Mechanics",
    "Joints that adjust to each user’s motion and pace.",
    "[X degrees of freedom]",
    asset("images/user-module-03.png"),
  ],
  [
    "04",
    "Material Integration",
    "Advanced materials that balance strength, weight and comfort.",
    "[Rated for X hours of continuous use]",
    asset("images/user-module-04.png"),
  ],
]

function Modules() {
  return (
    <section className="section modules-section" id="modules">
      <SectionHeader
        eyebrow="02 · TECHNOLOGY & SYSTEMS"
        title="Engineered around human potential."
        copy="Four core systems, each designed to work as one."
      />
      <div className="modules-grid">
        {modules.map(([number, title, copy, badge, image], index) => (
          <article className={`module module-${index + 1}`} key={number}>
            <ImageWithFallback src={image} alt={title} />
            <div className="module-copy">
              <div className="module-top-row">
                <span>{number} · CONCEPT</span>
                <div className="module-arrow">
                  <ArrowRight size={18} />
                </div>
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

const processSteps = [
  {
    step: "01",
    title: "Design",
    copy: "We map your needs and model the system around them.",
  },
  {
    step: "02",
    title: "Prototype",
    copy: "Working builds you can test within weeks.",
  },
  {
    step: "03",
    title: "Test",
    copy: "Strict testing for safety, comfort and performance.",
  },
  {
    step: "04",
    title: "Deploy",
    copy: "Delivery, training and ongoing support.",
  },
]

const cases = [
  [
    "1",
    "KINEMATICS",
    "Movement Analysis",
    "Studying robotic gait, joint articulation, motion precision, and coordinated movement through controlled experiments.",
    asset("images/study-01-movement-analysis.jpg"),
  ],
  [
    "2",
    "OPTICS",
    "Perception & Vision",
    "Investigating machine vision, optical sensing, and environmental perception for more precise robotic responses.",
    asset("images/study-02-perception-vision.jpg"),
  ],
  [
    "3",
    "SYNERGY",
    "Human–Robot Interaction",
    "Exploring controlled physical interaction between people and robotic systems through gripping, assistance, and responsive movement.",
    asset("images/study-03-human-robot-interaction.jpg"),
  ],
]

function Cases({ onSelect }: { onSelect: (index: number) => void }) {
  return (
    <section className="section case-section" id="cases">
      <SectionHeader
        eyebrow="03 · PROCESS & RESEARCH"
        title="Ideas take form."
        copy="From first concept to working system, in four clear steps."
      />
      <div className="process-pipeline">
        {processSteps.map((p) => (
          <div key={p.step} className="process-step-card">
            <span className="process-step-num">{p.step}</span>
            <h4>{p.title}</h4>
            <p>{p.copy}</p>
          </div>
        ))}
      </div>
      <div className="case-section-subhead">
        <span className="case-subhead-pill">SUPPORTING STUDIES</span>
        <p>Explore empirical research records and kinematic evaluations behind each stage.</p>
      </div>
      <div className="case-grid">
        {cases.map(([number, category, title, copy, image], index) => (
          <button
            className={`case-card case-${index + 1}`}
            key={number}
            onClick={() => onSelect(index)}
          >
            <ImageWithFallback src={image} alt={`${category} research study`} />
            <div className="case-info">
              <span className="case-meta">
                {number}. {category}
              </span>
              <span className="case-title">{title}</span>
              <span className="case-copy">{copy}</span>
            </div>
            <span className="case-arrow">
              <ArrowRight size={20} />
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}

type AnatomyItem = {
  number: string
  title: string
  copy: string
  tag: string
  telemetry: string
}

const anatomyItems: AnatomyItem[] = [
  {
    number: "01",
    title: "Structural Support",
    copy: "Carries load and keeps posture stable.",
    tag: "LOAD-BEARING CHASSIS",
    telemetry: "SYS · SUPPORT_01 · POSTURE STABILITY ACTIVE",
  },
  {
    number: "02",
    title: "Sensory Interface",
    copy: "Tracks motion and adjusts instantly.",
    tag: "REAL-TIME SENSORY TRACKING",
    telemetry: "SYS · SENSORY_02 · TRACKING LATENCY < 10MS",
  },
  {
    number: "03",
    title: "Adaptive Mechanics",
    copy: "Learns and matches the user’s movement.",
    tag: "ADAPTIVE KINEMATICS",
    telemetry: "SYS · KINETIC_03 · PREDICTIVE MOTOR GAIT MATCH",
  },
  {
    number: "04",
    title: "Material Integration",
    copy: "Keeps the system light, strong and comfortable.",
    tag: "ADVANCED COMPOSITE MATRIX",
    telemetry: "SYS · MAT_04 · COMPOSITE WEAVE INTEGRITY 100%",
  },
]

function Anatomy() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % anatomyItems.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [active])

  return (
    <section className="section anatomy-section" id="anatomy">
      <SectionHeader
        eyebrow="04 · SYSTEM ARCHITECTURE"
        title="Precision, placed with purpose."
        copy="Click each point to see what it does."
      />
      <div className="anatomy-stage">
        <div className="anatomy-figure">
          <img
            src={asset("nexform-hero-new.jpg")}
            alt="Robotic humanoid profile system anatomy"
            className="anatomy-static-img"
          />
          <div className="anatomy-telemetry">
            <span className="telemetry-dot" />
            <span className="telemetry-text">{anatomyItems[active].telemetry}</span>
          </div>
          <div className="anatomy-badge">
            <span>{anatomyItems[active].number}</span>
            <em>{anatomyItems[active].tag}</em>
          </div>
        </div>
        <div
          className="anatomy-callouts"
          role="tablist"
          aria-label="System Anatomy Components"
        >
          {anatomyItems.map((item, index) => {
            const isActive = active === index
            return (
              <button
                key={item.number}
                className={isActive ? "active" : ""}
                onClick={() => setActive(index)}
                role="tab"
                aria-selected={isActive}
                aria-controls={`anatomy-panel-${index}`}
                id={`anatomy-tab-${index}`}
                tabIndex={0}
              >
                <span className="marker" />
                <span className="callout-index">{item.number}</span>
                <div className="callout-main">
                  <strong>{item.title}</strong>
                  <span className="callout-copy" id={`anatomy-panel-${index}`}>
                    {item.copy}
                  </span>
                </div>
                {isActive && <span className="anatomy-timer-bar" key={`timer-${active}`} />}
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

const applications = [
  [
    "01",
    "Movement",
    "Support that follows your motion, not the other way around.",
    "Outcome: [X% less fatigue in lifting tasks]",
    asset("images/study-01-movement-analysis.jpg"),
  ],
  [
    "02",
    "Perception",
    "Sensing that gives users more awareness of their environment.",
    "Outcome: [X% faster reaction in field tests]",
    asset("images/study-02-perception-vision.jpg"),
  ],
  [
    "03",
    "Endurance",
    "Systems built to keep going long after the body tires.",
    "Outcome: [X hours of use per charge]",
    asset("images/anatomy-01-structural.jpg"),
  ],
]

function Applications() {
  return (
    <section className="section applications" id="applications">
      <SectionHeader
        eyebrow="05 · HUMAN APPLICATIONS"
        title="Designed around human capability."
        copy="Three focused outcomes where intelligent robotics directly elevate human capacity."
      />
      <div className="application-list">
        {applications.map(([number, title, copy, outcome, image], index) => (
          <article key={title} className={index % 2 ? "reverse" : ""}>
            <ImageWithFallback src={image} alt={`${title} concept study`} />
            <div className="application-copy">
              <span className="huge-number">{number}</span>
              <p className="eyebrow">{title} · FIELD OUTCOME</p>
              <h3>{title}</h3>
              <p>{copy}</p>

              <a href="#demo" className="application-cta">
                <span>See how it works</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

const modes = [
  {
    name: "Human only",
    image: images.portraitDark,
    text: "Biological intelligence, intuition, and natural body dynamics remain in control.",
  },
  {
    name: "Hybrid",
    image: asset("nexform-hero-new.jpg"),
    text: "The human stays in control. The system adds strength, steadiness and precision when needed.",
  },
  {
    name: "Machine assist",
    image: images.material,
    text: "Controlled mechanical response, full load offloading, and maximum continuous robotic assist.",
  },
]

function LiveDemo() {
  const [active, setActive] = useState(1)
  return (
    <section className="demo-section" id="demo">
      <div className="section">
        <SectionHeader
          eyebrow="06 · INTERACTIVE EXPERIENCE"
          title="Explore the space between human and machine."
          copy="Switch between modes to see how Hybrid adapts."
        />
        <div className="demo-stage">
          <img
            key={modes[active].image}
            src={modes[active].image}
            alt={`${modes[active].name} mode visualization`}
          />
          <div className="demo-overlay">
            <p className="eyebrow">ACTIVE MODE · 0{active + 1}</p>
            <h3>{modes[active].name}</h3>
            <p>{modes[active].text}</p>
          </div>
          <div
            className="mode-selector"
            role="group"
            aria-label="Visualization mode"
          >
            {modes.map((mode, index) => (
              <button
                key={mode.name}
                className={active === index ? "active" : ""}
                onClick={() => setActive(index)}
              >
                <span>0{index + 1}</span>
                {mode.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const materials = [
  [
    "Carbon Fiber",
    "Very high strength at very low weight.",
    asset("images/user-module-04.png"),
    "MAT · 01 · ULTRA-LIGHT COMPOSITE",
  ],
  [
    "Titanium",
    "Durable, corrosion resistant and safe for long skin contact.",
    asset("images/user-module-01.png"),
    "MAT · 02 · BIOCOMPATIBLE ALLOY",
  ],
  [
    "Responsive Interfaces",
    "Surfaces that sense touch and pressure.",
    asset("images/user-module-02.png"),
    "MAT · 03 · TACTILE & OPTICAL",
  ],
  [
    "Human-Centered Engineering",
    "Shapes tested on real users for comfort.",
    asset("images/user-module-03.png"),
    "MAT · 04 · ERGONOMIC COMPLIANCE",
  ],
]

const materialSpecs = [
  { material: "Carbon Fiber", weight: "Ultra-low (1.75 g/cm³)", strength: "Very high (3,500+ MPa)", bestFor: "High-velocity articulated limbs & exoskeletons" },
  { material: "Titanium (Ti-6Al-4V)", weight: "Medium-low (4.43 g/cm³)", strength: "High (880 MPa)", bestFor: "Load-bearing chassis, joint hinges & skin contact" },
  { material: "Responsive Interfaces", weight: "Featherweight polymer", strength: "High fatigue resilience", bestFor: "Touch/pressure surfaces & optical depth sensors" },
  { material: "Human-Centered Engineering", weight: "Ergonomic composite", strength: "Adaptive compliance", bestFor: "Shapes tested on real users for all-day comfort" },
]

function Materials() {
  return (
    <section className="section materials" id="biotech">
      <SectionHeader
        eyebrow="07 · MATERIAL INTELLIGENCE"
        title="Precision in every material."
        copy="Every material is chosen for a reason."
      />
      <div className="material-grid">
        {materials.map(([title, copy, image, tag], index) => (
          <article key={title} className={`material-${index + 1}`}>
            <div className="material-image-wrap">
              <img src={image} alt={`${title} material study`} loading="lazy" />
              <div className="material-overlay" />
              <span className="material-meta-pill">{tag}</span>
            </div>
            <div className="material-content">
              <span>MAT · 0{index + 1}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="material-table-container">
        <h4 className="material-table-title">Material Specifications</h4>
        <div className="material-table-wrap">
          <table className="material-table">
            <thead>
              <tr>
                <th>Material</th>
                <th>Weight</th>
                <th>Strength</th>
                <th>Best for</th>
              </tr>
            </thead>
            <tbody>
              {materialSpecs.map((row) => (
                <tr key={row.material}>
                  <td className="mat-name"><strong>{row.material}</strong></td>
                  <td>{row.weight}</td>
                  <td>{row.strength}</td>
                  <td>{row.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function Manifesto() {
  return (
    <section className="manifesto">
      <div
        className="manifesto-image"
        style={{
          backgroundImage: `linear-gradient(90deg, var(--black), transparent 40%), url("${asset("images/study-02-perception-vision.jpg")}")`,
        }}
      />
      <div className="manifesto-content">
        <p className="eyebrow red">08 · THE PRINCIPLE</p>
        <h2>
          Technology should extend us. <em>Not erase us.</em>
        </h2>
        <p>
          The future of augmentation begins with a simple principle: preserve
          what makes us human while exploring what we may become.
        </p>
      </div>
    </section>
  )
}

const tiers = [
  [
    "01",
    "Foundation",
    "Discover the philosophy, principles, and design language behind NEXFORM.",
    "Explore Foundation",
    "#philosophy",
    asset("images/tier-01-foundation.jpg"),
    "CRANIAL ARCHITECTURE · EXOSKELETON CORE",
  ],
  [
    "02",
    "Advanced",
    "Explore conceptual modules, engineered materials, and human-machine interaction.",
    "Explore Advanced",
    "#modules",
    asset("images/tier-02-advanced.jpg"),
    "ARTICULATED MECHANISMS · ACTUATION ARRAY",
  ],
  [
    "03",
    "Custom",
    "Start a conversation about tailored concepts and future integration possibilities.",
    "Discuss a Concept",
    "#connect",
    asset("images/tier-03-custom.jpg"),
    "INTEGRATED SENSORS · TAILORED ROBOTICS",
  ],
]

function SocialProof() {
  const stats = [
    { value: "[120+]", label: "deployments" },
    { value: "[8]", label: "years of research" },
    { value: "[15]", label: "countries" },
    { value: "[98%]", label: "user satisfaction" },
  ]

  return (
    <section className="section social-proof-section" id="social-proof">
      <SectionHeader
        eyebrow="08 · PROVEN IMPACT"
        title="Trusted by teams building the future."
        copy="Engineered in collaboration with leading robotic laboratories, clinical specialists, and endurance pioneers worldwide."
      />

      <div className="social-stats-grid">
        {stats.map((s, idx) => (
          <div key={idx} className="social-stat-card">
            <span className="social-stat-value">{s.value}</span>
            <span className="social-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="testimonials-grid">
        <div className="testimonial-card">
          <span className="testimonial-quote-mark">“</span>
          <blockquote>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”
          </blockquote>
          <div className="testimonial-author">
            <strong>[Name, Role, Company]</strong>
            <span>Lead Kinematics Researcher</span>
          </div>
        </div>
        <div className="testimonial-card">
          <span className="testimonial-quote-mark">“</span>
          <blockquote>
            “Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”
          </blockquote>
          <div className="testimonial-author">
            <strong>[Name, Role, Company]</strong>
            <span>Director of Clinical Operations</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function Tiers({ onConnect }: { onConnect: () => void }) {
  return (
    <section className="section tier-section" id="tiers">
      <SectionHeader
        eyebrow="09 · EXPLORE NEXTFORM"
        title="Choose your point of entry."
        copy="Start small or go fully custom. Every option can grow with you."
      />
      <div className="tier-grid">
        {tiers.map(([number, title, copy, cta, href, image, tag], index) => (
          <article key={title} className="tier-card">
            <div className="tier-image-wrap">
              <img src={image} alt={`${title} robotics visual`} loading="lazy" />
              <div className="tier-image-overlay" />
              <span className="tier-meta-tag">{tag}</span>
            </div>
            <div className="tier-card-body">
              <span className="tier-number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              {index === 2 ? (
                <button type="button" onClick={onConnect} className="tier-cta-btn">
                  <span>{cta}</span>
                  <ArrowRight size={15} />
                </button>
              ) : (
                <a href={href} className="tier-cta-btn">
                  <span>{cta}</span>
                  <ArrowRight size={15} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="tier-matrix-container">
        <h4 className="tier-matrix-title">System Comparison Matrix</h4>
        <div className="tier-matrix-wrap">
          <table className="tier-matrix-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th>Foundation</th>
                <th>Advanced</th>
                <th>Custom</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="row-header">Best for</td>
                <td>First-time users and pilots</td>
                <td>Teams scaling up</td>
                <td>Unique, complex needs</td>
              </tr>
              <tr>
                <td className="row-header">Weight</td>
                <td>[X kg]</td>
                <td>[X kg]</td>
                <td>Built to spec</td>
              </tr>
              <tr>
                <td className="row-header">Sensors</td>
                <td>Core</td>
                <td>Full suite</td>
                <td>Your choice</td>
              </tr>
              <tr>
                <td className="row-header">Support</td>
                <td>Standard</td>
                <td>Priority</td>
                <td>Dedicated team</td>
              </tr>
              <tr className="tier-action-row">
                <td className="row-header">Action</td>
                <td>
                  <a href="#modules" className="tier-matrix-btn">Explore Foundation</a>
                </td>
                <td>
                  <a href="#modules" className="tier-matrix-btn">Explore Advanced</a>
                </td>
                <td>
                  <button type="button" onClick={onConnect} className="tier-matrix-btn primary">Talk about Custom</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function Philosophy() {
  return (
    <section className="section philosophy" id="philosophy">
      <SectionHeader
        eyebrow="01 · THE PHILOSOPHY"
        title="Neither purely human. Nor merely machine."
        copy="Adaptive robotic systems that extend human strength, precision and endurance, without replacing the person using them."
      />
      <div className="duality">
        <ImageWithFallback
          src={asset("images/philosophy-cybernetic-face.jpg")}
          alt="Cybernetic humanoid robotic face and optical sensor"
        />
        <div className="duality-axis">
          <span>H</span>
          <i />
          <span>M</span>
        </div>
        <ImageWithFallback
          src={asset("images/study-03-human-robot-interaction.jpg")}
          alt="Human intelligence and robotic interaction interface"
        />
      </div>
      <div className="philosophy-body">
        <p>
          We start with the human body and design outward. Every joint, sensor
          and surface exists to support natural movement, not to override it.
        </p>
      </div>
    </section>
  )
}

function Faq({ onConnect }: { onConnect: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "How much does it cost?",
      a: "Pricing depends on the system you choose. Foundation starts at [price]. Book a demo and we will give you a clear quote.",
    },
    {
      q: "How long does delivery take?",
      a: "Foundation systems ship in [X weeks]. Advanced and Custom builds take [X to X weeks].",
    },
    {
      q: "Can it be customized?",
      a: "Yes. Every system can be adjusted for size, task and environment. Custom builds are designed with you from the start.",
    },
    {
      q: "Is it safe?",
      a: "Safety is tested at every stage, and each system goes through full checks before delivery. [Add certifications if you have them.]",
    },
    {
      q: "What support do you offer?",
      a: "Training, maintenance and updates. Advanced and Custom plans include priority support.",
    },
  ]

  return (
    <section className="section faq-section" id="faq">
      <SectionHeader
        eyebrow="10 · FREQUENTLY ASKED QUESTIONS"
        title="Frequently Asked Questions"
        copy="Everything you need to know about our systems, customization, and deployment."
      />
      <div className="faq-accordion">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx
          return (
            <div key={idx} className={`faq-item ${isOpen ? "open" : ""}`}>
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                aria-expanded={isOpen}
              >
                <span>{faq.q}</span>
                <span className="faq-toggle-icon">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          )
        })}
      </div>
      <div className="faq-footer-cta">
        <p>Have a custom question or specific engineering requirement?</p>
        <button type="button" onClick={onConnect} className="button-link secondary">
          <span>Book a demo with an engineer</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  )
}

function FinalCta({ onConnect }: { onConnect: () => void }) {
  return (
    <section className="final-cta">
      <div
        className="final-image"
        style={{
          backgroundImage: `linear-gradient(90deg, #050505 0%, rgba(5,5,5,0.92) 28%, rgba(5,5,5,0.2) 60%, transparent 85%), linear-gradient(0deg, #050505 0%, transparent 25%), url("${asset("images/final-cta-robot-seamless.png")}")`,
        }}
      />
      <div className="final-content">
        <p className="eyebrow">NEXTFORM · INVITATION</p>
        <h2>Technology should extend us. Not erase us.</h2>
        <p>
          See how NEXTFORM can fit your team. Book a 30-minute demo and we will
          show you a system built for your needs.
        </p>
        <div className="final-actions">
          <button className="button-link" onClick={onConnect}>
            <span>Book a demo</span>
            <ArrowRight size={16} />
          </button>
          <button className="button-link secondary" onClick={onConnect}>
            <span>Download the overview</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}

function Footer({
  onConnect,
  onLegal,
}: {
  onConnect?: () => void
  onLegal?: (type: "Privacy" | "Terms") => void
}) {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [subError, setSubError] = useState("")

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) {
      setSubError("Please provide a valid engineering or institutional email.")
      return
    }
    setSubError("")
    setSubscribed(true)
  }

  return (
    <footer className="site-footer">
      <div className="footer-aligned-grid">
        {/* Column 1: Brand & Social */}
        <div className="footer-col footer-col-brand">
          <div className="footer-logo-row">
            <a href="#top" className="footer-logo-link" aria-label="NEXFORM home">
              <Logo />
              <strong className="footer-brand-name">NEXFORM</strong>
            </a>
            <span className="footer-status-pill">
              <i className="status-indicator" /> SYSTEM ONLINE
            </span>
          </div>
          <p className="footer-tagline">
            The next version begins with you.
          </p>
          <div className="footer-social-section">
            <span className="footer-social-heading">CONNECT WITH US</span>
            <div className="footer-social-links">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="YouTube"
                title="YouTube"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="Facebook"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label="Twitter / X"
                title="Twitter / X"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-col">
          <span className="footer-col-title">LINKS</span>
          <a href="#modules">Technology</a>
          <a href="#biotech">Materials</a>
          <a href="#applications">Applications</a>
          <a href="#demo">Explore</a>
          <a href="#faq">FAQ</a>
          <button type="button" onClick={onConnect} className="footer-text-link">Contact</button>
        </div>

        {/* Column 3: Research & Platform */}
        <div className="footer-col">
          <span className="footer-col-title">RESEARCH & PLATFORM</span>
          <a href="#cases">Kinematics Analysis</a>
          <a href="#cases">Perception & Vision</a>
          <a href="#cases">Human-Robot Synergy</a>
          <a href="#biotech">Material Intelligence</a>
          <a href="#demo">Interactive Demonstration</a>
          <a href="#tiers">Access Tiers & Specs</a>
        </div>

        {/* Column 4: Newsletter & Dispatch */}
        <div className="footer-col footer-col-newsletter">
          <span className="footer-col-title">NEWSLETTER</span>
          <p className="newsletter-copy">
            Get updates on new systems and research.
          </p>
          {subscribed ? (
            <div className="newsletter-success" role="status">
              <Check size={16} />
              <span>SUBSCRIPTION CONFIRMED · DISPATCH ACTIVATED</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="newsletter-form" noValidate>
              <div className="newsletter-input-wrap">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter engineering email..."
                  aria-label="Email address for NEXFORM newsletter"
                  required
                />
                <button type="submit" className="newsletter-submit">
                  <span>Subscribe</span>
                  <ArrowRight size={14} />
                </button>
              </div>
              {subError && <p className="newsletter-error">{subError}</p>}
            </form>
          )}
        </div>
      </div>

      {/* Footer Bottom Strip */}
      <div className="footer-bottom-strip">
        <div className="footer-copyright">
          <span>&copy; {new Date().getFullYear()} NEXFORM INC.</span>
          <span className="footer-sep">·</span>
          <span>ALL SPECIFICATIONS ARE SPECULATIVE ROBOTICS PROTOCOLS</span>
        </div>
        <div className="footer-coords">
          <span>LABS: TOKYO · ZÜRICH · SAN FRANCISCO</span>
        </div>
        <a href="#top" className="footer-back-top">
          TOP ↑
        </a>
      </div>
    </footer>
  )
}

function Dialog({
  title,
  children,
  onClose,
}: {
  title: string
  children: ReactNode
  onClose: () => void
}) {
  return (
    <div
      className="dialog-backdrop"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        <button
          className="dialog-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          <X />
        </button>
        <p className="eyebrow red">NEXFORM · DIALOG</p>
        <h2 id="dialog-title">{title}</h2>
        {children}
      </div>
    </div>
  )
}

function ContactDialog({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    if (
      !form.get("name") ||
      !String(form.get("email")).includes("@") ||
      !form.get("interest")
    ) {
      setError(
        "Please complete your name, a valid email, and area of interest.",
      )
      return
    }
    setError("")
    setSubmitted(true)
  }
  return (
    <Dialog
      title={submitted ? "Your concept is noted." : "Start a conversation."}
      onClose={onClose}
    >
      {submitted ? (
        <div className="confirmation">
          <Check />
          <p>
            Your details are saved in this local preview only. No message has
            been sent to an external service.
          </p>
        </div>
      ) : (
        <form onSubmit={submit} noValidate>
          <label>
            Name
            <input name="name" autoFocus autoComplete="name" />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" />
          </label>
          <label>
            Area of interest
            <select name="interest" defaultValue="">
              <option value="" disabled>
                Select one
              </option>
              <option>Foundation</option>
              <option>Advanced systems</option>
              <option>Custom concept</option>
            </select>
          </label>
          <label>
            Context{" "}
            <textarea
              name="context"
              rows={3}
              placeholder="Tell us what you would like to explore."
            />
          </label>
          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}
          <button type="submit" className="submit-button">
            <span>Save inquiry locally</span> <ArrowRight size={16} />
          </button>
        </form>
      )}
    </Dialog>
  )
}

export default function App() {
  const [contact, setContact] = useState(false)
  const [caseIndex, setCaseIndex] = useState<number | null>(null)
  const [legal, setLegal] = useState<"Privacy" | "Terms" | null>(null)
  return (
    <>
      <Nav onConnect={() => setContact(true)} />
      <main>
        <Hero onConnect={() => setContact(true)} />
        <Philosophy />
        <Modules />
        <Cases onSelect={setCaseIndex} />
        <Anatomy />
        <Applications />
        <LiveDemo />
        <Materials />
        <SocialProof />
        <Tiers onConnect={() => setContact(true)} />
        <Faq onConnect={() => setContact(true)} />
        <FinalCta onConnect={() => setContact(true)} />
      </main>
      <Footer onConnect={() => setContact(true)} onLegal={setLegal} />
      {contact && <ContactDialog onClose={() => setContact(false)} />}
      {caseIndex !== null && (
        <Dialog title={cases[caseIndex][2]} onClose={() => setCaseIndex(null)}>
          <ImageWithFallback
            src={cases[caseIndex][4]}
            alt={`${cases[caseIndex][1]} study detail`}
            className="dialog-image"
          />
          <p>{cases[caseIndex][3]}</p>
          <p className="dialog-note">
            {cases[caseIndex][0]} · {cases[caseIndex][1]} — NEXFORM ROBOTICS RESEARCH RECORD. EMPIRICAL KINETICS, MACHINE VISION & INTERACTION STUDY.
          </p>
        </Dialog>
      )}
      {legal && (
        <Dialog title={legal} onClose={() => setLegal(null)}>
          <p>
            {legal === "Privacy"
              ? "This concept preview does not transmit form data to a backend or third-party contact service. Any confirmation shown is local to this browser session."
              : "NEXFORM is presented as a speculative design concept. Modules, materials, applications, and statistics are illustrative and do not represent purchasable or clinically validated products."}
          </p>
        </Dialog>
      )}
    </>
  )
}
