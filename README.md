# Tech Buzzs portfolio

A static portfolio with 18 deployed projects, six embedded browser utilities, three original landing page concepts, grouped skills, project search and filters, theme-aware previews, Bubble Burst and Tap Dino.

## Preview locally

Run `npm run dev` with Node.js 22 or newer. Vercel serves `dist` using `vercel.json`; `npm run build` validates the project catalogue and required preview assets.

## Project directory

- **Image Studio** — [Live website](https://image-studio-ruddy.vercel.app) · [Source](https://github.com/techbuzzs/image-studio)
- **Document Desk** — [Live website](https://document-desk.vercel.app) · [Source](https://github.com/techbuzzs/document-desk)
- **Launchline** — [Live website](https://launchline-green.vercel.app) · [Source](https://github.com/techbuzzs/launchline)
- **Code Canvas** — [Live website](https://code-canvas-pearl-zeta.vercel.app) · [Source](https://github.com/techbuzzs/code-canvas)
- **Palette Lab** — [Live website](https://palette-lab-bay.vercel.app) · [Source](https://github.com/techbuzzs/palette-lab)
- **Developer Pocket Tools** — [Live website](https://developer-pocket-tools.vercel.app) · [Source](https://github.com/techbuzzs/developer-pocket-tools)
- **QR Studio** — [Live website](https://qr-studio-orpin-ten.vercel.app) · [Source](https://github.com/techbuzzs/qr-studio)
- **Stillwater Retreat** — [Live website](https://stillwater-retreat-beta.vercel.app) · [Source](https://github.com/techbuzzs/stillwater-retreat)
- **Orbit Coffee** — [Live website](https://orbit-coffee-ten.vercel.app) · [Source](https://github.com/techbuzzs/orbit-coffee)
- **Retro Arcade** — [Live website](https://retro-arcade-ashy.vercel.app/) · [Source](https://github.com/techbuzzs/retro-arcade)
- **Webhook Playground** — [Live website](https://webhook-playground-eight.vercel.app/) · [Source](https://github.com/techbuzzs/webhook-playground)
- **Agent Mission Control** — [Live website](https://agent-mission-control-five.vercel.app/) · [Source](https://github.com/techbuzzs/agent-mission-control)
- **Realtime Chat Studio** — [Live website](https://realtime-chat-studio.vercel.app/) · [Source](https://github.com/techbuzzs/realtime-chat-studio)
- **Architecture Decision Lab** — [Live website](https://architecture-decision-lab.vercel.app/) · [Source](https://github.com/techbuzzs/architecture-decision-lab)
- **Distributed Job Orchestrator** — [Live website](https://distributed-job-orchestrator-one.vercel.app/) · [Source](https://github.com/techbuzzs/distributed-job-orchestrator)
- **API Reliability Console** — [Live website](https://api-reliability-console.vercel.app/) · [Source](https://github.com/techbuzzs/api-reliability-console)
- **Multi-tenant SaaS Starter** — [Live website](https://multi-tenant-saas-starter-phi.vercel.app/) · [Source](https://github.com/techbuzzs/multi-tenant-saas-starter)
- **Systems Signal** — [Live website](https://systems-signal.vercel.app/) · [Source](https://github.com/techbuzzs/systems-signal)

## Embedded previews

The `dist/demos` directory contains a checked-in snapshot of each utility and landing page deployment. This keeps previews on the same origin and enables downloads, file selection and instant theme synchronization. Update the snapshot when the corresponding project changes. Each standalone project has its own source repository and build command.

## Theme

Follows the system preference by default. The theme button cycles System → Light → Dark. Project screenshots have separate light and dark assets. Embedded previews follow the homepage and support explicit theme and viewport overrides.

## Demo boundaries

PDF extraction supports selectable text, with heuristic headings; scanned documents require OCR and complex layouts may need edits. Landing pages are original concept projects. Booking, signup and checkout do not contact a server or place real transactions. Games store personal bests on this device.

## Updating demos

Build a standalone project in its sibling workspace folder, then run `npm run sync-demos` in this repository. This refreshes the embedded snapshots. Run `npm run build` to verify all required preview assets before deployment.

## Verification

Release checks covered standalone file exports, PDF merge and page counts, QR decoding, developer transformations, landing page interactions, mobile layouts, system theme changes and homepage embedding.
