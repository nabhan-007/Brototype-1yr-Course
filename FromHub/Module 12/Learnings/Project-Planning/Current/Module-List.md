# Samverse — Module List & Timeline (M12)

> Samsung-only e-commerce (Phones, Tablets, Watches, Earbuds) · MongoDB + Express + Node.js + EJS · Desktop 1440px · India (+91, ₹, English)

---

## 1. User Modules

### 1.1 Auth
- Signup (name / email / phone +91 / password + confirm, referral code optional, Google, sign-in link)
- Login (email + password, remember me, forgot password, Google, sign-up link)
- OTP verification (6-digit, resend with timer, wrong-email loop) — reused by signup and reset
- Forgot password (email → send OTP)
- Reset password (new + confirm, 8+ chars) + success page → login

### 1.2 Homepage
- Hero banner, 4 category cards, 4 featured products, deals-of-the-day with timer, 4 best sellers, 5 recently-viewed, footer

### 1.3 Product Listing
- Search + sort + filters work together (single query), breadcrumbs, sidebar filters (category, price slider, rating, storage, RAM, stock, spec key-values), sort, result count, 12-product grid, pagination

### 1.4 Product Detail
- Gallery with zoom, color/storage selectors, price + crossed MRP + Save badge + stock, quantity, Add to Cart, Buy Now, wishlist heart
- Overview (structured title + text sections) + technical specifications (key-value table), reviews tab (rating summary, photos, helpful votes, write-a-review form), recommendations, recently viewed
- Delivery & returns line (warranty, 7/15-day window, support link)

### 1.5 Cart (server-side, DB-backed)
- Cart lines with quantity steppers, save-for-later, remove, clear
- Order summary with coupon apply + available coupons, subtotal, total discount, free delivery, total, checkout CTA, payment trust row
- Server-side stock validation before ordering

### 1.6 Wishlist
- Wishlist grid (product + variant), move exact variant to cart, remove

### 1.7 Wallet
- Balance, add money, transaction history, pay-with-wallet at checkout, Refer & Earn block

### 1.8 Checkout
- Address form (with +91 phone), order summary + stock validation
- Payment (Razorpay + PayPal + Wallet + UPI/Card/COD), order confirmation

### 1.9 Orders
- History + detail + tracking timeline, per-item cancel + full-order cancel/return, invoice view/download, stats cards, payment-failed state with retry

### 1.10 Profile
- Edit-info UI, manage addresses, change-password UI, change-email UI (OTP verified), wallet link, referral code display

### 1.11 Reviews
- Write + my-reviews inside product detail (no separate page)

### 1.12 About & Support XX
- About page (brand story); Support page (form writes a support ticket, FAQ, contact details)

### 1.13 Refer & Earn
- Shareable referral code, earnings total, pending/rewarded referral history (wallet credit on reward)

---

## 2. Admin Modules

### 2.0 Admin Profile
- View (name/email/phone/role), change password with strength rules

### 2.1 Dashboard (no charts)
- Sales cards (today/week/month), 5 recent orders, low-stock alerts

### 2.2 Product Management
- Product list (search, filter, export CSV/PDF)
- Add/edit form (SKU, MRP + sale price, discount type toggle, live Save-badge preview, featured flag, active/draft status; stock shown as computed sum of variants, not entered)
- Description-sections editor (title + text rows) + optional `.md` file upload; specifications key-value editor; image uploader with type tags
- Variant management (per-variant price, MRP override, stock, color name + hex, tagged images, SKU)
- Delete confirmation modal

### 2.3 Category Management
- List + export, detail view (preview, status, dates, products table), add/edit form (show-in-nav toggle, display order, search keywords, offer type + value + preview), delete modal (warns when products need reassigning)

### 2.4 Order Management
- List (search by order no./email/phone, status filter, export), detail (items, TXN ID, payment date, customer, timeline, invoice), status-update modal, return entry link

### 2.5 Returns Management
- List (status/reason/date filters, export), detail (item SKU, damage images, refund amount, timeline, customer message), approve (wallet refund) / reject

### 2.6 User Management
- List (search, export), profile view + stats strip (orders/completed/spent/wishlist), block/unblock modal, wallet view

### 2.7 Coupon Management
- List, add/edit form, status toggle, export, live preview (min order, user cap, expiry)

### 2.8 Sales Report
- Date range, KPI cards, top-products table, payment breakdown, sales by category, recent transactions, CSV/PDF export

### 2.9 Support Tickets (optional, week-3 slack)
- Ticket list (status filter), detail (message thread), resolve action

---

## 3. Shared Components
- Navbar (guest/auth states), footer, product card
- Breadcrumbs, loading spinner, empty states, 404/500 pages, confirmation modals (incl. logout), toasts, validation messages

---

## 4. Timeline (4 weeks)

| Week | Modules | Done means |
|------|---------|------------|
| 1 | Auth, homepage, listing, detail, cart | Register → OTP → login → browse → add to cart works end-to-end |
| 2 | Wishlist, wallet, checkout, orders (per-item cancel), reviews, profile, referrals, about, support | Money flows: order placed, paid (all methods), tracked, item-cancelled, returned, reviewed |
| 3 | Full admin panel (2.0–2.9) | Admin manages catalog, orders, returns, users, coupons, reports solo |
| 4 | Payments hardening, shared components, testing, docs, demo prep | Clean install → seeded admin → demo order → report, viva-ready |

**Dependencies:** Checkout after cart; returns after orders; variants after products; reports after orders/coupons. **Blockers watched:** payment-gateway sandbox keys, image assets, Figma-to-code drift (tokens pinned to prevent it).

---

## Locked Decisions

- **Catalog anchors:** Galaxy S24 Ultra (₹1,29,999, MRP ₹1,34,999) and Z Fold5 (₹1,54,999) anchor listing → detail → cart → checkout → orders → reviews.
- **Discount model:** `originalPrice` (MRP) + `price` (sale) + `discountType` (flat/%) + `discountValue`, with auto Save badge. Per-variant MRP/sale override. Category-level offers. Coupons: WELCOME10 (10%), FESTIVE500 (flat ₹500 above ₹20,000) — subtotal always computed server-side, never trusted from client.
- **Payments:** Razorpay (create → verify) + PayPal + Wallet + UPI/Card/COD. No EMI.
- **Auth:** Email + password, Google OAuth, single reusable email OTP for signup and password reset. Seeded admin via `.env` with forced password change on first sign-in. No public admin registration.
- **Moderation:** Blocking a user hides all their reviews site-wide.
- **Content model (re-review):** descriptions are structured title + text sections (optional `.md` upload), images are tagged by type, specifications are filterable key-values, variant colors store name + hex, stock lives on variants only.
- **Server cart (re-review):** cart + save-for-later are DB-backed. Still client-side: recently-viewed (localStorage), OTPs (ephemeral). Support form writes a support ticket (new collection).
- **Referrals (re-review):** every user owns a referral code; rewards land in the wallet ledger.
- **Orders (re-review):** line items carry per-item status so individual items can cancel; listing search + sort + filters run as one query.
- **Images (re-review):** uploaded files go to Cloudinary (free tier), never local disk. DB stores `{url, tag, publicId}` — publicId is the delete handle. Filenames `sku-timestamp-tag.ext`; limits: products 10MB, returns max 4 photos, category 2MB. Deleting a product/variant also deletes its Cloudinary assets (no orphans).
