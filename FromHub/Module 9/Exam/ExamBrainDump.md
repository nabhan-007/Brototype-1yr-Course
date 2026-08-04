# ExamBrainDump: Module - 9 (18/07/2026)

## Theory

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What is Node.js? Explain its core architecture and key features.
- What is the Call Stack and how does Node.js use it?
- What is `libuv` and what role does it play in Node.js?
- What is NVM (Node Version Manager) and how do you use it?
- What is `nodemon` and how do you install it as a dev dependency?
- What is the difference between `package.json` and `package-lock.json`?
- What is `process.nextTick` and when is it executed?

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What is the difference between `app.set()`, `app.use()`, and `app.locals`?
- What are Streams? What types of streams exist in Node.js?
- What is the difference between `res.write()` and `res.send()`?

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What is Dynamic Routing and how does it work in Express?
- What is Router Chaining and how do you implement it?
- What is the difference between Query Parameters and Path Parameters?

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- Explain the common HTTP Methods and their use cases.
- What is the OPTIONS HTTP Method and when is it used?
- Explain these HTTP Status Codes: 200, 201, 301, 400, 401, 403, 404, 500.

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What are Middlewares in Express? Explain each type of middleware.
- What is the syntax for an Error-Handling Middleware?

</div>

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What is the difference between `PUT` and `PATCH`?
- What is the difference between Client-Side and Server-Side Validations?
- What are Cookies and how do they work?
- What is Session Destroy and what is its syntax?
- What is `localStorage` and what are its methods?

</div>

<div style="border: 1px solid #58a6ff; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

- What is CORS (Cross-Origin Resource Sharing)?
- What is the Same-Origin Policy and what conditions define it?
- What is the difference between an API and a REST API?

</div>

<hr style="border: 2px solid #888; border-radius: 6px">

## Practicals

<div style="border: 1px solid #a371f7; border-radius: 8px; padding: 12px 16px; margin: 12px 0;">

```JavaScript
// Create an empty array to store usernames.
// Create a GET route `/users/:username` that accepts a username as a path parameter.
// When a request is made:
// - Check whether the username already exists in the array.
// - If it exists, respond with "User Already Exists!!".
// - Otherwise, add the username to the array and respond with "User Added :)".
// (The examiner will not be this descriptive. Keep that in mind.)

const usernames = [];

app.get("/users/:username", (req, res) => {
    if (usernames.includes(req.params.username)) {
        res.send("User Already Exists!!");
    } else {
        usernames.push(req.params.username);
        res.send("User Added :)");
    }
});
```

</div>

---

### Reviewer: `OR 44`
