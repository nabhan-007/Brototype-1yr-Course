# Samverse — Design Workflow

**Flow:** Stitch (AI generate) → Export to Figma → Refine → GLips MCP (read data) → Code

---

## Phase 1: Stitch Designs

Generate each page in Stitch, iterate until clean, then export to Figma.

### Order (build in this sequence)

| # | Page | Stitch Prompt | Notes |
|---|------|---------------|-------|
| 1 | **Auth** | Login + Signup + Forgot Password | 3 screens, simple forms |
| 2 | **Navbar** | User navbar (logo, search, login, wishlist, cart) | Shared component — design once |
| 3 | **Homepage** | Hero banner, category cards, featured products grid, new arrivals, best sellers, deals, footer | Main landing page |
| 4 | **Product Listing** | Search bar, sidebar filters, sort, product grid, pagination | Category page |
| 5 | **Product Detail** | Image gallery, color/storage selectors, price/EMI, rating, specs, reviews, recommended | Most complex page |
| 6 | **Product Card** | Shared card component (image, name, price, rating, add to cart, wishlist) | Used in listing, homepage, recommended |
| 7 | **Cart** | Item list, quantity controls, price breakdown, coupon, save for later | |
| 8 | **Wishlist** | Saved products grid, move to cart, remove | |
| 9 | **Checkout** | Address form, order summary, payment methods, confirmation | |
| 10 | **Orders** | Order history, detail, tracking timeline, cancel/return forms | |
| 11 | **Profile** | Edit info, manage addresses, change password | |
| 12 | **Reviews** | Write review (rating + text + images), my reviews list | |
| 13 | **Admin Navbar + Sidebar** | Admin navigation | Shared admin component |
| 14 | **Admin Dashboard** | Sales cards, revenue chart, recent orders, alerts | |
| 15 | **Admin Product Mgmt** | Product list, add/edit form, delete modal | |
| 16 | **Admin Category Mgmt** | Category list, add/edit form | |
| 17 | **Admin Order Mgmt** | Order list, detail, status update, return approve/reject | |
| 18 | **Admin User Mgmt** | User list, profile view, block/unblock | |
| 19 | **Admin Coupon Mgmt** | Coupon list, add/edit form, status toggle | |
| 20 | **Admin Review Mgmt** | Pending reviews list, approve/reject | |
| 21 | **Admin Sales Report** | Date range, charts, export | |
| 22 | **Shared: Empty States** | Empty cart, empty orders, no search results | |
| 23 | **Shared: 404 Page** | Not found page | |
| 24 | **Shared: Modals** | Confirmation, quick view, toast notifications | |

---

## Phase 2: Export to Figma

1. In Stitch, click **Export → Figma** on each completed design
2. Opens directly in your Figma account
3. Organize frames by page in Figma
4. Apply Samverse brand tokens (colors, typography, spacing)
5. Refine components, add interactions

---

## Phase 3: Code from Figma

1. Use **GLips Figma MCP** to read design data (layout, styles, dimensions)
2. Extract exact values: colors, fonts, spacing, border-radius
3. Download images/assets via MCP
4. Code the UI from extracted data

---

## Samverse Brand (for Figma)

**Primary:** #0055ff (Electric Blue)
**Secondary:** #121212 (Deep Charcoal)
**Background:** #f6faff (Crisp White)
**Surface:** #e6eff8
**Fonts:** Manrope (headlines), Work Sans (body)
**Roundness:** 8px (cards), 16px (containers)
