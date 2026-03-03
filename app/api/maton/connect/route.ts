import { NextResponse } from "next/server";
import { connectAllApisWithMaton, type MatonApiProvider } from "@/lib/maton";

const allowedProviders: MatonApiProvider[] = ["openai", "anthropic", "google", "github", "notion", "slack", "airtable"];

function sanitizeApis(value: unknown): MatonApiProvider[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((item): item is MatonApiProvider =>
    typeof item === "string" && (allowedProviders as string[]).includes(item),
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { workspaceId?: string; apis?: unknown };
    const workspaceId = body.workspaceId?.trim() || "mission-control";
    const apis = sanitizeApis(body.apis);

    if (apis.length === 0) {
      return NextResponse.json({ error: "At least one API provider is required" }, { status: 400 });
    }

    const result = await connectAllApisWithMaton({ workspaceId, apis });
    return NextResponse.json(result);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unexpected error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
