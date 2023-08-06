import { Format } from "./fmt_types.ts";

const ESCAPE_SEQUENCE_START = "\x1B";

/**
 * Takes a format and returns ANSI escape character sequences according to the given enums
 */
export function fmt(...format: Format[]): string;
export function fmt(format: Format[]): string;

export function fmt(format: Format[] | Format): string {
	let codes;
	if (Array.isArray(format)) codes = format.join(";");
	else codes = format;
	return ESCAPE_SEQUENCE_START + "[" + codes + "m";
}
