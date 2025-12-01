import { assertEquals } from "@std/assert/assert.ts";

Deno.test("basic arithmetic test", () => {
	const result = 2 + 2;
	assertEquals(result, 4);
});