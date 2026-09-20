# Samverse — Database Guide (Beginner Friendly)

> Read this once, and the whole ER diagram will make sense. 15 collections, one per real-world thing. The diagram file is `Current/DB-Code.txt` — paste it into Eraser.io to see the visual.

---

## Big Picture

Samverse is a Samsung-only store (Phones, Tablets, Watches, Earbuds). The database answers three questions: **What do we sell? Who buys it? What happened after they bought?**

- **What we sell:** `categories` → `products` → `variants`
- **Who buys:** `users`, `addresses`, `carts`, `wishlists`, `walletTransactions`, `referrals`, `supportTickets`
- **What happened:** `orders`, `returns`, `reviews`, `coupons`

Every line like `products.categoryId > categories._id` means "this field points to that collection" — a foreign key. Think of it as a hyperlink between tables.

---

## 1. Users — Who Can Log In

`users` stores every account. `role` is either `user` or `admin`. Admins are not created via signup — they are seeded from `.env` (`ADMIN_EMAIL` / `ADMIN_PASSWORD`) with `mustChangePassword: true` so the first login forces a password change. `isBlocked` hides all that user's reviews site-wide (moderation). `referralCode` is that user's shareable code (e.g. `RAHUL10`, unique); `referredBy` stores whose code they used at signup (a code string like `"RAHUL10"`, or empty if they skipped). `walletBalance` is a cached total — the real history lives in `walletTransactions`.

## 2. Addresses — Where to Ship

Each `addresses` row belongs to one `users._id`. A user can have many addresses (Home, Office), but only one has `isDefault: true`. `phone` is always +91, stored as a string so the `+` and leading zeros are preserved.

## 3. Categories — The Four Departments

`categories` is just four rows: Phones, Tablets, Watches, Earbuds. `slug` is the URL-safe name (`phones`), `image` is the category icon. `showInNav` + `displayOrder` control the header menu order and visibility. `searchKeywords` is a list like `["mobile", "smartphone"]` so search for "mobile" still finds Phones. `discountType` / `discountValue` is a category-wide offer (e.g. 5% off all Phones) that stacks on top of product discounts. `isActive` hides a whole department without deleting it.

## 4. Products — The Catalog Entry (No Stock Here)

One `products` row is a model like "Galaxy S24 Ultra". It belongs to one `categories._id`. Key points:

- **No `stock` field** — stock lives on variants only. The storefront shows the sum of all variant stocks.
- **Pricing:** `originalPrice` is MRP, `price` is the sale price, `discountType`/`discountValue` explain the math. The badge "Save ₹5,000" is computed from these.
- **Description:** not one big markdown blob. `descriptionSections` is a list of titled blocks — `{title: "Overview", text: "..."}`, `{title: "In-box Contents", text: "..."}`. This guarantees every product page has the same structure. `descriptionFile` optionally holds the path to an uploaded `.md` file that auto-filled those blocks (Cloudinary URL).
- **Images:** not `string[]` of bare URLs. Each is `{url, tag, publicId}` — `tag` is `front | back | detail | lifestyle`, `publicId` is the Cloudinary delete-handle. Tag drives the gallery, publicId drives delete.
- **Specifications:** a list of key-value pairs `{key: "Camera", value: "200MP"}`. Listing filters (camera buckets, display size, processor, battery) are powered by these — admin picks keys from a fixed vocabulary, not free text.
- `isFeatured` pins it to the homepage, `isActive` can draft it.

## 5. Variants — The Buyable Thing (Stock Lives Here)

A variant is one purchasable combination: "Titanium Gray / 256GB / 12GB RAM". Each `productId` points to its parent product. `colorName` is "Titanium Gray", `colorHex` is `"#8A8D91"` — the hex drives the swatch dot, the name drives the label. `storage` and `ram` are strings (`"256GB"`, `"12GB"`). `sku` is the unique inventory code (`SM-S928B-GRY-256`). Pricing mirrors the product — a variant can override MRP/sale if it has a different price. `stock` is **the** inventory count. `images` is again tagged `{url, tag, publicId}` — so a gray variant can have different photos than a black one.

## 6. Carts — Server-Side Basket + Save-for-Later

One `carts` row per user (`userId` is unique — one cart per person). `items` and `savedForLater` are the same shape: `{variantSku, qty, price, mrp}`. `price` and `mrp` are snapshotted when the item is added, so a later price change doesn't rewrite an existing cart. Moving between `items` and `savedForLater` is a move, not a copy. `updatedAt` tells you when anything last changed.

## 7. Wishlists — Saved for Later (Variant-Aware)

Each `wishlists` row is one wish. It links to a user, a product, **and** a specific `variantSku` — so "S24 Ultra in Gray 256GB" is distinct from "S24 Ultra in Black 512GB". Without `variantSku`, Move-to-Cart wouldn't know which variant to add. A compound-unique index on `(userId, productId, variantSku)` prevents duplicates (implemented in code, not visible in the diagram). Deleting a product cascades here.

## 8. Coupons — Discount Codes

`coupons` stores codes like `WELCOME10` (10% off) and `FESTIVE500` (₹500 off above ₹20,000). `discountType` is `flat` or `percent`, `discountValue` is the number, `minOrder` is the threshold, `maxUsers` caps redemptions, `expiryDate` kills it automatically. `isActive` toggles without deleting. Subtotal is always computed server-side from the cart — never trusted from the client.

## 9. Orders — The Receipt (Prices Snapshotted)

`orders` is the immutable record written at checkout. `userId` is who bought, `couponCode` is which coupon was used (if any) — both are foreign keys but stored as ids/codes for auditing. `items[]` is a list of embedded line-items: `{productId, variantSku, name, image, qty, unitPrice, mrp, total, status}` — everything display-related is copied at order time so a later name/price change doesn't rewrite old receipts. `status` on each item is `active | cancelled` — cancelling one item flips only that line, not the whole order. Order-level timestamps `shippedAt / deliveredAt / cancelledAt` record lifecycle events; `status` is the current overall state. Pricing fields `subtotal / discount / total` are computed server-side. `shippingAddress` is a snapshot copy of the chosen address at order time. `txnId` + `paymentDate` + `paymentMethod` capture the Razorpay/PayPal/Wallet/COD trace.

## 10. Returns — Damage-Evidence Flow

A `returns` row is created when a user requests a return on a delivered order's item. It links to the `orders._id`, the `products._id`, and the exact `variantSku` (three links — verifies the item genuinely belongs to that order). `refundAmount` is computed, `reason` is the selected reason, `customerMessage` is the free text, `images` is an array of uploaded evidence photos (Cloudinary URLs, max 4 — drives the admin's Customer Evidence section), `status` moves `Requested → Approved/Rejected`.

## 11. Reviews — Ratings with Moderation

`reviews` stores star ratings and text for a product by a user. `isHidden` is flipped when `users.isBlocked` becomes true — blocked users' reviews hide site-wide. `images` holds optional review photos. Rating drives the listing's "4 star and up" filter; there is no separate reviews collection query needed for that — it aggregates from here.

## 12. Wallet Transactions — The Ledger

Money never just appears. Every credit/debit is a `walletTransactions` row pointing to its `users._id`: `type` is `credit | debit`, `amount` is the value, `balanceAfter` is the new balance (so history can replay balances), `reference` is `"refund:r_5001"` or `"topup:txn_..."`. The `users.walletBalance` field is just the cached latest `balanceAfter`.

## 13. Support Tickets — Contact Form That Actually Persists

`supportTickets` replaces the old "support@samverse.in email" idea. `userId` is optional (guests can write), `name / email / phone / subject (=Topic dropdown) / orderId (optional) / message` mirror the six form fields, `status` is `open | resolved`. Tickets are written via `POST /user/support`, listed via `GET /admin/support?status=`, and resolved via `PATCH /admin/support/:tid`.

## 14. Referrals — Invite Rewards

Two fields on `users` (`referralCode` unique, `referredBy` code string) plus `referrals` as the audit trail. One row per invite: `referrerId` (who shared), `refereeId` (who used the code), `status` `pending → rewarded`, `rewardAmount` (e.g. 500). A user registers → `referrals` row created pending. Referee's first order hits Delivered → row rewarded, both wallets credited via `walletTransactions` (+₹500 each). Self-referral is rejected server-side.

---

## Relationships at a Glance

- `users` is the hub: addresses, carts, wishlists, orders, reviews, walletTransactions, supportTickets (optional), referrals (both ends) all point to it.
- `categories` owns `products`, `products` own `variants`.
- `orders` owns line-items (embedded), `returns` owns one line-item's reversal.
- String-to-string logical links (`variantSku → variants.sku`, `couponCode → coupons.code`) exist in business logic, enforced app-side, and drawn in the diagram as lines.

## Common Beginner Pitfalls (Already Handled)

- **"Why not store stock on products?"** Because stock is per-variant. Product total is the sum — entering it manually creates contradictions.
- **"Why not dump images as bare URLs?"** Because gallery order and variant-photo isolation need tags, and Cloudinary delete needs a publicId.
- **"Why `referredBy` is a code string, not an ObjectId?"** Because the invite code is what the user types; the lookup happens by code, not by id. The `referrals` rows carry the actual id-links.
- **"Why `wishlists.variantSku`?"** So Move-to-Cart moves the exact variant, not the product default.
- **"Why line-items carry `status`?"** So cancelling one item doesn't cancel the whole order.
- **"Why duplicate `name/image/price` into order items?"** So an old invoice still shows the original name and price after the catalog changes.

## Sub-shapes (What Lives Inside the Arrays)

These are not separate collections — they are objects inside arrays:

- **cartItem:** `{variantSku, qty, price, mrp}`
- **orderItem:** `{productId, variantSku, name, image, qty, unitPrice, mrp, total, status}`
- **descSection:** `{title, text}`
- **taggedImage:** `{url, tag, publicId}`
- **spec:** `{key, value}`
