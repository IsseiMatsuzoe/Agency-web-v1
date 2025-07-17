Below is a **concise, machine-oriented specification** for Agency's first corporate site.
It starts with a brief rationale that cites current design/UX trends, then delivers a single structured "requirements-definition" block (YAML-like) that can be pasted directly into another LLM prompt.

---

## ✨ Context & Design Rationale (2025 snapshot)

Modern B2B/startup sites succeed with ultra-focused navigation (≤4 top-level routes) and clean, block-based layouts that scale well from mobile to desktop ([UXPin][1]).
Multi-page architecture is still preferred over a single long page when the brand expects to grow content such as news or careers ([Network Solutions][2], [Justinmind |][3]).
Key 2025 design patterns to incorporate:

| Pattern                                          | Why include                                                    | Source                                                          |
| ------------------------------------------------ | -------------------------------------------------------------- | --------------------------------------------------------------- |
| **Bold blocks + vivid contrast**                 | Guides eyes without clutter; easy to theme via Tailwind tokens | ([TheeDigital][4])                                              |
| **Micro-interactions & scroll-triggered motion** | Adds perceived quality while keeping load light                | ([DEV Community][5], [Webolutions Digital Marketing Agency][6]) |
| **Experimental / minimal navigation**            | Keeps IA shallow; works with 3-to-4 page sites                 | ([TheeDigital][4], [Webolutions Digital Marketing Agency][6])   |
| **Dark-mode ready palette**                      | Now expected for accessibility & battery life                  | ([TheeDigital][4])                                              |
| **Fast CMS authoring**                           | Non-tech staff can post news like a blog                       | ([firecms.co][7], [Firebase][8])                                |
| **Form best-practice fields**                    | Name + email/phone + message; nothing excessive                | ([HubSpot Blog][9], [Hotjar][10])                               |

These principles ensure a lightweight MVP that still feels "2025".

---

## 📄 AGENCY_SITE_REQUIREMENTS_V1

_Copy as-is into the next AI agent; each key is self-describing._

```yaml
meta:
  company_name: "Agency"
  stack:
    - nextjs@15
    - firebase:
        auth: email_password
        firestore: true
        storage: true
        functions: true
    - tailwindcss
  cms_library: firecms # open-source Firebase admin UI
routes:
  - path: "/" # Home / landing
    sections:
      - hero # value-prop, scroll cue
      - mission # editable rich text
      - members_preview # top 3 cards
      - news_preview # latest 3 posts
      - cta_footer # button → /contact
  - path: "/about"
    sections:
      - full_members # grid cards, sortable
      - company_facts # est_date, capital, address (all editable)
  - path: "/news"
    list_component:
      type: "card-grid"
      fields: [title, date, tags, cover_image, excerpt]
    detail_component:
      type: "markdown-body"
  - path: "/contact"
    form:
      fields:
        - name* # text
        - email # email, required if phone blank
        - phone # tel, required if email blank
        - message* # textarea 1-1000 chars
      submit_action:
        - firestore_write(collection="inquiries")
        - email_forward(to="placeholder@agency.io")
admin_panel:
  path: "/admin" # protected by Firebase Auth role = admin
  capabilities:
    - crud_members
    - crud_news
    - edit_company_facts
    - edit_mission
design_tokens:
  primary_colors: ["#ff5631", "#ff9c00", "#0066ff"] # red, orange, blue
  font_scale: [xs, sm, base, lg, xl, 2xl, 4xl]
  motion:
    enable_scroll_animations: true
    micro_interaction_duration_ms: 200
seo:
  title_template: "%s | Agency"
  generate_sitemap: true
  open_graph_defaults:
    image: "/og-default.png"
accessibility:
  prefers_color_scheme: auto
  aria_landmarks: true
deployment:
  hosting: firebase_hosting
  preview_channels: true # for PR reviews
maintenance:
  admin_users_max: 10
  content_backup: daily_export_gcs
```

---

### ℹ️ Next Actions

1. **Wireframe** each route with the above sections (Figma or Storybook).
2. Scaffold the Next.js project using `npx create-next-app --typescript`.
3. Integrate FireCMS for `/admin` and map collections (`members`, `news`, `company_meta`).
4. Implement Contact form with Cloud Functions → email (use SendGrid sandbox key).
5. Apply Tailwind tokens for the three brand colors and set dark-mode via `class="dark"`.

This requirements block is intentionally terse, hierarchical, and free of prose so a downstream generative-AI can parse keys directly and produce code or further documentation.

[1]: https://www.uxpin.com/studio/blog/web-structures-explained/?utm_source=chatgpt.com "Website Structure 101 with Examples - UXPin"
[2]: https://www.networksolutions.com/blog/one-page-vs-multi-page-website/?utm_source=chatgpt.com "Website Battles: Single-Page Website Design vs Multi-page Website"
[3]: https://www.justinmind.com/web-design/single-page-vs-multi-page-websites-battle?utm_source=chatgpt.com "Single-page vs multi-page websites: Design battle! - Justinmind"
[4]: https://www.theedigital.com/blog/web-design-trends "25 Top Web Design Trends 2025 | TheeDigital"
[5]: https://dev.to/watzon/25-web-design-trends-to-watch-in-2025-e83?utm_source=chatgpt.com "25 Web Design Trends to Watch in 2025 - DEV Community"
[6]: https://webolutionsmarketingagency.com/2025-business-website-design-trends/ "2025 Business Website Design Trends | Webolutions"
[7]: https://firecms.co/docs/pro/nextjs?utm_source=chatgpt.com "Quickstart + Next.JS frontend - FireCMS"
[8]: https://firebase.google.com/codelabs/firebase-nextjs?utm_source=chatgpt.com "Integrate Firebase with a Next.js app - Google"
[9]: https://blog.hubspot.com/service/best-contact-us-pages "35 best contact us pages you'll want to copy [+ templates] "
[10]: https://www.hotjar.com/web-design/best-practices/?utm_source=chatgpt.com "13 Web Design Best Practices to Follow: Website Tips for 2024 - Hotjar"
