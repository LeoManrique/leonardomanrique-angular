---
title: Getting Started with SvelteKit
description: A walkthrough of migrating a personal site from React to SvelteKit and why it was worth it.
date: '2026-03-28'
tags:
  - svelte
  - frontend
  - web
published: true
---

After years of building with React, I decided to migrate my personal site to SvelteKit. Here's what I learned along the way.

## Why SvelteKit?

React is great for large applications, but for a personal portfolio it felt like overkill. SvelteKit gives you:

- **File-based routing** — no need for react-router configuration
- **Built-in SSG** — adapter-static generates plain HTML at build time
- **Less boilerplate** — Svelte 5 runes make state management trivial

## The migration process

The biggest shift was moving from component state with `useState` to Svelte's `$state` rune. Instead of:

```javascript
const [count, setCount] = useState(0);
```

You simply write:

```javascript
let count = $state(0);
```

## What I'd do differently

If I were starting from scratch, I'd set up mdsvex from day one. Writing blog posts in Markdown with Svelte component support is a killer combination.

Stay tuned for more posts about building with SvelteKit.
