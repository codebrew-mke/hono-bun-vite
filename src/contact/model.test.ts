import { expect, test } from "vitest";
import { IdParamSchema } from "./model";

test("parse IdSchema alphanumeric should have errors", () => {
  const params: any = { id: "123abc" };
  const result = IdParamSchema.safeParse(params);

  expect(result.error).toBeDefined();
});

test("parse IdSchema alphabetical should have errors", () => {
  const params: any = { id: "abc" };
  const result = IdParamSchema.safeParse(params);

  expect(result.error).toBeDefined();
});

test("parse IdSchema symbols should have errors", () => {
  const params: any = { id: "% 23443 ###" };
  const result = IdParamSchema.safeParse(params);

  expect(result.error).toBeDefined();
});

test("parse IdSchema should not have errors", () => {
  const params: any = { id: "123" };
  const result = IdParamSchema.safeParse(params);

  expect(result.error).not.toBeDefined();
  expect(result.data?.id).toEqual(123);
});

test("parse IdSchema should not have errors", () => {
  const params: any = { id: "-1" };
  const result = IdParamSchema.safeParse(params);

  expect(result.error).toBeDefined();
});
