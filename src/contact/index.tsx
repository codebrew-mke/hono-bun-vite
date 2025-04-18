import { Hono } from "hono";
import { zValidator as zv } from "@hono/zod-validator";
import { ContactDetail, ContactDetailEdit, Contacts } from "./views/Contact";
import { ContactCreateSchema, IdParam, IdParamSchema } from "./model";
import { renderer } from "@/middleware/renderer";
import { HTTPException } from "hono/http-exception";
import { findAll, findById, update } from "./repo";

const app = new Hono();

const IdSchemaHook: ParamHook<IdParam> = (result, c) => {
  if (result.success !== true) {
    throw new HTTPException(404, { cause: result.error });
  }
};

app.get("*", renderer);

app.get("/", async (c) => {
  const contacts = await findAll();
  return c.render(<Contacts contacts={contacts} />);
});

app.post("/", zv("form", ContactCreateSchema), (c) => {
  return c.html("");
});

app.get("/:id", zv("param", IdParamSchema, IdSchemaHook), async (c) => {
  const { id } = c.req.valid("param");
  const contact = await findById(id);
  return c.render(<ContactDetail contact={contact} />);
});

app.get("/:id/edit", zv("param", IdParamSchema, IdSchemaHook), async (c) => {
  const { id } = c.req.valid("param");
  const contact = await findById(id);
  return c.html(<ContactDetailEdit contact={contact} />);
});

app.put(
  "/:id",
  zv("param", IdParamSchema, IdSchemaHook),
  zv("form", ContactCreateSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const createForm = c.req.valid("form");
    const contact = await update(id, createForm);
    return c.html(<ContactDetail contact={contact} />);
  }
);

export default app;
