"use client";

import { useState } from "react";
import { PlugZap } from "lucide-react";

type ProviderResult = {
  provider: string;
  status: "connected" | "pending" | "error";
  message: string;
};

type ApiResponse = {
  mode: "live" | "demo";
  results: ProviderResult[];
  error?: string;
};

const providers = ["openai", "anthropic", "google", "github", "notion", "slack", "airtable"];

export function MatonConnectPanel() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/maton/connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          workspaceId: "gmclaw-mission-control",
          apis: providers,
        }),
      });

      const data = (await res.json()) as ApiResponse;

      if (!res.ok || data.error) {
        throw new Error(data.error ?? "Unable to connect API providers");
      }

      setResponse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to connect providers");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card mb-4 p-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="flex items-center gap-2 text-sm font-semibold">
            <PlugZap className="h-4 w-4 text-violet-300" />
            Maton.ai Unified API Connector
          </h2>
          <p className="mt-1 text-xs text-muted">Connect OpenAI, Anthropic, Google, GitHub, Notion, Slack, and Airtable at once.</p>
        </div>
        <button
          type="button"
          onClick={handleConnect}
          disabled={loading}
          className="rounded-md border border-violet-400/30 bg-violet-500/15 px-3 py-1.5 text-xs font-medium text-violet-200 transition hover:bg-violet-500/25 disabled:opacity-60"
        >
          {loading ? "Connecting..." : "Connect all APIs"}
        </button>
      </div>

      {error ? <p className="mt-3 text-xs text-red-300">{error}</p> : null}

      {response ? (
        <div className="mt-3 rounded-md border border-line bg-black/20 p-2">
          <p className="mb-2 text-xs text-muted">Mode: {response.mode}</p>
          <ul className="grid gap-2 text-xs sm:grid-cols-2 xl:grid-cols-4">
            {response.results.map((item) => (
              <li key={item.provider} className="rounded-md border border-line bg-panel px-2 py-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-zinc-200">{item.provider}</span>
                  <span className="text-emerald-300">{item.status}</span>
                </div>
                <p className="mt-1 text-muted">{item.message}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
