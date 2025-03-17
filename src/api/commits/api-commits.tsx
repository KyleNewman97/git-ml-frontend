import { IResponse } from "../../types/iresponse";
import { authFetch } from "../../utils/utils-fetch";
import { Commit } from "./schemas/commit";

export const getRepoCommitsApi = async (
    repoName: string
): Promise<IResponse<Commit | null>> => {
    const url = new URL(`/${repoName}/commits`, import.meta.env.BACKEND_URL);

    return await authFetch<Commit>(url, {
        method: "GET",
    });
};
