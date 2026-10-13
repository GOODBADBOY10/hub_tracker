// 90 days. Each entry: "Learn topic | Practice task". Day 1 is first. Edit freely; keep exactly 90 entries.
const WEEKS = ["Foundations","HTML","CSS","Responsive design and Project 1","JavaScript basics","The DOM","Async JS and APIs","Node.js","Express","Databases and auth","AI-assisted development","Professional practice","Capstone"];
const C = [
"How the web works (browser, server, HTTP) | Draw and explain what happens when you open a URL",
"Terminal basics (cd, ls, mkdir) | Build a folder structure using only the terminal",
"VS Code setup and shortcuts | Install 3 extensions and customise settings",
"Git basics (init, add, commit) | Make a repo with 5 meaningful commits",
"GitHub (remote, push, pull) | Publish your first repo with a README",
"Learning with AI: prompt to understand, not to copy | Ask an AI to explain Git, then explain it back in your own words",
"Review week 1 | Redo days 4 and 5 from memory",
"HTML structure (doctype, head, body) | Build a bare page about yourself",
"Text, links, images, lists | Build a recipe or bio page",
"Semantic tags (header, main, section, footer) | Rebuild yesterday's page semantically",
"Forms and inputs | Build a signup form with 6 input types",
"Tables and media | Build a timetable page",
"Accessibility basics (alt text, labels, headings) | Audit your pages and fix 5 issues",
"Review week 2 | Mini project: personal profile page pushed to GitHub",
"CSS selectors and the cascade | Style your profile page",
"Box model, margin, padding | Recreate a card layout",
"Colours, fonts, units (rem, %) | Build a style guide page",
"Flexbox | Build a navbar and a row of cards",
"Grid | Build a photo gallery layout",
"Positioning and z-index | Build a sticky header and an overlay",
"Review week 3 | Rebuild a simple landing page from a screenshot",
"Responsive design and media queries | Make your landing page mobile-friendly",
"Mobile-first workflow | Build a mobile menu",
"CSS variables and dark mode | Add light and dark themes",
"Transitions and animations | Add hover and entrance effects with restraint",
"Project 1 planning | Wireframe and write your project plan",
"Project 1 build | Build a responsive portfolio page",
"Deploy Project 1 | Publish on GitHub Pages or Netlify and share the link",
"JavaScript basics: variables, types, console | Solve 10 small console exercises",
"Operators and conditionals | Build a grade calculator",
"Loops | Do FizzBuzz plus 5 loop exercises",
"Functions and scope | Write 8 helper functions",
"Arrays and array methods (map, filter, reduce) | Practise on a list of products",
"Objects | Model a student record",
"Review week 5 | Mini project: a console quiz game",
"DOM selection and changing content | Change page text and styles with JS",
"Events | Build a click counter",
"Forms and validation in JS | Validate your signup form",
"Building lists dynamically | Build a to-do list",
"localStorage | Save your to-do list between visits",
"Debugging with DevTools | Find and fix 5 planted bugs",
"Review week 6 | Mini project: expense tracker",
"ES6+ (destructuring, spread, modules) | Refactor yesterday's project",
"Asynchronous JS (callbacks, promises) | Write a delay function with promises",
"async/await and fetch | Fetch and display data from a public API",
"Error handling | Add loading and error states",
"JSON and APIs | Build a weather or quotes app",
"Project 2 build | Polish and extend your API app",
"Deploy Project 2 | Publish it and write a README with screenshots",
"What Node.js and npm are | Install Node and run your first script",
"Modules (CommonJS and ES) | Split a script into modules",
"File system and path | Write a script that reads and writes files",
"npm packages and package.json | Install and use 2 packages",
"Environment variables and .env | Load config safely and add .gitignore",
"HTTP server from scratch | Build a basic server with the http module",
"Review week 8 | Mini project: CLI notes app",
"Express setup and routing | Create GET routes",
"Middleware | Write a logger and use express.json",
"REST API design | Design a notes API on paper",
"CRUD routes with in-memory data | Build all 5 routes",
"Serving static files and a frontend | Connect your frontend to your API",
"Validation and error handling | Add input validation and error middleware",
"Review week 9 | Mini project: Todo API plus frontend",
"Relational basics and SQL | Create tables and write SELECT queries",
"Supabase setup (tables, keys) | Create a project and a table",
"CRUD with supabase-js | Connect your Todo app to Supabase",
"Authentication | Add sign up and login",
"Row Level Security | Make sure users only see their own data",
"Express with a database | Move your API logic to Express plus Supabase",
"Review week 10 | Mini project: authenticated notes app",
"AI coding tools: when to use and when not to | Compare ChatGPT, Claude and Copilot on one bug",
"Prompting for code (context, constraints, examples) | Rewrite 3 weak prompts into strong ones",
"Debugging with AI | Fix a planted bug, then explain the cause yourself",
"AI for code review and tests | Review your project with AI and apply 3 fixes",
"Reading and verifying AI-written code | Spot errors in AI code that looks right",
"AI-assisted project planning | Plan your capstone with AI, then edit it critically",
"Review week 11 | Write your own rules for using AI while learning",
"Git branching and merging | Create a feature branch and merge it",
"Pull requests and code review | Open a PR and review a classmate's",
"Testing basics | Write 5 tests for a function",
"Web security basics (XSS, secrets, CORS) | Audit your app for 5 risks",
"Deployment (Render, Vercel, Netlify) | Deploy your Express app",
"Environment config and CI | Add a GitHub Actions workflow",
"Review week 12 | Fix and polish your deployed app",
"Capstone 1: data model and API | Set up the database and endpoints",
"Capstone 2: auth and core features | Implement login and the main flow",
"Capstone 3: frontend polish | Build a responsive UI with error states",
"Capstone 4: tests and fixes | Test and fix the top bugs",
"Deploy and document | Deploy and write a README with setup steps",
"Demo day | Present your project and write a short retrospective"
];

// Difficulty of each day: 1 = easy (10 items), 2 = medium (11), 3 = hard (12), R = review day (10).
// One character per day, 90 in total. Change a character to make a day lighter or heavier.
const LEVELS = "221321R" + "112212R" + "221332R" + "3222132" + "112232R" + "222323R" + "2332232" + "122223R" + "232323R" + "323333R" + "223232R" + "323333R" + "333322";

// Builds the checklist for a day from its topic, task and difficulty.
function dayItems(d) {
  const [topic, task] = C[d - 1].split("|").map(s => s.trim());
  const L = LEVELS[d - 1];
  if (L === "R") return [
    "Re-read all your notes from this week",
    "List every topic from the week and rate yourself 1 to 3",
    "Redo the hardest exercise of the week from scratch",
    "Redo an easy exercise from memory",
    "Finish anything you left unfinished this week",
    "Task: " + task,
    "Ask an AI to quiz you on the week, then check its answers yourself",
    "Commit and push all of this week's work to GitHub",
    "Write a 5-line summary of the week",
    "Plan next week's goal and take proper rest"
  ];
  const a = [
    "Read or watch the lesson: " + topic,
    "Write notes in your own words",
    "Type out every example yourself (no copy-paste)",
    "Explain it aloud or in writing without looking at your notes",
    "Practise: " + task
  ];
  if (L !== "1") a.push("Do a second, different exercise on this topic");
  if (L === "3") a.push("Break your code on purpose, read the error, and fix it");
  a.push(
    "Test your work and fix anything that fails",
    "Ask an AI to review your work and note one improvement",
    "Commit with a clear message",
    "Push to GitHub",
    "Write your 3-line log: learned, confused, tomorrow"
  );
  return a;
}