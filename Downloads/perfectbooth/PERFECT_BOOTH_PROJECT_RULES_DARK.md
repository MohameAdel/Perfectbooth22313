# PERFECT BOOTH — PERMANENT PROJECT RULES

> This file is the permanent source of truth for the Perfect Booth website.
>
> Before implementing any task, section, page, component, refactor, styling change, localization change, or bug fix, read this file and follow it.
>
> Do not remove, rename, overwrite, or ignore this file during the project.
>
> If a future instruction conflicts with this file, follow the latest explicit user instruction only for that specific task. All other rules remain active.

---

## 1. PROJECT CONTEXT

You are working inside an existing Next.js project for **Perfect Booth**.

The project already contains completed Home Page sections and approved visual work.

Perfect Booth is a company specializing in:

- Exhibition booth design
- Custom booth manufacturing
- Exhibition stand execution
- Exhibition installation
- Brand activations
- Wooden structures
- On-site exhibition support
- Exhibition project management

The website is not for photography booths.

Do not create a new project.

Do not run `create-next-app`.

Do not rebuild the Home Page from scratch.

Do not delete, replace, or redesign completed sections unless explicitly requested.

Do not change the project architecture unless the requested task genuinely requires it.

Treat all existing approved Home Page sections as the visual source of truth for future work.

---

## 2. PERMANENT WORKFLOW

Before implementing any request:

1. Read this file.
2. Inspect the current project structure.
3. Identify the installed Next.js and React versions.
4. Determine whether the project uses App Router or Pages Router.
5. Inspect the existing localization implementation.
6. Inspect the current Arabic and English routes.
7. Inspect the existing layout, Header, Footer, and Home Page composition.
8. Search for existing reusable components.
9. Inspect existing design tokens, spacing, typography, and responsive rules.
10. Inspect current animation and image handling.
11. Modify only the files required for the requested task.
12. Preserve all unrelated working functionality.

Do not ask unnecessary questions when the current project already provides enough context.

Implement the requested task directly instead of only describing what could be done.

---

## 3. EXISTING PROJECT PROTECTION

Always preserve:

- Existing routes
- Existing completed sections
- Existing section order
- Existing Header and Footer behavior
- Existing Arabic and English functionality
- Existing responsive behavior
- Existing SEO configuration
- Existing package manager
- Existing TypeScript configuration
- Existing path aliases
- Existing reusable components
- Existing design tokens
- Existing working animation behavior

Do not:

- Replace working components unnecessarily
- Rewrite unrelated files
- Reset global styles
- Reset Tailwind configuration
- Change the package manager
- Install duplicate libraries
- Create duplicate Button, Container, Header, Footer, or SectionHeading components
- Remove localization
- Remove RTL support
- Convert the full page to a Client Component
- Rename routes without a clear reason
- Introduce a second localization system
- Introduce a second styling system
- Introduce a second animation library without necessity

Before creating a new component, search the codebase for an equivalent component that can be reused or extended.

---

## 4. BRAND AND DESIGN DIRECTION

The website must feel:

- Premium
- Architectural
- Editorial
- Spacious
- Precise
- Professional
- Modern
- Image-led
- Confident
- Restrained

Use OUNEG only as a visual reference for:

- Editorial composition
- Section rhythm
- Large typography
- Image presentation
- Generous spacing
- Navigation structure
- Premium motion language

Do not copy:

- OUNEG code
- OUNEG content
- OUNEG images
- OUNEG logo
- OUNEG company name
- OUNEG branding
- OUNEG exact layouts

Remove any accidental references to:

- OUN Egypt
- OUNEG
- أون مصر

The website belongs only to:

- Perfect Booth
- بيرفكت بوث

Avoid:

- Generic SaaS design
- Heavy shadows
- Excessive rounded corners
- Glassmorphism
- Random gradients
- Neon colors
- Cartoon illustrations
- Overcrowded layouts
- Decorative elements without purpose
- Fast or distracting animation
- Generic template-looking cards

---

## 5. DARK THEME AND COLOR SYSTEM

The entire Perfect Booth website must use a premium dark visual system as the default theme.

Use OUNEG only as inspiration for:

- Dark visual atmosphere
- Strong contrast
- Large image-led sections
- Black and charcoal surfaces
- Restrained premium accents
- Thin borders
- Editorial typography
- Immersive full-width layouts

Do not copy OUNEG's exact colors.

Perfect Booth must retain its own brand identity through its approved blue and taupe accent colors.

The website must not switch back to a predominantly white or light theme unless a specific light section is explicitly approved.

### Permanent Color Tokens

Use these centralized tokens throughout the project:

```css
:root {
  color-scheme: dark;

  /* Core dark surfaces */
  --pb-bg: #090A0C;
  --pb-bg-soft: #0E1013;
  --pb-surface: #121418;
  --pb-surface-raised: #171A1F;
  --pb-surface-hover: #1D2127;

  /* Perfect Booth brand colors */
  --pb-primary: #19528A;
  --pb-primary-hover: #2469A8;
  --pb-primary-light: #5B91C4;
  --pb-primary-dark: #0D3F7E;

  /* Premium supporting accent */
  --pb-accent: #A48D77;
  --pb-accent-hover: #B9A38D;
  --pb-accent-muted: #786858;

  /* Typography */
  --pb-text: #F4F4F2;
  --pb-text-soft: #D0D1D2;
  --pb-text-muted: #92969C;
  --pb-text-disabled: #666B72;

  /* Borders and dividers */
  --pb-border: rgba(255, 255, 255, 0.12);
  --pb-border-strong: rgba(255, 255, 255, 0.22);
  --pb-divider: rgba(255, 255, 255, 0.09);

  /* Overlays */
  --pb-overlay-light: rgba(0, 0, 0, 0.35);
  --pb-overlay-medium: rgba(0, 0, 0, 0.58);
  --pb-overlay-strong: rgba(0, 0, 0, 0.76);

  /* Feedback states */
  --pb-success: #4AAE78;
  --pb-warning: #D4A94F;
  --pb-error: #E06B65;
  --pb-focus: #74A8D8;
}
```

If the existing Perfect Booth logo assets require small refinements to the blue or taupe values, update the centralized tokens only after checking the actual logo colors.

Do not hardcode repeated HEX values inside components.

### Theme Distribution

Use the dark system across the full website:

- Main page background: `--pb-bg`
- Alternate sections: `--pb-bg-soft`
- Cards and content panels: `--pb-surface`
- Raised or interactive cards: `--pb-surface-raised`
- Main text: `--pb-text`
- Supporting text: `--pb-text-soft`
- Muted labels and metadata: `--pb-text-muted`
- Dividers and outlines: `--pb-border`
- Main branded actions: `--pb-primary`
- Premium small accents: `--pb-accent`

Recommended visual distribution:

- 60% near-black and charcoal surfaces
- 20% project photography and video
- 10% white and soft-gray typography
- 7% Perfect Booth blue
- 3% taupe accent and fine details

Do not use the accent color on large backgrounds.

Do not use the primary blue on every heading.

Use brand colors selectively so the design remains premium and restrained.

### Section Background Rules

The Home Page and internal pages should alternate subtly between dark surfaces:

```text
Hero              → image or video with strong dark overlay
About             → --pb-bg
Services          → --pb-bg-soft
Solutions         → --pb-surface
Projects          → --pb-bg
Process           → --pb-bg-soft
Partners          → --pb-bg
Final CTA          → --pb-primary-dark or image with dark overlay
Footer             → #060708
```

Do not alternate between pure white and black sections.

Light surfaces may only be used as small intentional elements, such as:

- A project information sheet
- A temporary modal surface
- A document preview
- A specifically approved editorial panel

Any light surface must still feel consistent with the dark website.

### Header and Top Bar Colors

The Header must feel integrated with the dark system.

Default Header:

```css
background: rgba(9, 10, 12, 0.88);
border-bottom: 1px solid var(--pb-divider);
color: var(--pb-text);
```

When positioned over the Hero, the Header may be transparent or semi-transparent.

After scrolling, it should use a dark solid or blurred surface.

Header requirements:

- Navigation text uses `--pb-text-soft`.
- Active navigation uses `--pb-text` with a restrained blue or taupe indicator.
- Hover states use `--pb-text`.
- The language switcher follows the same dark system.
- Dropdowns use `--pb-surface-raised`.
- Mobile navigation uses a full dark surface.
- Do not use white Header backgrounds.
- Do not introduce unrelated gold or pink accents.

### Hero Color Rules

The Hero must remain image-led and immersive.

Use:

- Full-width project image or video
- Dark overlay for readability
- White or off-white main heading
- Muted supporting text
- Blue or taupe used only as a controlled accent
- Thin white or muted dividers
- Minimal interface controls

Example:

```css
.hero {
  background: var(--pb-bg);
  color: var(--pb-text);
}

.hero::after {
  background:
    linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.82) 0%,
      rgba(0, 0, 0, 0.48) 50%,
      rgba(0, 0, 0, 0.22) 100%
    );
}
```

The overlay direction must adapt to the layout where necessary, but the image itself must never be mirrored in RTL.

Do not use bright pink, neon, or unrelated colors for Hero headings.

### Typography Colors

Use:

```css
color: var(--pb-text);
```

for primary headings.

Use:

```css
color: var(--pb-text-soft);
```

for descriptions.

Use:

```css
color: var(--pb-text-muted);
```

for labels, metadata, indexes, and supporting details.

Accent text must be limited to short words, section indexes, active states, or small decorative details.

Do not make entire paragraphs blue or taupe.

### Button Colors

Primary button:

```css
background: var(--pb-primary);
color: var(--pb-text);
border: 1px solid var(--pb-primary);
```

Primary hover:

```css
background: var(--pb-primary-hover);
border-color: var(--pb-primary-hover);
```

Secondary button:

```css
background: transparent;
color: var(--pb-text);
border: 1px solid var(--pb-border-strong);
```

Secondary hover:

```css
background: var(--pb-surface-hover);
border-color: var(--pb-text-muted);
```

Premium accent button may use taupe only when explicitly appropriate:

```css
background: var(--pb-accent);
color: #090A0C;
```

Do not use more than one visually dominant CTA style within the same section.

### Card Colors

Cards should not look like bright floating boxes.

Use:

```css
background: var(--pb-surface);
border: 1px solid var(--pb-border);
box-shadow: none;
```

On hover:

```css
background: var(--pb-surface-raised);
border-color: var(--pb-border-strong);
```

Cards may also be image-led with a dark gradient overlay.

Avoid:

- White card backgrounds
- Heavy shadows
- Large glow effects
- Glassmorphism
- Bright colored card surfaces
- Excessive border radius

### Image Treatment

Keep project photography natural.

Do not apply blue, gold, or monochrome filters to every image.

Allowed treatments:

- Subtle dark overlay
- Gradient overlay behind text
- Slight desaturation on hover or inactive states
- Controlled image zoom
- Fade or mask reveal

Do not reduce image quality or hide project details with overly strong overlays.

### Borders and Decorative Details

Use thin, low-contrast borders.

Recommended:

```css
border: 1px solid var(--pb-border);
```

Use taupe or blue only for:

- Active navigation indicators
- Small section indexes
- Fine decorative lines
- Focused CTA details
- Selected filters
- Small hover accents

Do not use thick gold borders.

### Accessibility

All dark theme combinations must meet accessible contrast requirements.

Verify:

- Main text against all surfaces
- Muted text readability
- Button text contrast
- Focus indicator visibility
- Form input contrast
- Disabled state clarity
- Overlay text readability on images

Do not use low-opacity gray for important information.

### Permanent Dark Theme Rule

Dark mode is the default and approved visual theme for the entire Perfect Booth website.

Do not add a light/dark theme switcher unless explicitly requested.

Do not redesign future sections using white template-style backgrounds.

Every new section must use this dark token system and look like part of the same premium dark website.

---

## 6. NEXT.JS RULES

Follow the architecture already used in the project.

Use:

- TypeScript
- `next/image` for content images
- `next/link` for internal navigation
- Existing path aliases
- Existing utilities
- Existing design tokens
- Existing localization utilities
- Next.js metadata APIs when supported by the current router

Use Server Components by default when the current architecture supports them.

Add `"use client"` only when a component genuinely requires:

- State
- Effects
- Event handlers
- Browser APIs
- Client-side animation
- Interactive controls
- Mobile navigation state
- Form interaction

Do not make an entire page or complete section a Client Component because one small child requires interaction.

Isolate interactive logic into focused Client Components.

Examples:

- `MobileNavigation.tsx`
- `LanguageSwitcher.tsx`
- `AnimatedCounter.tsx`
- `CarouselControls.tsx`
- `Reveal.tsx`

The main page file should mainly compose sections.

Do not place large section implementations directly inside `page.tsx`.

---

## 7. RECOMMENDED COMPONENT ORGANIZATION

Follow the existing project structure first.

When new files are needed, prefer a structure similar to:

```text
src/
  app/
    [locale]/
      layout.tsx
      page.tsx

  components/
    layout/
      Header.tsx
      Footer.tsx
      MobileNavigation.tsx
      LanguageSwitcher.tsx

    home/
      HomeHero.tsx
      AboutSection.tsx
      ServicesSection.tsx
      SolutionsSection.tsx
      FeaturedProjectsSection.tsx
      ProcessSection.tsx
      PartnersSection.tsx
      CTASection.tsx

    ui/
      Button.tsx
      Container.tsx
      SectionHeading.tsx
      ImageReveal.tsx

  content/
  i18n/
  lib/
  styles/

messages/
  en.json
  ar.json
```

Adapt this structure to the current project instead of forcing a migration.

Create reusable UI components only when they are genuinely shared.

At minimum, inspect whether these should be reused or isolated:

- Button
- Container
- SectionHeading
- ImageReveal
- ProjectCard
- ServiceCard
- CTA
- Motion wrapper

Do not over-engineer abstractions that are only used once.

---

## 8. LOCALIZATION IS A CORE REQUIREMENT

The website must support:

```text
/en
/ar
```

English:

```html
<html lang="en" dir="ltr">
```

Arabic:

```html
<html lang="ar" dir="rtl">
```

Localization is not temporary.

Do not store bilingual UI content as scattered hardcoded strings.

Continue using the existing localization system.

If the project has no localization system, use `next-intl` with route-based localization compatible with the installed Next.js version.

All visible content must support both languages, including:

- Navigation
- Headings
- Paragraphs
- Buttons
- Image alt text
- Accessibility labels
- Metadata
- Forms
- Validation messages
- Error states
- Empty states
- Loading states
- Project data
- Service data
- Footer content

Do not hardcode English or Arabic content inside reusable UI components.

Arabic copy must be natural and professionally written.

Do not translate English copy word-for-word when that produces unnatural Arabic.

---

## 9. DOCUMENT-LEVEL DIRECTION

The active locale must control `lang` and `dir` at the highest appropriate layout level.

Required behavior:

```text
Arabic locale  => lang="ar" dir="rtl"
English locale => lang="en" dir="ltr"
```

For App Router, use the locale layout or the current equivalent architecture.

The direction must be available during server rendering whenever possible.

Do not rely on client-side DOM manipulation as the primary solution.

Avoid using this as the main implementation:

```tsx
document.documentElement.dir = "rtl";
```

Do not apply RTL only to paragraphs.

The complete document must inherit the correct direction.

Do not use:

```css
transform: scaleX(-1);
```

on the full page, Header, Hero, section, or image.

---

## 10. LANGUAGE SWITCHER

The language switcher must:

- Switch between `/en` and `/ar`
- Preserve the equivalent current route
- Preserve dynamic route parameters
- Preserve query parameters when appropriate
- Update the document language
- Update the document direction
- Avoid hydration mismatches
- Avoid requiring a manual refresh
- Remain keyboard accessible
- Use translated accessibility labels

Examples:

```text
/en                    → /ar
/en/services           → /ar/services
/en/projects/project-1 → /ar/projects/project-1
```

Do not always redirect to the Home Page when switching languages.

---

## 11. COMPLETE RTL/LTR REQUIREMENT

When Arabic is active, the complete user interface must render naturally from right to left.

When English is active, the complete user interface must render naturally from left to right.

Audit and support:

- Top bar
- Header
- Main navigation
- Logo area
- Language switcher
- Search control
- Social icons
- Menu button
- Mobile menu
- Hero section
- Hero slider
- About section
- Services section
- Solutions section
- Projects section
- Process section
- Statistics
- Partners
- Calls to action
- Cards
- Lists
- Section headings
- Section numbers
- Breadcrumbs
- Tabs
- Accordions
- Forms
- Select menus
- Modals
- Drawers
- Side panels
- Pagination
- Carousels
- Previous and next controls
- Footer
- Decorative lines
- Absolute-positioned elements
- Hover interactions
- Directional animations

Do not fix only text alignment.

The entire layout must respond correctly to the active language.

---

## 12. CSS LOGICAL PROPERTIES

Audit all stylesheets, CSS modules, styled components, Tailwind classes, and inline styles.

Convert physical directional styles to logical properties where the design should respond to RTL/LTR.

Prefer:

```css
margin-inline-start
margin-inline-end
padding-inline-start
padding-inline-end
inset-inline-start
inset-inline-end
border-inline-start
border-inline-end
border-start-start-radius
border-start-end-radius
border-end-start-radius
border-end-end-radius
inline-size
max-inline-size
min-inline-size
text-align: start
text-align: end
```

Examples:

```css
/* Avoid */
margin-left: auto;
padding-right: 32px;
left: 0;
right: 40px;
border-left: 1px solid;
text-align: right;

/* Prefer */
margin-inline-start: auto;
padding-inline-end: 32px;
inset-inline-start: 0;
inset-inline-end: 40px;
border-inline-start: 1px solid;
text-align: start;
```

Do not replace every `left` and `right` occurrence automatically.

For each occurrence, decide whether it should:

1. Use a logical property.
2. Use an RTL/LTR-specific rule.
3. Remain physically fixed.
4. Be removed as redundant.

Physical positioning may remain when the element must stay on the same physical side in both languages.

---

## 13. TAILWIND RTL/LTR RULES

If Tailwind CSS is used, prefer logical utilities where supported.

Prefer:

```text
ms-* instead of ml-*
me-* instead of mr-*
ps-* instead of pl-*
pe-* instead of pr-*
start-* instead of left-*
end-* instead of right-*
border-s instead of border-l
border-e instead of border-r
rounded-s-* instead of rounded-l-*
rounded-e-* instead of rounded-r-*
text-start instead of text-left
text-end instead of text-right
```

Example:

```tsx
<div className="ps-6 pe-4 text-start">
  ...
</div>
```

Use RTL-specific variants only when logical properties are not enough.

Example:

```tsx
<ArrowIcon className="rtl:rotate-180" />
```

Do not add `rtl:flex-row-reverse` blindly to every flex container.

The inherited document direction already affects many inline layouts.

Use explicit row reversal only after checking the visual and DOM reading order.

---

## 14. HEADER RULES

The Header is a global layout component.

Render it from the appropriate shared layout, not directly inside the Home Page, unless the existing architecture has a valid reason.

Use one direction-aware Header implementation.

Do not create completely separate Arabic and English Header components without necessity.

Arabic Header requirements:

- Brand area appears on the natural RTL side.
- Navigation reads naturally from right to left.
- Menu, search, language, and social controls move to appropriate mirrored positions.
- Active navigation indicators align correctly.
- Dropdowns align from the correct inline side.
- Mobile navigation opens from the correct side.
- Keyboard order remains logical.
- Logo artwork is not mirrored.
- Social media brand icons are not mirrored.

English Header requirements:

- Preserve the approved LTR composition.
- Navigation reads naturally from left to right.
- Existing visual style remains unchanged.

---

## 15. HERO RULES

The Hero must support RTL and LTR completely.

Audit:

- Heading position
- Heading alignment
- Supporting content
- CTA order
- Slider controls
- Previous and next arrows
- Decorative elements
- Section indexes
- Absolute positioning
- Overlay content
- Animation direction
- Mobile positioning

Prefer direction-aware styling.

Example:

```css
.hero-content {
  inset-inline-end: 8%;
  text-align: start;
}
```

Requirements:

- Arabic text aligns naturally using `text-align: start`.
- English text aligns naturally using `text-align: start`.
- Hero content moves to the correct mirrored side when the composition requires it.
- Slider arrows move to their corresponding positions.
- Previous and next controls remain semantically correct.
- CTA buttons follow the natural reading order.
- Background images are not mirrored.
- Videos are not mirrored.
- Text does not overlap Header or controls.
- Arabic heading wrapping remains balanced.
- Mobile RTL behavior is intentionally designed.

---

## 16. SECTIONS, CARDS, AND GRIDS

Every section must support RTL and LTR.

Check:

- Section heading alignment
- Eyebrow labels
- Section numbers
- Decorative lines
- Text and image order
- Card text alignment
- Card indexes
- Card metadata
- CTA placement
- Arrow placement
- Badge placement
- Borders
- Hover movement
- Image placement
- Grid reading order

Do not blindly reverse CSS grid items.

Keep DOM order logical for:

- Screen readers
- Keyboard users
- SEO
- Content reading

Do not use CSS visual ordering that creates a mismatch between the visual order and the DOM order.

For text-and-image sections:

- Mirror the composition when appropriate.
- Do not mirror the image itself.
- Preserve editorial balance.
- Keep the DOM order accessible.
- Avoid unnecessary `order` overrides.

---

## 17. FORMS IN RTL/LTR

All forms must support the active direction.

Arabic:

- Labels align to the RTL start side.
- Text inputs use RTL where appropriate.
- Validation messages align correctly.
- Icons and padding mirror correctly.
- Dropdown alignment works correctly.

English:

- Forms remain LTR.

Phone numbers, emails, URLs, and technical codes may use:

```html
dir="ltr"
```

inside an RTL interface when necessary.

Do not allow phone numbers or email addresses to render backward.

Forms must include:

- Visible labels
- Loading state
- Success state
- Error state
- Disabled state
- Accessible error messages
- Keyboard support
- Privacy consent where applicable

Do not pretend a form is connected to a backend when it is not.

---

## 18. ICONS, LOGOS, AND MEDIA

Do not mirror:

- Perfect Booth logo
- Client logos
- Project images
- Exhibition photography
- Videos
- Product images
- Social media brand icons

Only adapt icons that communicate physical direction:

- Previous arrow
- Next arrow
- Back arrow
- Forward arrow
- Directional chevrons
- Drawer direction indicators

Use locale-aware rotation or direction-specific icons.

Do not mirror an entire section to fix a directional icon.

---

## 19. SLIDERS AND CAROUSELS

For sliders and carousels:

- Use the installed library’s official RTL support when available.
- Confirm Arabic navigation feels natural.
- Mirror control positions.
- Keep previous and next semantics correct.
- Ensure arrows point in the correct direction.
- Verify swipe and drag behavior.
- Do not fake RTL only by reversing arrays unless that is correct for the installed library.
- Preserve accessibility labels.
- Preserve keyboard navigation.

---

## 20. IMAGES AND NEXT/IMAGE

Use `next/image` for content imagery.

Do not use the deprecated API:

```tsx
<Image layout="fill" />
```

Use the current equivalent:

```tsx
<div className="relative aspect-[16/9] overflow-hidden">
  <Image
    src={image}
    alt={alt}
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover"
  />
</div>
```

Requirements:

- Use `fill` only inside a positioned container.
- Give the container controlled dimensions or aspect ratio.
- Provide accurate `sizes`.
- Prevent layout shifts.
- Use localized alt text.
- Avoid stretching.
- Do not use `priority` for every image.
- Prioritize only essential above-the-fold imagery.
- Lazy-load below-the-fold media.
- Configure remote image patterns only when required.
- Do not insert unrelated stock images when real Perfect Booth assets exist.

Background photography must not be mirrored in RTL.

---

## 21. CONTENT RULES

Use verified Perfect Booth content where available.

Do not invent:

- Client names
- Project names
- Project statistics
- Years of experience
- Awards
- Office addresses
- Email addresses
- Phone numbers
- Exhibition names
- Booth sizes
- Project dates

Do not use:

- Lorem Ipsum
- Fake contact details
- Placeholder client names presented as real
- Unverified public statistics

When information is missing, use a clear TODO.

Example:

```ts
// TODO: Replace with verified Perfect Booth data.
```

Do not display unverified statistics publicly.

Keep editable business information centralized.

---

## 22. SERVICES

Use consistent naming unless verified company content requires different wording.

English:

1. Exhibition Booth Design
2. Custom Booth Manufacturing
3. Exhibition Execution
4. Brand Activations
5. Wooden Structures
6. Installation and On-site Support

Arabic:

1. تصميم أجنحة المعارض
2. تصنيع أجنحة المعارض
3. تنفيذ وتجهيز المعارض
4. تفعيل العلامات التجارية
5. تنفيذ الهياكل الخشبية
6. التركيب والدعم داخل موقع المعرض

Keep naming consistent across:

- Navigation
- Home Page
- Services Page
- Service detail pages
- Contact forms
- Project categories
- SEO metadata

---

## 23. TYPOGRAPHY AND SPACING

Match the existing approved Home Page.

Reuse:

- Existing font families
- Existing heading scale
- Existing body scale
- Existing section spacing
- Existing container width
- Existing horizontal padding
- Existing line heights
- Existing font weights
- Existing button sizes
- Existing border radius

Arabic typography may require:

- Different line height
- Different letter spacing behavior
- Slightly adjusted heading sizes
- Different maximum text width

Do not make Arabic typography look like mechanically mirrored English typography.

---

## 24. MOTION

Animations must remain:

- Subtle
- Premium
- Smooth
- Restrained
- Performance-conscious

Prefer:

- Fade-up
- Image reveal
- Staggered content
- Slow image scale
- Underline movement
- Subtle arrow movement

Avoid:

- Bouncing
- Fast rotation
- Excessive parallax
- Animating every element
- Long delays before content appears
- Animation that blocks access to content

Respect `prefers-reduced-motion`.

Directional animations must adapt to RTL/LTR.

Do not hardcode all entrance animations with the same `x` direction.

Create a reusable direction-aware motion utility when shared behavior requires it.

Non-directional animations such as fade-up do not need to change.

---

## 25. ACCESSIBILITY

Every new or modified component must support:

- Semantic HTML
- Correct heading hierarchy
- Keyboard navigation
- Visible focus states
- Accessible buttons and links
- Sufficient contrast
- Meaningful alt text
- Reduced-motion support
- Screen-reader language
- Accessible mobile navigation
- Accessible slider controls
- Translated ARIA labels

Do not use clickable `div` elements.

Do not create a visual order that conflicts with keyboard or screen-reader order.

Use `aria-label` only when visible text is insufficient.

---

## 26. RESPONSIVE DESIGN

Test all work at:

```text
360px
390px
768px
1024px
1440px
1920px
```

Mobile must be intentionally designed.

Do not simply compress the desktop layout.

Check:

- Arabic heading wrapping
- English heading wrapping
- Horizontal overflow
- Touch target size
- Button width
- Grid stacking
- Image aspect ratio
- Image cropping
- Mobile navigation
- Hero controls
- Section spacing
- Card spacing
- Slider behavior
- Text readability

Do not use hover as the only way to access important content.

---

## 27. PERFORMANCE

Every implementation must be performance-conscious.

Requirements:

- Use Server Components by default.
- Minimize Client Components.
- Lazy-load below-the-fold imagery.
- Avoid unnecessary third-party scripts.
- Avoid duplicate libraries.
- Prevent layout shifts.
- Optimize fonts.
- Use responsive images.
- Keep animations GPU-friendly.
- Avoid oversized background videos on mobile.
- Keep DOM size reasonable.
- Avoid rendering separate hidden desktop and mobile versions when one responsive implementation is sufficient.

Do not sacrifice performance for decoration.

---

## 28. REQUIRED DIRECTIONAL CODE AUDIT

For RTL/LTR tasks, search the complete source directory for:

```text
left
right
margin-left
margin-right
padding-left
padding-right
border-left
border-right
text-left
text-right
rounded-l
rounded-r
ml-
mr-
pl-
pr-
left-
right-
translate-x
flex-row-reverse
```

Review every relevant result.

Do not apply blind global replacements.

Classify each result as:

1. Convert to a logical property.
2. Add an RTL/LTR-specific variant.
3. Keep physically fixed.
4. Remove as redundant.

Audit:

- Global CSS
- CSS Modules
- Tailwind classes
- Inline styles
- Motion variants
- Slider controls
- Mobile menu positioning
- Absolute elements
- Pseudo-elements

---

## 29. VERIFICATION

After every implementation task, run the project’s available equivalents of:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

For localization or RTL work, verify:

- `/en` renders correctly.
- `/ar` renders correctly.
- English uses LTR.
- Arabic uses RTL.
- The language switcher preserves the current route.
- Header mirrors correctly.
- Hero mirrors correctly.
- All sections align correctly.
- Mobile navigation works in both directions.
- Arrows and controls communicate correct direction.
- Forms work in both directions.
- Logos and images are not mirrored.
- There is no horizontal overflow.
- There are no overlapping elements.
- There are no hydration errors.
- There are no missing translation keys.
- There are no browser console errors.
- Focus states are visible.
- Reduced-motion preferences are respected.
- The visual design remains consistent with the approved Home Page.

If a command is unavailable, report that clearly and use the closest available project script.

Do not claim a command passed unless it was actually run successfully.

---

## 30. COMPLETION REPORT

After finishing any task, provide:

1. Files created.
2. Files modified.
3. What was implemented.
4. Where the new section or behavior was added.
5. Which existing components were reused.
6. Localization changes.
7. RTL/LTR changes.
8. Responsive changes.
9. Accessibility changes.
10. Image optimization changes.
11. Lint result.
12. TypeScript result.
13. Production build result.
14. Remaining TODO items.
15. Any unverified content that was omitted.

Do not report unrelated changes as part of the task.

---

## 31. FINAL PERMANENT RULE

Every future task must preserve the same Perfect Booth brand identity, existing Next.js architecture, bilingual route structure, complete RTL/LTR support, reusable component system, approved visual direction, responsive behavior, accessibility, image optimization, performance standards, and restrained motion language defined in this file.

Every new section must look like it belongs to the same website.

Before every task:

```text
Read .PROJECT_RULES.md first.
Inspect the current implementation.
Reuse existing components.
Modify only the required files.
Preserve completed work.
Verify Arabic and English.
Run lint, TypeScript, and build checks.
Report the exact result.
```
