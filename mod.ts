import { customLog } from "./custom_log.ts";
import { FormatTemplate } from "./fmt_types.ts";

console.info = (...s) => customLog("INFO", s, FormatTemplate.info);
console.debug = (...s) => customLog("DEBUG", s, FormatTemplate.debug);
console.warn = (...s) => customLog("WARN", s, FormatTemplate.warn);
console.error = (...s) => customLog("ERROR", s, FormatTemplate.error);

export * from "./custom_log.ts";
export * from "./fmt.ts";
export * from "./fmt_types.ts";
