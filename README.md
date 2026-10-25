# NEXTFORM · Advanced Robotics & Biomechanical Augmentation

<div align="center">

  <img src="public/nexform-hero-new.jpg" alt="NEXTFORM Hero Banner" width="100%" style="border-radius: 12px; margin-bottom: 20px;" />

  <h3>Robotic systems built around human capability.</h3>

  <p align="center">
    NEXTFORM designs adaptive robotic structures that extend human strength, precision, and endurance.<br />
    Built for engineers, clinicians, and teams who need technology that works seamlessly with people.
  </p>

  <p align="center">
    <a href="https://promi-15.github.io/Nexform-Website/"><strong>Explore Live Preview »</strong></a>
    <br />
    <br />
    <img src="https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-8.0-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 8" />
    <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/TailwindCSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
  </p>
</div>

---

## Table of Contents

- [Overview](#overview)
- [The Philosophy](#the-philosophy)
- [Website Sections & Architectural Features](#website-sections--architectural-features)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [Deployment (GitHub Pages)](#deployment-github-pages)
- [Author & Credits](#author--credits)
- [License](#license)

---

## Overview

**NEXTFORM** is an ultra-premium, responsive web interface engineered to showcase cutting-edge humanoid robotics, wearable exoskeletons, and cybernetic biomechanical augmentation.

Designed from the body outward, the platform communicates high-performance engineering through a cinematic dark-mode UI with disciplined crimson accents, balanced typography, seamless high-resolution hardware imagery, and interactive real-time telemetry simulators.

---

## The Philosophy

> *"Technology should extend us. Not erase us."*

The next evolution of augmentation is not about replacing human capability—it is about extending it. Where biological intelligence meets titanium precision, engineered structures become a natural extension of physical intent.

---

## Website Sections & Architectural Features

The landing page features a modular 12-stage user journey:

1. **Hero Experience**
   - High-impact dynamic profile robot banner with interactive ambient beam glow.
   - Direct dual CTAs: *Book a demo* (integrated booking modal) and *Explore materials*.
   - Live telemetry indicators and arc visualization telemetry.

2. **01 · The Philosophy**
   - Side-by-side cybernetic duality axis (*Human intuition vs. Machine precision*).
   - Core thesis highlighting human-centered kinematic augmentation.

3. **02 · Technology & Systems (Core Modules)**
   - **Structural Support**: Articulated carbon-titanium frame matrices designed to offload musculoskeletal strain.
   - **Sensory Interface**: Multi-spectral optical camera arrays and real-time environmental depth sensors.
   - **Adaptive Mechanics**: Precision bionic joints and coreless actuators matching user kinematics.
   - **Material Integration**: Ergonomic composite surfaces connecting mechanical structures with the user.

4. **03 · Ideas Take Form (Process & Research)**
   - **4-Stage Pipeline**: *01 Design* &rarr; *02 Prototype* &rarr; *03 Test* &rarr; *04 Deploy*.
   - **Supporting Research Cards**: Deep-dive modals into Kinematics Gait, Perception & Vision, and Human-Robot Physical Synergy.

5. **04 · Precision, Placed with Purpose (System Architecture)**
   - Interactive anatomy stage with automated circular telemetry focus across chassis, sensors, actuators, and composite weave.

6. **05 · Human Applications**
   - Real-world deployment case studies across **Movement**, **Perception**, and **Endurance**.

7. **06 · Interactive Experience (Hybrid Mode Simulator)**
   - Multi-state interactive mode switcher showcasing the spectrum between **Human only**, **Hybrid**, and **Machine assist**.

8. **07 · Material Intelligence**
   - Pure white high-contrast showcase of **Carbon Fiber**, **Grade-5 Titanium**, **Responsive Interfaces**, and **Human-Centered Engineering**.
   - Comprehensive **Material Specification Matrix** detailing tensile ratings, weight density, and optimal hardware applications.

9. **08 · Proven Impact (Social Proof)**
   - Peer testimonials highlighting clinical evaluations, research records, and operational efficiency.

10. **09 · Choose Your Point of Entry (Deployment Tiers)**
    - Three-tier pathway: **Foundation**, **Advanced**, and **Custom**.
    - Full system comparison matrix across use cases, sensor arrays, weight profiles, and engineering support.

11. **10 · Frequently Asked Questions (FAQ)**
    - Clean white accordion answering key questions regarding pricing models, custom sizing, delivery timelines, and safety validation.

12. **Final Continuum & White Footer**
    - High-conversion invitation with full-bleed feathered artwork and dual booking paths.
    - Minimalist white footer with brand navigation, newsletter dispatch input, and live system status indicators.

---

## Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite 8](https://vitejs.dev/) with native Rolldown build pipeline
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS Architecture
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting**: [GitHub Pages](https://pages.github.com/)

---

## Repository Structure

```text
nexform-website/
├── public/                     # Static assets served at root
│   ├── favicon.svg             # Vector site brand favicon
│   ├── nexform-hero-new.jpg    # High-resolution hero banner
│   ├── robots.txt              # Search crawler directives
│   └── images/                 # Hardware renders, studies & module imagery
│       ├── user-module-01.png  # Structural Support arm
│       ├── user-module-02.png  # Sensory Interface optical sensor
│       ├── user-module-03.png  # Adaptive Mechanics bionic hand
│       ├── user-module-04.png  # Material Integration carbon plate
│       └── final-cta-robot-seamless.png # Feathered CTA artwork
├── src/
│   ├── App.tsx                 # Core application layout & interactive modules
│   ├── index.css               # Design system tokens, responsive layout & themes
│   ├── main.tsx                # React DOM root hydration
│   └── vite-env.d.ts           # TypeScript ambient environment declarations
├── index.html                  # HTML entry point with metadata
├── package.json                # Project dependencies and script declarations
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite configuration with production base URL routing
```

---

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (version `20.x` or higher recommended).

```bash
node -v
npm -v
```

### Installation

Clone the repository and install project dependencies:

```bash
git clone https://github.com/Promi-15/Nexform-Website.git
cd Nexform-Website
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:8443](http://localhost:8443) (or the URL output in your terminal) in your browser.

### Production Build

Compile and bundle for production deployment:

```bash
npm run build
```

Built assets will be emitted to the `dist/` directory.

---

## Deployment (GitHub Pages)

The production site is hosted on GitHub Pages from the `gh-pages` branch with automated path routing for repository subdirectories (`/Nexform-Website/`).

To build and deploy the production bundle:

```bash
# 1. Build production bundle
npm run build

# 2. Deploy dist contents to gh-pages branch
# Built files include .nojekyll and 404.html for SPA route persistence
```

Live website is available at:
👉 **[https://promi-15.github.io/Nexform-Website/](https://promi-15.github.io/Nexform-Website/)**

---

## Author & Credits

Designed and maintained by **[Promi-15](https://github.com/Promi-15)**.

---

## License

This project is open-source and distributed under the [MIT License](LICENSE).
