# Week 04 · Mon · Learn
## React From Day One — Vite, JSX, Components & Props

### Learning objectives
By the end of today, you should be able to:
- Set up a React project with Vite and explain what each generated file actually does.
- Explain what JSX really is (not a template language — syntactic sugar over real JavaScript function calls) and write valid JSX.
- Explain why a React component is fundamentally just a function that returns markup, the same shape as every Python function you've written this program.
- Pass data between components via props, and recognize props as function arguments wearing HTML-attribute syntax.
- Build real, accessible forms inside JSX — labels, input types, validation — and confirm none of that changes just because React is rendering it.
- Carry Week 3's CSRF lesson forward: explain why it applies exactly the same way to a React-rendered form as to a hand-written one.

### Lesson

**1. What React actually is**
React is a JavaScript library for building user interfaces out of small, reusable, composable pieces called **components**. It doesn't replace HTML — it *generates* HTML: every component eventually renders down to real DOM elements, which is why semantic structure, accessibility, and forms don't become optional just because React is involved. The core idea it exists for: instead of manually finding a DOM element and mutating it every time your data changes, you describe what the UI should look like *for a given set of data*, and React figures out how to update the real page to match. Today is about the pieces that make that possible — components and props — before anything actually changes over time (that's state, coming later this week).

**2. Setting up a project with Vite**
```
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install
npm run dev
```
Vite is the build tool: browsers can't run JSX directly, so Vite compiles it into plain JavaScript and serves it with near-instant reload during development. Walk through what got generated: `index.html` is the *only* real HTML file in the whole project — notice it's nearly empty, just a `<div id="root"></div>` and a script tag. `src/main.jsx` is the entry point — it takes your top-level `App` component and mounts it into that one `div`. `src/App.jsx` is your first component. Everything you build today lives inside that one `div`; React owns everything under it.

**3. JSX — HTML-like syntax that's actually JavaScript**
JSX looks like HTML but compiles to plain function calls — it's not a template language with its own rules bolted onto HTML, it's syntactic sugar over real JavaScript. A few concrete rules that differ from HTML, each with a real reason:
- A component must return exactly **one** root element (wrap multiple siblings in a `<div>` or an empty `<>...</>` Fragment) — because a function can only return one value, and JSX is just a function call underneath.
- Attributes are camelCase: `className` instead of `class` (because `class` is a reserved JavaScript keyword), `htmlFor` instead of `for` (same reason — `for` is reserved too, which matters the moment you write a `<label>`).
- Embed any JavaScript *expression* with `{}` — a variable, a function call, a ternary — but not a *statement* like a raw `if`. Logic that needs a full `if` belongs above the `return`, not inside the markup.

**4. Components — a function that returns markup**
A React component is a JavaScript function, capitalized by convention, that returns JSX:
```jsx
function ProjectCard() {
  return <h3>Notes API</h3>;
}
```
This is the exact same "function" concept from Week 1 — the only real differences are what it returns (markup describing UI, not a computed value) and the capitalized name, which is how React tells `<ProjectCard />` apart from a plain HTML tag like `<div>`. Composition works the same way composing Python functions does: `App` renders `<Header />`, `<Projects />`, and `<Footer />` inside it, the same way a `main()` function calls smaller functions to get its work done, instead of doing everything in one giant block.

**5. Props — passing data into a component**
Props are how a parent hands data to a child, and they're exactly function arguments wearing HTML-attribute syntax:
```jsx
<ProjectCard title="Notes API" description="A small CRUD API with auth." />
```
is really calling a function with keyword arguments. Inside `ProjectCard`, you receive them either as one object or destructured directly — and the destructured form should look immediately familiar from four weeks of Python:
```jsx
function ProjectCard({ title, description }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
```
Props are read-only from the child's side — a component never reassigns its own props, the same discipline as not mutating an argument a Python function only needed to read.

**6. Rebuilding the portfolio as components, not pages**
Instead of three separate `.html` files, today's structure becomes three components — `Home.jsx`, `Projects.jsx`, `Contact.jsx` — each returning the same semantic content you'd have written by hand (header/nav/main/footer, project `<article>`s, a real contact form), composed together inside `App.jsx`. Real client-side navigation between them (clicking a nav link without a full page reload) needs a router, which is a later topic — for today, build all three components correctly and render them in `App.jsx` to prove each one out individually; wiring real navigation between them comes once this week reaches JS events.

**7. Nothing about HTML fundamentals goes away**
Every rule from what would have been today's plain-HTML lesson still applies, because JSX still renders real DOM elements underneath: semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`) still matter for the same screen-reader-landmark reasons; every `<input>` still needs a genuinely associated `<label>` (via `htmlFor`/`id` in JSX); `type`, `required`, `pattern`, and native browser validation all still work exactly the same way, unchanged by React; and a heading hierarchy, `alt` text, and full keyboard navigability are exactly as required as they'd have been in hand-written HTML. And Week 3's CSRF lesson doesn't change either: a form rendered by a React component and submitted with `method="post"` carries the exact same cookie-auto-attachment risk (and the exact same header-based-auth mitigation) as one written by hand — the vulnerability lives in how the browser and server handle the request, not in which tool generated the markup.

### Resources
- [React — Quick Start](https://react.dev/learn)
- [Vite — Getting Started](https://vite.dev/guide/)
- [React — Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [React — Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
- [MDN — What Is Accessibility?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)
- [OWASP Cheat Sheet — Cross-Site Request Forgery Prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)

### Build task — the portfolio site, as components

**0. Set up the project.** `npm create vite@latest`, get the dev server running, and confirm hot-reload works — edit the text `App.jsx` returns and watch it update without a manual browser refresh.

**1. `Header` and `Footer` components.** Two small components with no props needed yet — site title and a nav placeholder in `Header`, basic footer content in `Footer`. Render both inside `App.jsx`.

**2. `Home` component.** A hero/intro area (name + one-line summary), an "About" section with a real bio paragraph, and a "Skills" section rendering a real `<ul>` of skills — all semantic JSX, no `<div>` standing in for a region that has a real element available.

**3. `ProjectCard` component, used three times.** Accepts props for `title`, `description`, a list of technologies, and a link. Renders as a semantic `<article>` with a heading, description, a real `<ul>` of technologies, and a link with meaningful text (never "click here"). Build a `Projects` component that renders `<ProjectCard />` three times with three different sets of props — this is the concrete proof that a component is reusable, not a one-off page.

**4. `Contact` component — the full form, in JSX.** One `<form method="post">` containing: a text input for name (`required`), an email input (`required`), a `<select>` for subject with at least three `<option>`s, a `<textarea>` for the message (`required`, sensible `minLength`), a checkbox, and a radio-button group ("preferred contact method") grouped under `<fieldset>`/`<legend>`. Every input labeled with `htmlFor`/`id` — not `for`. Confirm native browser validation still fires with zero custom JavaScript: try submitting empty, try an invalid email.

**5. Whole-app accessibility and security check.**
- Tab through the entire rendered app using only the keyboard — every interactive element in `Home`, `Projects`, and `Contact` must be reachable and operable.
- Check heading hierarchy across all three components combined, not per-component in isolation — nesting can accidentally duplicate or skip levels.
- Every image has real `alt` text or a deliberate empty `alt=""`.
- Write, in your own words, why Week 3's CSRF lesson applies identically here — that a form being generated by a `Contact` component instead of typed by hand changes nothing about the underlying browser/cookie mechanism.

### Today's tasks
- [x] Vite React project created, dev server running, hot-reload confirmed
- [x] `Header` and `Footer` components built and rendered in `App.jsx`
- [x] `Home` component built — hero, About section, Skills list
- [x] `ProjectCard` component built and reused three times via props inside `Projects`
- [x] `Contact` component built — full form (text/email/select/textarea/checkbox/radio group), every field labeled via `htmlFor`
- [x] Native browser validation confirmed working on the contact form with zero custom JavaScript
- [x] Keyboard-only accessibility audit done across the whole rendered app
- [x] Heading hierarchy and image `alt` text checked across all three components together
- [x] CSRF carryover explanation written

### CSRF Carryover Explanation
The Week 3 CSRF lesson applies identically to this React application because the underlying mechanism remains unchanged. Even though the form is rendered by a React `Contact` component instead of being handwritten in a static HTML file, it still ultimately generates a standard HTML `<form method="post">` in the DOM. When submitted, the browser handles the POST request just like any other traditional form submission, meaning it will automatically attach any session cookies to the outgoing request. The vulnerability lives entirely in how the browser automatically includes credentials and how the server handles the request, which is completely independent of whether the markup was generated dynamically by a frontend library like React or typed by hand.
