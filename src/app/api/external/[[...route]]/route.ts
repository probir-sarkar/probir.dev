import app from "@/server/app";

import { handle } from "hono/vercel";

// export const runtime = "edge";

export const GET = handle(app);
export const POST = handle(app);
