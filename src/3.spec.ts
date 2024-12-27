import { DataCache } from "./3";

describe("Test dataCache", () => {
  it("test case 1", async () => {
    // Instantiate the cache for strings
    const cache = new DataCache<string>();

    try {
      const data1 = await cache.getData("myKey");
      console.log(data1); // Expected to log "Fetched Data"

      // Intentionally call with the same key to simulate race condition
      const data2 = await cache.getData("myKey");
      console.log(data2); // Expected to log "Fetched Data", might log undefined due to race condition
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
    }
  });
});
