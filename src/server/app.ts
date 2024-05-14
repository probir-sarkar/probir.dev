import { Hono } from "hono";
import { cors } from "hono/cors";
import { projects } from "@/config/projects";

const app = new Hono().basePath("/api/external");
app.use(cors());

app.get("/projects", (c) => {
  return c.json(projects);
});
export default app;
