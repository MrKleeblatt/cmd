import { assert } from "https://deno.land/std@0.195.0/assert/mod.ts";
import { fmt } from "../fmt.ts";

Deno.test(function testFmt() {
	console.log(fmt(1, 2, 3) + "Hallo");
	assert(fmt(1, 2, 3));
});
