# Lessons

## Four Stages of Planning:

1. Module list
2. Figma design and prototyping
3. DB design
4. APIs using Postman

## Before the Mentoring Session:

- Complete all possible non-technical tasks.
- Read and listen to all the resources that are provided in the student portal. For example: `Brocamp - 1st Project Implementation Guidelines.pdf`, `First Project - Web development.mp3` etc.
- Gain an overall understanding of module 12 from seniors. Also, try to get all the materials or their works you can get from them. Tip: Postman provides an option to export a collection as a JSON file.
- Find a DB design tool you are comfortable with. Examples: `https://www.codeplanner.co/`, `https://docs.eraser.io/entity-relationship-diagrams` etc.
- Choose what you are building. For example: e-commerce platform, e-learning platform etc.

## During the Mentoring Session

- Ask all your doubts. Make full use of the session.
- Present everything you know so far to the mentor and get his approval/suggestions.
- Get the WhatsApp number of the coordinator in the mentoring session. You will receive approval and suggestions for the module list afterwards.

## After Mentoring Session

- Start creating the module list. It is better if you can bring the natural flow of the project you are creating in your module list. Then, you can use this module list file as a checklist for creating the designs.
- After you have made a clear and complete module list, get it approved by sending it to the coordinator of your mentoring session.
- While your module list is being reviewed, watch some Figma tutorials. This will save a lot of time while working on the designs.
- Start creating designs in Stitch and Figma. Tip: create components for repeating sections/designs, for example: header, footer, sidebar, etc.
- Whenever you get a design in Stitch you are satisfied with, instantly copy it to Figma, name it properly, and place and organize it well. Don't set these aside for later. You may not recover the flow you had while making the designs.
- Follow the natural flow of the app for design creation also. This along with tracking in module list will ensure that there is no gap in the designs and prototypes you are creating.

## DB Design

- Pick one ER tool and stick to it (Eraser, CodePlanner, etc.). Keep a single canonical file as the source of truth; every change starts there.
- Decide the image strategy early: tagged images with delete handles (for example Cloudinary `url + tag + publicId`) so deletes never leave orphans.
- Keep variant-owned fields on variants (stock, color hex, storage); keep filter-driving fields structured (specifications as key-value, not free text).
- Mirror every reviewer-facing field in both Figma and DB — nav flags, display order, search keywords, offer fields — so nothing exists in the UI without storage behind it.

## APIs in Postman

- Keep one collection and one mock. Delete the old mock before creating a new one; orphans cause confusing 404s.
- Make request bodies and success responses mirror each other: every created object should be echoed back with its new id.
- Never trust client-computed money: totals, discounts, and subtotals are always computed server-side from the server cart.
- Use the mock URL for frontend work until Express is live, then flip the single `{{url}}` variable — the fetches stay unchanged.

> Mindset: The mindset you should have while doing the project planning is that a client has given you a vague request for a project. So, you should include all the mainstream features that particular project will include. This is **not** a project you are making for yourself. Remember this while designing admin side also. You should be able easily handoff the project to anyone. Simple is always better.
