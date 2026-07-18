# Portfolio Design System

# Design Principles

The portfolio should feel like a premium software product rather than a traditional personal website.

Core principles:

- Minimal over decorative
- Functional over flashy
- Consistency over experimentation
- Performance over visual excess
- Engineering precision in every detail

The visual identity should remain timeless and professional while subtly reflecting expertise in backend systems, AI, and cybersecurity.

---

# Theme

Primary Theme:
Dark

Secondary Theme:
Light

Both themes must provide equivalent functionality and visual quality.

---

# Color Philosophy

The portfolio follows a monochrome-first design language.

Monochrome establishes professionalism, readability, and timelessness.

Emerald serves as the signature accent color, representing growth, trust, security, and system health.

Accent colors should be used intentionally—not excessively.

Visitors should notice the content first and the colors second.

---

# Dark Theme

Background:
#09090B

Surface:
#18181B

Elevated Surface:
#27272A

Primary Accent (Emerald):
#10B981

Accent Hover:
#059669

Accent Soft:
#34D399

Primary Text:
#FAFAFA

Secondary Text:
#A1A1AA

Muted Text:
#71717A

Border:
rgba(255,255,255,0.08)

Divider:
rgba(255,255,255,0.06)

---

# Light Theme

Background:
#FFFFFF

Surface:
#FAFAFA

Elevated Surface:
#F4F4F5

Primary Accent:
#10B981

Accent Hover:
#059669

Primary Text:
#18181B

Secondary Text:
#52525B

Muted Text:
#71717A

Border:
rgba(0,0,0,0.08)

Divider:
rgba(0,0,0,0.06)

---

# Typography

Primary Font:

Geist

Fallback:

Inter

Monospace:

JetBrains Mono

---

# Font Scale

Hero Title

56–72px

Section Heading

36–42px

Card Title

24px

Body

16–18px

Caption

14px

---

# Spacing System

Use an 8-point spacing system.

Allowed values:

4

8

16

24

32

48

64

96

128

Avoid arbitrary spacing values.

---

# Border Radius

Small:
8px

Medium:
12px

Large:
16px

Extra Large:
24px

Pills:
9999px

---

# Shadows

Subtle elevation only.

No harsh shadows.

Cards should appear layered, not floating.

---

# Buttons

Primary

Filled accent color.

Rounded corners.

Medium weight typography.

Smooth hover transition.

---

Secondary

Outlined.

Transparent background.

---

Ghost

Transparent.

Minimal hover effect.

---

# Cards

Cards should contain:

- Title
- Description
- Optional media
- Tags
- Call-to-action

Cards should remain visually consistent throughout the site.

---

# Icons

Use a single icon library throughout the project.

Preferred:

Lucide React

Avoid mixing icon packs.

---

# Motion

Motion should be purposeful.

Preferred animations:

- Fade
- Slide
- Scale
- Reveal

Animation duration:

150–400ms

Avoid long animations.

---

# Loading Experience

The first visit should begin with an Identity Verification sequence.

This animation introduces the portfolio owner through a secure authentication-style interface.

Suggested flow:

Initializing Secure Session...
↓
Authenticating Identity...
↓
Scanning Profile...
↓
Identity Verified
↓
Transition into the Hero section.

Duration:
Approximately 2–3 seconds.

The animation should only play once per browser session to avoid interrupting returning visitors.

---

# Navigation

Desktop:

Sticky top navigation.

Mobile:

Slide-out navigation.

Current page should always be visually identifiable.

---

# Images

Always optimize.

Lazy load where appropriate.

Use responsive image sizes.

Avoid stretched images.

---

# Responsive Design

Support:

Mobile

Tablet

Laptop

Desktop

Ultra-wide

No horizontal scrolling.

---

# Accessibility

Minimum WCAG AA contrast.

Keyboard accessible.

Visible focus states.

Semantic HTML.

ARIA only where required.

---

# Performance

Prefer CSS over JavaScript when possible.

Avoid unnecessary client-side rendering.

Lazy load heavy sections.

Optimize fonts and images.

---

# Component Rules

Each component should:

- Have a single responsibility
- Be reusable
- Be typed with TypeScript
- Avoid duplicated logic
- Keep styling consistent

---

# Visual Identity

The portfolio should feel like a premium engineering product.

It should impress through quality, polish, and attention to detail—not through excessive animations or visual effects.

---

# Accent Usage Rules

Emerald should be used sparingly to maintain visual impact.

Recommended usage:

- Primary buttons
- Active navigation item
- Links
- Hover states
- Progress indicators
- Identity verification animation
- Status badges
- Focus rings
- Interactive highlights

Avoid using emerald for:

- Large backgrounds
- Entire sections
- Long paragraphs
- Decorative elements without purpose

The interface should remain approximately:

95% Monochrome
5% Emerald

---

# Definition of Done

A feature is considered complete only when it satisfies all of the following:

- Responsive across supported screen sizes
- Accessible (keyboard and screen-reader friendly where applicable)
- Consistent with the design system
- Type-safe
- Free of unnecessary code
- Performance-conscious
- Visually polished
- Ready for production deployment

Every feature should meet production standards before moving to the next checkpoint.