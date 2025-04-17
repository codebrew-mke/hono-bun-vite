import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { renderer } from "@/middleware/renderer";
import { Data, Home } from "@/views/home";
import contact from "@/contact";

const app = new Hono();

app.use("/static/*", serveStatic({ root: "./" }));

app.route("/contact", contact);

app.get("*", renderer);
app.get("/data", (c) => {
  return c.html(Data());
});

app.get("/", (c) => {
  return c.render(Home());
});

export default app;
