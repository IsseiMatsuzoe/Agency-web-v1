# AI Specifications for Agency Website

This directory contains machine-optimized specifications for AI agents to implement the Agency corporate website. All files are structured for AI parsing and execution, prioritizing implementation efficiency over human readability.

## Quick Start for AI Agents

1. **Read `core-requirements.yml`** - Main project specifications
2. **Read `routes-specification.yml`** - Page and component definitions
3. **Read `component-library.yml`** - Component implementation details
4. **Read `firebase-configuration.yml`** - Backend and database setup
5. **Follow `implementation-guide.yml`** - Step-by-step execution plan

## File Structure

```
ai-specs/
├── core-requirements.yml       # Main project specifications
├── routes-specification.yml    # Route and page definitions
├── component-library.yml       # Component specifications
├── firebase-configuration.yml  # Backend configuration
├── implementation-guide.yml    # Step-by-step implementation
└── README.md                  # This file
```

## Specification Overview

### Core Requirements (`core-requirements.yml`)

- Project metadata and technology stack
- Technical constraints and performance targets
- Architecture patterns and folder structure
- CMS configuration and collections
- SEO, security, and deployment settings
- Design system integration points

### Routes Specification (`routes-specification.yml`)

- Complete route definitions with metadata
- Component mapping for each page section
- Data source specifications (Firestore queries)
- Accessibility requirements per component
- Form configurations and validation rules
- Error handling and loading states

### Component Library (`component-library.yml`)

- Detailed component specifications with props
- Styling classes and design tokens
- Behavior and interaction patterns
- Accessibility compliance requirements
- Performance optimization guidelines
- Component composition patterns

### Firebase Configuration (`firebase-configuration.yml`)

- Firestore collections and document structures
- Security rules and access permissions
- Firebase Authentication setup
- Cloud Functions specifications
- Storage configuration and file organization
- FireCMS admin panel configuration

### Implementation Guide (`implementation-guide.yml`)

- 8-phase implementation plan
- Detailed tasks with validation criteria
- Dependency management between phases
- Quality assurance checklists
- Troubleshooting guides
- Success metrics and acceptance criteria

## AI Implementation Instructions

### Priority Order

1. **CRITICAL**: Phases 1-3 (Project setup, Core components, Page implementation)
2. **HIGH**: Phase 4 (CMS integration) and Phase 8 (Deployment)
3. **MEDIUM**: Phases 5-7 (Functions, Styling, Performance)

### Validation Strategy

- Each phase includes specific validation criteria
- Components must meet accessibility standards (WCAG 2.2 AA)
- Performance targets: LCP <2.5s, CLS <0.1, FID <100ms
- All forms require client and server-side validation

### Design System Compliance

- Use only specified brand colors: #E44234, #FF9A29, #1679C0
- Typography: Feather Bold for headings, SF Pro for body text
- Minimum 44px touch targets for mobile accessibility
- 4.5:1 color contrast ratio minimum

### Data Management

- All dynamic content stored in Firestore collections
- Images uploaded to Firebase Storage with optimization
- Contact forms write to `inquiries` collection
- Admin panel uses FireCMS for content management

### Security Requirements

- Implement Firestore security rules
- Input validation on all forms
- Rate limiting on contact submissions
- Role-based access for admin functions

## Key Technical Decisions

### Framework Stack

- **Frontend**: Next.js 15 (App Router) with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Backend**: Firebase (Firestore, Auth, Functions, Storage)
- **CMS**: FireCMS for admin content management
- **Deployment**: Firebase Hosting with static export

### Architecture Patterns

- **JAMstack**: Static generation with client-side hydration
- **Component Design**: Atomic design with compound components
- **State Management**: React hooks (no external state library)
- **Form Handling**: react-hook-form with validation

### Performance Strategy

- Next.js Image component for optimized images
- Code splitting by routes and heavy components
- Tailwind CSS purging for minimal bundle size
- Firebase CDN for global content delivery

## Error Handling

### Common Issues and Solutions

1. **Firebase Connection**: Check environment variables and project configuration
2. **Build Failures**: Verify TypeScript types and import paths
3. **Styling Issues**: Confirm Tailwind configuration and class usage
4. **Performance Problems**: Implement code splitting and image optimization

### Debugging Tools

- Use `npm run type-check` for TypeScript validation
- Test responsive design at 390px, 768px, 1024px, 1280px
- Run Lighthouse audits for performance and accessibility
- Validate Firebase rules in Firebase Console

## Success Criteria

### Technical Metrics

- Lighthouse scores: Performance ≥90, Accessibility ≥95, SEO ≥95
- Core Web Vitals: All metrics in "Good" range
- First Load JS: <250KB
- Build time: <2 minutes

### Functional Requirements

- All routes accessible and functional
- Contact form submits to Firestore and sends email
- Admin panel allows CRUD operations on all collections
- Mobile-responsive design works on all major devices
- Search functionality works on news pages

### Business Objectives

- Brand colors and typography consistently applied
- Content management workflow is intuitive for non-technical users
- Site loads quickly on mobile networks
- Accessibility standards enable use by all users
- Maintenance and updates are straightforward

## File References

All specifications reference the existing design system at `/design-system/`:

- Colors: `/design-system/tokens/colors.yml`
- Typography: `/design-system/tokens/typography.yml`
- Components: `/design-system/components/`
- Accessibility: `/design-system/principles/accessibility.yml`

For questions about brand guidelines or design decisions, reference the design system files or ask for clarification on specific implementation details.

## Version Control

- Current version: 1.0
- Last updated: 2025-01-27
- Compatibility: Next.js 15, Firebase v9, React 18+

These specifications are optimized for AI implementation and should be executed in the order specified in the implementation guide.
