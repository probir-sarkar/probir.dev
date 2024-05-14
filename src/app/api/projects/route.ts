import { projects } from "@/config/projects";
export async function GET(request: Request) {
  return new Response(JSON.stringify(projects), {
    headers: {
      "content-type": "application/json",
    },
  });
}
