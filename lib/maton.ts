export type MatonApiProvider =
  | "openai"
  | "anthropic"
  | "google"
  | "github"
  | "notion"
  | "slack"
  | "airtable";

export type MatonConnectRequest = {
  workspaceId: string;
  apis: MatonApiProvider[];
};

export type MatonConnectResult = {
  provider: MatonApiProvider;
  status: "connected" | "pending" | "error";
  message: string;
};

export type MatonConnectResponse = {
  mode: "live" | "demo";
  results: MatonConnectResult[];
};

const MATON_BASE_URL = process.env.MATON_BASE_URL ?? "https://api.maton.ai/v1";
const MATON_CONNECT_PATH = process.env.MATON_CONNECT_PATH ?? "/integrations/connect-all";

function buildDemoResponse(input: MatonConnectRequest): MatonConnectResponse {
  return {
    mode: "demo",
    results: input.apis.map((provider) => ({
      provider,
      status: "connected",
      message: `Demo mode: ${provider} connected through Maton orchestration`,
    })),
  };
}

export async function connectAllApisWithMaton(input: MatonConnectRequest): Promise<MatonConnectResponse> {
  const apiKey = process.env.MATON_API_KEY;

  if (!apiKey) {
    return buildDemoResponse(input);
  }

  const response = await fetch(`${MATON_BASE_URL}${MATON_CONNECT_PATH}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(input),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Maton API error (${response.status})`);
  }

  const data = (await response.json()) as Partial<MatonConnectResponse>;

  if (!Array.isArray(data.results)) {
    throw new Error("Maton API response missing results");
  }

  return {
    mode: "live",
    results: data.results.map((result) => ({
      provider: result.provider ?? "openai",
      status: result.status ?? "pending",
      message: result.message ?? "Connected via Maton",
    })),
  };
}
