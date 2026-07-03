# All The Acronyms — The Family IT Support Survival Guide

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Stack: HTML/CSS/JS](https://img.shields.io/badge/Stack-Vanilla%20JS%20%2F%20HTML5%20%2F%20CSS3-blue)](https://developer.mozilla.org/en-US/)

> **Dedicated to all the family IT support members who have to deal with that one guy going** *"What does that mean?"*

We've all been there. It's Thanksgiving, or a Sunday afternoon, or a random Tuesday night, and your phone buzzes. A family member just discovered a new term, or they are setting up a "smart toaster," or their browser cached something weird. Instead of spending your valuable free time explaining the nuance between **WWW** and the **Internet** for the fourteenth time, just send them here. 

**All The Acronyms** is a lightweight, zero-dependency, lightning-fast web dictionary built explicitly for the family IT hero. It houses clear, jargon-free definitions, concrete examples, and category filtering to help non-technical loved ones decipher the modern web without draining your sanity.

---

## Features

* **Search as you type:** Instantly look up acronyms (`WWW`, `HTTPS`, `SaaS`) or search inside definitions (`protocol`, `secure`, `commercial`).
* **Category Filters:** Filter definitions instantly by tags like `web`, `networking`, `security`, `software`, or `programming`.
* **The "Surprise Me" Button:** Perfect for family members who want to learn something new or test their knowledge.

---

## Tech Stack & Architecture

This project is built using the ultimate, future-proof, bullet-resistant tech stack: **Vanilla Web Technologies**. No `npm install`, no `node_modules` black holes, and no build steps required.

* **`index.html`**: Structured semantic HTML5 containing the search controls, filter dropdown, and a live-updating ARIA-friendly results zone (`aria-live="polite"`).
* **`styles.css`**: Modern dark-mode-first CSS utilizing custom properties (`--accent`, `--bg`), fluid typography (`system-ui`, `Inter`), glassmorphism overlays, and fully responsive layouts that collapse gracefully on mobile devices.
* **`script.js`**: Pure ES6+ JavaScript. Features a hardcoded dictionary dataset, dynamic tag extraction to populate the filter dropdown at runtime, an optimal conditional filtering pipeline, and dynamic client-side DOM building.

---

## How to Deploy / Run

Because this project is entirely serverless and client-side, you have two primary ways to run it:

### Option 1: Running locally
1. Clone or download this repository.
2. Double-click `index.html`. 
3. Boom. It works. You can even put it on a thumb drive for an aunt who doesn't have internet access yet (and then explain what an `ISP` is using the app!).

### Option 2: Deploy to GitHub Pages
Host it for free so you have a quick link to fire off in the family group chat:
1. Push this code to your own GitHub repository.
2. Go to **Settings** > **Pages**.
3. Under **Source**, select `Deploy from a branch`.
4. Choose your branch (usually `main`) and folder (`/root`), then click **Save**.
5. Your custom URL will be ready in under a minute!

---

## How to Add More Acronyms

Did your uncle ask about a brand new term like `Web3`, or `NFT`? Adding it to the dictionary takes less than 60 seconds:

1. Open `script.js` in your favorite text editor.
2. Locate the `ACRONYMS` array at the top of the file.
3. Append a new object to the list following this exact schema: