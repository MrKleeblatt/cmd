export enum Format {
	reset = 0,
	bold,
	faint,
	italic,
	underline,
	blink,
	black = 30,
	red,
	green,
	yellow,
	blue,
	magenta,
	cyan,
	white,
}

export const FormatTemplate = {
	info: Format.green,
	debug: Format.cyan,
	warn: Format.yellow,
	error: [Format.red, Format.bold],
};
