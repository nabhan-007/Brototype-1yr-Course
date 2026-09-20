# 📘 Technical Notes

## 🗓️ What Happened This Module

Cleared on the **3rd attempt** — absent first, failed once, passed Sep 18. New badge, new game: **First Project Planning**, a design review of "Samverse", an exclusive store for Samsung gadgets.

| Attempt | Date   | Result      | The Story                                                         |
| ------- | ------ | ----------- | ----------------------------------------------------------------- |
| 1       | Sep 2  | 😴 Absent   | Preferred on Sep 2                                                |
| 2       | Sep 10 | ❌ 4 / 10   | Planning review found gaps across user, admin, DB, and API design |
| 3       | Sep 18 | ✅ 6.5 / 10 | Core design passed; leftover items are polish-level fixes         |

## ❗ Pending Questions & Tasks

- **User side:**
  - Product description images handled via markdown — adds admin burden; the AI-generated-markdown plan is inconsistent. Rework as described in DB section. _(A2)_
  - Add referral offers _(A2)_
  - Profile edit UI _(A2)_
  - Password change _(A2)_
  - Email change _(A2)_
  - Completed ✅ _(A3)_

- **Admin side / Figma:**
  - "Storefront navigation & search" category not stored in DB _(A2)_
  - Make description field accept text along with markdown file _(A2)_
  - Images tagged by type but DB doesn't support it _(A2)_
  - UI for variant image management _(A2)_
  - Add category offers _(A2)_
  - Dashboard: proper graphs for revenue + top-10 selling products and categories _(A3)_
  - Sales report: table with date, order ID, payment method, status, etc. _(A3)_

- **DB design:**
  - Variant colors shown but not stored in DB _(A2)_
  - Represent "save for later" and other embedded document properties in cart _(A2)_
  - Store product specifications as key-value pairs usable for filtering _(A2)_
  - Store description sections as titles + text for consistent structure _(A2)_
  - Represent embedded order items _(A2)_
  - Support/contact-us UI form not supported by DB _(A2)_
  - Support variants in wishlist _(A2)_
  - Users collection: add `googleId` field for Google auth _(A3)_
  - Address collection: add field for username _(A3)_
  - Order collection: items array should contain product names, product images, etc. _(A3)_

- **API design / documentation:**
  - Submitting product stock is pointless since variants have stock _(A2)_
  - Search, sort, and filter should work together _(A2)_
  - Subtotal doesn't need to be sent for applying coupon _(A2)_
  - Support cancelling individual items _(A2)_
  - Update coupon API: pass coupon ID _(A3)_

- **Module list:** completed ✅ _(A3)_

---

# 📊 Marks Overview

## 🏆 First Project Planning — Final (3rd Attempt)

- Completed on: **Sep 18, 2026 11:20 AM**
- Overall Score: **6.5 / 10**
- Status: ✅ Passed
- Coordinator: Jinu V R

| Section   | Attempt 2 (Failed) | Attempt 3 (Passed) |
| --------- | ------------------ | ------------------ |
| Theory    | 4 / 10 ❌          | 6.5 / 10 ✅        |
| Practical | 4 / 10 ❌          | 6.5 / 10 ✅        |

> Domain: Web development using MERN Stack · Batch: BCK327 · Cut-off for every section: 5.

## 💬 Examiner Feedback

- Fix the issues mentioned above clearly before moving to the next week. Try to present more actively. _(A3)_

---

# 🗣️ Communication Skills Breakdown

Good _(A2)_ → Able to convey things properly _(A3)_ — never flagged as an issue.

---

# 🧠 Observations (Real Talk)

- **The 6.5 three-peat:** M10, M11, and now M12 all landed on exactly 6.5/10. Clears the bar every time, builds zero safety margin.
- **The grind is shortening:** Three attempts this time vs four in M11. Absent → fail → pass is becoming the pattern — the goal is to kill the fail step.
- **Attempt 2 was a design-wide rejection:** Gaps in all four areas at once — markdown-for-images burdening the admin, variant data unmodeled in DB, stock submitted at product level, coupon flow leaking subtotal. These were DB/API design fundamentals, not polish.
- **Attempt 3 was polish-level:** Module list and user-side Figma already complete; remainders were dashboard graphs, a sales table, three missing fields, and one coupon param. The core design had passed.
- **New coordinator:** Jinu V R ran all three attempts (everything before was Cilla Joy).
- **Delivery matters now:** "Try to present more actively" — planning reviews grade the walkthrough, not just the docs.
- **Communication steady:** Good → proper across both attempts. Still never the problem.

---

# 🚀 What You Should Do Next

- **Clear the A3 fix-list before next week** (examiner's orders): revenue graphs + top-10 on the dashboard, sales report table, `googleId` / username / order-items fields, coupon ID param.
- **Kill the markdown-image flow:** Structured title + text description sections, real variant image management UI — stop pushing content work onto the admin.
- **Model variants properly:** Colors, stock at variant level, wishlist variant support — half the A2 DB pendings trace back to this.
- **Coupon API hygiene:** No subtotal in the request, ID in the path, cancellable line items.
- **One combined query path:** Search, sort, and filter working together instead of three separate behaviors.
- **Rehearse the walkthrough:** Present the design like a client handoff — active presenting is now an explicit grading axis.
- **Break the 6.5 streak:** Three modules at exactly 6.5. Push for 7+ on the next review.
