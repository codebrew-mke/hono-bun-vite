import "typed-htmx";
import { type Env, ValidationTargets } from "hono";
import { type Hook } from "@hono/zod-validator";

declare module "hono" {
  interface ContextRenderer {
    (content: string | Promise<string>, props?: { title: string }): Response;
  }
}

declare module "hono/jsx" {
  namespace JSX {
    interface HTMLAttributes extends HtmxAttributes {}
  }
}

declare global {
  type ParamHook<T> = Hook<T, Env, keyof ValidationTargets["param"]>;
  type FormHook<T> = Hook<T, Env, keyof ValidationTargets["form"]>;
}
