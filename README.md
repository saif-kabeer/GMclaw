# GMclaw Mission Control

Linear-inspired AI Mission Control dashboard built with Next.js App Router + Tailwind CSS.

---

## OpenClaw Agent Deployment Playbook (Local Computer)

Use this runbook to let your OpenClaw agent deploy and run the Mission Control app on your own machine.

## 1) Prerequisites

Your OpenClaw agent should verify:

- **Git** is installed (`git --version`)
- **Node.js 20+** is installed (`node -v`)
- **npm** is installed (`npm -v`)
- Host has internet access to reach npm registry and Maton API (if live mode is used)

Recommended:

- Node 20 LTS
- macOS/Linux shell (bash/zsh)

---

## 2) Clone and install

```bash
git clone <YOUR_REPO_URL> GMclaw
cd GMclaw
npm install
```

If `npm install` fails, OpenClaw should:

1. Check proxy/firewall policy.
2. Retry with a clean cache:

```bash
npm cache clean --force
npm install
```

3. Confirm npm registry:

```bash
npm config get registry
```

Expected registry:

```text
https://registry.npmjs.org/
```

---

## 3) Configure environment (`.env.local`)

Create a file named `.env.local` in repo root:

```bash
MATON_API_KEY=your_maton_api_key
MATON_BASE_URL=https://api.maton.ai/v1
MATON_CONNECT_PATH=/integrations/connect-all
```

Behavior:

- If `MATON_API_KEY` is present, `/api/maton/connect` attempts live Maton calls.
- If `MATON_API_KEY` is absent, app automatically runs the Maton connector in **demo mode**.

---

## 4) Run locally (development)

```bash
npm run dev
```

Open:

- `http://localhost:3000`
- App redirects to `/tasks`.

OpenClaw validation checklist:

- Sidebar visible with 7 screens.
- Task Board renders Kanban columns and Live Activity feed.
- “Maton.ai Unified API Connector” appears at top of Task Board.
- Clicking **Connect all APIs** returns provider statuses (demo or live).

---

## 5) Production build + local production run

```bash
npm run build
npm run start
```

Then visit:

- `http://localhost:3000`

---

## 6) OpenClaw agent command sequence (recommended)

Use this exact sequence in your automation:

```bash
set -euo pipefail

cd /path/to/GMclaw

# 1) Sync
# git pull --ff-only

# 2) Install deps
npm install

# 3) Validate
npm run build

# 4) Launch
npm run start
```

For development workflow, replace steps 3/4 with:

```bash
npm run dev
```

---

## 7) Optional: run as a persistent background service

### Option A: `pm2`

```bash
npm install -g pm2
cd /path/to/GMclaw
npm install
npm run build
pm2 start npm --name gmclaw-mission-control -- start
pm2 save
```

### Option B: systemd (Linux)

Create `/etc/systemd/system/gmclaw-mission-control.service`:

```ini
[Unit]
Description=GMclaw Mission Control
After=network.target

[Service]
Type=simple
User=YOUR_USER
WorkingDirectory=/path/to/GMclaw
Environment=NODE_ENV=production
ExecStart=/usr/bin/npm run start
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

Enable and start:

```bash
sudo systemctl daemon-reload
sudo systemctl enable gmclaw-mission-control
sudo systemctl start gmclaw-mission-control
sudo systemctl status gmclaw-mission-control
```

---

## 8) Health checks and smoke tests for OpenClaw

After startup, OpenClaw should run:

```bash
curl -I http://localhost:3000
curl -s http://localhost:3000/tasks | head
```

Expected:

- HTTP 200 for root/tasks.
- HTML content returned.

For API route sanity:

```bash
curl -s -X POST http://localhost:3000/api/maton/connect \
  -H "Content-Type: application/json" \
  -d '{"workspaceId":"gmclaw-mission-control","apis":["openai","anthropic","google"]}'
```

Expected:

- JSON response with `mode` and `results` array.

---

## 9) Common failure handling (for your OpenClaw agent)

- **`npm install` 403/registry errors**
  - Verify network egress + npm registry configuration.
  - Retry install after cache clean.
- **Port already in use**
  - Stop conflicting process or run different port:

```bash
PORT=3001 npm run dev
```

- **Maton request failure in live mode**
  - Validate `MATON_API_KEY` and base URL/path.
  - Confirm outbound network access.
  - Fall back to demo mode by unsetting `MATON_API_KEY`.

---

## 10) Current scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

---

If you want, I can also generate a dedicated `DEPLOYMENT.md` with a stricter OpenClaw-automation checklist + copy/paste shell script for one-command deployment.
