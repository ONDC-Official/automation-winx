import reporter from "reporter";

const dummyJson: any = {};

export const RedisService = {
	useDb: (dbIndex: number) => {
		console.log(`Setting Dummy Redis DB to ${dbIndex}`);
	},
	async getKey(key: string) {
		if (!dummyJson[key]) {
			return undefined;
		}
		return dummyJson[key];
	},
	async setKey(key: string, value: string) {
		reporter.cacheData(key, value);
		dummyJson[key] = value;
	},
	async keyExists(key: string) {
		return !!dummyJson[key];
	},
};
