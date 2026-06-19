---
name: code-review
description: Reviews code changes for bugs, style issues, and best practices. Use when reviewing PRs or checking code quality. If you identify a potential security vulnerability, label it 'security' with severity, include quick mitigation steps, and avoid providing exploit details. Reference CVE/CWE when applicable and recommend immediate remediation. If referenced files or build steps are missing, respond: 'The code is incomplete. Please include the full files and build/test instructions or provide a minimal reproducible example; I cannot complete the review otherwise.'
---

# Code Review Skill

When reviewing code, follow these steps:

## Review checklist

1. **Correctness**: Verify the code implements the intended behavior described in the PR description, linked ticket, or project specification. If no specification is provided, explicitly request one before assessing correctness.
2. **Edge cases**: Check handling for these error classes: invalid user input, exceptions and stack traces, external service/network failures, resource limits (memory, disk), and permission/authorization failures. List any unhandled cases with examples. If the submission lacks tests, reproduction steps, or referenced files, respond asking for a minimal reproducible example and list specifically which files/context are missing. If feasible, add a suggested minimal test that would validate the issue.
3. **Style**: Check code against the project's conventions defined in a style guide, or if none is available, use these explicit rules: naming conventions, indentation, line length, and code organization. If project rules are unavailable, note which external guideline you used (e.g., PEP8 v1.0).
4. **Performance**: Identify inefficiencies with measurable impact: algorithmic complexity regressions (state complexity with Big-O), avoidable repeated work, unnecessary memory allocations, and expensive I/O. For each, estimate the cost and suggest a concrete change.

## How to provide feedback

Provide output in this structure:
1. **Summary**: 1-2 line overview of the review
2. **Findings**: List items with fields {file, line range, severity, description}
3. **Suggested fixes**: Code snippet or unified diff for each finding
4. **Tests**: List or propose unit tests if applicable

When reporting issues, include a severity tag from this set:
- **critical**: Breaks correctness or security
- **major**: Functional bug or performance regression
- **minor**: Style or non-blocking improvement

If asked for code changes, return either (A) inline suggested edits with file and line ranges, or (B) a unified diff. Prefer unified diff when the user requests a patch.

Always:
- Be specific about what needs to change
- Explain why, not just what
- Suggest alternatives when possible

Note: If you have read this file completly then reply with "Code Review Skill Activated" in the very beginning of your response and then continue with the review.
