import { Hono } from "hono";
import { zValidator as zv } from "@hono/zod-validator";
import { ContactDetail, ContactDetailEdit } from "./views/Contact";
import { ContactFormSchema, IdParam, IdParamSchema } from "./model";
import { renderer } from "@/middleware/renderer";
import { HTTPException } from "hono/http-exception";

const app = new Hono();

const IdSchemaHook: ParamHook<IdParam> = (result, c) => {
  if (result.success !== true) {
    throw new HTTPException(404, { cause: result.error });
  }
};

app.get("*", renderer);

app.get("/:id", zv("param", IdParamSchema, IdSchemaHook), (c) => {
  const params = c.req.valid("param");
  return c.render(<ContactDetail id={params.id} />);
});

app.get("/:id/edit", zv("param", IdParamSchema, IdSchemaHook), (c) => {
  const params = c.req.valid("param");
  return c.html(<ContactDetailEdit id={params.id} />);
});

app.put(
  "/:id",
  zv("param", IdParamSchema, IdSchemaHook),
  zv("form", ContactFormSchema),
  (c) => {
    return c.text("");
  }
);

export default app;
