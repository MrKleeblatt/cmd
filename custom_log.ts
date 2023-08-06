import { fmt } from "./fmt.ts";
import { Format } from "./fmt_types.ts";

/**
 * Logs to the console with a specified format and a caption in front of the message
 * @param caption : the word between square brackets
 * @param s : some content to log
 * @param format : the format that describes how the entire resulting string should be displayed
 */
export function customLog(caption: string, s: unknown[], format: Format[]): void;
export function customLog(caption: string, s: unknown[], format: Format): void;

export function customLog(caption: string, s: unknown[], format: Format[] | Format) {
	if (!Array.isArray(format)) format = [format];
	const str = fmt(format) + "[" + caption + "] " + s.join(" ") + fmt([Format.reset]);
	console.log(str);
}
