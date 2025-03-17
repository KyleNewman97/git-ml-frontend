import { describe, expect, test, beforeAll, vi } from "vitest";
import { getRepoCommitsApi } from "../../src/api/commits/api-commits";
import { IResponse } from "../../src/types/iresponse";
import { Commit } from "../../src/api/commits/schemas/commit";

describe("getRepoCommitsApi", () => {
    test("fetch 200", async () => {
        // Mock the fetch
        const dummyCommit = {
            author: "person",
            dateTime: "2024-01-04",
            hash: "hash",
            message: "commit",
        };
        const mockResponse = {
            ok: true,
            status: 200,
            json: async () => dummyCommit,
        };
        globalThis.fetch = vi.fn().mockResolvedValue(mockResponse);

        const response = await getRepoCommitsApi("test-repo");
        expect(response.status).to.equal(200);
        expect(response.body?.author).to.equal(dummyCommit.author);
    });

    test("fetch 400", async () => {
        // Mock the fetch
        const mockResponse = {
            ok: false,
            status: 400,
        };
        globalThis.fetch = vi.fn().mockResolvedValue(mockResponse);

        const response = await getRepoCommitsApi("test-repo");
        expect(response.status).to.equal(400);
        expect(response.body).to.equal(null);
    });
});
