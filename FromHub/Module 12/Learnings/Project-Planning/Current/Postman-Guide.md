# Samverse — Postman API Guide (Beginner Friendly)

> One collection, one mock, every lane covered. File: `Current/Samverse.postman_collection.json`. Import → `...` → Mock collection → Send.

## How the Collection Is Organized

Top level has two folders — **Admin** (staff) and **User** (shopper). Inside each, subfolders group one feature. `{{url}}` is the only variable: `http://localhost:3000` for real backend, or the mock URL for UI work.

Status codes: `200` read/update OK, `201` created, `400` bad input, `401` wrong credentials, `402` payment failed (retryable), `409` out-of-stock.

---

## 1. Admin

### 1.1 Authentication (5)
`adminLogin` — email + password, returns `mustChangePassword: true` on first seeded login (`.env` admin@samverse.in / Admin@123). Has a second example `invalid credentials` on 401. `adminLogout` clears session. `forgotPassword` / `resetPassword` email OTP flow. `changePassword` patches old→new (8+ chars, upper/lower/number/special).

### 1.2 Dashboard
`getDashboard` → `{today, week, month, recentOrders[5], lowStock}`. No charts (chart libs were reviewer-flagged in seniors). Low stock threshold is 5 units on a variant (e.g. Z Fold5 3 left).

### 1.3 Products + Variants (10)
- `viewProductList` — list with `?search=s24&page=1` + pagination total 48.
- `addProduct` — **reviewer fix**: no `stock` field (stock lives on variants, the storefront sums them). Body is `name, sku, categoryId, descriptionSections[{title,text}], descriptionFile(.md optional), images[{url,tag,publicId}](front|back|detail|lifestyle via Cloudinary), specifications[{key,value}](key from fixed vocab: Display/Processor/Battery/Dimensions/Camera — drives listing filters), originalPrice/price/discountType/discountValue, isActive/isFeatured`. Tagged images: `url` is the CDN URL, `tag` picks gallery order, `publicId` is the Cloudinary delete handle.
- `productDetails` / `editProduct` / `toggleProductStatus` / `deleteProduct` — patch price only (not stock), toggle visible, delete also destroys Cloudinary assets (no orphans).
- Variant lane: `listVariants`, `addVariant` (`colorName` + `colorHex` — reviewer fix: hex was displayed but not stored — plus `storage/ram/sku/originalPrice/price/stock/images[tagged]/isFeatured`), `editVariant`, `deleteVariant`.

### 1.4 Category (5)
`viewCategoryList`, `addCategory`, `categoryDetails`, `editCategory`, `deleteCategory`. **Reviewer fixes**: `showInNav` + `displayOrder` (header menu order/visibility), `searchKeywords[]` (quick-search alias like ["mobile","smartphone"]), `discountType/discountValue` (category offer on top of product discounts, minOrder for threshold). Detail view expands to `{category, products[]}` so the reviewer sees nav+offer fields live. Delete warns when 24 products need reassigning (kept as a response hint).

### 1.5 Orders / Returns / Customers / Coupons / Reports
- Orders: `viewOrderList?status=&search=`, `viewOrderDetails`, `updateStatus {status: "Shipped"}`.
- Returns: `viewReturnList?status=Requested`, `viewReturnDetails` (now includes `images[]` evidence photos — reviewer fix: see Customer Evidence on your Return Detail screen), `approveReturn / rejectReturn`.
- Customers: `viewUserList?search=rahul`, `userDetails` (stats: totalOrders/completed/spent/wishlistCount), `blockUser / unblockUser` (block hides all reviews site-wide), `userWallet` (balance + ledger for audit).
- Coupons: `viewCouponList` (WELCOME10 10%, FESTIVE500 flat 500 above 20000), `addCoupon/editCoupon/toggleCoupon/deleteCoupon` with `expiryDate/maxUsers/minOrder`.
- Reports: `viewSalesReport?from=&to=` (kpi revenue/orders/avgOrder + paymentBreakdown + salesByCategory + topProducts + recentTransactions), `exportSalesReport?format=csv`.

### 1.6 Admin Profile + Support (new)
`viewProfile / editProfile / changePassword` (self, not customers). New `Admin/Support`: `viewTickets?status=open` (201 on create) and `resolveTicket {status: resolved}` — backs the support form persisting to `supportTickets` (reviewer: support form not backed by DB).

---

## 2. User

### 2.1 Authentication (8)
`userRegister` — now carries optional `referralCode` (separate referral step after OTP, so Google OAuth also passes through it). Extra example `invalid referral` on 400. `otpVerification` / `resendOtp` (6-digit), `userLogin` (has `invalid credentials` error example), `googleLogin {idToken}`, `userLogout`, `forgotPassword` → `newPassword` (email+otp+newPassword). OTP is reusable for signup and reset.

### 2.2 Home
`getCategoryList` (4 slugs: phones/tablets/watches/earbuds) and `getHome` (hero S24 Ultra 1,29,999, featured 4, deals timer 08:45:12, bestSellers, recentlyViewed). No basket here — honest home.

### 2.3 Products
`viewProducts?q=fold&category=phones&minPrice=10000&maxPrice=150000&rating=4&storage=256GB&ram=12GB&sort=featured&page=1` — **reviewer fix**: `q` lives here now; the standalone `searchProducts` request was deleted. Search + sort + filter run as one query. Spec query `spec=Camera:200MP` (repeatable) is supported via `specifications[]` KV. `productDetails /p_s24ultra` returns `{product (with descriptionSections + tagged images + specs), variants[], reviews: {avg,count,list}}`, `relatedProducts` for You-May-Also-Like.

### 2.4 Wishlist, Cart, Wallet
- Wishlist: `viewWishlist`, `addToWishlist {variantSku}` (reviewer fix: variant-aware, not product-only), `removeFromWishlist {variantSku}` (body carries exact variant — needed when same product has 2 wishlisted variants), `clearWishlist`. Move-to-Cart carries the exact variant.
- Cart (server-side, DB-backed — reviewer fix: was localStorage): `viewCart` (contains `items[]` + `savedForLater[]` — reviewer: embedded save-for-later in carts), `addToCart {variantSku,qty}`, `updateQty {qty}`, `removeItem`, `clearCart`, `saveForLater`, `moveToCart`. Items snapshot `price/mrp` at add time so later price edits don't rewrite the cart.
- Wallet: `viewWallet` (balance + transactions), `addMoney {amount, method: UPI}`. Referral rewards land here as `walletTransactions`.

### 2.5 Addresses, Coupons, Checkout
- Addresses: `viewAddresses`, `addAddress/editAddress/setDefaultAddress/removeAddress` (phone always +91 string, pin string, isDefault boolean).
- Coupons: `viewCoupons`, `applyCoupon {code}` only (reviewer fix: no `subtotal` from client — server computes from the server cart), plus `invalid coupon` 400 example, `removeCoupon`.
- Checkout (two-phase for Razorpay — adopted from senior Sneha, proven): `showCheckoutSummary?addressId=a_home&coupon=WELCOME10` (returns `{items[], subtotal, discount, delivery: FREE, total, stockOk}` — computed server-side), `createPayment {addressId, couponCode, paymentMethod: Razorpay}` → 201 `{razorpayOrderId, amount, currency}` (amount computed server-side from cart + coupon — never trusted from client), `verifyPayment {razorpayOrderId, razorpayPaymentId, razorpaySignature}` → 200 payment verified + order, and `placeOrder {addressId, couponCode, paymentMethod: UPI}` → 201 for COD/wallet/UPI (items come from the server cart — never sent from client).

### 2.6 Orders & Returns
`viewOrderList?status=Delivered` (with stats), `viewOrderDetails /o_1001` (status + timeline), `cancelOrder {reason}` (full order), **new** `cancelItem {variantSku}` → 200 `{refundAmount, newTotal}` (reviewer fix: cancel individual items — each order line carries `status: active|cancelled`), `returnOrder {productId, variantSku, reason, customerMessage, images[]}` → 201 `{returnId}` (images[] = 1–4 damage photos, Cloudinary — mirrors DB `returns.images string[]`), `trackOrder` (timeline Packed→Shipped), `viewInvoice`.

### 2.7 Reviews, Referrals, Profile, Support (new lanes)
- Reviews: `addReview {rating, title, text, images[]}` (images[] = Cloudinary URLs `https://res.cloudinary.com/.../reviews/...jpg`, not bare filenames), `myReviews`, `editReview {rating, title, text}`, `deleteReview`. Block unblocks via customers lane.
- New `Referrals`: `viewReferrals` → `{myCode: RAHUL10, earned: 500, pending: 2, history[]}`, `applyReferral {referralCode}`. Invite flow: signup → OTP → **Referral step** → Home; reward (+500 each) on referee's first Delivered order.
- Profile: `viewProfile`, `editProfile {name,phone}`, `changePassword {old,new}`, **new** `changeEmail {newEmail}` → OTP + `verifyEmail {otp}` → 200 email changed (reviewer: email change UI).
- New `Support`: `createTicket {name,email,phone,subject,orderId,message}` → 201 `{ticketId: t_sup2501}` (status open → resolved), backs the Support Center form with phone + order ID.

---

## 3. How to Run and Demo

1. Import `Samverse.postman_collection.json` → `...` → **Mock collection** → Create → set `{{url}}` to the new mock URL → Save → open any request (`adminLogin`) → **Send** → expect `{success:true, ...}`. Never double-create without deleting the old mock (orphan = 404 mockRequestNotFoundError).
2. Error demos: requests with two examples (e.g. `adminLogin success / invalid credentials`) let you force the error with header `x-mock-response-code: 401` or `x-mock-response-name: adminLogin -- invalid credentials`. Checkout siblings (`createPayment` family) already carry selector headers where path-fuzz was proven.
3. Frontend wiring: point your app's API base to the mock URL until Express is live, flip to `http://localhost:3000` after. Fetches stay unchanged.

## Summary — Reviewer Mapping

| Reviewer remark | Postman fix |
|---|---|
| Product stock pointless (variants own it) | `stock` removed from `addProduct` / `editProduct` |
| Search, sort, filter must combine | `searchProducts` deleted → `viewProducts?q=...&category=&sort=` |
| Subtotal not needed for coupon | `applyCoupon` is `{code}` only |
| Cancel individual items | `POST /user/orders/:id/cancel-item {variantSku}` + per-item `status` |
| Also: markdown/images/specs/colors/category nav+offer/wishlist variant/support/Cloudinary/email/referral | `descriptionSections/specs/tagged images+publicId/colorName+colorHex/category showInNav+keywords+offer/wishlist variantSku/register referralCode/new Referrals+Support+email flows` |
