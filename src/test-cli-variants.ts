import Cli from "./lib/cli-tools";

console.log("=== Title Variants ===\n");

console.log(Cli.title("Default Title"));
console.log(Cli.title.info("Info Title"));
console.log(Cli.title.success("Success Title"));
console.log(Cli.title.warning("Warning Title"));
console.log(Cli.title.error("Error Title"));
console.log(Cli.title.debug("Debug Title"));
console.log(Cli.title.primary("Primary Title"));
console.log(Cli.title.secondary("Secondary Title"));
console.log(Cli.title.subtle("Subtle Title"));

console.log("\n=== Title Variants with Badges ===\n");

console.log(
	Cli.title.info("Database Connection Established", { badge: "INFO" })
);
console.log(Cli.title.success("All Tests Passed", { badge: "SUCCESS" }));
console.log(Cli.title.warning("Deprecated API Usage", { badge: "WARN" }));
console.log(Cli.title.error("Critical System Failure", { badge: "ERROR" }));
console.log(Cli.title.debug("Variable State Dump", { badge: "DEBUG" }));

console.log("\n=== Skip Variants ===\n");

console.log(Cli.skip("Default Skip Message"));
console.log(Cli.skip.info("Informational skip", { reasonLabel: "info" }));
console.log(Cli.skip.success("Successful skip", { reasonLabel: "completed" }));
console.log(Cli.skip.warning("Warning skip", { reasonLabel: "deprecated" }));
console.log(Cli.skip.error("Error skip", { reasonLabel: "failed" }));
console.log(Cli.skip.debug("Debug skip", { reasonLabel: "verbose mode off" }));
console.log(Cli.skip.primary("Primary skip"));
console.log(Cli.skip.secondary("Secondary skip"));
console.log(Cli.skip.subtle("Subtle skip"));

console.log("\n=== Description Variants ===\n");

console.log(Cli.description("Default description text"));
console.log(Cli.description.info("This is informational text"));
console.log(Cli.description.success("Operation completed successfully"));
console.log(Cli.description.warning("Be careful with this setting"));
console.log(Cli.description.error("Critical error occurred"));
console.log(Cli.description.debug("Debug information for developers"));
console.log(Cli.description.primary("Primary information"));
console.log(Cli.description.secondary("Secondary information"));
console.log(Cli.description.subtle("Subtle hint or note"));

console.log("\n=== Description with Custom Icons and Prefixes ===\n");

console.log(
	Cli.description.info("Database connection established", {
		icon: "🔌",
		prefix: "Connection:",
	})
);
console.log(
	Cli.description.success("All tests passed", {
		icon: "🎉",
		prefix: "Result:",
	})
);
console.log(
	Cli.description.warning("API rate limit approaching", {
		icon: "⏰",
		prefix: "Warning:",
	})
);
console.log(
	Cli.description.error("Unable to connect to service", {
		icon: "🚫",
		prefix: "Error:",
	})
);
console.log(
	Cli.description.debug("Variable dump: user_id=123", {
		icon: "🔍",
		prefix: "Debug:",
	})
);

console.log("\n=== Indented Examples ===\n");

console.log(Cli.title.error("Main Process Failed", { indentation: 0 }));
console.log(
	Cli.skip.warning("  Sub-process timeout", {
		indentation: 2,
		reasonLabel: "timeout",
	})
);
console.log(
	Cli.skip.error("  Database connection lost", {
		indentation: 2,
		reasonLabel: "connection error",
	})
);

console.log("\n=== Box Title Example ===\n");

console.log(
	Cli.title.box("Multi-line\nBox Title\nWith Colors", { badge: "DEMO" })
);
