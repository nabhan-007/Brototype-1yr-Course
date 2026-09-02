# Samverse — E-Commerce Platform

**Store Name:** Samverse
**Niche:** Electronics (Samsung only)
**Categories:** Phones, Tablets, Watches, Earbuds
**Tech Stack:** MongoDB, Express, Node.js, EJS
**Roles:** User, Admin

**Variants:**

- Phones → Color, Storage, RAM
- Tablets → Color, Storage, RAM
- Watches → Color, Size (40mm/44mm)
- Earbuds → Color

> ⭐ = Compulsory as per MVP task file (E-Commerce Platform)

---

## 1. User Pages

### 1.1 Auth

- [ ] ⭐ Signup page (name, email, phone, password)
- [ ] ⭐ Login page
- [ ] ⭐ OAuth (Google login) button
- [ ] ⭐ OTP verification page (email)
- [ ] Forgot password page
- [ ] Reset password page
- [ ] Password reset success page (confirmation + link to login)

### 1.2 Homepage

- [ ] Navbar (logo, search bar, login, wishlist, cart)
- [ ] Hero banner
- [ ] Category section (Phones, Tablets, Watches, Earbuds)
- [ ] Series grouping (Galaxy S, A, Z Fold/Flip, Tab, Watch, Buds)
- [ ] Featured products grid
- [ ] New arrivals section
- [ ] Best sellers section
- [ ] Deals of the day section
- [ ] Recently viewed products
- [ ] Footer (links, contact, policies)

### 1.3 Product Listing

- [ ] ⭐ Search bar
- [ ] ⭐ Sidebar filters (category, price, color, storage, watch size, screen size)
- [ ] ⭐ Sort dropdown
- [ ] ⭐ Product grid (image, name, price, rating, add to cart)
- [ ] ⭐ Pagination
- [ ] Quick view modal

### 1.4 Product Detail

- [ ] Image gallery with zoom
- [ ] ⭐ Color swatches (variant selection)
- [ ] ⭐ Storage/RAM selectors (variant selection)
- [ ] Out of stock variant handling (disabled state)
- [ ] Price section (MRP, discount, EMI)
- [ ] Rating + reviews summary
- [ ] Delivery check (pincode input)
- [ ] Add to cart + Buy now buttons
- [ ] Wishlist + Compare buttons
- [ ] Specs tab
- [ ] Reviews tab (with user review images + write review form)
- [ ] Recommended products section
- [ ] Recently viewed products

### 1.5 Cart

- [ ] ⭐ Cart page (item list, quantity controls, remove)
- [ ] Price breakdown sidebar
- [ ] Coupon field
- [ ] Save for later section
- [ ] Empty cart state

### 1.6 Wishlist

- [ ] ⭐ Wishlist page (saved products, move to cart, remove)

### 1.7 Wallet

- [ ] ⭐ Wallet page (balance display, add money, transaction history)
- [ ] ⭐ Add money to wallet (via UPI/Card)
- [ ] ⭐ Wallet transaction history

### 1.8 Checkout

- [ ] ⭐ Address form / saved address selection
- [ ] ⭐ Order summary
- [ ] Stock validation (server-side before order)
- [ ] ⭐ Payment method selection (UPI, Card, Wallet, Wallet Balance, COD)
- [ ] ⭐ Order confirmation page

### 1.9 Orders

- [ ] ⭐ Order history list (status badges)
- [ ] Order detail page
- [ ] Order tracking timeline
- [ ] Order status flow: placed → confirmed → processing → shipped → out for delivery → delivered
- [ ] Cancel order option
- [ ] Return/refund request form
- [ ] Return status tracking
- [ ] ⭐ Invoice view page + Download PDF button

### 1.10 User Profile

- [ ] Profile page (edit info, manage addresses, change password, security settings, delete account)

### 1.11 Reviews

- [ ] My reviews list

### 1.12 About

- [ ] About page (brand story, mission, team)

### 1.13 Support

- [ ] Support page (form, FAQ, contact details)

---

## 2. Admin Pages

### 2.1 Dashboard

- [ ] Dashboard (sales cards, revenue chart, recent orders, low stock alerts)

### 2.2 Product Management

- [ ] ⭐ Product list page (search, filter)
- [ ] ⭐ Add/edit product form (with SKU field)
- [ ] ⭐ Variant management (per-variant price, stock, images)
- [ ] ⭐ Delete confirmation modal
- [ ] Product status toggle (active/draft)

### 2.3 Category Management

- [ ] ⭐ Category list page
- [ ] ⭐ Add/edit category form
- [ ] ⭐ Delete confirmation modal

### 2.4 Order Management

- [ ] ⭐ Order list page (search by order #, email, phone + status filter)
- [ ] ⭐ Order detail page
- [ ] ⭐ Update status modal
- [ ] Approve/reject return requests

### 2.5 User Management

- [ ] ⭐ User list page (search)
- [ ] ⭐ User profile view
- [ ] ⭐ Block/unblock confirmation modal
> Blocking a user hides all their reviews site-wide.
- [ ] User wallet view

### 2.6 Coupon Management

- [ ] Coupon list page
- [ ] Add/edit coupon form (code, discount %, expiry, usage limit)
- [ ] Delete confirmation modal
- [ ] Coupon status toggle (active/inactive)

### 2.7 Sales Report

- [ ] ⭐ Report page (date range, charts, export)

---

## 3. Shared Components

> Reusable UI elements across multiple pages — design once, use everywhere.

- [ ] Navbar (user)
- [ ] Navbar (admin)
- [ ] Sidebar navigation (admin)
- [ ] Footer
- [ ] Breadcrumbs
- [ ] Product card
- [ ] Loading spinner
- [ ] Empty states (cart, orders, search results)
- [ ] 404 page
- [ ] 500 error page
- [ ] Confirmation modals
- [ ] Toast notifications (success, error)
- [ ] Validation error messages
