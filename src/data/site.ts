// Single source of truth for identity, career missions, skills and the pipeline.
// Rule: describe what was built, never where. No employer or client names.

export const profile = {
  name: 'Sohail Ali',
  handle: 'sohail.ali',
  role: 'AI Agent Systems Engineer',
  location: 'Delhi NCR, India',
  headline: 'I build the harnesses that let AI agents ship real software, safely.',
  intro:
    'Agent pipelines with approval gates, voice layers for coding agents, and grounding that refuses to hallucinate, built on 8+ years of shipping .NET, mobile and enterprise systems.',
  // TODO(sohail): add your public contact email; the site hides email UI while this is empty.
  email: '',
  github: 'https://github.com/sohail12ali',
  linkedin: 'https://www.linkedin.com/in/sohail-ali-',
  openTo: 'Open to AI engineering and agent-platform roles: remote, hybrid or on-site.',
};

export type Mission = {
  code: string;
  name: string;
  years: string;
  status: 'complete' | 'active';
  story: string;
  role?: string;
  highlights: string[];
  telemetry?: { k: string; v: string }[];
  patch: 'origin' | 'foundation' | 'command' | 'ignition' | 'orbit';
};

export const missions: Mission[] = [
  {
    code: 'M-05',
    name: 'Orbit: Harness Fleet',
    years: '2026 to now',
    status: 'active',
    patch: 'orbit',
    story: 'A fleet of agent systems: a delivery harness, a voice layer, grounded voice agents, and an instrument that grades prompts.',
    highlights: [
      'Mothership: 7-agent gated delivery pipeline with its own console',
      'MicDrop: talk to any coding agent, hear it answer',
      'Echo, Tribunal, Anchor: closed-world grounding and evaluation',
      'Helmlock: the next-generation kernel, in design',
    ],
    telemetry: [{ k: 'Systems', v: '6' }, { k: 'Agents', v: '17+' }],
  },
  {
    code: 'M-04',
    name: 'Ignition: The Agentic Turn',
    years: '2025',
    status: 'complete',
    patch: 'ignition',
    story: 'Turned a large legacy enterprise platform into one that agents can work on, and taught teams to work with them.',
    highlights: [
      'Atlas: full-SDLC skill library with a knowledge vault and Graph RAG',
      'Genesis: first agent workspace with a human approval at every phase',
      'Ran enablement workshops for cross-functional teams',
    ],
    telemetry: [{ k: 'Skills', v: '88+' }, { k: 'IDEs', v: '3' }],
  },
  {
    code: 'M-03',
    name: 'Command: Module Lead',
    years: '2023 to now',
    status: 'active',
    patch: 'command',
    role: 'Module Lead',
    story: 'Own delivery of key modules on large projects: mentoring engineers, guarding code quality, and keeping the work matched to what clients asked for.',
    highlights: [
      'Leading module teams end to end',
      'Evidence-before-done E2E testing with Appium and Maestro',
      'High-performance .NET APIs across multiple databases',
    ],
  },
  {
    code: 'M-02',
    name: 'Foundation: The .NET Years',
    years: '2019 to 2022',
    status: 'complete',
    patch: 'foundation',
    role: 'Software Engineer, then Senior Software Engineer',
    story: 'Enterprise backends and cross-platform apps: the base everything later is built on.',
    highlights: [
      'ASP.NET Core Web APIs with Dapper and SQL DTOs',
      'Blazor (Server and WASM), .NET MAUI and Blazor Hybrid',
      'SQL Server, Oracle, PostgreSQL, and deployment on IIS, Nginx and Docker',
    ],
  },
  {
    code: 'M-01',
    name: 'Origin: Mobile Era',
    years: '2017 to 2019',
    status: 'complete',
    patch: 'origin',
    role: 'Software Engineer',
    story: 'Started out shipping cross-platform mobile apps to the Play Store and App Store.',
    highlights: [
      'Xamarin.Forms apps in C# and XAML',
      'Real-time patient–doctor communication app',
    ],
  },
];

export const modules = [
  { bay: 'Agent Ops', code: 'AO', items: ['Claude Code', 'Cursor', 'Copilot', 'Codex', 'MCP', 'Agent hooks', 'Skills & subagents', 'LLM evals'] },
  { bay: 'Grounding Lab', code: 'GL', items: ['RAG', 'Graph RAG', 'NLI verification', 'LLM-as-judge', 'Local LLMs'] },
  { bay: 'Voice Deck', code: 'VD', items: ['Whisper', 'Piper', 'Kokoro', 'Voice agents'] },
  { bay: 'Core Engine', code: 'CE', items: ['C# / .NET', 'ASP.NET Core', '.NET MAUI', 'Blazor', 'Xamarin', 'WPF / WinForms'] },
  { bay: 'Systems', code: 'SY', items: ['Rust', 'Tauri', 'Python', 'TypeScript', 'Next.js', 'Hono'] },
  { bay: 'Data Vault', code: 'DV', items: ['SQL Server', 'PostgreSQL', 'Oracle', 'SQLite', 'Dapper'] },
  { bay: 'Launch Pad', code: 'LP', items: ['Docker', 'Nginx', 'IIS', 'Linux', 'CI/CD', 'App Store / Play Store'] },
  { bay: 'Test Range', code: 'TR', items: ['Appium', 'Maestro', 'E2E pipelines', 'Gold-set evals'] },
];

export const pipeline = [
  { id: 'ground', label: 'GROUND', agent: 'analyst', does: 'Reads the real codebase before forming an opinion.' },
  { id: 'clarify', label: 'CLARIFY', agent: 'analyst', does: 'Questions requirements until they pass a 10-point freeze gate.' },
  { id: 'canonical', label: 'CANONICAL', agent: 'planner', does: 'Turns frozen requirements into a single plan, with tasks and estimates.' },
  { id: 'template', label: 'TEMPLATE', agent: 'builder', does: 'Builds against proven templates instead of starting from a blank page.' },
  { id: 'simplify', label: 'SIMPLIFY', agent: 'builder', does: 'A dedicated pass that removes anything not needed.' },
  { id: 'verify', label: 'VERIFY', agent: 'verifier', does: 'Every acceptance criterion needs cited evidence before close.' },
  { id: 'deploy', label: 'DEPLOY', agent: 'deployer', does: 'Asks before publishing, every time.' },
];
