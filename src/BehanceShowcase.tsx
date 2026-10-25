import { useState, useEffect, useRef } from "react"
import {
  Monitor,
  Smartphone,
  Palette,
  Cpu,
  Activity,
  Layers,
  Sparkles,
  ExternalLink,
  Play,
  Pause,
  Check,
  Copy,
  Sliders,
  ShieldCheck,
  Zap,
  ArrowRight,
  Maximize2,
  ChevronDown
} from "lucide-react"

interface BehanceShowcaseProps {
  onBackToSite: () => void
}

export function BehanceShowcase({ onBackToSite }: BehanceShowcaseProps) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [copiedHex, setCopiedHex] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<"overview" | "system" | "mockups" | "interactive">("overview")
  const [activeMode, setActiveMode] = useState<"human" | "hybrid" | "machine">("hybrid")
  const [showSliceGuides, setShowSliceGuides] = useState(false)
  const [telemetryPulse, setTelemetryPulse] = useState(72)

  // Auto-oscillate telemetry metrics for live animation feel
  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setTelemetryPulse((prev) => 70 + Math.floor(Math.sin(Date.now() / 800) * 8))
    }, 1000)
    return () => clearInterval(interval)
  }, [isPlaying])

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex)
    setCopiedHex(hex)
    setTimeout(() => setCopiedHex(null), 2000)
  }

  const colorPalette = [
    { name: "Obsidian Core", hex: "#09090B", role: "Primary Canvas & Deep Background", rgb: "9, 9, 11" },
    { name: "Kinetic Crimson", hex: "#E11D48", role: "Accent & Telemetry Signal", rgb: "225, 29, 72" },
    { name: "Hyper Ruby", hex: "#FB7185", role: "Interactive Highlights & Glows", rgb: "251, 113, 133" },
    { name: "Titanium Slate", hex: "#27272A", role: "Structural Surface & Borders", rgb: "39, 39, 42" },
    { name: "Pure Titanium", hex: "#A1A1AA", role: "Secondary Typography & Specs", rgb: "161, 161, 170" },
    { name: "Neural White", hex: "#F8FAFC", role: "Headlines & Clean High-Contrast Text", rgb: "248, 250, 252" }
  ]

  const metrics = [
    { label: "Weight Reduction", value: "40%", sub: "vs conventional frames", icon: Zap },
    { label: "Signal Latency", value: "<10ms", sub: "neural-mechanical sync", icon: Activity },
    { label: "Field Deployments", value: "120+", sub: "across 15 countries", icon: Layers },
    { label: "User Satisfaction", value: "98%", sub: "clinical validation score", icon: ShieldCheck }
  ]

  return (
    <div className={`min-h-screen bg-[#070709] text-zinc-100 font-sans selection:bg-rose-500 selection:text-white ${showSliceGuides ? "slice-guides-active" : ""}`}>
      {/* Top Floating Control Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-zinc-800/80 px-4 py-3 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToSite}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-zinc-900 border border-zinc-700 hover:border-rose-500 hover:text-rose-400 transition-all cursor-pointer"
            >
              <ExternalLink size={14} />
              <span>Back to Live Website</span>
            </button>
            <span className="h-4 w-[1px] bg-zinc-800 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse" />
              <span className="text-xs font-mono tracking-wider uppercase text-zinc-400">
                Behance Case Study Canvas · 1400px Ready
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSliceGuides(!showSliceGuides)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                showSliceGuides ? "bg-rose-500/20 text-rose-300 border border-rose-500/50" : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
              }`}
              title="Toggle Behance slice dividers (1400px blocks)"
            >
              <Layers size={14} />
              <span>{showSliceGuides ? "Hide Slice Guides" : "Show Slice Guides"}</span>
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-zinc-700 cursor-pointer"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              <span>{isPlaying ? "Pause Motion" : "Play Motion"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container - Standard 1400px Max-Width for Behance Precision */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-8 py-12 space-y-24">

        {/* =========================================================================
            SLICE 01: HERO COVER & TITLE BANNER (1400 x 900px Behance Hero Dimension)
           ========================================================================= */}
        <section className={`relative rounded-3xl overflow-hidden border border-zinc-800 bg-gradient-to-b from-zinc-900/60 via-black to-zinc-950 p-8 sm:p-16 lg:p-20 shadow-2xl ${showSliceGuides ? "ring-2 ring-dashed ring-rose-500/60" : ""}`}>
          {showSliceGuides && (
            <div className="absolute top-3 left-4 bg-rose-600 text-[10px] font-mono px-2 py-0.5 rounded text-white font-bold tracking-widest uppercase z-30">
              SLICE 01 · HERO COVER (1400px)
            </div>
          )}

          {/* Ambient Cybernetic Grid & Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(225,29,72,0.15),rgba(255,255,255,0))] pointer-events-none" />
          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono tracking-widest uppercase">
              <Sparkles size={14} className="animate-spin" style={{ animationDuration: "6s" }} />
              <span>UI/UX Case Study · Industrial Cybernetics</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              NEXTFORM <br />
              <span className="bg-gradient-to-r from-white via-zinc-200 to-rose-400 bg-clip-text text-transparent">
                Adaptive Biomechanics
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed">
              Robotic structures built around human capability. A digital experience engineered to balance cinematic high-contrast aesthetics with clinical engineering clarity.
            </p>

            {/* Quick Metadata Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-zinc-800/80">
              <div className="text-left bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/60">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">Role</span>
                <span className="text-sm font-semibold text-zinc-200">Lead Product Designer</span>
              </div>
              <div className="text-left bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/60">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">Timeline</span>
                <span className="text-sm font-semibold text-zinc-200">2026 Edition</span>
              </div>
              <div className="text-left bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/60">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">Tech Stack</span>
                <span className="text-sm font-semibold text-zinc-200">React 19 · Tailwind v4 · Vite</span>
              </div>
              <div className="text-left bg-zinc-900/60 p-4 rounded-xl border border-zinc-800/60">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block">Platform</span>
                <span className="text-sm font-semibold text-zinc-200">Web · Mobile · Desktop</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SLICE 02: ANIMATED MACBOOK PRO MOCKUP WITH ACTIVE SCREENCAST
           ========================================================================= */}
        <section className={`relative rounded-3xl border border-zinc-800 bg-[#0B0B0E] p-6 sm:p-12 overflow-hidden shadow-2xl ${showSliceGuides ? "ring-2 ring-dashed ring-rose-500/60" : ""}`}>
          {showSliceGuides && (
            <div className="absolute top-3 left-4 bg-rose-600 text-[10px] font-mono px-2 py-0.5 rounded text-white font-bold tracking-widest uppercase z-30">
              SLICE 02 · INTERACTIVE DESKTOP MOCKUP
            </div>
          )}

          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <span className="text-xs font-mono text-rose-400 uppercase tracking-widest">Digital Product Experience</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Full Desktop Viewport</h2>
            <p className="text-sm sm:text-base text-zinc-400">
              High-resolution interactive preview showcasing balanced typographic hierarchy, continuous dark-mode atmosphere, and high-visibility CTAs.
            </p>
          </div>

          {/* Realistic MacBook Pro Mockup Frame */}
          <div className="relative max-w-5xl mx-auto">
            {/* Screen Notch / Bezel */}
            <div className="rounded-t-2xl bg-[#1C1C21] p-2.5 sm:p-3.5 border-t border-x border-zinc-700/80 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
              {/* Web Browser Toolbar */}
              <div className="flex items-center justify-between pb-2 px-3 border-b border-zinc-800/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] inline-block" />
                </div>
                <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-black/60 border border-zinc-800 text-[11px] font-mono text-zinc-400 w-1/2 justify-center">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>https://promi-15.github.io/Nexform-Website</span>
                </div>
                <div className="w-12" />
              </div>

              {/* Viewport Screen Content (Simulated Auto-Scrolling Experience) */}
              <div className="relative h-[480px] sm:h-[620px] rounded-b-lg overflow-hidden bg-black border border-zinc-800 group">
                <div className={`w-full ${isPlaying ? "animate-behance-scroll" : ""}`}>
                  {/* Hero Screenshot replica */}
                  <div className="relative w-full aspect-[16/9] bg-zinc-950 flex flex-col justify-center items-center p-8 text-center border-b border-zinc-800">
                    <img
                      src="nexform-hero-new.jpg"
                      alt="NEXFORM Interface"
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = "none"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
                    <div className="relative z-10 space-y-4 max-w-xl">
                      <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-mono">
                        Robotic Systems
                      </span>
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                        Robotic systems built around human capability.
                      </h3>
                      <div className="flex justify-center gap-3 pt-2">
                        <span className="px-5 py-2 rounded-xl bg-white text-black font-semibold text-xs">Book a demo</span>
                        <span className="px-5 py-2 rounded-xl bg-zinc-800 text-white font-semibold text-xs border border-zinc-700">Explore materials</span>
                      </div>
                    </div>
                  </div>

                  {/* Philosophy section replica */}
                  <div className="p-8 sm:p-12 bg-black border-b border-zinc-800">
                    <span className="text-xs font-mono text-rose-400 uppercase">Philosophy</span>
                    <h4 className="text-2xl font-bold text-white mt-1">Neither purely human. Nor merely machine.</h4>
                    <p className="text-zinc-400 text-sm mt-2 max-w-xl">
                      Adaptive robotic systems that extend human strength, precision and endurance, without replacing the person using them.
                    </p>
                  </div>

                  {/* 4 Systems grid replica */}
                  <div className="p-8 sm:p-12 bg-zinc-950 grid grid-cols-2 gap-4 border-b border-zinc-800">
                    <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                      <h5 className="font-bold text-white text-sm">Structural Support</h5>
                      <p className="text-xs text-zinc-400 mt-1">Lightweight frames that carry load. [40% lighter]</p>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                      <h5 className="font-bold text-white text-sm">Sensory Interface</h5>
                      <p className="text-xs text-zinc-400 mt-1">Sensors that read movement in real time. [&lt;10ms]</p>
                    </div>
                  </div>
                </div>

                {/* Interactive Overlay badge */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-zinc-700 text-xs text-zinc-300 shadow-xl">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                  <span>{isPlaying ? "Simulating 60fps Smooth Scroll" : "Scroll Paused"}</span>
                </div>
              </div>
            </div>

            {/* Laptop Base Stand */}
            <div className="relative mx-auto h-4 sm:h-5 w-[104%] -left-[2%] bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700 rounded-b-xl shadow-2xl flex items-center justify-center">
              <div className="w-24 h-1.5 bg-zinc-800 rounded-full" />
            </div>
          </div>
        </section>

        {/* =========================================================================
            SLICE 03: BRAND IDENTITY & DESIGN SYSTEM TOKENS
           ========================================================================= */}
        <section className={`relative rounded-3xl border border-zinc-800 bg-[#0A0A0C] p-8 sm:p-16 overflow-hidden shadow-2xl ${showSliceGuides ? "ring-2 ring-dashed ring-rose-500/60" : ""}`}>
          {showSliceGuides && (
            <div className="absolute top-3 left-4 bg-rose-600 text-[10px] font-mono px-2 py-0.5 rounded text-white font-bold tracking-widest uppercase z-30">
              SLICE 03 · DESIGN SYSTEM & PALETTE
            </div>
          )}

          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-mono text-rose-400 uppercase tracking-widest">Visual Architecture</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Design System & Color Tokens</h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Constructed upon a cinematic dark foundation with disciplined crimson telemetry highlights. Every color serves a precise ergonomic purpose.
            </p>
          </div>

          {/* Color Swatches Grid with Click-to-Copy */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {colorPalette.map((c) => (
              <div
                key={c.hex}
                onClick={() => copyToClipboard(c.hex)}
                className="group relative p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-rose-500/50 transition-all cursor-pointer hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-xl border border-white/10 shadow-inner flex items-center justify-center text-xs font-mono font-bold"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-white text-sm">{c.name}</h4>
                      <span className="text-[11px] font-mono text-zinc-400 group-hover:text-rose-400 flex items-center gap-1">
                        {copiedHex === c.hex ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                        {copiedHex === c.hex ? "Copied" : c.hex}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1 leading-normal">{c.role}</p>
                    <span className="text-[10px] font-mono text-zinc-500 mt-1 block">RGB({c.rgb})</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Typography Scale Preview */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-6">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Typography Scale</span>
              <span className="text-xs font-mono text-zinc-500">Font Family: Inter / System Neo-Grotesque</span>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-800/40 pb-3">
                <span className="text-xs font-mono text-zinc-500 w-32">Display XL (56px)</span>
                <span className="text-3xl sm:text-5xl font-extrabold text-white flex-1">Robotic systems built.</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-800/40 pb-3">
                <span className="text-xs font-mono text-zinc-500 w-32">Heading 1 (32px)</span>
                <span className="text-2xl font-bold text-white flex-1">Neither purely human. Nor merely machine.</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-zinc-800/40 pb-3">
                <span className="text-xs font-mono text-zinc-500 w-32">Body Lead (16px)</span>
                <span className="text-base text-zinc-300 font-light flex-1">
                  Adaptive robotic systems that extend human strength, precision, and endurance.
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <span className="text-xs font-mono text-zinc-500 w-32">Telemetry Mono (12px)</span>
                <span className="text-xs font-mono text-rose-400 flex-1">
                  LATENCY &lt;10MS · LOAD RATIO 40% · SENSORY_FREQ 120HZ · ACTIVE_STATUS ONLINE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SLICE 04: INTERACTIVE HYBRID SIMULATOR & TELEMETRY HUD
           ========================================================================= */}
        <section className={`relative rounded-3xl border border-zinc-800 bg-gradient-to-b from-[#0E0E12] to-black p-8 sm:p-16 overflow-hidden shadow-2xl ${showSliceGuides ? "ring-2 ring-dashed ring-rose-500/60" : ""}`}>
          {showSliceGuides && (
            <div className="absolute top-3 left-4 bg-rose-600 text-[10px] font-mono px-2 py-0.5 rounded text-white font-bold tracking-widest uppercase z-30">
              SLICE 04 · INTERACTION & TELEMETRY
            </div>
          )}

          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono text-rose-400 uppercase tracking-widest">Interactive Component Demo</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">The Hybrid Simulator Engine</h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Test the real-time mode transitions and sensory feedback mechanisms built into the NEXTFORM core.
            </p>
          </div>

          {/* Interactive Mode Controls */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl">
              {(["human", "hybrid", "machine"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setActiveMode(mode)}
                  className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold capitalize transition-all cursor-pointer ${
                    activeMode === mode
                      ? "bg-rose-500 text-white shadow-lg shadow-rose-500/30"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {mode === "human" ? "Human Only" : mode === "hybrid" ? "Hybrid Assist" : "Machine Assist"}
                </button>
              ))}
            </div>
          </div>

          {/* Telemetry Dashboard Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Metric 1 */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-zinc-400 uppercase">Assistance Ratio</span>
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              </div>
              <div className="text-4xl font-black font-mono text-white tracking-tight">
                {activeMode === "human" ? "0%" : activeMode === "hybrid" ? "58%" : "94%"}
              </div>
              <p className="text-xs text-zinc-400 mt-2">
                {activeMode === "human"
                  ? "Standard biological expenditure."
                  : activeMode === "hybrid"
                  ? "Dynamic joint torque balancing in real time."
                  : "Full servo payload displacement enabled."}
              </p>
              <div className="w-full bg-zinc-800 h-1.5 rounded-full mt-4 overflow-hidden">
                <div
                  className="bg-rose-500 h-full transition-all duration-700"
                  style={{ width: activeMode === "human" ? "5%" : activeMode === "hybrid" ? "58%" : "94%" }}
                />
              </div>
            </div>

            {/* Metric 2: Live Pulse */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-zinc-400 uppercase">Sensory Telemetry</span>
                <Activity size={16} className="text-rose-400 animate-pulse" />
              </div>
              <div className="text-4xl font-black font-mono text-white tracking-tight">
                {telemetryPulse} <span className="text-sm font-normal text-zinc-400">BPM</span>
              </div>
              <p className="text-xs text-zinc-400 mt-2">Continuous biological sync and posture feedback loop.</p>
              <div className="mt-4 flex items-center gap-1 h-6">
                {[40, 60, 20, 80, 50, 95, 30, 70, 85, 45, 65, 30, 90, 40].map((h, i) => (
                  <span
                    key={i}
                    className="flex-1 bg-rose-500/70 rounded-full transition-all duration-300"
                    style={{ height: `${(h * telemetryPulse) / 80}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Metric 3: Active State */}
            <div className="p-6 rounded-2xl bg-zinc-950/80 border border-zinc-800 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-zinc-400 uppercase">Kinetic Status</span>
                <Zap size={16} className="text-amber-400" />
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">
                {activeMode === "human" ? "PASSIVE" : activeMode === "hybrid" ? "NEURAL SYNC" : "MAX POWER"}
              </div>
              <p className="text-xs text-zinc-400 mt-2">
                Latency: <span className="text-rose-400 font-mono font-bold">&lt;8.4ms</span> · Load Rating: <span className="text-zinc-200 font-mono">180 kg</span>
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-emerald-400">CALIBRATED</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300">ISO-13482</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SLICE 05: DUAL MOBILE (IPHONE 16 PRO) PERSPECTIVE MOCKUP
           ========================================================================= */}
        <section className={`relative rounded-3xl border border-zinc-800 bg-[#0A0A0D] p-8 sm:p-16 overflow-hidden shadow-2xl ${showSliceGuides ? "ring-2 ring-dashed ring-rose-500/60" : ""}`}>
          {showSliceGuides && (
            <div className="absolute top-3 left-4 bg-rose-600 text-[10px] font-mono px-2 py-0.5 rounded text-white font-bold tracking-widest uppercase z-30">
              SLICE 05 · MOBILE RESPONSIVENESS
            </div>
          )}

          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono text-rose-400 uppercase tracking-widest">Mobile Ergonomics</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Responsive Mobile Interface</h2>
            <p className="text-sm sm:text-base text-zinc-400">
              Designed with 44px+ touch-friendly target sizes, bottom-sheet ergonomics, and clean typography tailored for field clinicians and operators.
            </p>
          </div>

          {/* Dual iPhone Perspective Mockups */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
            {/* Phone 1: Landing View */}
            <div className="w-[280px] sm:w-[320px] rounded-[44px] bg-[#1B1B20] p-3 border-2 border-zinc-700 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transform hover:-translate-y-2 transition-transform duration-500">
              <div className="rounded-[36px] bg-black overflow-hidden border border-zinc-800 relative h-[560px] flex flex-col">
                {/* Dynamic Island */}
                <div className="w-24 h-5 bg-black rounded-full mx-auto mt-2.5 border border-zinc-800/80 z-20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-zinc-900 ml-auto mr-3" />
                </div>

                {/* Mobile Screen Content */}
                <div className="p-5 space-y-4 flex-1 overflow-hidden">
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-bold text-xs tracking-wider text-white">NEXTFORM</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800">MENU</span>
                  </div>

                  <div className="pt-6 space-y-2">
                    <span className="text-[10px] font-mono text-rose-400 uppercase">Adaptive Robotics</span>
                    <h5 className="text-xl font-bold text-white leading-tight">Built around human capability.</h5>
                    <p className="text-zinc-400 text-xs">Extending human strength, precision and endurance.</p>
                  </div>

                  <div className="pt-2">
                    <div className="w-full py-2.5 rounded-xl bg-white text-black font-semibold text-xs text-center">
                      Book a demo
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-1">
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Core Architecture</span>
                    <div className="text-xs font-semibold text-white">Structural Support (40% lighter)</div>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="w-32 h-1 bg-zinc-700 rounded-full mx-auto mb-2" />
              </div>
            </div>

            {/* Phone 2: FAQ & Specs View */}
            <div className="w-[280px] sm:w-[320px] rounded-[44px] bg-[#1B1B20] p-3 border-2 border-zinc-700 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transform hover:-translate-y-2 transition-transform duration-500 mt-6 md:mt-12">
              <div className="rounded-[36px] bg-[#0A0A0D] overflow-hidden border border-zinc-800 relative h-[560px] flex flex-col">
                {/* Dynamic Island */}
                <div className="w-24 h-5 bg-black rounded-full mx-auto mt-2.5 border border-zinc-800/80 z-20" />

                {/* Mobile Screen Content */}
                <div className="p-5 space-y-4 flex-1 overflow-hidden bg-white text-zinc-900">
                  <div className="pt-2 flex items-center justify-between border-b border-zinc-200 pb-2">
                    <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Frequently Asked</span>
                    <span className="text-[10px] font-mono text-zinc-500">FAQ</span>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
                      <div className="text-xs font-semibold text-zinc-900">How much does it cost?</div>
                      <p className="text-[11px] text-zinc-600">Foundation starts with transparent entry pricing.</p>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
                      <div className="text-xs font-semibold text-zinc-900">Can it be customized?</div>
                      <p className="text-[11px] text-zinc-600">Yes, every unit adjusts to task and anatomy.</p>
                    </div>

                    <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
                      <div className="text-xs font-semibold text-zinc-900">Is it safe?</div>
                      <p className="text-[11px] text-zinc-600">Full ISO certification across all modules.</p>
                    </div>
                  </div>

                  <div className="mt-auto pt-4">
                    <div className="w-full py-2.5 rounded-xl bg-zinc-900 text-white font-semibold text-xs text-center">
                      Explore FAQ
                    </div>
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="w-32 h-1 bg-zinc-300 rounded-full mx-auto mb-2" />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SLICE 06: IMPACT METRICS & PROJECT RESULTS
           ========================================================================= */}
        <section className={`relative rounded-3xl border border-zinc-800 bg-gradient-to-r from-zinc-950 via-[#101015] to-zinc-950 p-8 sm:p-16 overflow-hidden shadow-2xl ${showSliceGuides ? "ring-2 ring-dashed ring-rose-500/60" : ""}`}>
          {showSliceGuides && (
            <div className="absolute top-3 left-4 bg-rose-600 text-[10px] font-mono px-2 py-0.5 rounded text-white font-bold tracking-widest uppercase z-30">
              SLICE 06 · PROJECT METRICS & IMPACT
            </div>
          )}

          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono text-rose-400 uppercase tracking-widest">Performance & Validation</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Engineered for Human Impact</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, i) => {
              const Icon = m.icon
              return (
                <div key={i} className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mb-4">
                    <Icon size={20} />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{m.value}</div>
                  <div className="text-sm font-semibold text-zinc-300 mt-1">{m.label}</div>
                  <div className="text-xs text-zinc-500 mt-1">{m.sub}</div>
                </div>
              )
            })}
          </div>
        </section>

        {/* =========================================================================
            SLICE 07: BEHANCE CASE STUDY FOOTER & CREDITS
           ========================================================================= */}
        <footer className={`relative rounded-3xl border border-zinc-800 bg-black p-10 sm:p-16 text-center space-y-8 overflow-hidden ${showSliceGuides ? "ring-2 ring-dashed ring-rose-500/60" : ""}`}>
          {showSliceGuides && (
            <div className="absolute top-3 left-4 bg-rose-600 text-[10px] font-mono px-2 py-0.5 rounded text-white font-bold tracking-widest uppercase z-30">
              SLICE 07 · BEHANCE FOOTER & APPRECIATION
            </div>
          )}

          <div className="space-y-4 max-w-xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-bold text-white">Thank you for watching!</h3>
            <p className="text-sm sm:text-base text-zinc-400">
              Don’t forget to appreciate the project on Behance if you enjoyed the design and engineering breakdown.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={onBackToSite}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm bg-white text-black hover:bg-zinc-200 transition-all cursor-pointer shadow-lg hover:scale-105"
            >
              <span>Visit Live Website</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
            <span>© 2026 NEXTFORM. Designed & Engineered by Promi.</span>
            <span>Tools: React · Vite · Tailwind CSS · Figma · TypeScript</span>
          </div>
        </footer>

      </main>

      <style>{`
        @keyframes behanceScroll {
          0% { transform: translateY(0%); }
          50% { transform: translateY(-38%); }
          100% { transform: translateY(0%); }
        }
        .animate-behance-scroll {
          animation: behanceScroll 22s ease-in-out infinite;
        }
        .slice-guides-active {
          background-image: linear-gradient(to bottom, rgba(225,29,72,0.03) 1px, transparent 1px);
          background-size: 100% 200px;
        }
      `}</style>
    </div>
  )
}
