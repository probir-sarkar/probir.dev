import { Hono } from "hono";
import { cors } from "hono/cors";
import { projects } from "@/config/projects";
import { contactFormSchema } from "@/config/schemas";
import { zValidator } from "@hono/zod-validator";
import { sendTelegramMessage } from "@/config/telegram";

const app = new Hono().basePath("/api/external");
app.use(cors({ origin: ["https://probirsarkar.com"] }));

app.get("/projects", (c) => {
  return c.json(projects);
});

app.post("/contact-form", zValidator("json", contactFormSchema), async (c) => {
  try {
    const data = c.req.valid("json");
    const sendMessage = await sendTelegramMessage(data);
    return c.json({ success: sendMessage ? true : false });
  } catch (e) {
    return c.json({ success: false, message: "Failed to send message" });
  }
});
export default app;
