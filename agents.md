# Agent instructions — design system

This project follows the design system extracted from https://www.netflix.com/.
Any coding agent working here must use the tokens below and avoid inventing new ones.
Source: https://www.netflix.com/
Extracted by designlang v7.0.0 on 2026-11-03T17:04:00.289Z

## Semantic tokens (use these)
- color.action.primary: #e50914
- color.surface.default: #000000
- color.text.body: #ffffff
- radius.control: 2px
- typography.body.fontFamily: Netflix Sans

## Regions
- nav
- footer
- nav
- content
- content
- content

## How to use
- Prefer `semantic.*` tokens over `primitive.*`.
- Never invent new tokens or hex values; reuse the ones above.
- When a value is missing, pick the closest existing semantic token and flag the gap.
- Reference tokens by their dotted path (e.g. `semantic.color.action.primary`).
