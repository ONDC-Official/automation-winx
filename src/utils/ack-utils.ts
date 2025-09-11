export function shouldAddContext() {
	const version = process.env.VERSION;
	if (!version) {
		return false;
	}
	const major = parseInt(version.split(".")[0]);
	return major < 2;
}
