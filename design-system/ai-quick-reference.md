# AI Agent Quick Reference

**Agency Design System - Instant Access Guide**

## 🎨 Brand Essentials

```yaml
colors:
  primary: "#E44234" # Agency Red - CTAs, links
  secondary: "#FF9A29" # Agency Orange - hover, accents
  brand: "#1679C0" # Agency Blue - headers, nav
  text: "#1D1D1F" # Dark neutral
  background: "#F7F7F7" # Light neutral

fonts:
  headlines: "Feather Bold, system-ui" # Friendly headers only
  body: "SF Pro, Inter, Roboto, sans-serif" # Everything else

spacing: [4, 8, 12, 16, 24, 32, 48, 64] # px scale
radius: [4, 8, 16, 24] # px scale
```

## 📱 Responsive Breakpoints

- **Mobile**: 390px target, 4-col grid, 16px gutters
- **Tablet**: 768px+, 8-col grid, 24px gutters
- **Desktop**: 1025px+, 12-col grid, 32px gutters

## 🔘 Component Quick Specs

### Button

```css
/* Primary CTA */
background: #e44234;
color: white;
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;
min-height: 44px; /* accessibility */
```

### Card

```css
background: white;
border-radius: 16px;
padding: 24px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
```

### Typography Scale

- **H1**: 40px, font-rounded, bold, agency-blue
- **H2**: 32px, font-rounded, bold, agency-blue
- **H3**: 24px, font-primary, 600, neutral-900
- **Body**: 16px, font-primary, 400, neutral-900
- **Small**: 14px, font-primary, 400, neutral-600

## ♿ Accessibility Checklist

- [ ] 4.5:1 contrast ratio minimum
- [ ] 44px minimum touch targets
- [ ] Keyboard navigation support
- [ ] Alt text for images
- [ ] Proper heading hierarchy (H1→H2→H3)
- [ ] Form labels for inputs

## 📝 Content Guidelines

### CTAs (Use These)

✅ "無料相談を開始する", "サービスを発見する", "プロジェクトを体験する"
❌ "ここをクリック", "もっと見る", "送信"

### Headlines

- Structure: `{動詞} your {目標} with {ソリューション}`
- Max 45 characters
- Use agency-blue color

### Voice

- **Conversational** but professional
- **Enthusiastic** about client success
- **Clear** over clever
- **Empathetic** to user concerns

## 🔧 Implementation Patterns

### Hero Section

```html
<section
  class="min-h-[600px] bg-gradient-to-r from-blue-600 to-blue-700 text-white pt-20"
>
  <div class="container mx-auto px-6 py-20">
    <!-- Content with max-width 1200px -->
  </div>
</section>
```

### Card Grid

```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Auto-responsive card layout -->
</div>
```

### Navigation

```html
<header class="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 h-16">
  <!-- Sticky header with blur effect -->
</header>
```

## 🎯 Performance Targets

- **LCP**: <2.5s (especially mobile)
- **CLS**: <0.1
- **FID**: <100ms
- **Mobile-first**: 390px viewport optimization

## 📊 Testing Priorities

1. **Mobile usability** (390px width)
2. **Keyboard navigation** (Tab through all interactive elements)
3. **Color contrast** (Use online checkers)
4. **Screen reader** (Test with basic screen reader)
5. **Performance** (Lighthouse audit)

## 🚀 Common Patterns

### Section Layout

```css
.section {
  padding: 64px 32px; /* Large vertical, smaller horizontal */
  max-width: 1440px;
  margin: 0 auto;
}
```

### Focus States

```css
.interactive:focus {
  outline: 2px dashed #1679c0; /* agency-blue */
  outline-offset: 2px;
}
```

### Hover Animations

```css
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  transition: all 200ms ease-out;
}
```

## 🔗 File References

- **Colors**: `./tokens/colors.yml`
- **Typography**: `./tokens/typography.yml`
- **Layout**: `./tokens/layout.yml`
- **Components**: `./components/`
- **Accessibility**: `./principles/accessibility.yml`
- **Content**: `./content/voice-tone.md`

---

⚡ **AI Tip**: Start with mobile-first design, apply accessibility requirements from the beginning, and always reference the design tokens for consistent styling.
