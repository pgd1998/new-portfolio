# Portfolio Redesign Brief - Poorvith Gowda

## Context

**Portfolio URL:** https://www.poorvithgowda.com/

**Current Tech Stack:** Next.js with Tailwind CSS

**Goal:** Redesign software engineering portfolio to better showcase technical depth, project impact, and readiness for startup full-stack roles in Melbourne/Sydney.

**Key Constraint:** This is a SOFTWARE ENGINEERING portfolio. I have a separate design portfolio (design.poorvithgowda.com) but I'm NOT looking for UI/UX designer roles. Keep the focus on technical capabilities and engineering skills.

---

## Problems with Current Portfolio

1. **Generic appearance** - looks like every other dev portfolio (dark theme + purple accent)
2. **No visual proof** - projects are text-only, no screenshots/GIFs/previews
3. **Weak project descriptions** - feature lists instead of technical depth and impact
4. **No clear technical positioning** - doesn't convey full-stack capabilities or startup readiness
5. **Hidden strengths** - technical complexity and architecture decisions aren't visible
6. **Poor information hierarchy** - everything has the same visual weight

---

## Target Audience

- **Primary:** Early-stage startups in Melbourne/Sydney looking for full-stack engineers
- **Secondary:** Technical hiring managers who want to see depth, not just breadth
- **What they care about:** Can you ship products end-to-end? Can you make technical decisions? Are you a builder?

---

## Redesign Requirements

### 1. HERO SECTION

**Current copy is weak.** Replace with:

```
Poorvith Gowda
Full-Stack Software Engineer

I build production systems from 0→1 - from React frontends 
to FastAPI backends, ML pipelines to AWS infrastructure. 
Currently building environmental modeling tools at Beyond EPiC.

Looking for: Full-stack SWE roles at early-stage startups in Melbourne/Sydney

[View Experience] [View Projects] [GitHub] [LinkedIn] [Resume]
```

**Design Requirements:**
- Keep it clean and minimal
- Name should be largest text on page
- Tagline should be easily readable
- CTAs should be prominent but not overwhelming
- Consider subtle background pattern or grid (optional, don't overdo it)
- No animations on initial load (fast loading is priority)

---

### 2. ABOUT ME SECTION

**Current content doesn't show startup fit.** Rewrite to:

#### Heading: "About Me"

**Content:**

```
I'm a software engineer passionate about creating accessible, well-engineered 
user interfaces that blend thoughtful design with robust technical implementation. 
My favorite work lies at the intersection of design and development, creating 
experiences that not only look great but are meticulously built for performance 
and usability.

Currently, I'm a Software Developer at Beyond EPiC (backed by University of 
Melbourne), where I joined as the second employee and have been building 
computational tools for environmental impact modeling. I lead development of 
the Rephrame platform and Nested Phoenix, ensuring our software meets web 
accessibility standards and best practices to deliver an inclusive user experience.

In the past, I've had the opportunity to develop software across a variety of 
settings — from advertising agencies and large corporations to start-ups and 
small digital product studios. This diverse experience has given me a strong 
foundation in building software that scales and adapts to different needs.

Outside of work, I'm an active builder - I created F1 Intelligence, a machine 
learning system for race predictions, and KnowHub, an AI-powered knowledge 
management platform. I'm passionate about exploring the intersection of AI, 
data visualization, and web technologies.
```

**Education Section (keep existing structure):**
```
Education

Master of Software Engineering
University of Melbourne, Melbourne, VIC

Bachelor of Engineering in Computer Science
Malnad College of Engineering, India
```

**Design Requirements:**
- Two column layout on desktop: left side text, right side could be a photo or keep it clean
- Readable line length (60-75 characters max)
- Good spacing and typography
- Education section should be compact but clear

---

### 3. EXPERIENCE SECTION

**Current content is okay but needs more "startup signals."**

#### Beyond EPiC (Current Role)

```
Software Developer • Beyond EPiC (University of Melbourne)
2023 - PRESENT | Melbourne, VIC

Joined as the second employee building computational tools for environmental modeling

Key Contributions:

◆ Led end-to-end development of Rephrame platform - architected React frontend 
  with Python backend, handling complex embodied carbon calculations for sustainable 
  building assessment, improving assessment efficiency by 50%

◆ Engineered responsive frontend and scalable backend for Nested Phoenix, resulting 
  in 30% improvement in navigation and 25% decrease in server response time

◆ Designed and implemented cloud-based architecture using AWS services (EC2, S3, 
  Lambda) for application hosting and automated data processing tasks

◆ Integrated SNS and SQS for reliable microservice communication, improving system 
  scalability and resilience

◆ Established CI/CD pipelines and managed deployments, ensuring system reliability 
  while halving release times

◆ Work independently with research team to ship features from conception to 
  production - no hand-holding, owned product and technical decisions

Technologies: React, JavaScript, Flask, Python, Tailwind CSS, Plotly Dash, 
REST API, CI/CD, Firebase
```

#### Accenture

```
Software Engineer • Accenture Solutions
2020 - 2022 | India

Delivered enterprise software solutions for global clients

Key Contributions:

◆ Spearheaded development of Customer Care System for global client, reducing 
  response time by 40% and boosting satisfaction scores by 25%

◆ Enhanced user experience through intuitive front-end features and optimized 
  API performance and database scalability on the back end

◆ Streamlined deployment processes via CI/CD pipelines, cutting release times 
  by 50% and improving delivery efficiency

Technologies: JavaScript, React, Node, Express, AWS, Tailwind, MongoDB, Gulp
```

#### InflaMed (Internship)

```
Application Developer Intern • InflaMed Pty Ltd
2023 - 2024 | Melbourne, VIC

Built full-stack health-tech platform for clinicians

Key Contributions:

◆ Developed full-stack health-tech platform tailored for clinicians, increasing 
  workflow efficiency by 35% and deploying securely on cloud infrastructure

◆ Integrated real-time healthcare data features while ensuring FHIR compliance 
  and maintaining 99% data accuracy

◆ Delivered secure video consultations and live transcription, reducing 
  documentation time by 50% and enhancing user satisfaction by 25%

Technologies: Next.js, TypeScript, Material UI, Python, Django, Firebase, 
AWS, 100ms, FHIR
```

**Design Requirements:**
- Clear visual hierarchy: Company name > Role > Dates
- Bullet points with icons (◆ or similar) for visual interest
- Technologies should be in pill/badge format at the bottom of each role
- Compact but readable
- On hover, could slightly highlight the section

---

### 4. PROJECTS SECTION (MOST IMPORTANT)

**This needs the biggest overhaul.**

#### Structure for Each Project Card:

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  [LARGE PREVIEW IMAGE/GIF - 40-50% of card]        │
│                                                     │
│  PROJECT NAME                                       │
│  One-line technical hook                            │
│                                                     │
│  2-3 sentences about what it does and impact        │
│                                                     │
│  [Tech Stack Badges - colorful, prominent]          │
│                                                     │
│  [View Live Demo] [Technical Deep Dive]             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Design Requirements:**
- Images/GIFs are MANDATORY - no text-only cards
- Cards should have subtle hover effect (slight lift + shadow)
- Alternate layout: image left/right for visual variety
- Tech badges should use actual tech colors (React blue, Python gold, etc.)
- Buttons should be clear CTAs
- "Technical Deep Dive" button should open new tab to future architecture docs

---

#### Project 1: Rephrame

**Image:** Screenshot of Rephrame assessment tool interface (you'll need to provide this)

**Content:**
```
Rephrame

Sustainable Building Assessment Platform

A cutting-edge software tool for building designers to assess embodied carbon, 
energy, and water. The platform offers interactive visualizations and comprehensive 
assessment tools that improve efficiency by 50%.

Built as the second employee at Beyond EPiC, architecting the full-stack solution 
from ground up with React frontend and Python backend.

Tech Stack: JavaScript, Flask, Python, Tailwind CSS, Plotly Dash, Heroku
```

**Buttons:**
- "View Live Demo" (link if available, otherwise GitHub)
- "Technical Deep Dive" (placeholder link for now, will be implemented later)

---

#### Project 2: F1 Intelligence

**Image:** Screenshot/GIF of F1 dashboard showing race predictions or data visualization

**Content:**
```
F1 Intelligence

Real-Time Formula 1 Race Analytics & Prediction Engine

A full-stack web application delivering real-time Formula 1 telemetry data, race 
analytics, and interactive race replay visualization. Built machine learning models 
achieving 96.4% R² accuracy in lap time predictions using 84 features across historical 
race data from 2019-2024.

Processes 1000+ races with sub-2-second query response times using Redis caching 
and FastAPI backend.

Tech Stack: TypeScript, React, Fast API, Python, CI/CD, Supabase, Redis
```

**Buttons:**
- "View Live Demo" → https://f1intelligence.org
- "Technical Deep Dive" (placeholder)

---

#### Project 3: KnowHub

**Image:** Screenshot of KnowHub search interface or RAG pipeline visualization

**Content:**
```
KnowHub

AI-Powered Knowledge Management Platform

An AI-powered knowledge management platform that automatically captures, transcribes, 
and organizes team meeting discussions into searchable, structured insights. Built 
sophisticated RAG pipeline with hybrid search architecture combining semantic vector 
search (Pinecone) and PostgreSQL full-text search using Reciprocal Rank Fusion algorithm, 
achieving sub-2-second query response times.

Reduced team knowledge search time from 10+ minutes to under 2 minutes with 95%+ 
transcription accuracy.

Tech Stack: TypeScript, React, Redux, FastAPI, Python, Celery, Redis, PostgreSQL, 
Pinecone, OpenAI, Supabase, CI/CD
```

**Buttons:**
- "View GitHub" (if available)
- "Technical Deep Dive" (placeholder)

---

#### Project 4: August Robotics

**Image:** Screenshot of robot fleet management dashboard

**Content:**
```
August Robotics

Robot Fleet Management System

A comprehensive software system for managing and preserving critical operational 
data generated by floor-marking robots. Built interactive dashboard with dynamic 
charts for visualizing robot performance and operational data in real-time.

Engineered full-stack solution with TypeScript frontend and Python backend, handling 
real-time data processing for multiple autonomous robots.

Tech Stack: TypeScript, Vue.js, Vuetify, Python, Django, Docker, CI/CD, PostgreSQL, Redux
```

**Buttons:**
- "View Project" (if available)
- "Technical Deep Dive" (placeholder)

---

#### Project 5: Variation Form Project

**Image:** Screenshot of variation form management interface

**Content:**
```
Variation Form Project

Construction Contract Management System

Designed and developed a specialized web application to streamline the construction 
variation management process, enabling digital submission, tracking, and approval 
of contract modifications. Reduced form processing time by approximately 40% compared 
to paper-based methods.

Built modern React frontend with Node.js backend, implementing JWT authentication 
for secure API endpoints.

Tech Stack: React, Node.js, MongoDB, Express, RESTful API, JWT, Material UI
```

**Buttons:**
- "View Project" (if available)
- "Technical Deep Dive" (placeholder)

---

#### Project 6: Finsplore (Under Development)

**Image:** Mockup or early screenshot of financial assistant interface

**Content:**
```
Finsplore - Smart Financial Assistant

AI-Powered Financial Management Platform (Under Development)

Leading development of an innovative financial management application focused on 
automation and accessibility, designed to simplify complex financial decisions for 
users without financial expertise. Integrated AI-powered assistant functionality 
that provides personalized financial guidance.

Building with modern full-stack architecture featuring Flutter mobile app and 
Spring Boot backend with RESTful APIs.

Tech Stack: Flutter, Dart, Java, Spring Boot, RESTful API, AI Integration, 
Data Visualization, Firebase
```

**Buttons:**
- "Coming Soon" (disabled state)
- "Technical Deep Dive" (placeholder)

---

#### Project 7: Resource Monitoring

**Image:** Screenshot of monitoring dashboard with server metrics

**Content:**
```
Resource Monitoring

E-Commerce Infrastructure Monitoring System

Created Bash scripts to monitor server resources (CPU, memory, disk space) for 
e-commerce website and implemented email alert system for threshold violations, 
improving platform reliability by 35%.

Automated critical infrastructure monitoring reducing manual checks and enabling 
proactive incident response.

Tech Stack: Bash Scripting, Linux Server Administration, Alerting Mechanisms, Automation
```

**Buttons:**
- "View GitHub" (if available)
- "Technical Deep Dive" (placeholder)

---

#### Project 8: Music Events System

**Image:** Screenshot of music event management platform

**Content:**
```
Music Events System Project

Live Music Event Management Platform

Developed a comprehensive online platform for managing and promoting live music 
events across Australia, encompassing robust data management, secure user authentication, 
and a user-friendly interface.

Implemented JWT-based authentication for securing API endpoints and built responsive 
frontend with server-side rendering for optimal performance.

Tech Stack: Java, JavaServer Pages (JSP), Servlet, JWT, Render, CI/CD, REST API
```

**Buttons:**
- "View Project" (if available)
- "Technical Deep Dive" (placeholder)

---

### 5. CLOSING CTA SECTION

**Add a final call-to-action section:**

```
Let's Build Something

I'm looking for full-stack engineering roles at early-stage startups in 
Melbourne or Sydney where I can contribute across the stack, make architecture 
decisions, and help build 0→1 products.

Currently on 485 visa (valid until 2029).

[Email Me] [Schedule Call] [Download Resume]

Tech I'm excited about right now: RAG systems, AI agents, real-time data 
processing, vector databases
```

**Design Requirements:**
- Centered layout
- Clear CTAs with good visual hierarchy
- Professional but approachable tone
- Consider subtle background or card style

---

## Overall Design Guidelines

### Color Scheme
- Keep dark theme (it's fine for dev portfolios)
- But increase contrast - current purple is too subtle
- Consider using code editor inspired colors (VS Code Dark+ theme palette)
- Tech badges should use actual brand colors (React #61DAFB, Python #3776AB, etc.)

### Typography
- Use clear, modern sans-serif for body text (Inter, SF Pro, or similar)
- Consider monospace font for code-related elements or tech names
- Clear hierarchy: H1 > H2 > Body > Caption
- Ensure good readability with proper line height and spacing

### Spacing & Layout
- More white space between sections
- Consistent padding and margins
- Comfortable reading width (not full-width on large screens)
- Responsive design - mobile first approach

### Visual Elements
- Subtle grid pattern in background (optional)
- Smooth transitions on hover states
- No jarring animations
- Professional and clean aesthetic

### Images/Media
- All project cards MUST have preview images
- Images should be optimized (WebP format)
- Consider lazy loading for performance
- Fallback states if images fail to load

### Tech Stack Badges
- Use pill/badge style
- Include tech brand colors
- Consistent sizing across all projects
- Grouped logically (Frontend | Backend | Database | Cloud)

---

## Technical Implementation Notes

### Performance
- Optimize images (use Next.js Image component)
- Lazy load below-the-fold content
- Minimize JavaScript bundle size
- Fast initial page load is critical

### Accessibility
- Semantic HTML
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support
- ARIA labels where needed
- Good color contrast ratios

### SEO
- Proper meta tags
- Structured data (JSON-LD)
- Semantic HTML
- Fast page load times

### Links
- External links should open in new tabs (target="_blank" rel="noopener noreferrer")
- "Technical Deep Dive" buttons should be styled but can link to "#" for now
- GitHub, LinkedIn, email links should be functional

---

## Priority Order

1. **Hero Section** - First impression matters
2. **Projects Section** - Most important for job search
3. **About Me** - Context and personality
4. **Experience** - Credibility
5. **Closing CTA** - Clear next steps

---

## What NOT to Do

- ❌ Don't make it look like a designer portfolio (I'm a software engineer)
- ❌ Don't add unnecessary animations or fancy effects
- ❌ Don't use generic stock photos
- ❌ Don't make text walls - break up content
- ❌ Don't hide technical depth - showcase it
- ❌ Don't forget mobile responsiveness
- ❌ Don't use tiny fonts or poor contrast

---

## Success Criteria

The redesigned portfolio should:
- ✅ Immediately communicate "full-stack software engineer"
- ✅ Show visual proof of every project
- ✅ Convey technical depth and startup readiness
- ✅ Be scannable in 30 seconds but have depth for those who want it
- ✅ Have clear CTAs and next steps
- ✅ Load fast and be performant
- ✅ Work perfectly on mobile
- ✅ Stand out from generic dev portfolios

---

## Assets Needed (You'll Need to Provide These)

1. **Project Screenshots/GIFs:**
   - Rephrame assessment interface
   - F1 Intelligence dashboard
   - KnowHub search/chat interface
   - August Robotics dashboard
   - Variation Form Project interface
   - Finsplore mockup/early screens
   - Resource Monitoring dashboard
   - Music Events System interface

2. **Links:**
   - Resume PDF
   - GitHub profile
   - LinkedIn profile
   - Live demo links (where available)

3. **Optional:**
   - Professional photo (for About section)
   - Logo/monogram for header

---

## Notes

- "Technical Deep Dive" links are placeholders - these will be separate pages built later with architecture decisions, system design, trade-offs, etc.
- Focus on building the main portfolio pages first with proper structure
- Images are critical - portfolio without visuals won't work
- Keep messaging focused on software engineering, not design
- Emphasize full-stack capabilities and startup readiness throughout

---

## Questions to Clarify

If you need clarification on any design decisions or content, consider:
- How prominent should the visa status be? (Currently in closing CTA)
- Should there be a skills/technologies overview section?
- Any specific projects that should be featured more prominently?
- Preferred button styles and interaction patterns?
