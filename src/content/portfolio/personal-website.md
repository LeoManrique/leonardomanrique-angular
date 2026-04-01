---
title: leonardomanrique.com
description: Personal portfolio and blog built with SvelteKit, featuring SSG and automated deployment.
tech:
  - SvelteKit
  - TypeScript
  - Nginx
  - GitHub Actions
repo: https://github.com/LeoManrique/leonardomanrique.com
live: https://www.leonardomanrique.com
order: 1
published: true
---

My personal corner of the internet. Originally built with React, then migrated to SvelteKit for better performance and developer experience.

## Features

- **Static site generation** for fast load times and SEO
- **Dark/light theme** with system preference detection
- **Blog** powered by Markdown via mdsvex
- **Automated deployment** via GitHub Actions to a self-hosted nginx server

## Tech decisions

I chose SvelteKit over Next.js because the portfolio didn't need a server runtime. With adapter-static, the entire site compiles to plain HTML/CSS/JS files that nginx serves directly.
